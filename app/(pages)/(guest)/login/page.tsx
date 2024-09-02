import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Form from "./form";

const LoginPage = async ({}) => {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }
  console.log(session);
  return <Form />;
};

export default LoginPage;
