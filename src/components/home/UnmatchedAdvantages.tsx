import Image from "next/image";


export default function UnmatchedAdvantages() {
    return (
        <section className="max-w-[1440px] mx-auto relative pb-[60px] md:pb-[80px] lg:pb-[120px]  ">
            <div className="w-full h-[843px] md:h-[800px] lg:h-[900px] relative z-0">
                <Image
                    src="/images/home/unmatched-advantages/unmatched-advantages-bg.png"
                    width={1440}
                    height={900}
                    alt="aiva top hero bg"
                    className="w-full h-full  rounded-[60px] hidden sm:flex"
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
                        Unmatched Advantages: <br className="hidden md:flex" />
                        Why Our Solution Stands Out
                    </h1>


                    {/* // slider  */}

                    <div className="w-full overflow-x-auto  overflow-hidden">
                        <div className="flex items-center gap-[13px] md:gap-[20px] w-full">


                            {/* // card 1  */}
                            <div className="w-[300px] md:w-[505px] h-[300px] md:h-[373px] bg-background rounded-[30px] md:rounded-[50px] p-[20px] md:p-[30px]">

                                <div className="flex justify-between items-center mb-[30px] md:mb-[65px]">
                                    <h1 className="text-senary text-[18px] md:text-[26px] font-bold font-polySans leading-[26px] md:leading-[34px] tracking-[0.27px] md:tracking-[0.52px]">
                                        Seamless <br /> Integration
                                    </h1>
                                    <div className="w-[40px] md:w-[70px] h-[40px] md:h-[70px]">
                                        <Image
                                            src="/images/home/unmatched-advantages/slider-icons/slider-icon-1.png"
                                            width={100}
                                            height={100}
                                            alt="icon"
                                            className="w-full h-full rounded-[8.059px] md:rounded-[20px] shadow-[2.418px%20-1.612px%200px%200px%20#C1C5FF] md:shadow-[4px_-4px_0px_0px_#C1C5FF]"
                                        />
                                    </div>
                                </div>

                                <p className="text-[rgba(15,25,62,0.80))] ms:text-[16px] font-general-sans md:leading-[24px]">
                                    AILANA seamlessly integrates with existing PBX and CRM platforms, ensuring a smooth transition and compatibility for businesses of all sizes.
                                </p>

                            </div>


                            {/* // card 2  */}
                            <div className="w-[300px] md:w-[505px] h-[300px] md:h-[373px] bg-background rounded-[30px] md:rounded-[50px] p-[20px] md:p-[30px]">

                                <div className="flex justify-between items-center mb-[30px] md:mb-[65px]">
                                    <h1 className="text-senary text-[18px] md:text-[26px] font-bold font-polySans leading-[26px] md:leading-[34px] tracking-[0.27px] md:tracking-[0.52px]">
                                        Enhanced <br />
                                        Customer <br />
                                        Interactions
                                    </h1>
                                    <div className="w-[40px] md:w-[70px] h-[40px] md:h-[70px]">
                                        <Image
                                            src="/images/home/unmatched-advantages/slider-icons/slider-icon-2.png"
                                            width={100}
                                            height={100}
                                            alt="icon"
                                            className="w-full h-full rounded-[8.059px] md:rounded-[20px] shadow-[2.418px%20-1.612px%200px%200px%20#C1C5FF] md:shadow-[4px_-4px_0px_0px_#C1C5FF]"
                                        />
                                    </div>
                                </div>

                                <p className="text-[rgba(15,25,62,0.80))] ms:text-[16px] font-general-sans md:leading-[24px]">
                                    Elevate your customer service with an intelligent Agent designed to understand nuances and deliver lifelike interactions, setting your business apart in customer experience.
                                </p>

                            </div>


                            {/* // card 3  */}
                            <div className="w-[300px] md:w-[505px] h-[300px] md:h-[373px] bg-background rounded-[30px] md:rounded-[50px] p-[20px] md:p-[30px]">

                                <div className="flex justify-between items-center mb-[30px] md:mb-[65px]">
                                    <h1 className="text-senary text-[18px] md:text-[26px] font-bold font-polySans leading-[26px] md:leading-[34px] tracking-[0.27px] md:tracking-[0.52px]">
                                        Cost-<br />
                                        Efficiency
                                    </h1>
                                    <div className="w-[40px] md:w-[70px] h-[40px] md:h-[70px]">
                                        <Image
                                            src="/images/home/unmatched-advantages/slider-icons/slider-icon-3.png"
                                            width={100}
                                            height={100}
                                            alt="icon"
                                            className="w-full h-full rounded-[8.059px] md:rounded-[20px] shadow-[2.418px%20-1.612px%200px%200px%20#C1C5FF] md:shadow-[4px_-4px_0px_0px_#C1C5FF]"
                                        />
                                    </div>
                                </div>

                                <p className="text-[rgba(15,25,62,0.80))] ms:text-[16px] font-general-sans md:leading-[24px]">
                                    Experience substantial cost savings as our solution not only optimizes customer service but also enhances revenue streams, making it a powerful and economical choice for businesses.
                                </p>

                            </div>

                            {/* // card 4  */}
                            <div className="w-[300px] md:w-[505px] h-[300px] md:h-[373px] bg-background rounded-[30px] md:rounded-[50px] p-[20px] md:p-[30px]">

                                <div className="flex justify-between items-center mb-[30px] md:mb-[65px]">
                                    <h1 className="text-senary text-[18px] md:text-[26px] font-bold font-polySans leading-[26px] md:leading-[34px] tracking-[0.27px] md:tracking-[0.52px]">
                                        Strategic<br />
                                        Insights
                                    </h1>
                                    <div className="w-[40px] md:w-[70px] h-[40px] md:h-[70px]">
                                        <Image
                                            src="/images/home/unmatched-advantages/slider-icons/slider-icon-4.png"
                                            width={100}
                                            height={100}
                                            alt="icon"
                                            className="w-full h-full rounded-[8.059px] md:rounded-[20px] shadow-[2.418px%20-1.612px%200px%200px%20#C1C5FF] md:shadow-[4px_-4px_0px_0px_#C1C5FF]"
                                        />
                                    </div>
                                </div>

                                <p className="text-[rgba(15,25,62,0.80))] ms:text-[16px] font-general-sans md:leading-[24px]">
                                    Gain a competitive edge by integrating conversational logs into your analytics ecosystem, providing invaluable customer insights and facilitating data-driven decision-making.
                                </p>

                            </div>


                        </div>
                    </div>




                </div>
            </div>

        </section>
    )
}
