import { NextPage } from 'next'

interface Props {}

const RainbowLighting: NextPage<Props> = ({}) => {
  return (
    <div className="pointer-events-none absolute inset-0 h-24 w-full before:absolute before:bottom-[-20%] before:left-1/2 before:z-[0] before:h-[80%] before:w-[60%] before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:opacity-20 before:[filter:blur(calc(4*1rem))]" />
    )
}

export default RainbowLighting