import { NextPage } from 'next'
import {Testbtn} from './ui/testbtn';
import { Testbtn2 } from './ui/btn2';
import Btn3 from './ui/btn3';

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return(
    <div className="container flex flex-col justify-center items-center gap-20">
      <Testbtn/>
      <Testbtn2/>
      <Btn3/>
  </div>
  );
}



export default Page;