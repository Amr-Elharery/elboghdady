import { Link } from "react-router-dom";
import User from '../../assets/imgs/user-1.jpg';
import {FaBookOpen, FaNewspaper, FaPen, FaUser, FaVideo} from 'react-icons/fa';

import './Sidebar.css';

function Sidebar() {
	const links = [
		"News",
		"Videos",
		"Lectures",
		"Exams"
	]

  return (
    <aside className='bg-primary c-white p- h-100vh p-10 flex-column flex-between'>
        <h3 className="userHeading fs-20">
					Amr Tamer
				</h3>

				<FaUser className="userIcon"/>

				<ul className="linksList flex-column gap-10">
					{
						links.map(link => (
							<li key={link}>
								<a
									href={`/${link.toLowerCase()}`}
									className="c-white flex-row"
									>
										{
									link === "News" ?
									<FaNewspaper />
									:
									link === "Videos" ?
									<FaVideo />:
									link === "Lectures" ?
									<FaBookOpen /> :
									link === "Exams" ? 
									<FaPen />:
									null
									
								}
									<span className="hide-mobile">
										{link}
									</span>
								</a>
							</li>
						))
					}
				</ul>


				<div className="img mb-10">
						<img src={User} alt="user" className="userImg" />
				</div>
  </aside>
  )
}

export default Sidebar;