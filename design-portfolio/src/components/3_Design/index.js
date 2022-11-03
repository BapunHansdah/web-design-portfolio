import logo from './assets/images/logo.svg'
import icon_arrow from './assets/images/icon-arrow-down.svg'

import header from './assets/images/desktop/image-header.jpg'
import transform from './assets/images/desktop/image-transform.jpg'
import photography from './assets/images/desktop/image-photography.jpg'
import standout from './assets/images/desktop/image-stand-out.jpg'
import graphicsdesign from './assets/images/desktop/image-graphic-design.jpg'

import gallerycone from './assets/images/desktop/image-gallery-cone.jpg'
import gallerymilkbottles from './assets/images/desktop/image-gallery-milkbottles.jpg'
import galleryorange from './assets/images/desktop/image-gallery-orange.jpg'
import gallerysugarcubes from './assets/images/desktop/image-gallery-sugarcubes.jpg'

import gallerycone_mobile from './assets/images/mobile/image-gallery-cone.jpg'
import gallerymilkbottles_mobile from './assets/images/mobile/image-gallery-milkbottles.jpg'
import galleryorange_mobile from './assets/images/mobile/image-gallery-orange.jpg'
import gallerysugarcubes_mobile from './assets/images/mobile/image-gallery-sugar-cubes.jpg'

import emily from './assets/images/image-emily.jpg'
import jennie from './assets/images/image-jennie.jpg'
import thomas from './assets/images/image-thomas.jpg'

import iconfacebook from './assets/images/icon-facebook.svg'
import iconinstagram from './assets/images/icon-instagram.svg'
import iconpinterest from './assets/images/icon-pinterest.svg'
import icontwitter from './assets/images/icon-twitter.svg'
import humburger from './assets/images/icon-hamburger.svg'



import Design_3 from '../../assets/image/3_design/active-states.jpg'


