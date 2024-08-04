"use client";
import { useState } from "react";
import { LinkIconSecondary } from "./Button";

export default function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <>
		<div className="fixed w-full p-2 top-0 z-50 start-0">
			<nav className="bg-white w-full px-2 md:px-7  rounded-lg ">
				<div className="flex flex-wrap items-center justify-between py-4 px-2">
					<a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
						<span className="self-center">Antari Dwijayanti</span>
					</a>
					
					<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
						<LinkIconSecondary href={'mailto:antaridwijayanti@gmail.com'} text={'Contact'} className="hidden md:inline-flex">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 ml-2">
								<path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
							</svg>
						</LinkIconSecondary>
					
						<button
							data-collapse-toggle="navbar-sticky"
							type="button"
							onClick={handleNavbar}
							className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
							aria-controls="navbar-sticky"
							aria-expanded={isNavbarOpen}
						>
							<span className="sr-only">Open main menu</span>
							<svg
								className="w-5 h-5"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 17 14"
								>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M1 1h15M1 7h15M1 13h15"
								/>
							</svg>
						</button>
					</div>
					
					<div
						className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isNavbarOpen ? "block" : "hidden"}`}
						id="navbar-sticky"
					>
						<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
							<li>
							<a href="/" className="block md:hidden py-2 px-3 text-black rounded md:bg-transparent md:text-gray-700 md:p-0" aria-current="page">
								Home
							</a>
							</li>
							<li>
							<a href="#works" className="block md:hidden py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
								Works
							</a>
							</li>
							<li>
							<a href="#about" className="block md:hidden py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
								About
							</a>
							</li>
							<li>
							<a href="#contact" className="block md:hidden py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">
								Contact
							</a>
							</li>
						</ul>
						
					</div>
					
				</div>
			</nav>
		</div>
    </>
  );
}
