import Image from "next/image";

const TopHeroSection = () => {
    return (
        <section className="max-w-[1440px] mx-auto bg-[rgba(133,139,236,0.10)] sm:rounded-b-[58px] relative">
            <div className="w-full h-[843px] md:h-[800px] lg:h-[900px] -mt-[80px] relative z-0">
                <Image
                    src="/images/home/top-hero-section/aiva-top-hero-bg.png"
                    width={1440}
                    height={900}
                    alt="aiva top hero bg"
                    className="w-full h-full sm:rounded-b-[58px] hidden sm:flex"
                />

                <Image
                    src="/images/home/top-hero-section/aiva-top-hero-mobile.png"
                    width={1440}
                    height={900}
                    alt="aiva top hero bg"
                    className="w-full h-full sm:rounded-b-[58px] flex sm:hidden"
                />
            </div>

            <div className="absolute top-[140.26px] md:top-[216px] w-full">
                <div className="max-w-[1070px] w-full mx-auto z-10 px-[16px] md:px-[24px] xl:px-[0px]">

                    <h1 className="text-[28px] md:text-[40px] xl:text-[50px] font-polySans font-bold leading-[36px] tracking-[0.42px] md:tracking-[0.45px] lg:tracking-[0.75px] md:leading-[45px] lg:leading-[58px] text-center text-senary">
                        Empower Your Business with AILANA: Your 24/7 Multilingual Ally
                    </h1>

                    <p className="w-full max-w-[311px] sm:max-w-[500px] md:max-w-[760px] mx-auto text-center font-general-sans text-[14px] leading-[22px] md:text-[16px] md:leading-[24px] mt-[52px] md:mt-[30px]">
                        Meet AILANA, your AI Virtual Agent fluent in both English and Spanish, ready to be your all-star employee.
                        With AILANA by your side, customer needs are understood and issues swiftly resolved, boosting revenues and cutting costs without the need for sick days.
                    </p>



                    <div className="hidden md:flex justify-center mt-[79px] relative">
                        <div className="text-[12px] lg:text-[14px] font-general-sans font-semibold leading-[22px] w-[400px] lg:w-[460px] h-[38px] rounded-full bg-quinary flex justify-center items-center absolute p-[8px] top-0 -mt-[19px]">
                            Call AILANA now to experience next-gen customer engagement
                        </div>

                        <button className="w-[525px] lg:w-[626px] h-[130px] px-[43px] py-[38px] flex justify-center items-center text-[34px] lg:text-[44px] font-polySans font-bold leading-[45px] lg:leading-[52px] tracking-[0.66px] rounded-[170px] bg-white shadow-[0px_4px_13px_0px_rgba(70,111,255,0.15)]">
                            +1 888 502 5576
                        </button>
                    </div>


                    <div className="flex md:hidden justify-center mt-[40px] relative">
                        <div className="text-[12px] font-general-sans font-semibold leading-[20px] w-[120px] h-[36px] rounded-full bg-quinary flex justify-center items-center absolute p-[8px] top-0 -mt-[19px]">
                            Call AILANA now
                        </div>

                        <div className="mt-[18.16px]">
                            <button className="w-[240px] h-[240px] p-[11.16px] rounded-full">
                                <Image
                                    src="/images/home/top-hero-section/call-icon-mobile.png"
                                    width={240}
                                    height={240}
                                    alt="call button image"
                                    className="w-full h-full"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default TopHeroSection;