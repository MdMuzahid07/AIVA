"use client";
import Image from "next/image";
import { useState } from "react";

const tabs = [
    {
        id: "speech-recognition",
        title: "Speech Recognition",
        description:
            "Utilizes machine learning to convert spoken words to text, adapting to accents and dialects for improved clarity.",
        imagePath: "/images/home/features/tabs-images/Speech-Recognition-tab-1.png",
    },
    {
        id: "seamless-integrations",
        title: "Seamless Integrations",
        description:
            "Connect with popular platforms and services to streamline workflows and enhance productivity across your tech stack.",
        imagePath: "/images/home/features/tabs-images/Seamless-Integrations-tab-2.svg",
    },
    {
        id: "contextual-awareness",
        title: "Contextual Awareness",
        description: "Understands conversation context to provide relevant responses and maintain natural dialogue flow.",
        imagePath: "/images/home/features/tabs-images/Contextual-Awareness-tab-3.svg",
    },
    {
        id: "voice-synthesis",
        title: "Voice Synthesis",
        description:
            "Creates natural-sounding speech with customizable voice profiles for personalized user experiences.",
        imagePath: "/images/home/features/tabs-images/Voice-Synthesis-tab-4.svg",
    },
    {
        id: "smart-call-routing",
        title: "Smart Call Routing",
        description:
            "Intelligently directs calls based on content, urgency, and available resources to optimize response times.",
        imagePath: "/images/home/features/tabs-images/Smart-Call-Routing-tab-5.svg",
    },
    {
        id: "conversation-logs",
        title: "Conversation Logs",
        description: "Maintains detailed records of interactions for analysis, training, and continuous improvement.",
        imagePath: "/images/home/features/tabs-images/Conversation-Logs-tab-6.svg",
    },
    {
        id: "real-time-response",
        title: "Real-Time Response",
        description: "Delivers immediate answers and solutions without delays, enhancing user satisfaction.",
        imagePath: "/images/home/features/tabs-images/Real-Time-Response-tab-7.svg",
    },
    {
        id: "automated-post-call-actions",
        title: "Automated Post-Call Actions",
        description: "Executes follow-up tasks automatically based on call outcomes and user needs.",
        imagePath: "/images/home/features/tabs-images/Automated-Post-Call-Actions-tab-8.svg",
    },
    {
        id: "enterprise-scheduling",
        title: "Enterprise Scheduling",
        description: "Manages appointments and meetings with intelligent calendar integration and time optimization.",
        imagePath: "/images/home/features/tabs-images/Enterprise-Scheduling-tab-9.svg",
    },
]

const Features = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    return (
        <section className="max-w-[1440px] mx-auto relative pb-[60px] md:pb-[80px] lg:pb-[120px]">
            <div className="w-full h-[1097px] md:h-[900px] lg:h-[1026px] relative z-0">
                <Image
                    src="/images/home/features/feature-bg.png"
                    width={1440}
                    height={900}
                    alt="aiva top hero bg"
                    className="w-full h-full rounded-[20px] md:rounded-[60px]"
                />
            </div>

            <div className="absolute top-[60px] md:top-[100px] w-full">
                <div className="max-w-[1240px] mx-auto px-[16px] md:px-[24px] xl:px-[0px]">
                    <h1 className="text-center text-[28px] md:text-[44px] font-polySans leading-[36px] md:leading-[52px] tracking-[0.42px] md:tracking-[0.66px] font-bold text-senary">
                        Features
                    </h1>


                    {/* // tabs */}

                    <div className="flex flex-col lg:flex-row mt-[40px] md:mt-[60px] lg:gap-[156px]">

                        <ul className="space-y-[40px] w-full md:max-w-[484px]">
                            {tabs?.map((tab, index) => (
                                <li key={tab.id} className={`${index === activeTabIndex ? "flex gap-[20px]" : "pl-[26px]"}  md:mt-[10px]`}>
                                    {index === activeTabIndex && <div className="w-[4px] md:w-[6px] h-[106px] bg-senary md:h-[114px] -mt-[6px]" />}
                                    <div>
                                        <button
                                            onClick={() => setActiveTabIndex(index)}
                                            className={`cursor-pointer text-[20px] md:text-[26] font-general-sans leading-[28px] md:leading-[34px] text-senary ${index === activeTabIndex ? "font-semibold flex items-center gap-[18px]" : "font-normal"
                                                }`}
                                        >
                                            {tab?.title}
                                            {index === activeTabIndex && (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                                    <g clipPath="url(#clip0_159_6330)">
                                                        <path
                                                            d="M23.9041 22.9925L28.8028 18.0938C29.5983 17.2602 30.0421 16.1523 30.0421 15C30.0421 13.8478 29.5983 12.7399 28.8028 11.9063L23.9041 7.00754C23.5525 6.6558 23.0756 6.45813 22.5783 6.45801C22.0809 6.45789 21.6039 6.65534 21.2522 7.00692C20.9004 7.35849 20.7028 7.8354 20.7027 8.33272C20.7025 8.83005 20.9 9.30705 21.2516 9.65879L24.7266 13.135L1.91406 13.1638C1.41678 13.1638 0.939868 13.3613 0.588237 13.713C0.236607 14.0646 0.0390625 14.5415 0.0390625 15.0388C0.0390625 15.5361 0.236607 16.013 0.588237 16.3646C0.939868 16.7162 1.41678 16.9138 1.91406 16.9138L24.7028 16.885L21.2516 20.3413C20.91 20.6949 20.721 21.1686 20.7253 21.6602C20.7296 22.1518 20.9268 22.6221 21.2744 22.9697C21.622 23.3173 22.0923 23.5145 22.5839 23.5188C23.0756 23.5231 23.5504 23.3341 23.9041 22.9925Z"
                                                            fill="#0F193E"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_159_6330">
                                                            <rect width="30" height="30" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            )}
                                        </button>
                                        {index === activeTabIndex && (
                                            <p className="mt-[12px] text-[14px] md:mt-[20px] font-general-sans md:text-[16px] leading-[22px] md:leading-[24px]">
                                                {tab?.description}
                                            </p>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="w-full md:max-w-[600px]">
                            <div className="w-full md:max-w-[600px] h-full md:max-h-[600px]">
                                <Image
                                    src={tabs[activeTabIndex]?.imagePath || ""}
                                    width={600}
                                    height={600}
                                    alt={`${tabs[activeTabIndex]?.title || "tab image"}`}
                                    className="w-full h-full"
                                />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Features;

