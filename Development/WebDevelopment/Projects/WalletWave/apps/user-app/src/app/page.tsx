"use client";
import {useBalance} from "@repo/store";


export default function Page(): JSX.Element {
  const balance = useBalance();
  return <div>
    hi there {balance}
  </div>
}
