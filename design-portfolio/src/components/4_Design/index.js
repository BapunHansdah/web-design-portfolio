import logo from './assets/images/logo-bookmark.svg'
import illustrationHero from './assets/images/illustration-hero.svg'
import illustrationFeaturetab1 from './assets/images/illustration-features-tab-1.svg'
import logochrome from './assets/images/logo-chrome.svg'
import logofirefox from './assets/images/logo-firefox.svg'
import logoopera from './assets/images/logo-opera.svg'
import iconarrow from './assets/images/icon-arrow.svg'
import iconfacebook from './assets/images/icon-facebook.svg'
import icontwitter from './assets/images/icon-twitter.svg'
import iconhamburger from './assets/images/icon-hamburger.svg'
import bgdots from './assets/images/bg-dots.svg'


import Design_4 from '../../assets/image/4_design/desktop-active-states.jpg'


export default function Design(){
    return( 
        <> 
          <div className="max-w-[1440px] mx-auto font-Rubik">
    	      {/*<div className="absolute opacity-100"><img src={Design_4} /></div>*/}
         </div>
         <div className="max-w-[1440px] mx-auto relative">
             <header className="flex justify-between max-w-6xl mx-auto px-6 py-12">
    	      	<div className="flex items-center">
    	      	   <img src={logo}/>
    	      	</div>
    	      	<div className="hidden md:block">
    	      	   <div className="flex gap-14 text-sm items-center">
    	      	   	  <div>FEATURES</div>
    	      	   	  <div>PRICING</div>
    	      	   	  <div>CONTACT</div>
    	      	   	  <div className="py-2 px-7 border border-black rounded">LOGIN</div>
    	      	   </div>
    	      	</div>
    	      </header>
    	      <div className="flex justify-end items-end mt-16 relative">
    	           <div className="max-w-6xl mx-auto flex flex-col-reverse md:grid md:grid-cols-2 z-10">
    	                <div className="hidden md:block">
    	                    <div className="flex items-center h-full">
    	                      <div className="px-5 gap-5 lg:gap-10 flex flex-col">
    	      	 	              <div className="text-3xl lg:text-5xl font-Rubik font-semibold">A Simple Bookmark Manager</div>
    	      	 	              <div><p className="text-lg">A clean and simple interface to organise your favourite websites. A clean and simple interface to organise.</p></div>
    	      	                <div className="flex gap-4">
    	      	                    <button className="px-2 py-2 border border-black rounded">Get it on Chrome</button>
    	      	                    <button className="px-2 py-2 border border-black rounded">Get it on Firefox</button>
    	      	                </div>
    	      	            </div>
    	      	            </div>
    	                </div>
    	                <div><img className="xl:max-w-none" src={illustrationHero}/></div>
    	           </div>
    	           <div className="absolute bg-sky-900 h-[80%] w-[75%] md:h-[80%]  md:w-[35%] rounded-l-[37%]"></div>
    	      </div>
    	      <div className="block md:hidden">
	            <div className="gap-5 md:gap-10 h-72 flex flex-col items-center justify-center max-w-lg mx-auto px-3">
	    	         <div className="text-3xl sm:text-4xl z-10 font-Rubik font-medium text-center">A simple Bookmark manager</div>
	    	         <div className="flex flex-wrap max-w-6xl text-center"><p>A clean and simple interface to organise your favourite websites. Open a new browser tab and see your sites load instantly,Try it for free.</p></div>
	    	         <div className="flex justify-center gap-2 sm:gap-10">
	    	      	        <div><button className=" text-sm  p-2 border border-black rounded">Get it on Chrome</button></div>
	    	      	        <div><button className=" text-sm  p-2 border border-black rounded">Get it on Firefox</button></div>
	    	      	 </div>
	    	      </div>
    	      </div>
    	      	 <div className="flex justify-center h-72">
    	      	     <div className="max-w-lg px-3 flex flex-col justify-center gap-4">
    	      	 	   <div className="font-bold text-4xl text-center">Features</div>
    	      	 	   <div><p className="text-center text-lg">
    	      	 	       Our aim is to make it quick and easy for you to access your favourite websites. Your Bookmark sync
    	      	 	       between your devices so you can access them on the go.
    	      	 	   </p></div>
                   </div>
    	      	 </div>

    	      	 <div className="max-w-6xl mx-auto flex flex-col md:flex-row text-center md:gap-20 font-bold justify-center border">
    	      	    <div className="p-7 border-b-4 border-red-600">Simple Bookmarking</div>
    	      	    <div className="p-7">Speedy Searching</div>
    	      	    <div className="p-7">Easy Sharing</div>
    	      	 </div>

    	      	  <div className="flex items-center mt-16 relative">
    	           <div className="absolute bg-sky-900 h-[75%] w-[70%] md:h-[75%]  md:w-[40%] rounded-r-[37%] bottom-0"></div>

    	           <div className="max-w-6xl mx-auto flex flex-col-reverse md:grid md:grid-cols-2 z-10">
    	                <div><img className="pl-4 pb-8 pr-4 sm:pl-8  sm:pb-20  sm:pt-2 pr-8" src={illustrationFeaturetab1}/></div>

    	                <div className="hidden md:block">
    	                    <div className="flex items-center justify-end h-full">
    	                      <div className="px-5 gap-5 lg:gap-10 flex flex-col w-10/12">
    	      	 	              <div className="text-3xl lg:text-3xl font-Rubik font-semibold">Bookmark in one click</div>
    	      	 	              <div><p className="text-lg">Organise your Bookmark how you like , our simple and drag and drop gives you complete control over 
    	      	 	                                        how you manage your favourite sites.
    	      	 	               </p></div>
    	      	                <div className="flex gap-4">
    	      	                    <button className="px-2 py-2 bg-blue-700 text-white rounded rounded">More info</button>
    	      	                </div>
    	      	            </div>
    	      	            </div>
    	                </div>
    	           </div>
    	      </div>

    	      <div className="block md:hidden">
	            <div className="gap-5 md:gap-10 h-72 flex flex-col items-center justify-center max-w-lg mx-auto px-3">
	    	         <div className="text-3xl sm:text-4xl z-10 font-Rubik font-medium text-center">Bookmark in one click</div>
	    	         <div className="flex flex-wrap max-w-6xl text-center"><p>Organise your Bookmark how you like , our simple and drag and drop gives you complete control over 
    	      	 	                                        how you manage your favourite sites.</p></div>
	    	         <div className="flex justify-center gap-2 sm:gap-10">
	    	      	        <div><button className=" text-sm  p-2 text-white bg-blue-700 rounded">More info</button></div>
	    	      	 </div>
	    	      </div>
    	      </div>

    	      <div className="">
	            <div className="gap-5 md:gap-8 h-72 flex flex-col items-center justify-center max-w-lg mx-auto px-3">
	    	         <div className="text-3xl sm:text-4xl z-10 font-Rubik font-medium text-center">Download the extension</div>
	    	         <div className="flex flex-wrap max-w-6xl text-center"><p>Organise your Bookmark how you like , our simple and drag and drop gives you complete control over 
    	      	 	                                        how you manage your favourite sites.</p></div>
	    	      </div>
    	      </div>

    	      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto px-10">
                 <div className="h-80 p-2 shadow-gray-500 shadow-lg rounded-2xl flex flex-col justify-center items-center gap-4">
                 	    <div><img src={logochrome} /></div>
                 	    <div className="flex gap-2 flex-col">
                 	    <div className="text-center text-lg font-bold">Add to Chrome</div>
                 	    <div>Minimum version 62</div>
                 	    </div>
                 	    <div><img src={bgdots} /></div>

                 	    <div className="w-full"><button className="w-full py-2 rounded text-white bg-blue-700">Add & install Extension</button></div>
                 </div>
                 {/*<div className="h-80  mt-16 p-2 shadow-gray-500 shadow-lg rounded-2xl">*/}

                    <div className="h-80 p-2 shadow-gray-500 mt-16 shadow-lg rounded-2xl flex flex-col justify-center items-center gap-4">
                 	    <div><img src={logofirefox} /></div>
                 	    <div className="flex gap-2 flex-col">
                 	    <div className="text-center text-lg font-bold">Add to Chrome</div>
                 	    <div>Minimum version 62</div>
                 	    </div>
                 	    <div><img src={bgdots} /></div>

                 	    <div className="w-full"><button className="w-full px-4 py-2 rounded text-white bg-blue-700">Add & install Extension</button></div>
                 </div>
                 	
                 {/*</div>*/}
                 {/*<div className="h-80  mt-32 p-2 shadow-gray-500 shadow-lg rounded-2xl">*/}

                    <div className="h-80 p-2 shadow-gray-500 mt-32 shadow-lg rounded-2xl flex flex-col justify-center items-center gap-4">
                 	    <div><img src={logoopera} /></div>
                 	    <div className="flex gap-2 flex-col">
                 	    <div className="text-center text-lg font-bold">Add to Chrome</div>
                 	    <div>Minimum version 62</div>
                 	    </div>
                 	    <div><img src={bgdots} /></div>

                 	    <div className="w-full"><button className="w-full px-4 py-2 rounded text-white bg-blue-700">Add & install Extension</button></div>
                 </div>
                 	
                 {/*</div>*/}

    	      </div>

    	      <div className="">
	            <div className="gap-5 md:gap-8 h-72 flex flex-col items-center justify-center max-w-lg mx-auto px-3">
	    	         <div className="text-3xl sm:text-4xl z-10 font-Rubik font-medium text-center">Frequently asked questions</div>
	    	         <div className="flex flex-wrap max-w-6xl text-center font-Rubik"><p>Here are some FAQS , If you have any questions you would like to answered please feel free to email us</p></div>
	    	      </div>
    	      </div>

    	      <div className="max-w-2xl px-5 md:px-10 mx-auto text-gray-500">
    	          <div className="py-4 flex justify-between items-center border-b border-black">
    	             <p className="text-lg font-medium text-gray-800">What is Bookmark?</p>
    	             <div><img src={iconarrow}/></div>
    	          </div>
    	          <div><p>some random text some random text some random text some random textsome random text some random text some random textsome random textsome random textsome random textsome random text</p></div>
    	          <div className="py-4 flex justify-between items-center border-b border-black">
    	             <p className="text-lg font-medium text-gray-800">How can i request a new browser?</p>
    	             <div><img src={iconarrow}/></div>
    	          </div>
    	          <div className="py-4 flex justify-between items-center border-b border-black">
    	             <p className="text-lg font-medium text-gray-800">Is there a mobile app?</p>
    	             <div><img src={iconarrow}/></div>
    	          </div>
    	          <div className="py-4 flex justify-between items-center border-b border-black">
    	             <p className="text-lg font-medium text-gray-800">What about the other chromium browser?</p>
    	             <div><img src={iconarrow}/></div>
    	          </div>
    	      </div>

    	      <div className="bg-blue-700 h-[400px] mt-16 flex items-center p-5 text-white">
    	         <div className="max-w-md text-center mx-auto flex flex-col gap-8">
    	          <div className="uppercase text-sm tracking-widest">35000 already joined</div>
    	          <div className="text-3xl">Stay up-to-date with what we are doing.</div> 
    	          <div className="flex flex-col md:flex-row justify-between gap-4" ><input placeholder="email" className="w-full md:w-7/12 rounded text-gray-500 p-2" /><button className="w-full md:w-4/12 rounded bg-white text-black p-2">Contact Us</button></div>
    	         </div>
    	      </div>

    	      <div className="bg-blue-900">
    	          <footer className="flex justify-between flex-col md:flex-row max-w-6xl mx-auto px-6 py-8 gap-10 text-white">
    	      	<div className="flex flex-col md:flex-row items-center gap-14">
    	      	   <img src={logo}/>
    	      	   <div className="flex gap-10 md:gap-14 flex-col md:flex-row text-sm items-center">
    	      	   	  <div>FEATURES</div>
    	      	   	  <div>PRICING</div>
    	      	   	  <div>CONTACT</div>
    	      	   </div>
    	      	</div>
    	      	<div className="flex justify-center items-center flex gap-14">
    	      	    <div><img src={iconfacebook} /></div>
    	      	    <div><img src={icontwitter} /></div>
    	      	</div>
    	      </footer>
    	      </div>
       </div>
    	 </>
    	)
}