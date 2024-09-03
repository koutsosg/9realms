"use client";
import Button from "@/app/components/primaryButton/Button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData(e.currentTarget);

      const response = await signIn("credentials", {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        redirect: false,
      });

      if (!response || !response.ok) {
        const errorMessage =
          response?.error || "Login failed. Please try again.";
        console.error(errorMessage);
        return;
      }

      router.push("/");
      router.refresh();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input name="email" />

          <label htmlFor={"username"}>email</label>
        </div>

        <div>
          <input name="password" type="password" />

          <label htmlFor={"password"}>password</label>
        </div>
        <Button loadingText="test" isLoading={isLoading}>
          login
        </Button>
      </form>
    </>
  );
};

export default Form;
