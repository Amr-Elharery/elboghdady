import './Layout.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import {Outlet} from "react-router-dom";

function Layout() {


  return (
    <div>
      <section className='flex-row gap-10'>
        <Sidebar />
        <div className='content flex-column w-full'>
          <Header />
        
          {
              <Outlet />
          }

        </div>
      </section>
    </div>
  )
}

export default Layout;