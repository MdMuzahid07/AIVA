import Image from "next/image"

const Footer = () => {
    return (
        <footer className="max-w-[1440px] mx-auto">

            {/* // footer top */}
            <div className="max-w-[1240px] mx-auto px-[16px] md:px-[24px] xl:px-[0px]">

            </div>
            {/* // footer bottom  */}
            <div className="mt-[30px] md:mt-[60px]">
                <div className="w-full h-full max-h-[337px] hidden md:flex">
                    <Image
                        src="/images/footer/footer-bottom.png"
                        width={1440}
                        height={337}
                        alt="footer bottom background image"
                        className="w-full h-full object-cover"
                    />
                </div>


                <div className="w-full h-full max-h-[260px] flex md:hidden">
                    <Image
                        src="/images/footer/footer-bottom-mobile.png"
                        width={700}
                        height={260}
                        alt="footer bottom background image"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </footer>
    )
}

export default Footer