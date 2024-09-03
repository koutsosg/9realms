import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Form from "@/app/(pages)/(guest)/cv_view/form";

const LoginPage = async (): Promise<JSX.Element> => {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }

  return <Form />;
};

export default LoginPage;
