"use client";
import Image from "next/image";
import { useState } from "react";


const tabsData = [
    {
        id: "verticals",
        title: "Instant Engagement Across Verticals",
        heading: "Instant Engagement\nAcross Verticals",
        description: [
            "Customers can quickly get answers to their queries related to mortgages, insurance policies, banking services, vehicle purchases, real estate listings and much more. Our AI Virtual Agent doesn't just provide information but also facilitates smooth transitions to live agents for personalized assistance.",
            "Moreover, it can schedule appointments on behalf of loan officers, insurance agents, bankers, car dealers, or realtors. The system ensures a seamless customer experience by sending SMS confirmations and follow-up messages, enhancing convenience throughout the entire process.",
        ],
        image: {
            desktop: "/images/home/instant-engagement/professional-team.png",
            mobile: "/images/home/instant-engagement/professional-team-mobile.png",
        },
    },
    {
        id: "banking",
        title: "Community Banks & Credit Unions",
        heading: "Community Banks &\nCredit Unions",
        description: [
            "Community banks and credit unions can boost customer engagement for any banking product or service through our AILANA (AI Virtual Agent). Whether customers have inquiries about accounts, transactions, or financial services, the AILANA (AI Virtual Agent) is equipped to provide comprehensive responses.",
            "Similar to the mortgage scenario, it can seamlessly transfer calls to live agents or schedule appointments on behalf of the financial institution. This streamlined approach enhances customer service and ensures a smooth banking experience.",
        ],
        image: {
            desktop: "/images/home/instant-engagement/professional-team-2.png",
            mobile: "/images/home/instant-engagement/professional-team-2.png",
        },
    },
    {
        id: "insurance",
        title: "Streamlining Insurance Services",
        heading: "Streamlining Insurance\nServices",
        description: [
            "Insurance companies can leverage the power of AILANA (AI Virtual Agent) to replicate the same seamless services provided in mortgage and banking scenarios. ",
            " Customers can receive instant answers to insurance-related inquiries, and the AILANA (AI Virtual Agent) can efficiently transfer calls to live agents or schedule appointments, contributing to improved customer engagement and operational efficiency.",
        ],
        image: {
            desktop: "/images/home/instant-engagement/professional-team-3.png",
            mobile: "/images/home/instant-engagement/professional-team-3.png",
        },
    },
    {
        id: "realtors",
        title: "Dynamic Realtor Communications",
        heading: "Dynamic Realtor\nCommunications",
        description: [
            "Realtors can utilize our AILANA (AI Virtual Agent) to extend services and dynamic communications with potential and existing clients. Whether clients have questions about properties, need information about the real estate market, or want to schedule appointments, the AILANA (AI Virtual Agent) provides a responsive and personalized experience.",
            "This innovative approach enhances customer engagement for real estate professionals. ",
        ],
        image: {
            desktop: "/images/home/instant-engagement/professional-team-4.png",
            mobile: "/images/home/instant-engagement/professional-team-4.png",
        },
    },
];

