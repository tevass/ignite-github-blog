import { Outlet } from 'react-router-dom'

import { Header } from '../Header'
import { LayoutContent } from './styles'

export function Layout() {
  return (
    <div>
      <Header />
      <LayoutContent>
        <Outlet />
      </LayoutContent>
    </div>
  )
}
