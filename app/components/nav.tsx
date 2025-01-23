"use client";
import { Home } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from 'next/navigation';
import {modes, useTheme} from "./theme";
import "../../global.css"; 
import { useRouter } from "next/router";
import { Button } from '@chakra-ui/react';

export const nav = [
    { name: "About", href: "/about" },
    {name: "Research", href: "/research"},
	{name: "Experience", href:"/experience"},
    { name: "Contact", href: "/contact" }
];


export const Navigation: React.FC = () => {
	const [isIntersecting, setIntersecting] = useState(true);
	const [homeButton, setHomeButton] = useState(false);
	const pathname = usePathname();
	const [currentModeIndex, setCurrentModeIndex] = useState(0);
	const {theme, setTheme} = useTheme();

	// toggle display mode 
	const toggleMode = () => {
		setCurrentModeIndex(currentModeIndex == 0 ? 1 : 0);
		setTheme(modes[currentModeIndex]);
	};
  
	const buttonMode = modes[(currentModeIndex + 1) % modes.length];

	// display home button only if on non-home page
	useEffect(() => {
	  	setHomeButton(pathname !== '/');
	}, [pathname]);

	return (
		<header>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500  border-zinc-800 "
				}`}
				style={{height: "5rcm"}}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between items-center gap-8">
						{nav.map((item) => (
							<Link
							key={item.href}
							href={item.href}
							className = {`navLink ${
								pathname === item.href ? "active" : ""
							  }`}
							>
							{item.name}
							</Link>
						))}
						<Button
							onClick={toggleMode}
							className={buttonMode.bg.concat("rounded-full text-white focus:outline-none transform transition-transform duration-300 hover:scale-110 active:scale-90")}
							style={{ width: '30px', height: '30px' }}
							/>
					</div>
					{
						homeButton?
						<Link
							href="/"
							className="duration-200 text-zinc-300 hover:text-zinc-100"
						>
							<Home className="w-6 h-6 " />
						</Link> :
						null
					}
				</div>
			</div>
		</header>
	);
};
