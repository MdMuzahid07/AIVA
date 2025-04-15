"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <header className="max-w-[1440px] mx-auto w-full mt-[20px] px-[16px] md:px-[24px] lg:px-[0px]">
            <nav className="max-w-[1240px] mx-auto flex items-center justify-between  pl-[22px] pr-[8px] w-full h-[60px] rounded-[50px] bg-[rgba(255,255,255,0.60)] backdrop-blur-[3px] relative">
                <Link href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="86" height="14" viewBox="0 0 86 14" fill="none">
                        <path d="M81.3363 13.2934L80.2363 10.5912H73.7162L72.6162 13.2934H68.6562L74.2562 0.777832H79.6963L85.2962 13.2934H81.3363ZM79.2363 8.17339L77.6562 4.28005C77.4296 3.69931 77.3163 3.21931 77.3163 2.84005C77.3163 2.62672 77.2029 2.52006 76.9762 2.52006C76.7629 2.52006 76.6562 2.62672 76.6562 2.84005C76.6562 3.06524 76.6229 3.2845 76.5563 3.49783C76.5029 3.71117 76.4162 3.97191 76.2962 4.28005L74.7162 8.17339H79.2363Z" fill="black" />
                        <path d="M58.5881 0.777832L64.1881 10.8045C64.2681 10.9467 64.3681 11.0178 64.4881 11.0178C64.6615 11.0178 64.7481 10.9467 64.7481 10.8045C64.7481 10.7215 64.7148 10.6089 64.6481 10.4667C64.5015 10.1941 64.3881 9.95117 64.3081 9.73783C64.2281 9.51265 64.1881 9.28746 64.1881 9.06228V0.777832H67.8681V13.2934H62.1081L56.5081 3.26672C56.4281 3.1245 56.3281 3.05339 56.2081 3.05339C56.0348 3.05339 55.9481 3.1245 55.9481 3.26672C55.9481 3.34968 55.9815 3.46228 56.0481 3.6045C56.1948 3.87709 56.3081 4.12598 56.3881 4.35117C56.4681 4.5645 56.5081 4.78376 56.5081 5.00894V13.2934H52.8281V0.777832H58.5881Z" fill="black" />
                        <path d="M48.2308 13.2934L47.1308 10.5912H40.6108L39.5108 13.2934H35.5508L41.1508 0.777832H46.5908L52.1908 13.2934H48.2308ZM46.1308 8.17339L44.5508 4.28005C44.3241 3.69931 44.2108 3.21931 44.2108 2.84005C44.2108 2.62672 44.0974 2.52006 43.8708 2.52006C43.6574 2.52006 43.5508 2.62672 43.5508 2.84005C43.5508 3.06524 43.5174 3.2845 43.4508 3.49783C43.3974 3.71117 43.3108 3.97191 43.1908 4.28005L41.6108 8.17339H46.1308Z" fill="black" />
                        <path d="M26.7425 0.777832V10.5912H34.9025V13.2934H23.0625V0.777832H26.7425Z" fill="black" />
                        <path d="M17.4531 13.2934V0.777832H21.1331V13.2934H17.4531Z" fill="black" />
                        <path d="M12.8597 13.2934L11.7597 10.5912H5.23969L4.13969 13.2934H0.179688L5.77969 0.777832H11.2197L16.8197 13.2934H12.8597ZM10.7597 8.17339L9.17969 4.28005C8.95302 3.69931 8.83969 3.21931 8.83969 2.84005C8.83969 2.62672 8.72635 2.52006 8.49969 2.52006C8.28635 2.52006 8.17969 2.62672 8.17969 2.84005C8.17969 3.06524 8.14635 3.2845 8.07969 3.49783C8.02635 3.71117 7.93969 3.97191 7.81969 4.28005L6.23969 8.17339H10.7597Z" fill="black" />
                    </svg>
                </Link>
                <div className=" hidden md:flex items-center lg:gap-[166px]">
                    <ul className="hidden md:flex items-center gap-[10px] lg:gap-[30px]  ">
                        <li className="relative">
                            <Link href="" className="text-[14px] font-medium font-general-sans leading-[22px] w-fit h-[22px] p-[4px] flex items-center text-[rgba(15,25,62,0.80)] ">
                                The AILANA
                            </Link>

                            <div className="absolute bottom-0 w-full">
                                <span className="mt-[2px] flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="62" height="2" viewBox="0 0 62 2" fill="none">
                                        <path d="M1 1H61" stroke="url(#paint0_linear_2018_612)" stroke-linecap="round" />
                                        <defs>
                                            <linearGradient id="paint0_linear_2018_612" x1="-13.8847" y1="-51.4991" x2="72.8509" y2="-46.6987" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#858BEC" />
                                                <stop offset="0.938229" stop-color="#7BD7FF" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </span>
                            </div>
                        </li>
                        <li className="text-[14px] font-medium font-general-sans leading-[22px] w-fit h-[22px] p-[4px] flex items-center text-[rgba(15,25,62,0.80)]">
                            <Link href="/">
                                About
                            </Link>
                        </li>
                        <li className="text-[14px] font-medium font-general-sans leading-[22px] w-fit h-[22px] p-[4px] flex items-center text-[rgba(15,25,62,0.80)]">
                            <Link href="/">
                                Features
                            </Link>
                        </li>
                        <li className="text-[14px] font-medium font-general-sans leading-[22px] w-fit h-[22px] p-[4px] flex items-center text-[rgba(15,25,62,0.80)]">
                            <Link href="/">
                                Use Cases
                            </Link>
                        </li>
                        <li className="text-[14px] font-medium font-general-sans leading-[22px] w-fit h-[22px] p-[4px] flex items-center text-[rgba(15,25,62,0.80)]">
                            <Link href="/">
                                How it Works?
                            </Link>
                        </li>
                    </ul>
                    <button className="w-[185px] inline-flex items-center gap-[8px] h-[44px] rounded-[100px] bg-quaternary">
                        <span className="w-[36px] h-[36px] rounded-full bg-white p-[10px] m-[4px] flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <g clip-path="url(#clip0_2018_633)">
                                    <path d="M13.5228 2.04277H13.175V1.69492C13.175 1.11818 12.7075 0.651367 12.1314 0.651367C11.5554 0.651367 11.0879 1.11818 11.0879 1.69492V2.04277H6.91366V1.69492C6.91366 1.11818 6.44615 0.651367 5.87011 0.651367C5.29406 0.651367 4.82655 1.11818 4.82655 1.69492V2.04277H4.4787C2.36934 2.04277 0.652344 3.75907 0.652344 5.86913V13.5218C0.652344 15.6319 2.36934 17.3482 4.4787 17.3482H13.5228C15.6322 17.3482 17.3492 15.6319 17.3492 13.5218V5.86913C17.3492 3.75907 15.6322 2.04277 13.5228 2.04277ZM13.5228 15.2611H4.4787C3.51933 15.2611 2.73945 14.4805 2.73945 13.5218V6.91268H15.2621V13.5218C15.2621 14.4805 14.4822 15.2611 13.5228 15.2611ZM7.60936 9.34764V10.739C7.60936 11.3151 7.14185 11.7826 6.56581 11.7826H5.1744C4.59836 11.7826 4.13085 11.3151 4.13085 10.739V9.34764C4.13085 8.7716 4.59836 8.30408 5.1744 8.30408H6.56581C7.14185 8.30408 7.60936 8.7716 7.60936 9.34764Z" fill="#634AB0" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2018_633">
                                        <rect width="16.6968" height="16.6968" fill="white" transform="translate(0.652344 0.651367)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>
                        <span className="text-[14px] font-general-sans font-medium leading-[22px] text-white">
                            Book your meeting

                        </span>
                    </button>
                </div>

                <button onClick={() => setShowNav(!showNav)} className="flex md:hidden cursor-pointer w-[44px] items-center p-[13px] h-[44px] rounded-full bg-senary">
                    {
                        showNav ? <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M16.8048 1.19519C16.6798 1.07021 16.5102 1 16.3335 1C16.1567 1 15.9871 1.07021 15.8621 1.19519L9 8.05732L2.13788 1.19519C2.01286 1.07021 1.84332 1 1.66654 1C1.48976 1 1.32022 1.07021 1.19519 1.19519C1.07021 1.32022 1 1.48976 1 1.66654C1 1.84332 1.07021 2.01286 1.19519 2.13788L8.05732 9L1.19519 15.8621C1.07021 15.9871 1 16.1567 1 16.3335C1 16.5102 1.07021 16.6798 1.19519 16.8048C1.32022 16.9298 1.48976 17 1.66654 17C1.84332 17 2.01286 16.9298 2.13788 16.8048L9 9.94268L15.8621 16.8048C15.9871 16.9298 16.1567 17 16.3335 17C16.5102 17 16.6798 16.9298 16.8048 16.8048C16.9298 16.6798 17 16.5102 17 16.3335C17 16.1567 16.9298 15.9871 16.8048 15.8621L9.94268 9L16.8048 2.13788C16.9298 2.01286 17 1.84332 17 1.66654C17 1.48976 16.9298 1.32022 16.8048 1.19519Z" fill="white" />
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M15.5 14H2.75C2.3375 14 2 14.3375 2 14.75C2 15.1625 2.3375 15.5 2.75 15.5H15.5C15.9125 15.5 16.25 15.1625 16.25 14.75C16.25 14.3375 15.9125 14 15.5 14ZM15.5 8H2.75C2.3375 8 2 8.3375 2 8.75C2 9.1625 2.3375 9.5 2.75 9.5H15.5C15.9125 9.5 16.25 9.1625 16.25 8.75C16.25 8.3375 15.9125 8 15.5 8Z" fill="white" />
                            <path d="M2.73684 2C2.33158 2 2 2.3375 2 2.75C2 3.1625 2.33158 3.5 2.73684 3.5H15.2632C15.6684 3.5 16 3.1625 16 2.75C16 2.3375 15.6684 2 15.2632 2H2.73684Z" fill="white" />
                        </svg>
                    }
                </button>


                {
                    showNav && (
                        <div className="flex md:hidden w-[343px] h-[386px] absolute right-0 top-[60px] bg-white rounded-[30px] backdrop-blur-[3px] p-[20px]">
                            <ul className="space-y-[20px]">
                                <li className="relative w-fit h-[38px] p-[4px]">
                                    <Link href="" className="text-[20px] leading-[28px] font-general-sans text-senary">
                                        The AILANA
                                    </Link>

                                    <div className="absolute bottom-0 w-full">
                                        <span className="flex justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="84" height="2" viewBox="0 0 84 2" fill="none">
                                                <path d="M1 1H83" stroke="url(#paint0_linear_581_8165)" stroke-linecap="round" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_581_8165" x1="-19.3424" y1="-51.4991" x2="98.883" y2="-42.5567" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#858BEC" />
                                                        <stop offset="0.938229" stop-color="#7BD7FF" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </span>
                                    </div>
                                </li>
                                <li className="h-[36px] p-[4px]">
                                    <Link href="#" className="text-[20px] leading-[28px] font-general-sans text-senary">
                                        About
                                    </Link>
                                </li>
                                <li className="h-[36px] p-[4px]">
                                    <Link href="#" className="text-[20px] leading-[28px] font-general-sans text-senary">
                                        Features
                                    </Link>
                                </li>
                                <li className="h-[36px] p-[4px]">
                                    <Link href="#" className="text-[20px] leading-[28px] font-general-sans text-senary">
                                        Use Cases
                                    </Link>
                                </li>
                                <li className="h-[36px] p-[4px]">
                                    <Link href="#" className="text-[20px] leading-[28px] font-general-sans text-senary">
                                        How it Works?
                                    </Link>
                                </li>
                                <li>
                                    <button className="w-[185px] mt-[16px] inline-flex items-center gap-[8px] h-[44px] rounded-[100px] bg-quaternary">
                                        <span className="w-[36px] h-[36px] rounded-full bg-white p-[10px] m-[4px] flex justify-center items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                <g clip-path="url(#clip0_2018_633)">
                                                    <path d="M13.5228 2.04277H13.175V1.69492C13.175 1.11818 12.7075 0.651367 12.1314 0.651367C11.5554 0.651367 11.0879 1.11818 11.0879 1.69492V2.04277H6.91366V1.69492C6.91366 1.11818 6.44615 0.651367 5.87011 0.651367C5.29406 0.651367 4.82655 1.11818 4.82655 1.69492V2.04277H4.4787C2.36934 2.04277 0.652344 3.75907 0.652344 5.86913V13.5218C0.652344 15.6319 2.36934 17.3482 4.4787 17.3482H13.5228C15.6322 17.3482 17.3492 15.6319 17.3492 13.5218V5.86913C17.3492 3.75907 15.6322 2.04277 13.5228 2.04277ZM13.5228 15.2611H4.4787C3.51933 15.2611 2.73945 14.4805 2.73945 13.5218V6.91268H15.2621V13.5218C15.2621 14.4805 14.4822 15.2611 13.5228 15.2611ZM7.60936 9.34764V10.739C7.60936 11.3151 7.14185 11.7826 6.56581 11.7826H5.1744C4.59836 11.7826 4.13085 11.3151 4.13085 10.739V9.34764C4.13085 8.7716 4.59836 8.30408 5.1744 8.30408H6.56581C7.14185 8.30408 7.60936 8.7716 7.60936 9.34764Z" fill="#634AB0" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_2018_633">
                                                        <rect width="16.6968" height="16.6968" fill="white" transform="translate(0.652344 0.651367)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                        <span className="text-[14px] font-general-sans font-medium leading-[22px] text-white">
                                            Book your meeting

                                        </span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )
                }
            </nav>
        </header>
    )
}

export default Navbar;