import Link from "next/link";
import { DoubleColorSubtitle } from "./Typography";

export default function Work({work}){
    return (
        <>
        <Link href={{
            pathname: `/detail/${work.id}`,

        }}>
            <div className="relative mb-5">
                <div className="absolute z-10 m-3">
                    <span class="bg-white text-link mr-2 px-3 py-2.5 rounded-full">
                        {work.workType}
                    </span>
                    <span class="bg-white text-link px-3 py-2 rounded-full">
                        {work.projectType}
                    </span>
                </div>
                
                <div className="transition-all duration-300 cursor-pointer filter contrast-75 hover:contrast-100">
                    <img src={'/'+work.thumbnail} width={450} height={450} className="flex-initial object-cover object-center w-full h-full rounded-xl"/>
                </div>
            </div>
            <DoubleColorSubtitle
                blackText={work.title}
                grayText={'- '+ work.subtitle} />
        </Link>
        </>
    );
}