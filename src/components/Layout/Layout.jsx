import './Layout.css';
import Header from '../Header/Header';

function Layout({children}) {
  return (
    <div>
      <Header />
      <section className='flex-row gap-10'>
        <aside>
          sidebar
        </aside>

        {children}
      </section>
    </div>
  )
}

export default Layout;