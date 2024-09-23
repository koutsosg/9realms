import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Form from "@/app/(pages)/(guest)/cv_view/form";
import CvPreview from "@/app/components/CVPreview/CVPreview";
import { fetchCvData } from "@/app/lib/api/api";

const LoginPage = async (): Promise<JSX.Element> => {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }
  //NoteToSelf: do i need try catch here?
  const cv = await fetchCvData();

  return (
    <>
      <div className="flex flex-col">
        <CvPreview cv={cv} />
      </div>
      <div className="fixed bottom-4 left-4">
        <Form />
      </div>
    </>
  );
};

export default LoginPage;
