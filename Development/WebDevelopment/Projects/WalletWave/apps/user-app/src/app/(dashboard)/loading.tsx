import { NextPage } from 'next'
import Loader from '../../components/loader'
import { Loader2 } from 'lucide-react'

interface Props {}

const Loading: NextPage<Props> = ({}) => {
  return <div className="flex items-center justify-center h-full">
    <Loader2 className="h-8 w-8 animate-spin" />
  </div>
}

export default Loading