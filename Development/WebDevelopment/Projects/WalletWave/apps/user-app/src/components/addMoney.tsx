"use client"
import { useFormStatus, useFormState } from 'react-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Button } from "./ui/button"
import { addMoneyAction } from "../app/api/actions/addMoneyAction"
import { Loader2 } from "lucide-react";
import { useEffect, useState } from 'react'
import { useToast } from '../hooks/use-toast'



const initialState = {
  message: "",
  error:false
};

export default function Addmoney() {
  const [state, formAction] = useFormState(addMoneyAction, initialState);
  const [loading,setLoading] = useState<boolean>(false);
  const { toast } = useToast()

  
  useEffect(() => {
    if(state.message!=""){
      setLoading(false);
      if(state.error){
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: state.message || "There was a problem with your request."
        })  
      }else{
        toast({
          variant: "success",
          title: "Success",
          description: state.message || "Money added successfully"
        })  
      }
    }
  },[state])

  
  return (
    <Card className="w-full max-w-md ">    
      <CardHeader>
        <CardTitle className="text-xl font-semibold ">Bank account details</CardTitle>
        <CardDescription>Enter the bank account details </CardDescription>
      </CardHeader>
      <form action={formAction} onSubmit={()=>setLoading(true)}>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Your Email Address</Label>
          <Input name="email" id="email" placeholder="spranjal394@gmail.com" type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="Providerbank">Select Source Bank</Label>
          <Select name="Providerbank">
            <SelectTrigger id="Providerbank" className="w-full">
              <SelectValue placeholder="Select Account" />
            </SelectTrigger>
            <SelectContent >
              <SelectItem  value="Dummy Bank">Dummy Bank</SelectItem>
              <SelectItem value="SBI">SBI</SelectItem>
              <SelectItem value="HDFC">HDFC</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-sm text-muted-foreground">Select the bank account you want to add funds from</p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="amount">Amount</Label>
          <Input name="amount" id="amount" placeholder="$1000" type="number" />
        </div>

        
        <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700" disabled={loading}>
        {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
            </>
          ) : (
            "Add Funds"
          )}
        </Button>
      </CardContent>
      </form>
    </Card>
  )
}