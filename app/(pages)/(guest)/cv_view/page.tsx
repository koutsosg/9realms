import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Form from "@/app/(pages)/(guest)/cv_view/form";
import CvPreview from "@/app/components/CVPreview/CVPreview";
import { fetchCvData } from "@/app/lib/api/api";
import Positioner from "@/app/components/Positioner/Positioner";
import PrintComponent from "@/app/components/Print/Print";

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
        <PrintComponent
          buttonLabel="Print CV"
          buttonProps={{
            variant: "primary",
            size: "medium",
            extraClasses: "fixed right-4 top-4",
          }}
        >
          <CvPreview cv={cv} />
        </PrintComponent>
      </div>
      <Positioner
        position="bottom-left"
        extraClasses="m-10"
        buttonLabel="enter"
        toggleable={true}
      >
        <Form />
      </Positioner>
    </>
  );
};

export default LoginPage;
