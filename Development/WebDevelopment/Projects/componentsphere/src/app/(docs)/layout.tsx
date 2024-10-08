import { NextPage } from 'next'

interface Props {
    children: React.ReactNode
}

const Layout: NextPage<Props> = ({children}) => {
  return (
    <main>
        {children}
    </main>
  )
}

export default Layout