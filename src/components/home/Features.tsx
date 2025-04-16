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
                                <div className="w-[4px] md:w-[6px] h-[106px] bg-senary md:h-[114px]">

                                </div>
                                <div>
                                    <button className="text-[20px] md:text-[26] font-general-sans leading-[28px] md:leading-[34px] text-senary font-semibold">
                                        Speech Recognition
                                    </button>
                                    <p className="mt-[12px] text-[14px] md:mt-[20px] font-general-sans md:text-[16px] leading-[22px] md:leading-[24px]">
                                        Utilizes machine learning to convert spoken words to text, adapting to accents and dialects for improved clarity.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <button className="text-[20px] md:text-[26] font-general-sans leading-[28px] md:leading-[34px] text-senary font-normal">
                                    Seamless Integrations
                                </button>
                            </li>
                            <li>
                                <button className="text-[20px] md:text-[26] font-general-sans leading-[28px] md:leading-[34px] text-senary font-normal">
                                    Contextual Awareness
                                </button>
                            </li>
                            <li>
                                <button className="text-[20px] md:text-[26] font-general-sans leading-[28px] md:leading-[34px] text-senary font-normal">
                                    Voice Synthesis
                                </button>
                            </li>
                            <li>
                                <button className="text-[20px] md:text-[26] font-general-sans leading-[28px] md:leading-[34px] text-senary font-normal">
                                    Smart Call Routing
                                </button>
                            </li>
                            <li>
                                <button className="text-[20px] md:text-[26] font-general-sans leading-[28px] md:leading-[34px] text-senary font-normal">
                                    Conversation Logs
                                </button>
                            </li>
                            <li>
                                <button className="text-[20px] md:text-[26] font-general-sans leading-[28px] md:leading-[34px] text-senary font-normal">
                                    Real-Time Response
                                </button>
                            </li>
                            <li>
                                <button className="text-[20px] md:text-[26] font-general-sans leading-[28px] md:leading-[34px] text-senary font-normal">
                                    Automated Post-Call Actions
                                </button>
                            </li>
                            <li>
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