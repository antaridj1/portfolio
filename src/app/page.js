
import Work from "./components/Work";
import dataWorks from "./data/datawork";
import { DoubleColorTitle, Title, Subtitle, Text } from "./components/Typography";
import { LinkIconPrimary, LinkIconSecondary } from "./components/Button";
import { Section } from "./components/Layout";
import Footer from "./components/Footer";
export default function Home() {
	const works = dataWorks.map((work) => <Work work={work} key={work.id} />);

	return (
		<>

		<Section id="top" className="min-[390px]:h-screen mt-20 md:mt-20 flex items-center md:block md:items-start">
			<div>
				<DoubleColorTitle
					blackText={'A Web Developer'}
					grayText={'who is Passionate Both in Design and Develop Websites'}
				/>
				<Subtitle>
					<b>2+ years</b> of experience combined programming skills and UI/UX design skills for creating engaging and interactive websites.
				</Subtitle>
				
				<div className="flex flex-col md:justify-between md:flex-row my-8">
					<div className="flex justify-center flex-col md:flex-row md:justify-start items-start">
						<LinkIconSecondary href={'Antari_Dwijayanti_Resume_Web_Developer.pdf'} text={'View Resume'} className={'my-2'}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 ml-1">
								<path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
							</svg>
						</LinkIconSecondary>
						<LinkIconPrimary text={'Contact'} href={'mailto:antaridwijayanti@gmail.com'} className={'my-2'}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 ml-2">
								<path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
							</svg>
						</LinkIconPrimary>
					</div>
					<div className="flex justify-center md:justify-end items-end mt-8 animate-fade-left animate-once">
						<ul>
							<li className="flex items-center mb-2 justify-center md:justify-end">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 mr-2">
									<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
									<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
								</svg>
								<p className="text-center md:text-left text-black">
									Bali, Indonesia
								</p>
							</li>
							<li className="flex items-center mb-2 justify-center md:justify-end">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 mr-2">
									<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
								</svg>
								<a href="tel:6285157734785" className="text-center md:text-left text-gray-700 hover:underline hover:text-black">
									+6285157734785
								</a>
							</li>
							<li className="flex items-center mb-2 justify-center md:justify-end">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 mr-2">
									<path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
								</svg>
								<a href="mailto:antaridwijayanti@gmail.com" className="text-center md:text-left text-gray-700 hover:underline hover:text-black">
									antaridwijayanti@gmail.com
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</Section>
	
		<Section id="about">
			<div className="relative md:flex items-start md:justify-center">
				<div className="md:pe-3 w-full md:w-2/5 mb-10">
					<img src="/selfie.jpg" width={450} height={450} className="flex-initial object-cover object-center w-full h-[400px] md:h-[450px] rounded-2xl"/>
				</div>
				
				<div className="flex-1 md:ps-10 w-full md:w-3/5 text-center md:text-left">
					<Title text={'About Me'} />
					<Text>
						Hi. I’m Antari, a Web Developer from Bali, Indonesia. Using my experience as a UI/UX Designer, I create simple yet elegant designs to develop websites that look clean and emphasize the main content for a better user experience. 
						With over 2 years of experience as a Web Developer, I am proficient in developing web applications that precisely match the provided design and business processes to bring clients' visions to life. Additionally, I offer recommendations and advice to enhance website performance.
						<br/><br/>
						Eager to learn new skills, I’m currently diving into React.js. I’m excited to bring my front-end development skills to new projects!

					</Text>
				</div>
			</div>
			
		</Section>

		<Section id="works">
			<Title text={'Selected Works'} />
			<div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10 lg:gap-20">
				{works}
			</div>
		</Section>



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

		</>
	);
}
