import Image from "next/image";
import RightArrow from "../../../public/assets/images/right-arrow.svg";

const Footer = () => {
    return (
        <div className="px-5 sm:px-0 pb-10 sm:pb-0">
            <div className="space-y-3 mb-9 sm:mb-82 lg:ml-215 max-w-281 mx-auto text-center sm:text-left sm:max-w-516 z-30 relative">
                <p className="h-7 font-figtree font-medium text-xs leading-[1] tracking-normal align-middle mb-19 sm:mb-27 text-gray">
                    By clicking &ldquo;Get Started&rdquo;, you agree with Terms
                    and Conditions, Privacy Policy, Subscription Terms
                </p>
                <p className="text-gray h-3 font-figtree font-medium text-10 leading-[100%] tracking-normal align-middle">
                    Fametonic 2025 ©All Rights Reserved.
                </p>
            </div>
            <div className="block lg:hidden md:hidden text-center px-5">
                <button className="flex items-center justify-center gap-2.5 rounded-10 shadow-cyan-glow bg-secondary w-full h-10 py-2 mb-2.5">
                    <span className="font-figtree text-xl leading-[100%] font-bold tracking-normal">
                        GET STARTED
                    </span>
                    <Image
                        src={RightArrow}
                        width={11}
                        height={6}
                        alt="right arrow"
                    />
                </button>
                <small className="text-xs leading-[16px] font-figtree">
                    1-minute quiz for personalized Insights
                </small>
            </div>
        </div>
    );
};

export default Footer;
