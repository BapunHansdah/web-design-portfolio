import react from 'react'
import {Link} from 'react-router-dom'
import Design_1 from '../assets/image/1_design/active-states.jpg'

export default function Main(){
	return(	
		<div className="bg-FDFDBD h-screen">
		  <div className=" bg-gray-900 p-5 text-white shadow-md shadow-black">
		      <div className="text-4xl text-yellow-100">DESIGNS</div>
		      {/*<div className="opacity-70">bapunhansdah777@gmail.com</div>*/}
		  </div> 
		  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10 px-10 py-5 mt-5">
			  <Link to="/1_design">
				  <div className=" flex flex-col justify-center items-center shadow-xl rounded-2xl hover:shadow-md transition-all">
				     <div className="flex justify-center h-40 lg:h-60 w-full rounded-t-2xl brightness-75 hover:brightness-100"><img className="object-cover rounded-t-2xl" src={Design_1}/></div>
				     <div className="w-full flex justify-center text-white bg-black text-md bg-006E7F z-20 font-inter-bold p-2 rounded-b-2xl">News/blog Website</div>
		          </div>
	          </Link>
          </div>

		</div>
	)
}
