import { NextPage } from 'next'
import { Card, CardContent } from '../../../components/ui/card';
import Transactions from '../../../components/transactions-history';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../lib/auth';
import getBalance from '../../api/actions/getBalance';
import ShowToast from '../../../components/showToast';





interface Props {}

const Page: NextPage<Props> =async ({}) => {
  const session=await getServerSession(authOptions);
  const name=(session?.user?.name)?.split(" ")[0];
  const {balance,error}:{balance:number,error: string | null }=await getBalance(session?.user?.email as string);
  


  return (
    <div>
      {/* <ShowToast error={error}/> */}
      <Homeheadlines name={name?name:""}/>
      <CurrentBalance balance={balance} />
      <Transactions title='Recent Transactions' viewAll={true}/>
    </div> 
  );
}

const CurrentBalance = ({ balance }:{balance:number}) => {
  return (
    <Card className="bg-blue-600 text-white">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <h2 className="text-2xl font-bold mb-1">Wallet Wave~</h2>
            <p className="text-sm mb-2">Growth Savings Account</p>
            <p className="text-sm tracking-widest">
              •••• •••• •••• 9999
            </p>
          </div>
          <div className="bg-blue-500 rounded-lg p-4">
            <p className="text-sm font-medium mb-1">Current Balance</p>
            <p className="text-2xl font-bold">{"$"+balance}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
};

const Homeheadlines = ({name=""}:{name:string}) => {
  return (
    <div className="pb-5">
      <h1 className="text-2xl font-bold">Welcome, <span>{name}</span></h1>
      <h3 className="text-base text-gray-400 font-medium">Digital Wallet for Everyday Payments</h3>
    </div>
  )
}

export default Page