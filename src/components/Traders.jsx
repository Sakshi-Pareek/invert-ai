import Image from "next/image";
import { Fund, Setting } from "./Icons";

export default function Traders() {
  return (
    <>
      <div className="relative xl:pb-56 lg:pb-24 md:pb-20 pb-12 z-10">
        <Image
          src="/assets/images/png/squar_layer.png"
          alt="square_layer"
          width={765}
          height={986}
          className="absolute left-0 -top-44 rotate-180 z-10"
        />
        <div className="container lg:max-w-[1164px] px-3 mx-auto relative z-10">
          <div className="h-[330px] w-[330px] rounded-[50%] opacity-30 bg-[#AB68FF] absolute -right-40 blur-[120px] z-0"></div>
          <div className="h-[330px] w-[330px] rounded-[50%] opacity-30 bg-[#AB68FF] absolute -left-10 top-20 blur-[120px] z-0"></div>
          <div className="flex flex-wrap relative x-[1] items-center max-lg:gap-10">
            <div className="lg:w-[49%]">
              <h3
                className="text-white font-bold lg:text-[40px] md:text-[34px] text-[28px] leading-[120%] max-lg:text-center"
                data-aos="fade-right"
              >
                Empowering your{" "}
                <span className="font-extrabold text-[#AB68FF]">
                  active trading
                </span>{" "}
                experience with more buying power
              </h3>
              <p
                className="font-normal text-base text-[#ffffffb3] my-4 pb-4 max-lg:text-center"
                data-aos="fade-right"
              >
                InvestGPT offers a dynamic facility for users who are ready to
                actively engage in trading.
              </p>
              <div data-aos="fade-right">
                <div className="border-2 border-solid border-[#ab68ff4d] rounded-[161px] px-2.5 py-2 flex gap-4 bg-[#110B26] mb-6 hover:shadow-[0px_0px_6px_0px_rgba(171,104,255,0.6)] duration-500 ease-linear transition-all cursor-pointer items-center">
                  <Fund />
                  <div>
                    <h4 className="font-semibold text-base text-white mb-2.5">
                      Depositing Funds
                    </h4>
                    <p className="font-normal text-base text-white opacity-70">
                      Adding funds to your trading account to enable InvestGPT.
                    </p>
                  </div>
                </div>
              </div>
              <div data-aos="fade-right">
                <div className="border-2 border-solid border-[#ab68ff4d] rounded-[161px] px-2.5 py-2 flex gap-4 bg-[#110B26] lg:mb-10 mb-8 hover:shadow-[0px_0px_6px_0px_rgba(171,104,255,0.6)] duration-500 ease-linear transition-all cursor-pointer items-center">
                  <Setting />
                  <div>
                    <h4 className="font-semibold text-base text-white mb-2.5">
                      Setting Parameters
                    </h4>
                    <p className="font-normal text-base text-white opacity-70">
                      You'll have the opportunity to specify parameters such
                      risk.
                    </p>
                  </div>
                </div>
              </div>
              <div className="max-lg:text-center" data-aos="fade-right">
                <button className="font-semibold text-base text-white py-3.5 px-5 bg-[#AB68FF] rounded-[38px] shadow-[0px_0px_6px_0px_rgba(171,104,255,0.6)] common_btn">
                  Register for Free
                </button>
              </div>
            </div>
            <div className="lg:w-[49%] mx-auto relative">
              <div className="sm:w-[465px] w-[320px] sm:h-[465px] h-[320px] rounded-[50%] border-2 border-dashed border-[#ffffff1a] flex justify-center items-center lg:ml-auto relative">
                <Image
                  src="/assets/images/png/power.png"
                  alt="power"
                  width={128}
                  height={128}
                  className="absolute left-0 bottom-0 max-sm:w-[100px] max-xs:w-[80px]"
                />
                <Image
                  src="/assets/images/png/captial.png"
                  alt="captial"
                  width={128}
                  height={128}
                  className="absolute right-0 top-0 max-sm:w-[100px] max-xs:w-[80px]"
                />
                <div className="sm:w-[410px] sm:h-[410px] w-[270px] h-[270px] rounded-[50%] border-2 border-dashed border-[#ffffff33] flex justify-center items-center">
                  <div className="sm:w-[357px] w-[230px] sm:h-[357px] h-[230px] rounded-[50%] border-2 border-dashed border-[#ffffff4d] flex justify-center items-center animated_border">
                    <div className="sm:h-[272px] h-[170px] sm:w-[272px] w-[170px] flex justify-center items-center border-2 border-solid border-[#ab68ff4d] rounded-[50%]">
                      <div className="sm:w-[230px] w-[140px] sm:h-[230px] h-[140px] rounded-[50%] bg-[#AB68FF] shadow-[0px_0px_10px_0px_rgba(171,104,255,0.6)] flex justify-center items-center px-6">
                        <p className="font-bold text-white sm:text-[32px] text-[18px] text-center">
                          Why 95% of Traders Fail
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
