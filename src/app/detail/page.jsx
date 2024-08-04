"use client";
import { Section,SectionDetail } from "@/app/components/Layout";
import { DoubleColorTitle, Subtitle, Title, Text } from "@/app/components/Typography";
import { LinkIconPrimary, LinkIconSecondary } from "@/app/components/Button";
import Breadcrumb from "./components/Breadcrumb";
import { useSearchParams } from "next/navigation";
import Detail from "./components/Detail";
import dataWorks from "../data/datawork";
import { Suspense } from "react";

function DetailPage(){
	const searchParams = useSearchParams();
	const workId = searchParams.get('id');
    const work = dataWorks.find((datawork) => datawork.id == workId)

	
    return (
        <>
           <SectionDetail id="title-work">
				<div className="my-12">
					<Breadcrumb/>
					<DoubleColorTitle
						blackText={work.title}
						isSaparate={true}
						grayText={work.subtitle}
					/>
					
					<div className="flex justify-center md:justify-start my-8">
						<LinkIconSecondary href={work.link} text={'View Website'}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 ml-1">
								<path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
							</svg>
						</LinkIconSecondary>
					</div>
				</div>
				
			</SectionDetail>				
				<div className="w-full p-2 mb-10">
					<img src={work.image} className="flex-initial object-cover object-center w-full rounded-md"/>
				</div>

				<Section id="detail">
				<Detail title={'Overview'}>
					{work.detail.overview}
				</Detail>
				<Detail title={'Challenges'}>
					{work.detail.challenges}
				</Detail>
				<Detail title={'Results'}>
					{work.detail.results}
				</Detail>
				</Section>
			
        </>
    );
}

export default function Page() {
	return (
	  <Suspense fallback={<div>Loading...</div>}>
		<DetailPage />
	  </Suspense>
	);
  }