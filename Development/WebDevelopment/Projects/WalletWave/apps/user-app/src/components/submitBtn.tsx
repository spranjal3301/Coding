"use client"
import { NextPage } from 'next'
import { Button } from './ui/button'
import { useState } from 'react';
import { Loader2 } from 'lucide-react';

interface Props {}

const SubmitBtn: NextPage<Props> = ({}) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

  return   <Button type="submit" disabled={isSubmitting} className="w-full">
  {isSubmitting ? (
    <>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
    </>
  ) : (
    "Add Funds"
  )}
</Button>
}

export default SubmitBtn