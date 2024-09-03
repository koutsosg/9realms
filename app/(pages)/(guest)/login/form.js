"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData(e.currentTarget);
      const response = await signIn("credentials", {
        email: formData.get("email"),
        password: formData.get("password"),
        redirect: false,
      });
      if (!response.ok || response.error) {
        //throw new Error('Failed to submit the data. Please try again.')
        const errorData = response.error;
        let message = errorData?.message ?? errorData;
        if (errorData?.details?.errors) {
          message = errorData.details.errors
            .map((error) => error.message)
            .join(", ");
        }

        return false;
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

          <label htmlFor={"password"}>pasword</label>
        </div>
        <button type="submit" disabled={isLoading}>
          login
        </button>
      </form>
    </>
  );
};

export default Form;
