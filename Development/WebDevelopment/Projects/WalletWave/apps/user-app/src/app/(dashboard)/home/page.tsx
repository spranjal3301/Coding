import { NextPage } from 'next'
import { SidebarDemo } from '../../../components/sidebarcust'


interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div className={`w-full h-screen`}>
      <SidebarDemo/>
    </div>
  )
}

export default Page