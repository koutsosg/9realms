import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const DefaultLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession();

  if (!session) {
    redirect("/cv_view");
  }

  return <main className="">{children}</main>;
};
export default DefaultLayout;
