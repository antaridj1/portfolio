import Link from "next/link";
import { LinkIconSecondary } from "./Button";
import { DoubleColorFooter, SubtitleBold, Text, TextExtraSmall } from "./Typography";

export default function Footer(){
    return (
        <>
        <div className="p-2 flex flex-col">
            <div className="p-3 bg-[#eeeeee] rounded-lg flex flex-col flex-1">
                <div className="flex-1">
                    <DoubleColorFooter 
                        blackText={'Get in touch'}
                        grayText={'with me'} 
                    />
                    <div className="mt-5 flex-1 flex flex-col">
                        <div className="flex flex-col md:flex-row flex-1">
                            <div className="flex-1 p-3 text-center md:text-left">
                                <SubtitleBold>
                                    Let's work together
                                </SubtitleBold>
                                <Text>
                                    Available for creating design and developing your dream website. Already have a design? I’ll make your dream design come true.
                                    Want to hire me? I’d love to walk in for an interview!
                                </Text>
                                <div className="mt-10">
                                    <LinkIconSecondary text={'View Resume'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 ml-1">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                        </svg>
                                    </LinkIconSecondary>
                                </div>
                            </div>

                            <div className="flex-1 p-3 text-center md:text-left flex flex-col items-center">
                                <div>
                                    <SubtitleBold>
                                        Social
                                    </SubtitleBold>
                                    <ul className="list-disc pl-5">
                                        <li className="mb-2">
                                            <a href="https://www.linkedin.com/in/antari-dwijayanti-3a3378215/" className="flex items-center justify-center md:justify-start text-gray-700 hover:underline hover:text-black" target="_blank" rel="noopener noreferrer">
                                                LinkedIn
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 ml-2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="https://github.com/antaridj1" className="flex items-center justify-center md:justify-start text-gray-700 hover:underline hover:text-black" target="_blank" rel="noopener noreferrer">
                                                GitHub
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 ml-2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a href="https://medium.com/@antaridwijayanti" className="flex items-center justify-center md:justify-start text-gray-700 hover:underline hover:text-black" target="_blank" rel="noopener noreferrer">
                                                Medium
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 ml-2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex-1 p-3 text-center md:text-left flex flex-col items-center">
                                <div>
                                    <SubtitleBold>
                                        Contact
                                    </SubtitleBold>
                                    <ul>
                                        <li className="flex items-center mb-2 justify-center md:justify-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 mr-2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                            </svg>
                                            <a href="tel:6285157734785" className="text-center md:text-left text-gray-700 hover:underline hover:text-black">
                                                +6285157734785
                                            </a>
                                        </li>
                                        <li className="flex items-center mb-2 justify-center md:justify-start">
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
                    </div>
                </div>
                <div className="text-center mt-10">
                    <TextExtraSmall>
                        Copyright 2024. Made by Antari Dwijayanti
                    </TextExtraSmall>
                </div>
            </div>
        </div>





        </>
    );
}