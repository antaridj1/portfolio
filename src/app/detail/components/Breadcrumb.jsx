
import dataWorks from "@/app/data/datawork";
import { useSearchParams } from "next/navigation";

const Breadcrumb = () => {
    const searchParams = useSearchParams();
	const workId = searchParams.get('id');
    const work = dataWorks.find((datawork) => datawork.id == workId)
    return (
        <nav class="flex px-2 my-5 justify-center md:justify-start" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li class="inline-flex items-center">
                    <a href="/" class="inline-flex items-center text-normal font-medium text-default-black hover:text-gray-400 dark:text-gray-400 dark:hover:text-white">
                        Home
                    </a>
                </li>
                <li>
                    <div class="flex items-center">
                        <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <a href="#" class="ms-1 text-normal font-medium text-default-black md:ms-2 hover:text-gray-400 dark:text-gray-400 dark:hover:text-white">Works</a>
                    </div>
                </li>
                <li aria-current="page">
                    <div class="flex items-center">
                        <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span class="ms-1 text-normal font-medium text-default-black md:ms-2 dark:text-gray-400">{work.title}</span>
                    </div>
                </li>
            </ol>
        </nav>
    );
}

export default Breadcrumb;