import { NextPage } from 'next'
import AuthProtection from '../../components/authProtection'
import { Sidebar } from 'lucide-react'
import { SidebarLayout } from '../../components/SidebarLayout'

interface Props {
    children: React.ReactNode
}

const Layout: NextPage<Props> = ({children}) => {
  return (
  <AuthProtection to='/signin'>
    <SidebarLayout>
      {children}
    </SidebarLayout>
  </AuthProtection>
  )
}

export default Layout