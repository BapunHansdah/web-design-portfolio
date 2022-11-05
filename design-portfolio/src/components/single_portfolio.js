import {Link} from 'react-router-dom'

export default function Portfolio({design,title,description,link}){
	return(
		  <>
		    <Link to={link} target="_blank" rel="noopener noreferrer">
				  <div className=" flex flex-col justify-center items-center shadow-lg rounded-2xl shadow-gray-600 hover:shadow-md hover:shadow-gray-500 transition-all">
				     <div className="flex justify-center h-40 lg:h-60 w-full rounded-t-2xl bg-gray-100"><img className="object-contain rounded-t-2xl" src={design}/></div>
				     <div className="w-full flex flex-col items-center text-white bg-black  bg-gray-900 z-20  p-2 rounded-b-2xl">
				        <div><span className="font-inter-bold text-yellow-100 text-md hover:opacity-90">{title}</span></div>
				        <div className="flex gap-2 text-sm font-inter-bold text-yellow-500">
				          <p className="font-inter-regular text-white text-xs opacity-70 hover:opacity-50">{description}</p>
				        </div>
				     </div>

		          </div>
	          </Link>
		  </>
		)
}