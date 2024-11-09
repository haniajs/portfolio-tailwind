import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";



export default function HomePage () {
  return (
    <div>
      <Header></Header>

      <section className="flex h-screen">

        <div className="flex-1">
          <h1 className="text-[#A29875] text-6xl justify-between items-center ml-20 mt-[120px]">
            Hello! I Am Hania Irshad</h1>
          <p className="text-[#A29875]  justify-between items-center ml-20 mt-5">
          Hello, my name is Hania Irshad, and I am currently learning at GIAIC (Governor 
          sindh initiative for cloud applied generative AI).I am gaining valuable knowledge in the 
          fields of computer science, programing languages,and artificial intelligence.</p>

            <Link href={"/about"}><button className="bg-[#A29875] text-white p-3 rounded-[6px] justify-between items-center ml-20 mt-5">
              Learn More</button></Link>
        </div>

        <div className="flex-1 mt-[55px] ml-[300px] ">
          <Image src={"/images/mypic.PNG"} alt="hero-pic" height={300} width={300} className="rounded-[6px]"/>
        </div>
      </section>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Footer></Footer>
    </div>
  );
}