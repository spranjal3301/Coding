import { cn } from '@/lib/utils';
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link';

interface Props {
    className?:string;
}

const Logo: NextPage<Props> = ({className,...props}) => {
  return (
    <Link href={'/'} {...props} >
        <Image
        alt='Slide'
        src='/logo2.png'
        width={85}
        height={85}
        className={cn(className)}
    />
    </Link>
  )
}

export default Logo