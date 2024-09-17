import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Form from "@/app/(pages)/(guest)/cv_view/form";
import CvPreview from "@/app/components/CVPreview/cvPreview";

const LoginPage = async (): Promise<JSX.Element> => {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }

  return (
    <>
      <Form />
      <div className="flex flex-col items-center">
        <CvPreview />
      </div>
    </>
  );
};

export default LoginPage;
