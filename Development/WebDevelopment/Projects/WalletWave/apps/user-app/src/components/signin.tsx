'use client'

import { signIn } from 'next-auth/react'
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { IconBrandGithub,IconBrandGoogleFilled  } from '@tabler/icons-react';

export default function SignIn() {
  return (
    <Card className="w-[350px] mx-auto">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Choose a provider to sign in with</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Button 
          onClick={async () => {
            await signIn("google");
          }}
          className="w-full cursor-pointer"
        >
          <IconBrandGoogleFilled className="mr-2 h-5 w-5" />
          Sign in with Google
        </Button>
        <Button 
          onClick={() => signIn('github', { callbackUrl: '/' })}
          className="w-full cursor-pointer"
          variant="outline"
        >
          <IconBrandGithub className="mr-2 h-5 w-5" />
          Sign in with GitHub
        </Button>
      </CardContent>
    </Card>
  )
}