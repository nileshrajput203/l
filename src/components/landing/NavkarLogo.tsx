
import * as React from "react";

export const NavkarLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
        width="200" 
        height="100" 
        viewBox="0 0 200 100" 
        xmlns="http://www.w3.org/2000/svg" 
        {...props}
    >
        <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="Arial, sans-serif"
            fontSize="40"
            fontWeight="bold"
            fill="#204825"
        >
            NAVKAR
        </text>
    </svg>
);
