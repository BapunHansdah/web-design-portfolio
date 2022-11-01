import logo from './assets/images/logo.svg'
import heroImage from './assets/images/image-web-3-desktop.jpg'
import retro_pc from './assets/images/image-retro-pcs.jpg'
import icon_menu from './assets/images/icon-menu.svg'
import heroImage_sm from './assets/images/image-web-3-mobile.jpg'
import top_laptop from './assets/images/image-top-laptops.jpg'
import gaming_growth from './assets/images/image-gaming-growth.jpg'
export default function Design(){
	return(
		  <div className="max-w-5xl mx-auto mt-16 px-5">
		    {/*header*/}
		    <header className="flex justify-between relative">
		    	<div className="p-2"><img src={logo} className="w-16"/></div>
		    	<div className="p-2 hidden lg:block absolute right-0 bottom-0">
			    	<ul className="flex gap-10 items-end font-inter-regular text-gray-500 text-sm">
			    		<li className="hover:text-red-500 cursor-pointer">Home</li>
			    		<li className="hover:text-red-500 cursor-pointer">New</li>
			    		<li className="hover:text-red-500 cursor-pointer">Popular</li>
			    		<li className="hover:text-red-500 cursor-pointer">Trending</li>
			    		<li className="hover:text-red-500 cursor-pointer">Categories</li>
			    	</ul>
		    	</div>
		    	<div className="flex items-center lg:hidden block"> 
		    		<img src={icon_menu}/>
		    	</div>
		    </header>
		    <div className="flex flex-col lg:flex-row justify-between mt-10 gap-5">
		    {/*second left section*/}
		       <div className="flex flex-col lg:w-2/3 flex-row border-black">
		       	    <div className="hidden sm:block"><img src={heroImage} /></div>
		       	    <div className="block sm:hidden"><img src={heroImage_sm}/></div>
		       	    <div className="grid lg:grid-cols-2 mt-5 gap-5">
		       	    	<div className="">
		       	    	    <div className="font-inter-extrabold text-5xl flex flex-wrap w-10/12 ">The Bright Future of web 3.0?</div>
		       	    	</div>
		       	    	<div className=" flex flex-col justify-between gap-5">
		       	    	     <p className="font-inter-regular text-xs opacity-80">
		       	    	         We Dive into the next evolution of the web that claims 
		       	    	         to put the power of the platform back into the hands
		       	    	         of the people. But is it really fullfilling its promise?
		       	    	     </p>
		       	    	     <div><button className="hover:bg-black bg-red-400 px-10 py-2 font-semibold text-sm text-white tracking-widest">READ MORE</button></div>
		       	    	</div>
		       	    </div>
		       </div>
		       {/*second right section*/}
		       <div className="grid bg-custom_col_1 lg:w-1/3 text-white p-7">
		          <div className="flex items-center font-inter-bold text-4xl text-custom_col_2">New</div>
		          <div className="grid">
			          <div className="flex flex-col justify-center border-gray-500 py-5">
			          	 <div className="font-inter-bold py-1 text-lg  hover:text-red-500 cursor-pointer">Hydrogen VS Electric Cars</div>
			          	 <div className="font-inter-regular text-sm  opacity-60 leading-5">Will hydrogen-fueled cars ever catch up to EVs?</div>
			          </div>
	                  <div className="flex flex-col justify-center border-y py-5 border-gray-500 ">							
			          	 <div className="font-inter-bold py-1 text-lg  hover:text-red-500 cursor-pointer">The Downside of AI Artistrtry</div>
			          	 <div className="font-inter-regular text-sm  opacity-60 leading-5">What are the possible adverse effects of on-demand AI image generations?</div>
			          </div>

			          <div className="flex flex-col justify-center py-5">
			          	 <div className="font-inter-bold py-1 text-lg  hover:text-red-500 cursor-pointer">Is VC Funding Drying Up?</div>
			          	 <div className="font-inter-regular text-sm  opacity-60 leading-5">Private funding by VC firms is down 50% YOY. We take a look at what that means.</div>
			          </div>
		          </div>
		       </div>
		    </div>
		      {/*third section*/}
              <div className="flex flex-col lg:flex-row mt-14 gap-10 lg:gap-0">
                   <div className="flex lg:w-4/12 gap-5 ">
                      <img className="h-32" src={retro_pc} />
                      <div className="grid gap-2">
                        <div className="font-inter-bold text-4xl text-gray-500 opacity-70">01</div>
                        <div className="text-lg lg:text-sm font-inter-bold hover:text-red-500 cursor-pointer">Reviving Retro PCs</div>
                        <div className="text-sm lg:text-xs font-inter-regular">What happens when old pcs are given modern upgrades?</div>
                      </div>
                   </div>
                   <div className="flex lg:w-4/12 gap-5 ">
                      <img className="h-32" src={top_laptop} />
                      <div className="grid gap-2">
                        <div className="font-inter-bold text-4xl text-gray-500 opacity-70">02</div>
                        <div className="text-lg lg:text-sm font-inter-bold hover:text-red-500 cursor-pointer">Top 10 Laptops of 2022</div>
                        <div className="text-sm lg:text-xs font-inter-regular">Our best picks for various need and budgets.</div>
                      </div>
                   </div>
                   <div className="flex lg:w-4/12 gap-5 ">
                      <img className="h-32" src={gaming_growth} />
                      <div className="grid gap-2">
                        <div className="font-inter-bold text-4xl text-gray-500 opacity-70">03</div>
                        <div className="text-lg lg:text-sm font-inter-bold hover:text-red-500 cursor-pointer">The Growth of Gaming</div>
                        <div className="text-sm lg:text-xs font-inter-regular">How the pandemic has sparked fresh opportunities.</div>
                      </div>
                   </div>
              </div>
              <div className="h-28"></div>
		  </div>
		)
}