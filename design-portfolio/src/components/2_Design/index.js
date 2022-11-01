import logo from './assets/images/logo.svg'
import image_hero from './assets/images/image-hero-desktop.png'
import image_hero_mobile from './assets/images/image-hero-mobile.png'
import audiophile from './assets/images/client-audiophile.svg'
import databiz from './assets/images/client-databiz.svg'
import maker from './assets/images/client-maker.svg'
import meet from './assets/images/client-meet.svg'
import menu from './assets/images/icon-menu.svg'

export default function Design(){
    return(
    	  <>
    	     <div className="px-5 md:px-10">
    	        {/*header*/}
    	     	<div className="max-w-screen-2xl mx-auto flex justify-between items-center font-inter-regular text-sm py-5">
    	     		<div className="flex gap-12">
    	     		  <div>
    	     		     <img src={logo}/>
    	     		  </div>
    	     		  <div className="hidden md:block">
		    	     	  <div className="flex gap-8">
		    	     		 <div>Features</div>
		    	     		 <div>Company</div>
		    	     		 <div>Careers</div>
		    	     		 <div>About</div>
		    	     	  </div>
	    	     	  </div>
    	     		  </div>
    	     		<div className="hidden md:block">
    	     		    <div className="flex items-center gap-8">
    	     		    	<div>Login</div>
    	     		    	<div className="px-4 py-2 border border-black rounded-2xl">Register</div>
    	     		    </div>
    	     		</div>
    	     		<div className="block md:hidden">
    	     		     <img className="flex items-center" src={menu}/>
    	     		</div>
    	     	</div>
    	     	{/*hero section*/}
    	     	<div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row gap-12 justify-between pl-0 md:pl-10 mt-10">
    	     	    <div className="grid">
    	     	    	<div className="flex flex-col justify-end gap-10">
	    	     	    	<div className="font-inter-extrabold text-4xl flex justify-center md:justify-start lg:text-7xl">Make remote work</div>
	    	     	    	<div className="flex justify-center text-center md:justify-start md:text-left">
		    	     	    	<p className="font-inter-regular opacity-80 flex-wrap w-10/12">
		    	     	    	  Get your team in sync. no matter your location.
		                          Streamline processes. Create team rituals. 
		                          and watch productivity soar.
		    	     	    	</p>
	    	     	    	</div>
	    	     	    	<div className="flex justify-center md:justify-start"><button className="border border-black text-lg font-inter-bold px-4 py-2 rounded-2xl">Learn More</button></div>
	    	     	    </div>
    	     	        <div className="flex items-end gap-10 justify-center md:justify-start mt-10">
    	     	           <div><img src={audiophile}/></div>
    	     	           <div><img src={databiz}/></div>
    	     	           <div><img src={maker}/></div>
    	     	           <div><img src={meet}/></div>
    	     	        </div>
    	     	    </div>
    	     	    <div className="hidden md:block">
    	     	      <div className="flex justify-center">
    	     	        <img className="w-10/12" src={image_hero} />
    	     	      </div>
    	     	    </div>
    	     	    <div className="block md:hidden">
    	     	      <div className="flex justify-center">
    	     	        <img className="" src={image_hero_mobile} />
    	     	      </div>
    	     	    </div>
    	     	</div>
    	     	<div className="h-40"></div>
    	     </div>
    	  </>
    	)
}