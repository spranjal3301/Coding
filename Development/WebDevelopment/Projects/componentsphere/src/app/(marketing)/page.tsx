import Hero, { Hero1 } from "@/components/sections/hero";
import { cn } from "@/lib/utils";
import { NextPage } from "next";

interface Props {}

const Page: NextPage<Props> = async ({}) => {
  return (
    <>
      <Hero1 />
    </>
  );
};

export default Page;
