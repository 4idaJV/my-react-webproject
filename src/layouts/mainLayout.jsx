import { Outlet } from 'react-router-dom'


const Root = () => {
  return (
    <div>
      <Outlet />
      <div>Footer</div>
    </div>
  )
}

export default Root