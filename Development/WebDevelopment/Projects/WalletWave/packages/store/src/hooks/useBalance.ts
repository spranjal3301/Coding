import { useRecoilState, useRecoilValue } from "recoil"
import { balanceAtom } from "../atoms/balance"
import db from "@repo/db"

export const useBalance = (email:string) => {
    const [balance,setBalance]= useRecoilState(balanceAtom);
    const getBalance = async () => {
        const balance = await db.user.findFirst({
            where: {
                email: email
            }
        });
        console.log(balance);
        // setBalance(balance);     
    }
    getBalance();
    return {balance,setBalance};
}   