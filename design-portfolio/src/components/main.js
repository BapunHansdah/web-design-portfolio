import react from 'react'
import {Link} from 'react-router-dom'
import Design_1 from '../assets/image/1_design/active-states.jpg'
import Design_2 from '../assets/image/2_design/active-states.jpg'
import Design_3 from '../assets/image/3_design/desktop-preview.jpg'
import Design_4 from '../assets/image/4_design/desktop-preview.jpg'

import Portfolio from './single_portfolio' 


export default function Main(){
	return(	
		<div className="h-screen">
		  <div className="max-w-[1440px] mx-auto bg-gray-900 p-5 text-white shadow-md shadow-gray-500">
		      <div className="text-4xl text-yellow-100">DESIGNS</div>
		  </div> 
		  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10 px-10 py-5 mt-5">
	          <Portfolio title={"News/blog Website"} link={"/1_design"} description={"Responsive Web Design with React & Tailwind"} design={Design_1} />
	          <Portfolio title={"Landing Page"} link={"/2_design"} description={"Responsive Web Design with React & Tailwind"} design={Design_2} />
	          <Portfolio title={"Portfolio Page"} link={"/3_design"} description={"Responsive Web Design with React & Tailwind"} design={Design_3} />
	          <Portfolio title={"Bookmark manager"} link={"/4_design"} description={"Responsive Web Design with React & Tailwind"} design={Design_4} />
          </div>
		</div>
	)
}
