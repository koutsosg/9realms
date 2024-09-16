import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import "next-auth";
import { cookies } from "next/headers";

const apiUrl = process.env.API_URL;

declare module "next-auth" {
  interface User {
    id?: string;
    name?: string | null;
    avatar?: null;
    email?: string;
    created?: string;
    role?: string;
    cv?: string | null;
    jwt?: string;
  }
}
export const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    verifyRequest: `/login`,
    error: "/login",
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "your-email@example.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "your-password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please provide both email and password.");
        }

        try {
          var reqHeaders = new Headers();
          reqHeaders.append("Content-Type", "application/json");
          const response = await fetch(
            `${apiUrl}collections/users/auth-with-password`,
            {
              method: "POST",
              headers: reqHeaders,
              body: JSON.stringify({
                identity: credentials.email,
                password: credentials.password,
              }),
            }
          );

          if (!response.ok) {
            throw new Error("Invalid credentials");
          }

          const { record, token: jwt } = await response.json();

          cookies().set("jwt-token", jwt, {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 30,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
          });

          return {
            id: record.id,
            name: record.name,
            email: record.email,
            avatar: record.avatar || null,
            created: record.created,
            role: record.role,
            cv: record.cv || null,
            jwt,
          };
        } catch (error: any) {
          throw new Error(error.message || "Authentication failed");
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user, session, trigger }) {
      if (trigger === "update" && session) {
        return { ...token, ...session?.user };
      }

      if (user) {
        return {
          ...token,
          name: user.name,
          email: user.email,
          picture: user.avatar,
          created: user.created,
          role: user.role,
          cv: user.cv,
          jwt: user.jwt,
        };
      }

      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.sub,
          name: token.name,
          email: token.email,
          image: token.picture,
          created: token.created,
          role: token.role,
          cv: token.cv,
        },
      };
    },
  },
};
