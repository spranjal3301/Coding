import RainbowLighting from '@/components/Rainbow-lighting'
import SiteHeader from '@/components/site-header'
import { NextPage } from 'next'

interface Props {
    children: React.ReactNode
}

const Layout: NextPage<Props> = ({children}) => {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
          {children}
      </main>
      {/*//- Raindow Lighting Component below Nav-Bar*/}
      {/* <RainbowLighting/> */}
    </>
  )
}


export default Layout