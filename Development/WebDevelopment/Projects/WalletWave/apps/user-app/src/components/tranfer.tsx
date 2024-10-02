'use client'

import { useRef, useState } from 'react'
import { Loader2, Search, User } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Avatar, AvatarFallback } from './ui/avatar'
import Loader from './loader'
import searchUser from '../app/api/actions/serachUser'
import { useToast } from '../hooks/use-toast'
import Image from 'next/image'
import sendMoney from '../app/api/actions/sendMoney'






type User = {
  id: string;
  name: string | null;
  email: string | null;
  image?: string | null;
}

interface TserachResult {
  result: User[] 
  error: boolean
  message: string
}

export default function Transfer() {
  const [searchResults, setSearchResults] = useState<TserachResult>({result: [], error: false, message: ''})
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [loading,setLoading] = useState<boolean>(false)
  const inputRef = useRef<any>(null);
  const amountRef = useRef<any>(null);
  const [message, setMessage] = useState({message: '', error: false})
  const { toast } = useToast();

  const handleSearch = async () => {
    setLoading(true)
    const searchQuery=inputRef.current?.value;
  
    if (searchQuery.trim()) {
      const results = await searchUser(searchQuery)
      setSearchResults(results)
      if(results.error){
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: results.message || "There was a problem with your request."
        })
      }
    }
    setLoading(false)
  }

  const handleSelectUser = (user: User) => {
    setSelectedUser(user)
    setSearchResults({result: [], error: false, message: ''})  
  }

  const handleSendMoney = async () => {
    setLoading(true);
    const amount=amountRef.current?.value;
    if (selectedUser && amount) {
      const result = await sendMoney(selectedUser.id, Number(amount))
      setSelectedUser(null)
      if(result.error){
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: result.message || "There was a problem with your request."
        })
      }
      else{
        toast({
          variant: "success",
          title: "Success",
          description:result.message  ||"Money sent successfully"
        })
      } 
    }
    inputRef.current.value="";
    setLoading(false);
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <Card>
        <CardHeader>
          <CardTitle>Send Money</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex space-x-2">
              <Input
                ref={inputRef}
                type="text"
                placeholder="Search users..."
              />
              <Button onClick={handleSearch} disabled={loading}>
                {loading? (<Loader2 className="h-4 w-4 animate-spin" />): (<Search className="h-4 w-4" />)}
              </Button>
            </div>
            
            {searchResults.result.length > 0 && (
              <Card>
                <CardContent className="p-2">
                  {searchResults.result.map(user => (
                    <div
                      key={user.id}
                      className="flex items-center space-x-2 p-2 hover:bg-gray-800 cursor-pointer"
                      onClick={() => handleSelectUser(user)}
                    >
                        {user.image ? (
                          <Image src={user.image} alt="User Image" className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full" width={50}  height={50}/>
                        ):(
                          <Avatar>
                            <AvatarFallback>{user?.name? user?.name[0]:"U"}</AvatarFallback>
                          </Avatar>
                        )}
                        
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
            
            {selectedUser && (
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2 mb-4">
                  {selectedUser.image ? (
                          <Image src={selectedUser.image} alt="User Image" className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full" width={50}  height={50}/>
                        ):(
                          <Avatar>
                            <AvatarFallback>{selectedUser?.name? selectedUser?.name[0]:"U"}</AvatarFallback>
                          </Avatar>
                        )}
                    <div>
                      <div className="font-medium">{selectedUser.name}</div>
                      <div className="text-sm text-gray-500">{selectedUser.email}</div>
                    </div>
                  </div>
                  <Input
                    type="number"
                    placeholder="Enter amount"
                    ref={amountRef}
                    className="mb-4"
                  />
                  <Button onClick={handleSendMoney} className="w-full" disabled={loading}>
                    {loading? (<Loader2 className="h-4 w-4 animate-spin" />): 'Send Money'}
                  </Button>
                </CardContent>
              </Card>
            )}
            
          </div>
        </CardContent>
      </Card>
    </div>
  )
}