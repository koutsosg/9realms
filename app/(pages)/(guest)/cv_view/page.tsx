import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Form from "@/app/(pages)/(guest)/cv_view/form";
import CvPreview from "@/app/components/CVPreview/CVPreview";
import { fetchCvData } from "@/app/lib/api/api";
import Button from "@/app/components/Button/Button";
import Positioner from "@/app/components/Positioner/Positioner";

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
      <Positioner corner="bottom-left" extraClasses="m-4">
        {/*  <Button size="medium" variant="primary">
          Enter
        </Button> */}
        <Form />
      </Positioner>
    </>
  );
};

export default LoginPage;
