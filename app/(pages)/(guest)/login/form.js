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
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 sm:gap-6 mt-5 sm:wide:mt-5 sm:wide:gap-3 2xl:mt-20"
      >
        <div className="inputGroup relative text-base text-polo-900">
          <input name="email" />

          <label
            className="transition-all text-[10px] leading-none font-semi-bold text-polo-900 pointer-events-none absolute top-1/2 inset-x-6 -translate-y-1/2 peer-focus:top-1/4"
            htmlFor={"username"}
          >
            email
          </label>
        </div>

        <div className="inputGroup relative text-base text-polo-900">
          <input name="password" type="password" />

          <label
            className="transition-all text-[10px] leading-none font-semi-bold text-polo-900 pointer-events-none absolute top-1/2 inset-x-6 -translate-y-1/2 peer-focus:top-1/4"
            htmlFor={"password"}
          >
            pasword
          </label>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="px-8 py-4 bg-primary text-white text-sm w-full my-3 sm:my-6 rounded-lg font-semibold disabled:opacity-50"
        >
          login
        </button>
      </form>
    </>
  );
};

export default Form;
