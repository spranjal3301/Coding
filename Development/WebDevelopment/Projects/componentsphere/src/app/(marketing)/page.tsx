import Hero from '@/components/sections/hero'
import { NextPage } from 'next'


interface Props {}


const Page: NextPage<Props> =async ({}) => {
  return (
    <Hero/>
  )
}

export default Page