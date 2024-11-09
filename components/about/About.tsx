import React from "react";
import Link from "next/link";

export default function About () {
    return (
        <div>
             <div>
            <section id="about" className="bg-white h-screen ">
              <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-
            bg-gradient-to-b from-neutral-50 to-red-600 text-[#A29875] text-center p-20">About Us</h1>
              <p className="mt-0 font-normal text-base text-[#A29875] items-center justify-between 
              mx-[300px]">Hello, 
              my name is Hania Irshad, and I am currently learning at GIAIC (Governor 
                sindh initiative for cloud applied generative AI). I am passionate about developing my skills in artificial 
                intelligence, machine learning, and advanced computing technologies. Through my studies at GIAIC,
                 I am gaining valuable knowledge in the fields of computer science, programing languages,
                  and artificial intelligence. I am excited to apply what I learn to real-world challenges 
                  and contribute to innovations that can shape the future of technology. I am committed to
                   continuous growth and look forward to collaborating with like-minded individuals in this
                    ever-evolving field.</p>

            <div className="text-center mt-6"><Link href={"/contact"}><button className="bg-[#A29875] text-white font-medium py-2 px-8
            transition hover:text-black rounded-lg ">
                Contact-Us</button></Link></div>
            </section>
        </div>
        </div>
    );
}