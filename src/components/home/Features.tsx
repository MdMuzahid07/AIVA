import Image from "next/image"

const Features = () => {
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

                    <div className="flex flex-col md:flex-row mt-[40px] md:mt-[60px] lg:gap-[156px]">

                        <ul className="space-y-[40px] w-full md:max-w-[484px]">
                            <li className="flex gap-[20px]">
                                <div className="w-[4px] md:w-[6px] h-[106px] bg-senary md:h-[114px]" />
                                <div>
                                    <button className="text-[20px] md:text-[26] font-general-sans leading-[28px] md:leading-[34px] text-senary font-semibold flex items-center gap-[18px]">
                                        Speech Recognition <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                            <g clip-path="url(#clip0_159_6330)">
                                                <path d="M23.9041 22.9925L28.8028 18.0938C29.5983 17.2602 30.0421 16.1523 30.0421 15C30.0421 13.8478 29.5983 12.7399 28.8028 11.9063L23.9041 7.00754C23.5525 6.6558 23.0756 6.45813 22.5783 6.45801C22.0809 6.45789 21.6039 6.65534 21.2522 7.00692C20.9004 7.35849 20.7028 7.8354 20.7027 8.33272C20.7025 8.83005 20.9 9.30705 21.2516 9.65879L24.7266 13.135L1.91406 13.1638C1.41678 13.1638 0.939868 13.3613 0.588237 13.713C0.236607 14.0646 0.0390625 14.5415 0.0390625 15.0388C0.0390625 15.5361 0.236607 16.013 0.588237 16.3646C0.939868 16.7162 1.41678 16.9138 1.91406 16.9138L24.7028 16.885L21.2516 20.3413C20.91 20.6949 20.721 21.1686 20.7253 21.6602C20.7296 22.1518 20.9268 22.6221 21.2744 22.9697C21.622 23.3173 22.0923 23.5145 22.5839 23.5188C23.0756 23.5231 23.5504 23.3341 23.9041 22.9925Z" fill="#0F193E" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_159_6330">
                                                    <rect width="30" height="30" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </button>
                                    <p className="mt-[12px] text-[14px] md:mt-[20px] font-general-sans md:text-[16px] leading-[22px] md:leading-[24px]">
                                        Utilizes machine learning to convert spoken words to text, adapting to accents and dialects for improved clarity.
                                    </p>
                                </div>
                            </li>
                            <li className="pl-[26px]">
                                <button className="text-[20px] md:text-[26] font-general-sans leading-[28px] md:leading-[34px] text-senary font-normal">
                                    Seamless Integrations
                                </button>
                            </li>
                            <li className="pl-[26px]">
                                <button className="text-[20px] md:text-[26] font-general-sans leading-[28px] md:leading-[34px] text-senary font-normal">
                                    Contextual Awareness
                                </button>
                            </li>
                            <li className="pl-[26px]">
                                <button className="text-[20px] md:text-[26] font-general-sans leading-[28px] md:leading-[34px] text-senary font-normal">
                                    Voice Synthesis
                                </button>
                            </li>
                            <li className="pl-[26px]">
                                <button className="text-[20px] md:text-[26] font-general-sans leading-[28px] md:leading-[34px] text-senary font-normal">
                                    Smart Call Routing
                                </button>
                            </li>
                            <li className="pl-[26px]">
                                <button className="text-[20px] md:text-[26] font-general-sans leading-[28px] md:leading-[34px] text-senary font-normal">
                                    Conversation Logs
                                </button>
                            </li>
                            <li className="pl-[26px]">
                                <button className="text-[20px] md:text-[26] font-general-sans leading-[28px] md:leading-[34px] text-senary font-normal">
                                    Real-Time Response
                                </button>
                            </li>
                            <li className="pl-[26px]">
                                <button className="text-[20px] md:text-[26] font-general-sans leading-[28px] md:leading-[34px] text-senary font-normal">
                                    Automated Post-Call Actions
                                </button>
                            </li>
                            <li className="pl-[26px]">
                                <button className="text-[20px] md:text-[26] font-general-sans leading-[28px] md:leading-[34px] text-senary font-normal">
                                    Enterprise Scheduling
                                </button>
                            </li>
                        </ul>

                        <div className="w-full md:max-w-[600px]">
                            <div className="w-full md:max-w-[600px] h-full md:max-h-[600px]">
                                <Image
                                    src="/images/home/features/tabs-images/Speech-Recognition-tab-1.png"
                                    width={600}
                                    height={600}
                                    alt="tab image"
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

export default Features