import Image from "next/image"

const HowItWorks = () => {
    return (
        <section className="max-w-[1440px] mx-auto relative px-[16px] md:px-[24px] xl:px-[0px] bg-background">

            <div className="flex justify-center">
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
                    <p className="text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] font-semibold  font-general-sans">
                        How it works?
                    </p>
                </div>
            </div>




            <h1 className="max-w-[976px] mx-auto mt-[14px] md:mt-[30px] text-[28px] md:text-[44px] font-polySans font-bold leading-[36px] md:leading-[52px] tracking-[0.42px] md:tracking-[0.66px] text-senary text-left md:text-center">
                Seamless <br className="flex sm:hidden" />
                Integration for <br /> Enhanced Customer <br className="flex sm:hidden" /> Engagement
            </h1>


            <div className="max-w-[1240px] mx-auto  pt-[40px] md:pt-[60px]">

                <div className="flex flex-col md:flex-row md:justify-between gap-[30px] md:gap-[63px] border-b border-[rgba(15,25,62,0.20)] pb-[30] md:pb-[40px] mb-[30px] md:mb-[40px]">

                    <div className="flex gap-[20px] md:gap-[30px]">
                        <div className="w-[48px] md:w-[100px] h-[48px] md:h-[100px]">
                            <Image
                                src="/images/home/how-it-works/01.png"
                                width={100}
                                height={100}
                                alt="how it works steps"
                                className="w-full h-full rounded-[10px] md:rounded-[20px]"
                            />
                        </div>

                        <h2 className="text-[18px] md:mt-[9px] md:text-[26px] font-polySans font-bold leading-[26px] md:leading-[34px] tracking-[0.27px] md:tracking-[0.52px] text-senary">
                            Onboarding <br />
                            New Business Customers
                        </h2>
                    </div>

                    <div className="w-full md:max-w-[610px]">
                        <p className="text-[rgba(15,25,62,0.80)] md:mt-[9px] font-general-sans text-[14px] md:text-[16px] leading-[22px] md:leading-[24px]">
                            <strong className="font-semibold">User Mapping:</strong> A new business customer can be onboarded quickly using the customer&apos;s existing infrastructure. The setup of AILANA (AI Virtual Agent) typically takes one day, which involves mapping the customer&apos;s employee contact information, including telephone numbers, extensions, departments, and e-mail addresses
                        </p>
                    </div>

                </div>

                <div className="flex flex-col md:flex-row md:justify-between gap-[30px] md:gap-[63px] border-b border-[rgba(15,25,62,0.20)] pb-[30] md:pb-[40px] mb-[30px] md:mb-[40px]">

                    <div className="flex gap-[20px] md:gap-[30px] md:mt-[10px]">
                        <div className="shadow-[4px_-4px_0px_0px_#C1C5FF] bg-secondary w-[48px] md:w-[100px] h-[48px] md:h-[100px] rounded-[10px] md:rounded-[20px]">
                            <Image
                                src="/images/home/how-it-works/02.png"
                                width={100}
                                height={100}
                                alt="how it works steps"
                                className="w-full h-full rounded-[10px] md:rounded-[20px]"
                            />
                        </div>

                        <h2 className="text-[18px] md:mt-[18px] md:text-[26px] font-polySans font-bold leading-[26px] md:leading-[34px] tracking-[0.27px] md:tracking-[0.52px] text-senary">
                            Optional <br />
                            Advanced Functionalities
                        </h2>
                    </div>

                    <div className="w-full md:max-w-[610px]">
                        <p className="text-[rgba(15,25,62,0.80)] md:mt-[2px] font-general-sans text-[14px] md:text-[16px] leading-[22px] md:leading-[24px]">
                            <strong className="font-semibold">Calendar Scheduling and CRM Integration:</strong> For businesses seeking advanced features, an implementation process is initiated to seamlessly integrate calendar scheduling and CRM functionalities. This ensures a tailored, comprehensive solution that aligns with the specific needs of the business, maximizing the benefits of the AI Virtual Agent.
                        </p>
                    </div>

                </div>

                <div className="flex flex-col md:flex-row md:justify-between gap-[30px] md:gap-[63px]">

                    <div className="flex gap-[20px] md:gap-[30px] items-center">
                        <div className=" w-[48px] md:w-[100px] h-[48px] md:h-[100px]">
                            <Image
                                src="/images/home/how-it-works/03.png"
                                width={100}
                                height={100}
                                alt="how it works steps"
                                className="w-full h-full rounded-[10px] md:rounded-[20px]"
                            />
                        </div>

                        <h2 className="text-[18px] md:mt-[9px] md:text-[26px] font-polySans font-bold leading-[26px] md:leading-[34px] tracking-[0.27px] md:tracking-[0.52px] text-senary">
                            Aggressive Promotion<br />
                            of AILANA’s Phone Number
                        </h2>
                    </div>

                    <div className="w-full md:max-w-[610px]">
                        <p className="text-[rgba(15,25,62,0.80)] font-general-sans text-[14px] md:text-[16px] leading-[22px] md:leading-[24px]">
                            <strong className="font-semibold">Strategic Display: </strong> The company&apos;s website should prominently feature the AILANA (AI Virtual Agent) phone number. By making this strategic move, customers will be able to easily access and call the number, initiating seamless interactions with AILANA (AI Virtual Agent).
                        </p>
                    </div>

                </div>

            </div>



        </section>
    )
}

export default HowItWorks