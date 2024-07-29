import { Section,SectionDetail } from "@/app/components/Layout";
import { DoubleColorTitle, Subtitle, Title, Text } from "@/app/components/Typography";
import { LinkIconPrimary, LinkIconSecondary } from "@/app/components/Button";
import Detail from "../components/Detail";
import Breadcrumb from "../components/Breadcrumb";

export default function Page(){
    // const router    = useRouter();
    // const {id}      = router.query;
	// const workId = parseInt(id);
	// console.log('test')
    // const work      = dataWorks.find((datawork) => datawork.id == workId)


    return (
        <>
           <SectionDetail id="title-work">
				<div className="my-12">
					<Breadcrumb/>
					<DoubleColorTitle
						blackText={'Bali Bagus Rentcar'}
						isSaparate={true}
						grayText={'Automatic Car Rent Website'}
					/>
					
					<div className="flex justify-center md:justify-start my-8">
						<LinkIconSecondary text={'View Website'}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 ml-1">
								<path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
							</svg>
						</LinkIconSecondary>
					</div>
				</div>
				
			</SectionDetail>				
				<div className="w-full p-2 mb-10">
					<img src="/rentcar.png" className="flex-initial object-cover object-center w-full rounded-md"/>
				</div>

				<Section id="detail">
				<Detail title={'Overview'}>
					Bali Bagus Rentcar is a car rental business specializing in automatic transmission vehicles, located in Bali. The company boasts a large fleet of cars with the potential for expansion. Customers have the option to rent vehicles for self-drive or with a driver.
				</Detail>
				<Detail title={'Problem'}>
					Managing a large fleet of cars presents significant challenges. Although many vehicles are available for rent, the owner must share the list of available cars with potential renters via chat, often without providing photos of the cars. Also, the list is in the form of an image, requiring the owner to update the image each time there are changes to the car list.
				</Detail>
				<Detail title={'Solution'}>
					Creating a website for Bali Bagus Rentcar is the ideal solution to address the challenges faced by clients. 
					The website will feature a comprehensive list of available cars, complete with detailed descriptions and images. Users will also have access to the rental business's terms and conditions, ensuring transparency. Once a user selects a car to rent, they will be redirected to the owner's WhatsApp by clicking the "Book" button. 
					In addition to the user-facing site, Bali Bagus Rentcar will also benefit from an admin site for car management. This will allow the owner to easily update car information, ensuring the listings remain accurate and up-to-date.
				</Detail>
				</Section>
			
        </>
    );
}