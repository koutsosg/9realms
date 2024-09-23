import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Form from "@/app/(pages)/(guest)/cv_view/form";
import CvPreview from "@/app/components/CVPreview/CVPreview";
import { fetchCvData } from "@/app/lib/api/api";

const LoginPage = async (): Promise<JSX.Element> => {
  const cv = await fetchCvData();
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }

  return (
    <>
      <Form />
      <div className="flex flex-col items-center">
        <CvPreview cv={cv} />
      </div>
    </>
  );
};

export default LoginPage;
