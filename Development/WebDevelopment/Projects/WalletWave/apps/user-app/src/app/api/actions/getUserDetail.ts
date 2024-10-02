import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";


export default async function getUserDetail(){
    const session = await getServerSession(authOptions);
    return session;
}