import './Layout.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

function Layout({children}) {


  return (
    <div>
      <section className='flex-row gap-10'>
        <Sidebar />
        <div className='content flex-column w-full'>
          <Header />
        
          {children}

        </div>
      </section>
    </div>
  )
}

export default Layout;