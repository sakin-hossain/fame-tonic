import Image from "next/image";
import HeroImage from "../../../public/assets/images/hero-image.webp";
import RightArrow from "../../../public/assets/images/right-arrow.svg";
import StarIcon from "../../../public/assets/images/star-icon.webp";

const HeroSection = () => {
    return (
        <div className="flex flex-col-reverse xl:flex-row md:flex-col-reverse px-5 sm:p-0">
            <div className="xl:ml-215 xl:mt-57 xl:mb-30 md:mx-auto max-w-516 z-20">
                <div className="mb-22 sm:mb-4">
                    <h1 className="font-urbanist font-extrabold sm:font-bold text-25 xl:text-35 md:text-25px leading-[100%] w-328 sm:w-full mx-auto tracking-normal align-middle text-center sm:text-left h-60 sm:h-84">
                        Want to Turn Social Media Into a Profitable Career?{" "}
                    </h1>
                    <h1 className="font-urbanist font-extrabold sm:font-bold text-25 xl:text-35 md:text-25 leading-[100%] w-328 sm:w-full mx-auto tracking-normal align-middle text-center sm:text-left text-shadow-red-glow text-primary h-60 sm:h-84">
                        Discover your way to success with Fametonic:
                    </h1>
                </div>
                <ul className="mb-22 sm:mb-30 space-y-13 h-202 sm:h-149">
                    <li className="font-figtree font-semibold text-base leading-22 tracking-normal align-middle flex items-center gap-2.5">
                        <Image
                            src={StarIcon}
                            width={22}
                            height={22}
                            alt="right arrow"
                        />
                        <span>
                            Start growing your influence right away—no waiting
                            required!
                        </span>
                    </li>
                    <li className="font-figtree font-semibold text-base leading-22 tracking-normal align-middle flex items-center gap-2.5">
                        <Image
                            src={StarIcon}
                            width={22}
                            height={22}
                            alt="right arrow"
                        />
                        <span>
                            Create viral TikToks and Reels step by step with
                            easy-to-follow lessons
                        </span>
                    </li>
                    <li className="font-figtree font-semibold text-base leading-22 tracking-normal align-middle flex items-center gap-2.5">
                        <Image
                            src={StarIcon}
                            width={22}
                            height={22}
                            alt="right arrow"
                        />
                        <span>
                            Use a Personal AI Worker to boost your content
                        </span>
                    </li>
                    <li className="font-figtree font-semibold text-base leading-22 tracking-normal align-middle flex items-center gap-2.5">
                        <Image
                            src={StarIcon}
                            width={22}
                            height={22}
                            alt="right arrow"
                        />
                        <span>
                            Learn from expert-led courses designed for aspiring
                            influencers
                        </span>
                    </li>
                </ul>
                <div className="hidden sm:block text-center md:pb-5 max-w-313">
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
                    <small className="text-xs leading-4 font-figtree">
                        1-minute quiz for personalized Insights
                    </small>
                </div>
            </div>
            <div className="static mt-2.5 xl:mt-0 md:mt-7 sm:mt-2.5 md:mx-auto xl:absolute md:static right-139 top-121 z-10">
                <Image
                    src={HeroImage}
                    width={666}
                    height={679}
                    alt="hero"
                    loading="lazy"
                />
            </div>
        </div>
    );
};

export default HeroSection;
