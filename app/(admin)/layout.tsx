import "@/styles/globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  // if (session.user.role !== "admin") {
  //   redirect("/"); 
  // }
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
