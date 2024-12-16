import { NextPage } from "next";
import Logo from "../logo";
import { Button } from "../ui/button";
import Link from "next/link";
import { KBtn } from "../ui/kbtn";
import { Navbar } from "../navbar";

interface Props {}

const Header: NextPage<Props> = ({}) => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full animate-fadeindown backdrop-blur-md">
      <div className="container flex h-[3.5rem] items-center justify-between">
        <Logo />

        <Navbar />

        <Link prefetch href={"/login"}>
          <Button variant="secondary">
            Log in
            <KBtn className="hidden md:block">
              <span className="block">L</span>
            </KBtn>
          </Button>
        </Link>

      </div>
        <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0" />
    </header>
  );
};

export default Header;
