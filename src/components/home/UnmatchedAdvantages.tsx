"use client";
import Image from "next/image";
import { useState } from "react";

export default function UnmatchedAdvantages() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            title: "Seamless <br/> Integration",
            icon: "/images/home/unmatched-advantages/slider-icons/slider-icon-1.png",
            content: "AILANA seamlessly integrates with existing PBX and CRM platforms, ensuring a smooth transition and compatibility for businesses of all sizes."
        },
        {
            title: "Enhanced <br/> Customer <br/> Interactions",
            icon: "/images/home/unmatched-advantages/slider-icons/slider-icon-2.png",
            content: "Elevate your customer service with an intelligent Agent designed to understand nuances and deliver lifelike interactions, setting your business apart in customer experience."
        },
        {
            title: "Cost-<br/>Efficiency",
            icon: "/images/home/unmatched-advantages/slider-icons/slider-icon-3.png",
            content: "Experience substantial cost savings as our solution not only optimizes customer service but also enhances revenue streams, making it a powerful and economical choice for businesses."
        },
        {
            title: "Strategic<br/> Insights",
            icon: "/images/home/unmatched-advantages/slider-icons/slider-icon-4.png",
            content: "Gain a competitive edge by integrating conversational logs into your analytics ecosystem, providing invaluable customer insights and facilitating data-driven decision-making."
        },
        {
            title: "Tailored for <br/> Financial Institutions",
            icon: "/images/home/unmatched-advantages/slider-icons/slider-icon-5.png",
            content: "Gain a competitive edge by integrating conversational logs into your analytics ecosystem, providing invaluable customer insights and facilitating data-driven decision-making."
        },
        {
            title: "CRM Integration <br/> Capabilities",
            icon: "/images/home/unmatched-advantages/slider-icons/slider-icon-6.png",
            content: "Seamlessly connect our solution with CRM systems, empowering your team with consolidated data for a comprehensive view of customer interactions. Enhance your customer relationship management strategy and unlock new possibilities for personalized service and targeted engagement."
        },
        {
            title: "Enterprise <br/> Scheduling",
            icon: "/images/home/unmatched-advantages/slider-icons/slider-icon-7.png",
            content: "Our AI Virtual Agent can streamline customer scheduling processes with our integrated enterprise scheduling feature, providing efficient and organized appointment management for your business."
        },
        {
            title: "SMS <br/> Messaging",
            icon: "/images/home/unmatched-advantages/slider-icons/slider-icon-8.png",
            content: "Enhance communication with your audience through our SMS messaging capabilities. Keep your customers informed, engaged, and connected, fostering stronger relationships and improving overall satisfaction."
        }
    ];

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };


    return (
        <section className="max-w-[1440px] mx-auto relative pb-[60px] md:pb-[80px] lg:pb-[120px]">
            <div className="w-full h-[649px] md:h-[800px] lg:h-[859px] relative z-0">
                <Image
                    src="/images/home/unmatched-advantages/unmatched-advantages-bg.png"
                    width={1440}
                    height={900}
                    alt="aiva top hero bg"
                    className="w-full h-full rounded-[60px] hidden sm:flex"
                />

                <Image
                    src="/images/home/unmatched-advantages/unmatched-advantages-bg-mobile.png"
                    width={1440}
                    height={900}
                    alt="aiva top hero bg"
                    className="w-full h-full rounded-[20px] flex sm:hidden"
                />
            </div>

            <div className="absolute top-[60px] md:top-[100px] w-full">
                <div className="w-full z-10 pl-[16px] md:pl-[24px] xl:pl-[100px]">
                    <h1 className="w-full md:max-w-[925px] text-[28px] md:text-[44px] leading-[36px] md:leading-[52px] tracking-[0.42px] md:tracking-[0.66px] font-bold font-polySans mb-[40px] md:mb-[60px]">
                        Unmatched <br className="flex sm:hidden" /> Advantages: <br />
                        Why Our Solution <br className="flex sm:hidden" /> Stands Out
                    </h1>

                    {/* Slider */}
                    <div className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden overflow-hidden">
                        <div
                            className="flex items-center gap-[13px] md:gap-[20px] min-w-full transition-transform duration-300"
                            style={{
                                transform: `translateX(-${currentIndex * (313.3 / slides.length)}%)`
                            }}
                        >
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className={` min-w-[300px] max-w-[300px] md:min-w-[505px] md:max-w-[505px] h-[300px] md:h-[373px] bg-background rounded-[30px] md:rounded-[50px] p-[20px] md:p-[30px] `}
                                >
                                    <div className="flex justify-between items-center mb-[30px] md:mb-[65px]">
                                        <h1 className="text-senary text-[18px] md:text-[26px] font-bold font-polySans leading-[26px] md:leading-[34px] tracking-[0.27px] md:tracking-[0.52px]"
                                            dangerouslySetInnerHTML={{ __html: slide.title }}
                                        />

                                        <div className="w-full max-w-[40px] md:max-w-[70px] h-[40px] md:h-[70px]">
                                            <Image
                                                src={slide.icon}
                                                width={100}
                                                height={100}
                                                alt="icon"
                                                className="w-full h-full rounded-[8.059px] md:rounded-[20px] shadow-[2.418px%20-1.612px%200px%200px%20#C1C5FF] md:shadow-[4px_-4px_0px_0px_#C1C5FF]"
                                            />
                                        </div>
                                    </div>
                                    <p className="text-[rgba(15,25,62,0.80)] text-[16px] font-general-sans md:leading-[24px]">
                                        {slide.content}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="max-w-[1240px] w-full mt-[40px] md:mt-[60px] px-[24] xl:px-[0px]">
                        <div className="flex justify-center md:justify-between items-center">
                            {/* Slide indicator */}
                            <div className="flex items-center gap-[4px]">
                                {slides?.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        aria-label={`Go to slide ${index + 1}`}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                            <circle cx="5" cy="5" r="5" fill={currentIndex === index ? "#0F193E" : "#0F193E"} fillOpacity={currentIndex === index ? "1" : "0.2"} />
                                        </svg>
                                    </button>
                                ))}
                            </div>

                            {/* Slide navigator */}
                            <div className="hidden md:flex items-center gap-[6px]">
                                <button
                                    className="bg-background w-[62px] h-[62px] rounded-full p-[16px] flex justify-center items-center cursor-pointer"
                                    onClick={goToPrevious}
                                    aria-label="Previous slide"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                        <g clipPath="url(#clip0_159_6393)">
                                            <path d="M6.17406 22.9925L1.27531 18.0938C0.479841 17.2602 0.0360222 16.1523 0.0360222 15C0.0360222 13.8478 0.479841 12.7399 1.27531 11.9063L6.17406 7.00754C6.52564 6.6558 7.00255 6.45813 7.49987 6.45801C7.99719 6.45789 8.47419 6.65534 8.82594 7.00692C9.17768 7.35849 9.37535 7.8354 9.37547 8.33272C9.37559 8.83005 9.17814 9.30705 8.82656 9.65879L5.35156 13.135L28.1641 13.1638C28.6613 13.1638 29.1383 13.3613 29.4899 13.713C29.8415 14.0646 30.0391 14.5415 30.0391 15.0388C30.0391 15.5361 29.8415 16.013 29.4899 16.3646C29.1383 16.7162 28.6613 16.9138 28.1641 16.9138L5.37531 16.885L8.82656 20.3413C9.16811 20.6949 9.3571 21.1686 9.35283 21.6602C9.34855 22.1518 9.15136 22.6221 8.80372 22.9697C8.45608 23.3173 7.98581 23.5145 7.49419 23.5188C7.00257 23.5231 6.52769 23.3341 6.17406 22.9925Z" fill="#0F193E" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_159_6393">
                                                <rect width="30" height="30" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>

                                <button
                                    className="bg-background w-[62px] h-[62px] rounded-full p-[16px] flex justify-center items-center cursor-pointer"
                                    onClick={goToNext}
                                    aria-label="Next slide"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                        <g clipPath="url(#clip0_159_6396)">
                                            <path d="M23.9041 22.9925L28.8028 18.0938C29.5983 17.2602 30.0421 16.1523 30.0421 15C30.0421 13.8478 29.5983 12.7399 28.8028 11.9063L23.9041 7.00754C23.5525 6.6558 23.0756 6.45813 22.5783 6.45801C22.0809 6.45789 21.6039 6.65534 21.2522 7.00692C20.9004 7.35849 20.7028 7.8354 20.7027 8.33272C20.7025 8.83005 20.9 9.30705 21.2516 9.65879L24.7266 13.135L1.91406 13.1638C1.41678 13.1638 0.939868 13.3613 0.588237 13.713C0.236607 14.0646 0.0390625 14.5415 0.0390625 15.0388C0.0390625 15.5361 0.236607 16.013 0.588237 16.3646C0.939868 16.7162 1.41678 16.9138 1.91406 16.9138L24.7028 16.885L21.2516 20.3413C20.91 20.6949 20.721 21.1686 20.7253 21.6602C20.7296 22.1518 20.9268 22.6221 21.2744 22.9697C21.622 23.3173 22.0923 23.5145 22.5839 23.5188C23.0756 23.5231 23.5504 23.3341 23.9041 22.9925Z" fill="#0F193E" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_159_6396">
                                                <rect width="30" height="30" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}