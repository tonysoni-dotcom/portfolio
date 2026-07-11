import React from "react"
import { ArrowForwardCircle, Document, LogoGithub, LogoLinkedin, Mail } from "react-ionicons"
import AttachRef from "./AttachRef";

type Contact = {
    name:string,
    link: string,
    Logo: React.ComponentType<{width?: string; height?: string}>,
}

const contactBoxes: Contact[] = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/vishnu-soni-work/",
      Logo: LogoLinkedin,
    },
    {
      name: "GitHub",
      link: "https://github.com/tonysoni-dotcom",
      Logo: LogoGithub,
    },
    {
      name: "Email",
      link: "mailto:vishnu.soni.work@gmail.com",
      Logo: Mail,
    },
    {
        name: "Resume",
        link: "/Vishnu_Soni_Resume.pdf",  // if hosted in your public/ folder
        Logo: Document,  // or whatever icon fits
    },
  ];

export default function ContactSection(){
    return (
        <AttachRef name = "contact-me">
            <section id = "contact-me" className="scroll-mt-25 p-10 md:max-w-6xl md:mx-auto">
                <h2 className="text-4xl flex justify-center items-center mt-10 md:mt-20 font-bold mb-5">
                    <span>Contact Me</span><span className="text-sky-300">.</span>
                </h2>
                <div className="flex flex-col justify-center items-center md:flex-row md:flex-wrap gap-2">
                    {
                        contactBoxes.map((contact,index) => {
                            return (
                                <LinkComp key = {contact.name} link = {contact.link} name = {contact.name} Logo = {contact.Logo}/>
                            )
                        })
                    }
                </div>
            </section>
        </AttachRef>
    )
}

function LinkComp({link, name, Logo} : {link:string, name: string, Logo: any}) {
    return(
        <a href = {link} target="_blank" rel="noopener noreferrer" className="flex flex-row justify-between items-center border-1 p-2 w-full md:max-w-lg md:p-3 rounded-sm hover:scale-[1.02] transition-all border-gray-500 hover:border-gray-400">
            <span className="flex flex-row justify-start items-center gap-2">
                <Logo
                    width = {"25px"}
                    height = {"25px"}
                    color = "white"
                />
                <span>{name}</span>
            </span>
            <ArrowForwardCircle
                color={'white'}
                width = {"20px"}
                height = {"20px"}
            />
        </a>
    )
}