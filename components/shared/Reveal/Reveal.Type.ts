import React from "react"

export type RevealProps={
    children: React.ReactNode;
    className?:string;
    position: "rigth"|"button";
    delay?:number;
}