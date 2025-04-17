
const InstantEngagement = () => {
    return (
        <section className="max-w-[1440px] mx-auto relative pb-[60px] md:pb-[80px] lg:pb-[120px] px-[16px] md:px-[24px] xl:px-[0px] bg-background">
            <h1 className="max-w-[976px] mx-auto text-[28px]  md:text-[44px] font-polySans leading-[36px] md:leading-[52px] font-bold tracing-[0.42px] md:tracking-[0.66px] mb-[20px] md:mb-[30px]">
                Instant Engagement Across Industries
            </h1>
            <p className="max-w-[814px] mx-auto text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] font-general-sans mb-[30px] md:mb-[40px] text-center">
                Experience seamless customer engagement across various industries like mortgage, insurance, banking, auto sales, and real estate with our voice-based AI Virtual Agent.
            </p>


            {/* // tabs  */}

            <div className="max-w-[1240px] mx-auto">

                {/* tabs buttons  */}
                <div className="overflow-x-auto">
                    <div className="bg-[rgba(70,111,255,0.05)] h-[80px] md:h-[90px] rounded-[20px] p-[6px] md:p-[10px] flex items-center gap-[35px]">

                        <button className="w-[163px] md:w-[328px] h-[68px] md:h-[70px] p-[12px] md:p-[21px] rounded-[14px] md:rounded-[10px] shadow-[0px 0px 14px 0px rgba(15,25,62,0.08)] bg-white text-[14px] md:text-[16px] md:leading-[24px] font-semibold leading-[22px] font-general-sans flex justify-center items-center">
                            Instant Engagement Across Verticals
                        </button>

                        <button className=" text-[14px] md:text-[16px] md:leading-[24px] leading-[22px] font-general-sans flex justify-center items-center">
                            Community Banks & Credit Unions
                        </button>

                        <button className=" text-[14px] md:text-[16px] md:leading-[24px] leading-[22px] font-general-sans flex justify-center items-center">
                            Streamlining Insurance Services
                        </button>

                        <button className=" text-[14px] md:text-[16px] md:leading-[24px] leading-[22px] font-general-sans flex justify-center items-center">
                            Dynamic Realtor Communications
                        </button>

                    </div>
                </div>








            </div>

        </section>
    )
}

export default InstantEngagement