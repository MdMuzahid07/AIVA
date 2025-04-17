import Image from "next/image"

const Footer = () => {
    return (
        <footer className="max-w-[1440px] mx-auto">

            {/* // footer top */}
            <div className="max-w-[1240px] mx-auto px-[16px] md:px-[24px] xl:px-[0px]">
                <div className="flex flex-col md:flex-row items-center justify-between gap-[40px] md:gap-[0px]">
                    <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full md:w-[720px] gap-[40px] md:gap-[0px]">
                        <button className="w-[232px] bg-[rgba(15,25,62,0.05)] gap-[10px] md:gap-[16px] md:w-[271px] h-[42px] text-[14px] font-general-sans font-semibold leading-[24px] md:leading-[30px] md:text-[16px] md:h-[54px] rounded-full flex  items-center md:p-[10px]">

                            <div className="w-[24px] md:w-[30px] h-[24px] md:h-[30px] rounded-full border border-senary flex justify-center items-center">
                                <span className="flex md:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <g clip-path="url(#clip0_2110_533)">
                                            <path d="M10.7349 1.13336H3.26823C2.56125 1.13421 1.88346 1.41543 1.38355 1.91535C0.883633 2.41526 0.602409 3.09304 0.601563 3.80003L0.601562 10.2C0.602409 10.907 0.883633 11.5848 1.38355 12.0847C1.88346 12.5846 2.56125 12.8658 3.26823 12.8667H10.7349C11.4419 12.8658 12.1197 12.5846 12.6196 12.0847C13.1195 11.5848 13.4007 10.907 13.4016 10.2V3.80003C13.4007 3.09304 13.1195 2.41526 12.6196 1.91535C12.1197 1.41543 11.4419 1.13421 10.7349 1.13336ZM3.26823 2.20003H10.7349C11.0542 2.20066 11.3661 2.29684 11.6303 2.47619C11.8946 2.65554 12.0991 2.90987 12.2176 3.20643L8.1333 7.29123C7.83273 7.5906 7.42578 7.75868 7.00156 7.75868C6.57734 7.75868 6.1704 7.5906 5.86983 7.29123L1.78556 3.20643C1.90404 2.90987 2.10856 2.65554 2.37279 2.47619C2.63702 2.29684 2.94888 2.20066 3.26823 2.20003ZM10.7349 11.8H3.26823C2.84388 11.8 2.43692 11.6315 2.13686 11.3314C1.8368 11.0313 1.66823 10.6244 1.66823 10.2V4.60003L5.1157 8.04536C5.6163 8.5447 6.2945 8.82512 7.00156 8.82512C7.70863 8.82512 8.38683 8.5447 8.88743 8.04536L12.3349 4.60003V10.2C12.3349 10.6244 12.1663 11.0313 11.8663 11.3314C11.5662 11.6315 11.1592 11.8 10.7349 11.8Z" fill="#0F193E" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2110_533">
                                                <rect width="12.8" height="12.8" fill="white" transform="translate(0.601562 0.600037)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                                <span className="hidden md:flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <g clip-path="url(#clip0_2110_140)">
                                            <path d="M12.6667 0.666668H3.33333C2.4496 0.667727 1.60237 1.01926 0.97748 1.64415C0.352588 2.26904 0.00105857 3.11627 0 4L0 12C0.00105857 12.8837 0.352588 13.731 0.97748 14.3559C1.60237 14.9807 2.4496 15.3323 3.33333 15.3333H12.6667C13.5504 15.3323 14.3976 14.9807 15.0225 14.3559C15.6474 13.731 15.9989 12.8837 16 12V4C15.9989 3.11627 15.6474 2.26904 15.0225 1.64415C14.3976 1.01926 13.5504 0.667727 12.6667 0.666668ZM3.33333 2H12.6667C13.0659 2.00079 13.4557 2.12101 13.786 2.3452C14.1163 2.5694 14.3719 2.8873 14.52 3.258L9.41467 8.364C9.03895 8.73821 8.53028 8.94831 8 8.94831C7.46972 8.94831 6.96105 8.73821 6.58533 8.364L1.48 3.258C1.6281 2.8873 1.88374 2.5694 2.21403 2.3452C2.54432 2.12101 2.93414 2.00079 3.33333 2ZM12.6667 14H3.33333C2.8029 14 2.29419 13.7893 1.91912 13.4142C1.54405 13.0391 1.33333 12.5304 1.33333 12V5L5.64267 9.30667C6.26842 9.93084 7.11617 10.2814 8 10.2814C8.88383 10.2814 9.73158 9.93084 10.3573 9.30667L14.6667 5V12C14.6667 12.5304 14.456 13.0391 14.0809 13.4142C13.7058 13.7893 13.1971 14 12.6667 14Z" fill="#0F193E" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2110_140">
                                                <rect width="16" height="16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                            </div>


                            david.patten@warpme.io
                        </button>


                        <button className=" w-[185px] md:w-[197px] inline-flex items-center gap-[8px] h-[44px] md:h-[58px] rounded-[100px] bg-quaternary">
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

                    <button className="w-[121px] bg-[rgba(15,25,62,0.05)] gap-[10px] md:gap-[16px] md:w-[144px] h-[42px] text-[14px] font-general-sans font-semibold leading-[24px] md:leading-[30px] md:text-[16px] md:h-[54px] rounded-full flex items-center md:p-[10px]">

                        <div className="w-[24px] md:w-[30px] h-[24px] md:h-[30px] rounded-full border border-senary flex justify-center items-center">
                            <span className="flex md:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.66609 4.45221H6.39929V5.31555C6.64895 4.81901 7.28922 4.37288 8.25102 4.37288C10.0948 4.37288 10.5326 5.36128 10.5326 7.17475V10.5333H8.66589V7.58775C8.66589 6.55501 8.41622 5.97261 7.78062 5.97261C6.89909 5.97261 6.53275 6.60028 6.53275 7.58728V10.5333H4.66609V4.45221ZM1.46522 10.454H3.33189V4.37288H1.46522V10.454ZM3.59929 2.39001C3.59935 2.54647 3.56833 2.70139 3.508 2.84575C3.44767 2.99012 3.35926 3.12105 3.24789 3.23095C3.02221 3.45524 2.71673 3.58078 2.39855 3.58001C2.08093 3.5798 1.77616 3.45457 1.55015 3.23141C1.43918 3.12114 1.35107 2.99006 1.29085 2.84568C1.23063 2.7013 1.19949 2.54645 1.19922 2.39001C1.19922 2.07408 1.32522 1.77168 1.55062 1.54861C1.77643 1.32515 2.08133 1.19987 2.39902 1.20001C2.71729 1.20001 3.02249 1.32555 3.24789 1.54861C3.47282 1.77168 3.59929 2.07408 3.59929 2.39001Z" fill="#0F193E" />
                                </svg>
                            </span>
                            <span className="hidden md:flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33358 5.06527H7.50008V6.14444C7.81217 5.52377 8.6125 4.96611 9.81475 4.96611C12.1195 4.96611 12.6667 6.20161 12.6667 8.46844V12.6667H10.3333V8.98469C10.3333 7.69377 10.0213 6.96577 9.22675 6.96577C8.12483 6.96577 7.66692 7.75036 7.66692 8.98411V12.6667H5.33358V5.06527ZM1.3325 12.5675H3.66583V4.96611H1.3325V12.5675ZM4.00008 2.48752C4.00017 2.6831 3.96138 2.87674 3.88598 3.0572C3.81057 3.23765 3.70005 3.40132 3.56083 3.53869C3.27873 3.81905 2.89689 3.97599 2.49917 3.97502C2.10214 3.97476 1.72118 3.81822 1.43867 3.53927C1.29996 3.40144 1.18981 3.23759 1.11453 3.05711C1.03926 2.87663 1.00034 2.68307 1 2.48752C1 2.09261 1.1575 1.71461 1.43925 1.43577C1.72152 1.15645 2.10264 0.999848 2.49975 1.00002C2.89758 1.00002 3.27908 1.15694 3.56083 1.43577C3.842 1.71461 4.00008 2.09261 4.00008 2.48752Z" fill="#0F193E" />
                                </svg>
                            </span>
                        </div>


                        LinkedIn
                    </button>
                </div>


            </div>


            <div className="flex justify-center items-center w-full gap-[8px] mt-[69px] md:mt-[60px]">
                <p className="text-[12px] md:text-[14px] font-general-sans leading-[20px] md:leading-[22px] text-senary">Privacy</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                    <circle cx="2" cy="2" r="2" fill="#0F193E" fill-opacity="0.1" />
                </svg>
                <p className="text-[12px] md:text-[14px] font-general-sans leading-[20px] md:leading-[22px] text-senary">Terms</p>
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