import { Link } from "react-router-dom";
import { FaPen, FaUser, FaVideo} from 'react-icons/fa';
import {BsNewspaper} from "react-icons/bs";
import {AiFillQuestionCircle} from 'react-icons/ai';

import './Sidebar.css';
import {useEffect} from "react";

function Sidebar() {
	useEffect(() => {
		const homeLink = document.querySelector(".linksList a");
		homeLink.classList.add("active");
		const allLinks=document.querySelectorAll(".linksList a");
		allLinks.forEach(link =>{
			link.addEventListener('click', ()=>{
				allLinks.forEach(l=>{
					l.classList.remove("active");
				})
				link.classList.add("active");
			})
		})
		}, []);
	const links = [
		"News",
		"Courses",
		"Questions",
		"Exams",
	]

  return (
    <aside className='bg-primary c-white h-100vh flex-column'>
        <h3 className="userHeading fs-20">
					Amr Tamer
				</h3>

				<FaUser className="userIcon"/>

				<ul className="linksList flex-column gap-10 w-full">
					{
						links.map((link) => (
							<li key={link}>
								<Link
									to={link.toLowerCase()}
									className="c-white"
									>
									<span className="hide-mobile">
										{link}
									</span>
										{
									link === "News" ?
									<BsNewspaper />
									:
									link === "Courses" ?
									<FaVideo />:
									link === "Exams" ?
									<FaPen />:
									<AiFillQuestionCircle />

								}

								</Link>
							</li>
						))
					}
				</ul>



  </aside>
  )
}

export default Sidebar;