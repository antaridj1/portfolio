import Image from "next/image";
import Work from "./components/Work";
import dataWorks from "./data/datawork";
import Navbar from "./components/Navbar";

export default function Home() {
	const works = dataWorks.map((work) => <Work work={work} key={work.id} />);

  return (
    <>
	<div className="container-xl px-10">
		<Navbar/>
		<section id="top" className="md:h-screen">
			<div className="my-2 lg:mr-40">
				<h1 className="text-title-xl dark:text-white">
					<span className="text-default-black">A Web Developer</span>
					<span className="text-default-grey"> who is Passionate Both in Design and Develop Websites</span>
				</h1>
			</div>
			<div className="my-8 lg:mr-40">
				<h2 className="text-title-sm"> <b>2+ years</b>  of experience combined programming skills and UI/UX design skills for creating engaging and interactive websites.</h2>
			</div>
			<div className="flex justify-start">
				<button type="button" className="text-white bg-primary border inline-flex focus:outline-none hover:text-gray-400 focus:ring-4 focus:ring-gray-100 font-bold rounded-full text-sm px-5 py-4 m-1 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-gray-800 dark:hover:border-gray-600 dark:focus:ring-gray-700">
					Contact 
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 ml-1">
						<path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
					</svg>
				</button>
				<button type="button" className="text-gray-900 bg-white border border-gray-900 inline-flex focus:outline-none hover:text-gray-500 focus:ring-4 focus:ring-gray-100 font-bold rounded-full text-sm px-5 py-4 m-1 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-gray-800 dark:hover:border-gray-600 dark:focus:ring-gray-700">
					View My Resume
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 ml-1">
						<path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
					</svg>
				</button>
			</div>
		</section>
   
	<section id="about">
		<div className="relative md:h-screen md:flex items-start md:justify-center">
			<div className="md:pe-3 w-full md:w-2/5 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
				<img src="/selfie.jpg" width={450} height={450} className="flex-initial object-cover object-center w-full h-[450px] rounded-2xl"/>
			</div>
			
			<div className="flex-1 md:ps-10 w-full md:w-3/5">
				<h1 className="text-title-xl mb-5 text-default-black ">About Me</h1>
				<p className="mb-3" >
					My journey has started after i joined an intership as <b>UI/UX Designer in Skillvul</b>. Not only improved my design skill but also my softskills. One of it is learned how to empathize and being in point of view as a user to feel their problems and struggles while using the applications.  
				</p>
				<p className="mb-3" >
					After graduated from STIKOM Bali in 2022, I joined an internship as a <b>Web Developer in Kayana Creative</b>  to bold my coding skills and was given a responsibility to build a waste management system of Ungasan Village. This is my first experience creating an interactive website with complex bussiness process.  
				</p>
				<p className="mb-3">
					With those experiences I got hired as a fulltimer <b>Web Developer in PT. APPKEY</b>  right after the internship ended. 
					I developed and maintained websites in past 2 years at work. Experienced in both UI/UX design and coding makes me more tends to the front-end development. 
					There was a time when all of my projects has been delayed and got nothing to do at work, then There was a time when all of my projects has been delayed and got nothing to do at work, then I was given an opportunity to try to develop mobile app using Flutter. 
					Although it was a simple app, but it’s worth it because I love learning new skills if it comes to front-end development. 
				</p>
			</div>
		</div>
		
	</section>

<section id="works" className="md:h-screen flex flex-col">
  	<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full">
		<h1 className="text-title-xl mb-5 text-default-black dark:text-white">
			Selected Works
		</h1>
  	</div>
	<div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10 lg:gap-20">
		{works}
	</div>
</section>

{/* <section id="experience" className="h-screen flex flex-col px-10">
  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full">
  <h1 className="text-title-xl dark:text-white">
      <span className="text-default-black">Experiences</span>
      <span className="text-default-grey"> in past three years</span>
    </h1>
    <div className="flex-grow lg:w-3/4">
      <p className="text-gray-600">Web Developer</p>
    </div>
  </div>
</section> */}


{/* <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
</p> */}
</div>

    </>
  );
}
