import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const DefaultLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }
  return (
    <main className="">
      <div className="">{children}</div>
    </main>
  );
};
export default DefaultLayout;
