import { NextPage } from 'next'
import Addmoney from '../../../components/addMoney'

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return <div className='min-h-screen w-full flex justify-center items-center'>
      <Addmoney />
    </div>
}

export default Page