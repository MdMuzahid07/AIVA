import Image from "next/image";

const MeetAilana = () => {
    return (
        <section className="max-w-[1440px] mx-auto bg-background">
            <div className="max-w-[1240px] mx-auto py-[60px] md:py-[80px] lg:py-[120px] px-[16px] md:px-[24px] xl:px-[0px]">
                <div className="flex flex-col md:items-start lg:flex-row justify-between gap-[20px] lg:gap-[286px]">
                    <div className="flex items-center gap-[5px]">
                        <div className="p-[2px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g clipPath="url(#clip0_159_6375)">
                                    <path d="M20 8.91111H12.4278L17.7444 3.6L16.3 2.16111L10.95 7.51111V0H8.91111V7.57222L3.6 2.25556L2.16111 3.7L7.51111 9.05H0V11.0889H7.57222L2.25556 16.4L3.7 17.8389L9.05 12.4889V20H11.0889V12.4278L16.4 17.7444L17.8389 16.3L12.4889 10.95H20V8.91111Z" fill="#0F193E" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_159_6375">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <p className="text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] font-semibold  font-general-sans">Meet AILANA</p>

                    </div>
                    <div className="w-full max-w-[820px]">
                        <h1 className="text-[28px] md:text-[44px] md:leading-[52px] md:tracking-[0.66px] font-polySans font-bold leading-[36px] tracking-[0.4px] text-senary">
                            Revolutionize Customer Engagement <span className="text-secondary mr-3">
                                with ALIANA
                            </span>
                            an advanced AI Virtual Agent
                        </h1>
                        <p className="text-[14px] leading-[22px] md:text-[16px] md:leading-[24px] font-general-sans mt-[20px] md:mt-[30px] text-[rgba(15,25,62,0.80)]">
                            Our product is more than just a solution—it&apos;s an intelligent AI Virtual Agent set to transform customer experiences by replacing outdated IVR systems. Say goodbye to the status quo and usher in a new era of customer interactions.
                        </p>
                    </div>
                </div>


                {/* // cards  */}

                <div className="mt-[40px] md:mt-[60px]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">


                    <div className="w-full md:max-w-[343px] h-auto md:min-h-[358px] lg:max-w-[400px] lg:h-[459px] rounded-[20px] sm:rounded-[50px] bg-[rgba(70,111,255,0.05)]">
                        <div className="px-[12px] pt-[12px] sm:px-[14px] sm:pt-[14px]">
                            <div className="w-full md:max-w-[319px] bg-background rounded-[12px] sm:rounded-[36px] h-auto md:min-h-[210.094px] lg:h-[245px] lg:max-w-[372px] overflow-hidden">
                                <Image
                                    src="/images/home/meet-ailana/card-img-1.png"
                                    width={372}
                                    height={245}
                                    alt="meet ailana card image"
                                    className="w-full h-full rounded-[12px] sm:rounded-[36px]"
                                />
                            </div>
                        </div>
                        <div className="px-[12px] pb-[12px] sm:px-[21px] sm:pb-[21px] mt-[11.91px] sm:mt-[30px]">
                            <p className="text-[14px] sm:text-[16px] leading-[22px] sm:leading-[16px] font-general-sans">
                                <span className="font-semibold">Efficiently tackle customer issues with an intelligent assistant that excels in resolving common problems</span>—minimizing wait times and freeing up your team to handle more complex challenges.
                            </p>
                        </div>
                    </div>


                    <div className="w-full md:max-w-[343px] h-auto md:min-h-[358px] lg:max-w-[400px] lg:h-[459px] rounded-[20px] sm:rounded-[50px] bg-[rgba(70,111,255,0.05)]">
                        <div className="px-[12px] pt-[12px] sm:px-[14px] sm:pt-[14px]">
                            <div className="w-full md:max-w-[319px] bg-background rounded-[12px] sm:rounded-[36px] h-auto md:min-h-[210.094px] lg:h-[245px] lg:max-w-[372px] overflow-hidden">
                                <Image
                                    src="/images/home/meet-ailana/card-img-2.png"
                                    width={372}
                                    height={245}
                                    alt="meet ailana card image"
                                    className="w-full h-full rounded-[12px] sm:rounded-[36px]"
                                />
                            </div>
                        </div>
                        <div className="px-[12px] pb-[12px] sm:px-[21px] sm:pb-[21px] mt-[11.91px] sm:mt-[30px]">
                            <p className="text-[14px] sm:text-[16px] leading-[22px] sm:leading-[16px] font-general-sans">
                                <span className="font-semibold"> Immediate Transfers to Human Resources</span> When necessary, AILANA seamlessly connects customers with a dedicated human resource steam, ensuring an unparalleled customer experience.
                            </p>
                        </div>
                    </div>


                    <div className="w-full md:max-w-[343px] h-auto md:min-h-[358px] lg:max-w-[400px] lg:h-[459px] rounded-[20px] sm:rounded-[50px] bg-[rgba(70,111,255,0.05)]">
                        <div className="px-[12px] pt-[12px] sm:px-[14px] sm:pt-[14px]">
                            <div className="w-full md:max-w-[319px] bg-background rounded-[12px] sm:rounded-[36px] h-auto md:min-h-[210.094px] lg:h-[245px] lg:max-w-[372px] overflow-hidden">
                                <Image
                                    src="/images/home/meet-ailana/card-img-3.png"
                                    width={372}
                                    height={245}
                                    alt="meet ailana card image"
                                    className="w-full h-full rounded-[12px] sm:rounded-[36px]"
                                />
                            </div>
                        </div>
                        <div className="px-[12px] pb-[12px] sm:px-[21px] sm:pb-[21px] mt-[11.91px] sm:mt-[30px]">
                            <p className="text-[14px] sm:text-[16px] leading-[22px] sm:leading-[16px] font-general-sans">
                                <span className="font-semibold">Unlock Rapid ROI and Effortless Onboarding with AILANA</span>—AILANA works with your existing infrastructure and onboarding only takes a few days. ROI occurs almost immediately.
                            </p>
                        </div>
                    </div>



                </div>
            </div>
        </section>
    )
}

export default MeetAilana;