const InstantEngagement = () => {
    const [activeTab, setActiveTab] = useState("verticals");

    const currentTab = tabsData.find((tab) => tab.id === activeTab) || tabsData[0]


    return (
        <section className="max-w-[1440px] mx-auto relative pb-[60px] md:pb-[80px] lg:pb-[120px] px-[16px] md:px-[24px] xl:px-[0px] bg-background">
            <h1 className="w-full md:max-w-[976px] md:text-center mx-auto text-[28px]  md:text-[44px] font-polySans leading-[36px] md:leading-[52px] font-bold tracing-[0.42px] md:tracking-[0.66px] mb-[20px] md:mb-[30px]">
                Instant Engagement Across Industries
            </h1>
            <p className="w-full md:max-w-[814px] mx-auto text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] font-general-sans mb-[30px] md:mb-[40px] md:text-center">
                Experience seamless customer engagement across various industries like mortgage, insurance, banking, auto sales, and real estate with our voice-based AI Virtual Agent.
            </p>


            {/* // tabs  */}

            <div className="max-w-[1240px] mx-auto">

                {/* tabs buttons  */}
                <div className="overflow-x-auto overflow-y-hidden  rounded-[20px]">
                    <div className="bg-[rgba(70,111,255,0.05)] h-[80px] md:h-[90px] rounded-[20px] p-[6px] md:p-[10px] flex items-center gap-[35px]  min-w-[1240px]">

                        {tabsData?.map((tab) => (
                            <button
                                key={tab?.id}
                                onClick={() => setActiveTab(tab?.id)}
                                className={`w-[163px] md:w-full text-[14px] md:text-[16px] md:leading-[24px] leading-[22px] font-general-sans text-start md:text-center flex justify-center items-center ${activeTab === tab?.id
                                    ? "md:min-w-[328px] h-[68px] md:h-[70px] p-[12px] md:p-[21px] rounded-[14px] md:rounded-[10px] shadow-[0px_0px_14px_0px_rgba(15,25,62,0.08)] bg-white font-semibold"
                                    : ""
                                    }`}
                            >
                                {tab?.title}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mt-[20px] md:mt-[40px] flex flex-col lg:flex-row gap-[20px] md:gap-[65px] relative">

                    <div className="w-full lg:max-w-[565px]">
                        <div className="w-full lg:max-w-[565px] h-full lg:max-h-[502px]  hidden sm:flex">
                            <Image
                                src={currentTab?.image?.desktop || ""}
                                width={565}
                                height={502}
                                alt="team image"
                                className="w-full h-full rounded-[50px]"
                            />
                        </div>

                        <div className="w-full h-full flex sm:hidden">
                            <Image
                                src={currentTab?.image?.mobile || ""}
                                width={565}
                                height={502}
                                alt="team image"
                                className="w-full h-full rounded-[20px]"
                            />
                        </div>
                    </div>


                    <div className="w-full lg:max-w-[610px]">
                        <h1 className="text-[28px] md:text-[38px] font-polySans font-bold leading-[36px] md:leading-[46px] tracking-[0.42px] md:tracking-[0.57px]">
                            {currentTab?.heading?.split("\n")?.map((line, i) => (
                                <span key={i}>
                                    {line}
                                    {i === 0 && <br />}
                                </span>
                            ))}
                        </h1>

                        {currentTab?.description?.map((paragraph, index) => (
                            <p
                                key={index}
                                className={`${index === 0 ? "mt-[20px] md:mt-[40px]" : "mt-[20px] md:mt-[24px]"} text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] font-general-sans text-[rgba(15,25,62,0.80)]`}
                            >
                                {paragraph}
                            </p>
                        ))}


                        <div className="lg:absolute lg:bottom-0">
                            <button className="mt-[20px] md:mt-[95px] w-[185px] md:w-[197px] inline-flex items-center gap-[8px] h-[44px] md:h-[58px] rounded-[100px] bg-quaternary">
                                <div className="w-[36px] md:w-[48px] h-[36px] md:h-[48px] rounded-full bg-white p-[5px] m-[4px] flex justify-center items-center">
                                    <span className="hidden md:flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <g clipPath="url(#clip0_2061_48)">
                                                <path d="M18.0278 2.7241H17.564V2.2603C17.564 1.49132 16.9407 0.868896 16.1726 0.868896C15.4046 0.868896 14.7812 1.49132 14.7812 2.2603V2.7241H9.21561V2.2603C9.21561 1.49132 8.59226 0.868896 7.8242 0.868896C7.05615 0.868896 6.4328 1.49132 6.4328 2.2603V2.7241H5.969C3.15651 2.7241 0.867188 5.0125 0.867188 7.82591V18.0295C0.867188 20.843 3.15651 23.1313 5.969 23.1313H18.0278C20.8403 23.1313 23.1296 20.843 23.1296 18.0295V7.82591C23.1296 5.0125 20.8403 2.7241 18.0278 2.7241ZM18.0278 20.3485H5.969C4.68984 20.3485 3.64999 19.3078 3.64999 18.0295V9.21731H20.3468V18.0295C20.3468 19.3078 19.307 20.3485 18.0278 20.3485ZM10.1432 12.4639V14.3191C10.1432 15.0872 9.51986 15.7105 8.7518 15.7105H6.8966C6.12855 15.7105 5.5052 15.0872 5.5052 14.3191V12.4639C5.5052 11.6959 6.12855 11.0725 6.8966 11.0725H8.7518C9.51986 11.0725 10.1432 11.6959 10.1432 12.4639Z" fill="#634AB0" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2061_48">
                                                    <rect width="22.2624" height="22.2624" fill="white" transform="translate(0.867188 0.868896)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                    <span className="flex md:hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <g clipPath="url(#clip0_2061_638)">
                                                <path d="M13.5228 2.04301H13.175V1.69516C13.175 1.11843 12.7075 0.651611 12.1314 0.651611C11.5554 0.651611 11.0879 1.11843 11.0879 1.69516V2.04301H6.91366V1.69516C6.91366 1.11843 6.44615 0.651611 5.87011 0.651611C5.29406 0.651611 4.82655 1.11843 4.82655 1.69516V2.04301H4.4787C2.36934 2.04301 0.652344 3.75931 0.652344 5.86937V13.5221C0.652344 15.6322 2.36934 17.3484 4.4787 17.3484H13.5228C15.6322 17.3484 17.3492 15.6322 17.3492 13.5221V5.86937C17.3492 3.75931 15.6322 2.04301 13.5228 2.04301ZM13.5228 15.2613H4.4787C3.51933 15.2613 2.73945 14.4808 2.73945 13.5221V6.91293H15.2621V13.5221C15.2621 14.4808 14.4822 15.2613 13.5228 15.2613ZM7.60936 9.34788V10.7393C7.60936 11.3153 7.14185 11.7828 6.56581 11.7828H5.1744C4.59836 11.7828 4.13085 11.3153 4.13085 10.7393V9.34788C4.13085 8.77184 4.59836 8.30433 5.1744 8.30433H6.56581C7.14185 8.30433 7.60936 8.77184 7.60936 9.34788Z" fill="#634AB0" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2061_638">
                                                    <rect width="16.6968" height="16.6968" fill="white" transform="translate(0.652344 0.651611)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                </div>
                                <span className="text-[14px] font-general-sans font-medium leading-[22px] text-white">
                                    Book your meeting
                                </span>
                            </button>
                        </div>
                    </div>


                </div>

            </div>

        </section>
    )
}

export default InstantEngagement;