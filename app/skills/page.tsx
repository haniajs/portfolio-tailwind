import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Link from "next/link";
import React from "react";

export default function Skills () {
    return (
        <div>
            <Header></Header>
            <h1 className="text-[#A29875] text-5xl ml-[520px] mt-[69px]"><b>My Skills</b></h1>
            <section className="flex h-screen">
                <div className="">
                    <h1 className="text-[#A29875] text-5xl justify-between items-center ml-[350px] mt-[40px]"><b>Technologies I Works With</b></h1>
                    <p className="text-[#A29875]  justify-between items-center mt-12 mx-[350px]">
                        Hello, my name is Hania Irshad,
                     and I am passionate about computer science and technology. I am 
                     currently learning next.js and tailwind css in GIAIC.Through my studies at GIAIC,
                 I am gaining valuable knowledge in the fields of computer science, programing languages,
                  and artificial intelligence. I am excited to apply what I learn to real-world challenges 
                  and contribute to innovations that can shape the future of technology.I have experience
                   in web development, particularly in building responsive and user-friendly websites. 
                   I am proficient in front-end technologies such as HTML, CSS, TypeScript, and frameworks.I 
                   am good for these languages.</p>
                 
                   <div className="text-center mt-8"><Link href={"/contact"}><button className="bg-[#A29875] text-white font-medium py-2 px-8
            transition hover:text-black rounded-lg ">
                Contact-Us</button></Link></div>

                    </div>
            </section>
            <Footer></Footer>
        </div>
    )
}