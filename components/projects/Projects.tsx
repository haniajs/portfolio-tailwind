import React from "react";
import Image from "next/image";

export default function Projects () {
    return (
        <div>
            <h1 className="text-[#A29875] text-5xl ml-[520px] mt-6"><b>MY Projects</b></h1>

<section className="flex h-screen">
    
    <div className="flex-1 mt-[55px]">
        <Image src={"/images/appliances.PNG"} alt="appliances" width={300} height={600}
        className="rounded-[8px] h-[400px]"/>
        <p className="text-[#A29875]  justify-between items-center mt-2 ml-[65px]">
            <b>Appliances Website</b></p>
    </div>

    <div className="flex-1 mt-[55px]">
        <Image src={"/images/figma.PNG"} alt="figma" width={300} height={600}
        className="rounded-[8px] h-[400px]"/>
        <p className="text-[#A29875]  justify-between items-center mt-2 ml-[75px]">
        <b>Figma Template</b></p>
    </div>

    <div className="flex-1 mt-[55px]">
        <Image src={"/images/resume.PNG"} alt="resume" width={300} height={600}
        className="rounded-[8px] h-[400px]"/>
        <p className="text-[#A29875]  justify-between items-center mt-2 ml-[75px]">
        <b>Resume Builder</b></p>
    </div>

    <div className="flex-1 mt-[55px]">
        <Image src={"/images/website.PNG"} alt="website" width={300} height={600}
        className="rounded-[8px] h-[400px]"/>
        <p className="text-[#A29875]  justify-between items-center mt-2 ml-[75px]">
        <b>Next.js Website</b></p>
    </div>

</section>
        </div>
    )
}