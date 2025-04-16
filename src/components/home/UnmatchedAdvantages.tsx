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




            <div className="absolute top-[140.26px] md:top-[216px] w-full">
                <div className="w-full z-10 pl-[16px] md:pl-[24px] xl:pl-[0px]">

                </div>
            </div>

        </section>
    )
}
