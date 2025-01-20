// define and export components used for basic layout ex. background, etc
"use client";
import React from "react";
import { useTheme } from './theme';
import Particles from "./particles";

export const  Background = ({particles, children} : {particles : Boolean, children: React.ReactNode}) => {
    const { theme } = useTheme();
    const classinfo = `flex flex-col items-center justify-center w-screen h-screen overflow-hidden ${theme.bg} ${theme.text}`;

    return(
        <div className={classinfo} style={{textAlign:"center", display: "flex",
                                        flexDirection: "column", overflowY: "auto",
                                        overflowX: "clip", msOverflowStyle: "none",
                                        margin: "auto",
                                        scrollbarWidth: "none", maxWidth: "100%"}}>
            {particles ? 
                  <Particles
                  className="absolute inset-0 -z-10 animate-fade-in"
                  quantity={100}
                />
            : null}
            <div>
                {children}
            </div>
        </div>
    )
};
