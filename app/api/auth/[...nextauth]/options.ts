import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const apiUrl = process.env.API_URL;
import "next-auth";

declare module "next-auth" {
  interface User {
    id?: string;
    username?: string;
    name?: string | null;
    avatar?: null;
    email?: string;
    lastname?: string;
    city?: string;
    country?: string;
    verified?: boolean;
    created?: string;
    role?: string;
    cv?: string | null;
    token?: string;
  }
}
export const options: NextAuthOptions = {
  pages: {
    signIn: "/login",
    verifyRequest: `/login`,
    error: "/login",
  },
  session: {
    strategy: "jwt",
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

          const { token, record } = await response.json();
          return {
            id: record.id,
            username: record.username,
            email: record.email,
            avatar: record.avatar || null,
            name: record.name,
            lastname: record.lastname,
            city: record.city,
            country: record.country,
            verified: record.verified,
            created: record.created,
            role: record.role,
            cv: record.cv || null,
            token,
          };
        } catch (error: any) {
          throw new Error(error.message || "Authentication failed");
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      console.log(user);
      if (user) {
        return {
          ...token,
          id: user.id,
          name: user.name,
          email: user.email,
          username: user.username,
          avatar: user.avatar,
          lastname: user.lastname,
          city: user.city,
          country: user.country,
          verified: user.verified,
          created: user.created,
          role: user.role,
          cv: user.cv,
          token,
        };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          username: token.username,
          email: token.email,
          avatar: token.avatar,
          name: token.name,
          lastname: token.lastname,
          city: token.city,
          country: token.country,
          verified: token.verified,
          created: token.created,
          role: token.role,
          cv: token.cv,
          token,
        },
      };
    },
  },
};