export default function Design(){
    return( 
          <> 
          <div className="max-w-[1440px] mx-auto">
    	      {/*<div className="absolute opacity-50"><img src={Design_3} /></div>*/}
    	  	  <div className="flex bg-3-design-header-mobile md:bg-3-design-header h-[800px] bg-center bg-cover bg-no-repeat">
    	  	     <div className="w-full">
    	  	         <header className="flex justify-between p-10">
	    	           <div className="flex items-center">
	    	           	  <div className="flex items-center"><img className="w-44" src={logo} /></div>
	    	           </div>
	    	           <div className="hidden md:block">
	    	              <div className="flex gap-10 lg:gap-[65px] items-center font-Barlow text-white">
	    	                 <div>About</div>
	    	                 <div>Services</div>
	    	                 <div>Projects</div>
	    	                 <div className="py-3 px-8  bg-white text-black  rounded-2xl font-Fraunces font-bold">Contact</div>
	    	              </div>
	    	           </div>
	    	           <div className="block md:hidden"><div className="h-full flex items-center"><img src={humburger}/></div></div>
	    	        </header>
	    	       <div className="text-center flex justify-center mt-20 tracking-custom_wide_hero text-xl sm:text-5xl font-Fraunces font-black text-white">
	    	        	<div>WE ARE CREATIVES</div>
	    	        </div>
	    	        <div className="flex justify-center mt-28">
	    	        	<img src={icon_arrow}/>
	    	        </div>
    	  	     </div>
    	      </div> 

	    	  <div className="flex flex-col-reverse md:grid md:grid-cols-2">
	    	     <div className="flex justify-center items-center h-[600px]">
	    	      <div className="max-w-lg px-8 flex flex-col gap-6">
	    	      	  <div className="font-Fraunces font-black text-3xl md:text-5xl">Transform your brand</div>
    	            	<div className="font-Barlow text-gray-400 font-semibold text-lg flex justify-center">
    	            		<p>We are full service creative agency specializing in helping brands grow fast. engage your client through
    	            		   compelling visulas that do most of the marketing for you
    	            		</p>
    	            	</div>
    	            	<div className="font-Fraunces font-bold uppercase text-lg lex items-center">learn more</div>
	    	      </div>
	    	      </div>
	    	      <div className="bg-3-design-transform-mobile md:bg-3-design-transform h-[600px] bg-center bg-cover bg-no-repeat"></div>
	    	  </div>

	    	  <div className="grid md:grid-cols-2">
	    	      <div className="bg-3-design-stand-out-mobile md:bg-3-design-stand-out h-[600px] bg-center bg-cover bg-no-repeat"></div>
	    	      <div className="flex justify-center items-center h-[600px]">
	    	      <div className="max-w-lg px-8  flex flex-col gap-6">
	    	      	  <div className="font-Fraunces font-black text-3xl md:text-5xl">Standout to the right audience</div>
    	            	<div className="font-Barlow text-gray-400 font-semibold text-lg flex justify-center">
    	            		<p>Using collaborative formula of designers, researchers , photographers ,videographers and copywriters , we will build
    	            		  and extend your brand in digital places.
    	            		</p>
    	            	</div>
    	            	<div className="font-Fraunces font-bold uppercase text-lg lex items-center">learn more</div>
	    	      </div>
	    	      </div>
	    	  </div>

	    	  <div className="grid md:grid-cols-2">
	    	      <div className="bg-3-design-graphics-design h-[600px] bg-center bg-cover bg-no-repeat flex justify-center">
	    	      	 <div className="flex justify-center pt-[400px] ">
	    	      	   <div className="max-w-md px-8 flex flex-col gap-8">
	    	      	 	  <div className="flex justify-center font-Fraunces font-black text-3xl text-lime-900">Graphics Design</div>
	    	      	 	  <div className="">
	    	      	 	     <p className="text-center font-Barlow text-lg font-semibold text-lime-800">
	    	      	 	  	    Great design makes you memorable. We deliver artwork that unerscores your brands message brand
	    	      	 	  	    captures clients attentions
	    	      	 	     </p>
	    	      	 	  </div>
	    	      	 	</div>
	    	      	 </div>
	    	      </div>
	    	      <div className="bg-3-design-photography h-[600px] bg-center bg-cover bg-no-repeat flex justify-center">
	    	      	  <div className="flex justify-center pt-[400px]">
	    	      	   <div className="max-w-md px-8 flex flex-col gap-8">
	    	      	 	  <div className="flex justify-center font-Fraunces font-black text-3xl text-lime-900">Photography</div>
	    	      	 	  <div className="">
	    	      	 	     <p className="text-center font-Barlow text-lg font-semibold text-lime-800">
	    	      	 	  	    increase the credibility by getting the most stunning high quality photos that inprove your business image
	    	      	 	     </p>
	    	      	 	  </div>
	    	      	 	</div>
	    	      	 </div>
	    	      </div>
	    	  </div>

	          <div className="grid justify-center my-10 md:mt-[160px] font-Fraunces font-extrabold text-lg md:text-xl tracking-custom_wide">
	             <div>CLIENT TESTIMONIALS</div>
	          </div>

	          <div className="flex justify-center items-center md:h-[500px] ">
			    	  <div className="grid md:grid-cols-3 justify-between max-w-6xl px-10 gap-5">

			    	     <div className="w-full">
				    	     <div className="grid justify-center h-20 md:h-32"><img className="h-[70px] w-[70px] rounded-full" src={emily}/></div>
				    	     <div className="h-24 md:h-32"><p className="text-center text-lg font-Barlow font-semibold text-gray-500">We put our trust in Sunnyside and they delivered,making sure our needs were met and deadline were always meet</p></div>
				    	     <div className="flex flex-col gap-2 h-20 md:h-28 justify-end">
		                          <div className="flex justify-center font-black text-[20px] text-gray-900 font-Fraunces">Emily R.</div>
			    	           	  <div className="flex justify-center font-Barlow text-sm font-semibold text-gray-400">Marketing Director</div>      
				    	     </div>
			    	     </div>
			    	      <div className="flex flex-col w-full">
				    	     <div className="grid justify-center h-20 md:h-32"><img className="h-[70px] w-[70px] rounded-full" src={emily}/></div>
				    	     <div className=" h-24 md:h-28"><p className="text-center text-lg font-Barlow font-semibold text-gray-500">Sunnyside's enthuasiasam coupled with their keen interest in our brand's success made it a satisfying ans enjoyable experience</p></div>
				    	     <div className="flex flex-col gap-2 h-20 md:h-28 justify-end">
		                          <div className="flex justify-center font-black text-[20px] text-gray-900 font-Fraunces">Emily R.</div>
			    	           	  <div className="flex justify-center font-Barlow text-sm font-semibold text-gray-400">Marketing Director</div>      
				    	     </div>
			    	     </div>
			    	      <div className="w-full">
				    	     <div className="grid justify-center h-20 md:h-32"><img className="h-[70px] w-[70px] rounded-full" src={emily}/></div>
				    	     <div className="h-24 md:h-28"><p className="text-center text-lg font-Barlow font-semibold text-gray-500">We put our trust in Sunnyside and they delivered,making sure our needs were met and deadline were always meet</p></div>
				    	     <div className="flex flex-col gap-2 h-20 md:h-28 justify-end">
		                          <div className="flex justify-center font-black text-[20px] text-gray-900 font-Fraunces">Emily R.</div>
			    	           	  <div className="flex justify-center font-Barlow text-sm font-semibold text-gray-400">Marketing Director</div>      
				    	     </div>
			    	     </div>
			    	  </div>
	    	  </div>
	    	  <div className="mb-[90px]"></div>
	    	  
	    	        <div className="md:hidden block">
	    	          <div className="grid grid-cols-2">
	    	        	<div><img src={gallerymilkbottles}/></div>
	    	        	<div><img src={galleryorange}/></div>
	    	        	<div><img src={gallerycone}/></div>
	    	        	<div><img src={gallerysugarcubes}/></div>
	    	          </div>
    	        	</div>
    	        	<div className="hidden md:block">
    	        	   <div className="grid grid-cols-4">
		    	        	<div><img src={gallerymilkbottles}/></div>
		    	        	<div><img src={galleryorange}/></div>
		    	        	<div><img src={gallerycone}/></div>
		    	        	<div><img src={gallerysugarcubes}/></div>
	    	        	</div>
    	        	</div>
    	       <div className="h-[350px] flex flex-col items-center justify-center  text-green-500">
    	         <div className="flex justify-center font-Barlow h-28 text-[35px] items-center font-black ">sunnyside</div>
    	         <div className="flex justify-center gap-14 h-20 font-Barlow text-[16px] font-bold ">
    	         	<div>About</div>
    	         	<div>Services</div>
    	         	<div>Projects</div>
    	         </div>
    	         <div className="flex justify-center gap-6 h-28 font-Barlow text-xl items-center font-extrabold">
    	         	<div><img src={iconfacebook}/></div>
    	         	<div><img src={iconinstagram}/></div>
    	         	<div><img src={icontwitter}/></div>
    	         	<div><img src={iconpinterest}/></div>
    	         </div>
    	       </div>
    	  </div>  
    	 </>
    	)
}