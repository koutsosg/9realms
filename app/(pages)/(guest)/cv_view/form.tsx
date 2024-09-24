"use client";
import Button from "@/app/components/Button/Button";
import Input from "@/app/components/Input/Input";
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
    <form
      className="flex flex-col items-center gap-4 rounded-lg bg-secondary_2 p-10"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-2">
        <Input name="email" type="text" label="USERNAME" required />
        <Input name="password" type="password" label="PASSWORD" required />
      </div>
      <Button
        extraClasses="w-full"
        variant="primary"
        size="medium"
        isLoading={isLoading}
        spinner={true}
      >
        login
      </Button>
    </form>
  );
};

export default Form;
