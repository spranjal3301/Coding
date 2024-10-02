"use server"
import db from "@repo/db";


export default async function searchUser(query: string) {
    try {
        // console.log('query', query)
        const users = await db.user.findMany({
            where: {
                name: {
                    contains: query,
                    mode: 'insensitive'
                }
            },
            select:{
                id: true,
                name: true,
                email: true,
                image: true
            }
        })
        return {
            result: users,
            error: false,
            message: 'Success'
        }
        
    } catch (error:any) {
        return {
            result: [],
            error: true,
            message: error?.message
        }   
    }
}