import react from 'react'
import {Link} from 'react-router-dom'
import Design_1 from '../assets/image/1_design/active-states.jpg'
import Design_2 from '../assets/image/2_design/active-states.jpg'
import Design_3 from '../assets/image/3_design/desktop-preview.jpg'

export default function Main(){
	return(	
		<div className="h-screen">
		  <div className=" bg-gray-900 p-5 text-white shadow-md shadow-gray-500">
		      <div className="text-4xl text-yellow-100">DESIGNS</div>
		      {/*<div className="opacity-70">bapunhansdah777@gmail.com</div>*/}
		  </div> 
		  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10 px-10 py-5 mt-5">
			  <Link to="/1_design" target="_blank" rel="noopener noreferrer">
				  <div className=" flex flex-col justify-center items-center shadow-lg rounded-2xl shadow-gray-600 hover:shadow-md hover:shadow-gray-500 transition-all">
				     <div className="flex justify-center h-40 lg:h-60 w-full rounded-t-2xl bg-gray-100"><img className="object-contain rounded-t-2xl" src={Design_1}/></div>
				     <div className="w-full flex flex-col items-center text-white bg-black  bg-gray-900 z-20  p-2 rounded-b-2xl">
				        <div><span className="font-inter-bold text-yellow-100 text-md hover:opacity-90">News/blog Website</span></div>
				        <div className="flex gap-2 text-sm font-inter-bold text-yellow-500">
				          <p className="font-inter-regular text-white text-xs opacity-70 hover:opacity-50">Responsive Web Design with React & Tailwind</p>
				        </div>
				     </div>

		          </div>
	          </Link>
	          <Link to="/2_design" target="_blank" rel="noopener noreferrer">
				  <div className=" flex flex-col justify-center items-center shadow-lg rounded-2xl shadow-gray-600 hover:shadow-md hover:shadow-gray-500 transition-all">
				     <div className="flex justify-center h-40 lg:h-60 w-full rounded-t-2xl bg-gray-100"><img className="object-contain rounded-t-2xl" src={Design_2}/></div>
				     <div className="w-full flex flex-col items-center text-white bg-black  bg-gray-900 z-20  p-2 rounded-b-2xl">
				        <div><span className="font-inter-bold text-yellow-100 text-md hover:opacity-90">Landing Page</span></div>
				        <div className="flex gap-2 text-sm font-inter-bold text-yellow-500">
				          <p className="font-inter-regular text-white text-xs opacity-70 hover:opacity-50">Responsive Web Design with React & Tailwind</p>
				        </div>
				     </div>
		          </div>
	          </Link>
	          <Link to="/3_design" target="_blank" rel="noopener noreferrer">
				  <div className=" flex flex-col justify-center items-center shadow-lg rounded-2xl shadow-gray-600 hover:shadow-md hover:shadow-gray-500 transition-all">
				     <div className="flex justify-center h-40 lg:h-60 w-full rounded-t-2xl bg-gray-100"><img className="object-contain rounded-t-2xl" src={Design_3}/></div>
				     <div className="w-full flex flex-col items-center text-white bg-black  bg-gray-900 z-20  p-2 rounded-b-2xl">
				        <div><span className="font-inter-bold text-yellow-100 text-md hover:opacity-90">Portfolio Page</span></div>
				        <div className="flex gap-2 text-sm font-inter-bold text-yellow-500">
				          <p className="font-inter-regular text-white text-xs opacity-70 hover:opacity-50">Responsive Web Design with React & Tailwind</p>
				        </div>
				     </div>
		          </div>
	          </Link>
          </div>
		</div>
	)
}
