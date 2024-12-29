import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link';

interface Props {
    className?:string;
}

const Logo: NextPage<Props> = ({className,...props}) => {
  return (
    <Link href={'/'} {...props}  className='text-xl font-semibold' >
        <h1>LiNk&nbsp;?</h1>
    </Link>
  )
}

export default Logo