import { NextPage } from 'next'
import Transactions from '../../../components/transactions-history'


interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div>
      <Transactions title="Transactions History"/>
    </div>
  )
}

export default Page