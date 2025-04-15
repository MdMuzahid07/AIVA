import Image from "next/image";

const TopHeroSection = () => {
    return (
        <section className="max-w-[1440px] mx-auto bg-[rgba(133,139,236,0.10)] rounded-b-[58px]">
            <div className="w-full lg:h-[900px] -mt-[80px]">
                <Image
                    src="/images/home/top-hero-section/aiva-top-hero-bg.png"
                    width={1440}
                    height={900}
                    alt="aiva top hero bg"
                    className="w-full h-full rounded-b-[58px]"
                />
            </div>
        </section>
    )
}

export default TopHeroSection;