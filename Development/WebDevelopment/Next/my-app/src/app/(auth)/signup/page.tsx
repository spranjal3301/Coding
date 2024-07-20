'use client'
 
import { useRouter } from 'next/navigation'
 
export default function Signup() {
  const router = useRouter()
 
  return (
    <button type="button" onClick={() => router.push('/dashboard')}>
      Dashboard
    </button>
  )
}