"use client"
import { NextPage } from 'next'
import { useToast } from '../hooks/use-toast'
import { useEffect } from 'react'

interface Props {
    error: string | null
}

const ShowToast: NextPage<Props> = ({ error }) => {
    const { toast } = useToast()
    
    useEffect(() => {
        if (error) {
            // console.log("from showtoast")
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: error || "There was a problem with your request."
            })
        }
    }, [error, toast])
   
    return null
}

export default ShowToast
