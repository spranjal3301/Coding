import { NextPage } from 'next'
import SignIn from '../../components/signin'
import { SparklesCore } from '../../components/ui/sparkles'
import AuthProtection from '../../components/authProtection'

interface Props {}

const SigninPage: NextPage<Props> = ({}) => {
  
  return  (
  <AuthProtection active={false} to='/home'> 
  <div className="min-h-screen relative w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
  <div className="w-full absolute inset-0 h-screen">
    <SparklesCore
      id="tsparticlesfullpage"
      background="transparent"
      minSize={0.6}
      maxSize={1.4}
      particleDensity={100}
      className="w-full h-full"
      particleColor="#FFFFFF"
    />
  </div>
  <div className="relative z-10">
    <SignIn />
  </div>  
</div>
</AuthProtection>
  )
}

export default SigninPage