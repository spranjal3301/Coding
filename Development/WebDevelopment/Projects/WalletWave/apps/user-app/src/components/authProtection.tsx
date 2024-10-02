
import { NextPage } from "next";
import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation'
import { authOptions } from "../lib/auth";

interface Props {
  to?: string;
  children: React.ReactNode;
  active?: boolean;
}

const AuthProtection: NextPage<Props> = async ({ to = "/", children ,active=true}) => {
  const session = await getServerSession(authOptions);

  if ((!session?.user )==active) {
    redirect(to);
  }

  return <>{children}</>;
};

export default AuthProtection;
