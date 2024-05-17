import Image from "next/image";
import { Employment, Financial, Personal, Savings, Tolerance } from "./Icons";

export default function Header() {
  return (
    <>
      <div className="relative">
        <Image
          src="/assets/images/png/hero_bottom_layer.png"
          className="absolute left-0 w-full xl:bottom-[-17%] bottom-0 z-10"
          width={100}
          height={148}
        />

        <div className="lg:pt-52 pt-24 xl:mt-1 container lg:max-w-[1164px] px-3 mx-auto relative">
          <div className=" bg-gradient-to-[#00010100] bg-gradient-to-b-[#000102] w-full "></div>
          <div className="h-[330px] w-[330px] rounded-[50%] opacity-30 bg-[#AB68FF] absolute left-[-15%] top-[7%] blur-[120px] z-0"></div>
          <h1 className="text-white font-bold sm:text-[40px] text-[30px] leading-[120%] text-center lg:mb-14 mb-5 xl:pb-1">
            Your Personal{" "}
            <span className="font-extrabold text-[#AB68FF]">
              Investment Advisor
            </span>
          </h1>
          <div>
            <div className="flex flex-wrap-reverse justify-between max-lg:gap-6 max-sm:gap-4 items-center">
              <div className="lg:w-[23.5%] xs:w-[48%] border-2 border-solid border-[#ab68ff4d] bg-gradient-bg bg-full rounded-[24px] pt-6 sm:px-5 px-3 overflow-hidden min-h-[304px] backdrop-blur-sm glass cursor-pointer hover:shadow-[0px_0px_6px_0px_rgba(171,104,255,0.6)] duration-300 ease-linear">
                <Financial />
                <h2 className="font-semibold text-base text-white mt-6 mb-3.5">
                  Financial Goals
                </h2>
                <p className="font-normal text-base text-white opacity-70 leading-6">
                  What are you investing for? Retirement, a house, education?
                </p>
              </div>
              <div className="lg:w-[23.5%] xs:w-[48%] border-2 border-solid border-[#ab68ff4d] bg-gradient-bg bg-full rounded-[24px] pt-6 sm:px-5 px-3 overflow-hidden min-h-[304px] backdrop-blur-sm glass cursor-pointer hover:shadow-[0px_0px_6px_0px_rgba(171,104,255,0.6)] duration-300 ease-linear">
                <Personal />
                <h2 className="font-semibold text-base text-white mt-6 mb-3.5">
                  Personal Details
                </h2>
                <p className="font-normal text-base text-white opacity-70 leading-6">
                  Your age, family situation, and other pertinent factors.
                </p>
              </div>
              <div className="lg:w-[48.5%]">
                <h2 className="font-bold sm:text-[24px] text-[20px] text-white mb-4 max-md:text-center">
                  InvestGPT begins by asking you a series of questions. These
                  questions cover a range of topics, including:
                </h2>
                <p className="font-normal text-base text-white opacity-70 max-md:text-center">
                  InvestGPT is your trusted companion in the world of finance.
                  By understanding your unique financial situation and goals,
                  InvestGPT provides tailored advice and insights to help you
                  make informed investment decisions.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap-reverse justify-between max-lg:gap-6 max-sm:gap-4 items-center mt-6 relative z-10">
              <div className="lg:w-[400px] w-[200px] lg:h-[180px] h-[100px] border-2 border-dashed border-[#AB68FF] rounded-[50%] absolute top-[55%] left-[-20%] z-0"></div>
              <div className="lg:w-[400px] w-[200px] lg:h-[180px] h-[100px] border-2 border-dashed border-[#AB68FF] rounded-[50%] absolute lg:top-[67%] top-[57%] left-[-22%] z-0"></div>
              <div className="lg:w-[49.5%] border-2 border-solid border-[#ab68ff4d] bg-gradient-bg backdrop-blur-sm bg-full rounded-[24px] py-6 sm:px-5 px-3 overflow-hidden min-h-[304px] glass cursor-pointer hover:shadow-[0px_0px_6px_0px_rgba(171,104,255,0.6)] duration-300 ease-linear">
                <Savings />
                <h2 className="font-semibold text-base text-white mt-6 mb-3.5">
                  Current Savings and Investments
                </h2>
                <p className="font-normal text-base text-white opacity-70 leading-6 mb-2.5">
                  How would you describe your rish tolerance when it comes to
                  investing?(e.g., conservative, moderate, aggressive)
                </p>
                <p className="font-normal text-base text-white opacity-70 leading-6">
                  What percentage of your investment portfolio are you
                  comfortable with potentially losing during a market downturn?
                </p>
              </div>
              <div className="lg:w-[23.5%] xs:w-[48%] border-2 border-solid border-[#ab68ff4d] bg-gradient-bg bg-full rounded-[24px] pt-6 sm:px-5 px-3 overflow-hidden min-h-[304px] backdrop-blur-sm glass cursor-pointer hover:shadow-[0px_0px_6px_0px_rgba(171,104,255,0.6)] duration-300 ease-linear">
                <Employment />
                <h2 className="font-semibold text-base text-white mt-6 mb-3.5">
                  Employment
                </h2>
                <p className="font-normal text-base text-white opacity-70 leading-6">
                  Your job stability, income, and future career plans.
                </p>
              </div>
              <div className="lg:w-[23.5%] xs:w-[48%] border-2 border-solid border-[#ab68ff4d] bg-gradient-bg bg-full rounded-[24px] pt-6 sm:px-5 px-3 overflow-hidden min-h-[304px] backdrop-blur-sm glass cursor-pointer hover:shadow-[0px_0px_6px_0px_rgba(171,104,255,0.6)] duration-300 ease-linear">
                <Tolerance />
                <h2 className="font-semibold text-base text-white mt-6 mb-3.5">
                  Risk Tolerance
                </h2>
                <p className="font-normal text-base text-white opacity-70 leading-6">
                  How comfortable are you with the ups and downs of the market?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
