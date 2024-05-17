import Image from "next/image";

export default function Gateway() {
  return (
    <>
      <div className="bg-gateway-bg bg-full xl:pt-56 lg:pb-48 lg:pt-40 py-20 relative bg-black">
        <Image src="/assets/images/png/squar_layer.png" width={765} height={986} className="absolute right-0 top-0"/>
      <Image
          src="/assets/images/png/hero_bottom_layer.png"
          className="absolute left-0 w-full bottom-[-2px] z-10 rotate-180"
          width={100}
          height={148}
        />
        <div className="container lg:max-w-[1164px] px-3 mx-auto">
          <h2 className="text-white font-bold sm:text-[40px] text-[30px] leading-[120%] text-center lg:pb-14 pb-5">
            Your Gateway to{" "}
            <span className="font-extrabold text-[#AB68FF]">
              Financial Empowerment
            </span>
          </h2>
          <div className="flex flex-wrap justify-between gap-5">
            <div className="lg:w-[49%] border-2 border-l-[12px] border-l-[#AB68FF] border-solid border-[#ab68ff4d] rounded-[24px] bg-[#110B26] px-4 py-7 relative overflow-hidden z-10 min-h-[225px] cursor-pointer glass_effect before:w-[20%] before:h-full before:left-[-125%] before:top-0 before:absolute before:z-10 before:duration-1000 before:ease-in-out before:blur-[30px]">
              <Image
                src="/assets/images/png/vertical_black_layer.png"
                className="absolute z-[2] top-0 h-full xxl:left-[204px] lg:left-[136px] md:left-[390px] sm:left-[260px] max-sm:hidden"
                width={100}
                height={100}
              />
              <Image
                src="/assets/images/png/gateway_img-1.png"
                width={339}
                height={226}
                className="absolute right-0 top-0 bottom-0 z-0 h-full max-sm:opacity-30 max-sm:w-full"
              />
              <div className="flex max-sm:flex-col-reverse items-center xl:gap-7 gap-4">
                <div>
                  <h3 className="font-semibold text-[20px] text-white mb-3.5 relative z-[3]">
                    Explore Trading Options
                  </h3>
                  <p className="font-normal text-white opacity-70 text-base relative z-[3]">
                    Learn about different asset classes such as stocks, bonds,
                    ETFs, and cryptocurrencies.
                  </p>
                </div>
                <Image
                  src="/assets/images/png/app_logos.png"
                  width={234}
                  height={168}
                  className="relative z-[3]"
                />
              </div>
            </div>
            <div className="lg:w-[49%] border-2 border-l-[12px] border-l-[#AB68FF] border-solid border-[#ab68ff4d] rounded-[24px] bg-[#110B26] px-4 py-7 relative overflow-hidden z-10 min-h-[225px] glass_effect cursor-pointer before:w-[20%] before:h-full before:left-[-125%] before:top-0 before:absolute before:z-10 before:duration-1000 before:ease-in-out before:blur-[30px]">
              <Image
                src="/assets/images/png/vertical_black_layer.png"
                className="absolute z-[2] top-0 h-full xxl:left-[204px] lg:left-[136px] md:left-[390px] sm:left-[260px] max-sm:hidden"
                width={100}
                height={100}
              />
              <Image
                src="/assets/images/png/gateway_img-2.png"
                width={339}
                height={226}
                className="absolute right-0 top-0 bottom-0 z-0 h-full max-sm:opacity-30 max-sm:w-full"
              />
              <div className="flex max-sm:flex-col-reverse items-center xl:gap-7 gap-4">
                <div>
                  <h3 className="font-semibold text-[20px] text-white mb-3.5 relative z-[3]">
                    Risk Management
                  </h3>
                  <p className="font-normal text-white opacity-70 text-base relative z-[3]">
                    Understand how to mitigate risks through diversification,
                    stop-loss orders, and other strategies.
                  </p>
                </div>
                <Image
                  src="/assets/images/png/OnePlus.png"
                  width={234}
                  height={168}
                  className="relative z-[3] mx-auto"
                />
              </div>
            </div>
            <div className="lg:w-[49%] border-2 border-l-[12px] border-l-[#AB68FF] border-solid border-[#ab68ff4d] rounded-[24px] bg-[#110B26] px-4 py-7 relative overflow-hidden z-10 min-h-[225px] flex flex-col justify-center glass_effect cursor-pointer before:w-[20%] before:h-full before:left-[-125%] before:top-0 before:absolute before:z-10 before:duration-1000 before:ease-in-out before:blur-[30px]">
              <Image
                src="/assets/images/png/vertical_black_layer.png"
                className="absolute z-[2] top-0 h-full xxl:left-[204px] lg:left-[136px] md:left-[390px] sm:left-[260px] max-sm:hidden"
                width={100}
                height={100}
              />
              <Image
                src="/assets/images/png/business.png"
                width={339}
                height={226}
                className="absolute right-0 top-0 bottom-0 z-0 h-full max-sm:opacity-30  max-sm:w-full"
              />
              <h3 className="font-semibold text-[20px] text-white mb-3.5 relative z-[3]">
                Trading Strategies
              </h3>
              <p className="font-normal text-white opacity-70 text-base relative z-[3] sm:me-56">
                Discover various approaches to trading, from day trading to
                long-term investing, and everything in between.
              </p>
            </div>
            <div className="lg:w-[49%] border-2 border-l-[12px] border-l-[#AB68FF] border-solid border-[#ab68ff4d] rounded-[24px] bg-[#110B26] px-4 py-7 relative overflow-hidden z-20 min-h-[225px] flex flex-col justify-center glass_effect cursor-pointer before:w-[20%] before:h-full before:left-[-125%] before:top-0 before:absolute before:z-10 before:duration-1000 before:ease-in-out before:blur-[30px]">
              <Image
                src="/assets/images/png/vertical_black_layer.png"
                className="absolute z-[2] top-0 h-full xxl:left-[204px] lg:left-[136px] md:left-[390px] sm:left-[260px] max-sm:hidden"
                width={100}
                height={100}
              />
              <Image
                src="/assets/images/png/men_with_headphone.png"
                width={339}
                height={216}
                className="absolute right-0 top-0 bottom-0 z-0 h-full max-sm:opacity-30 max-sm:w-full"
              />
              <h3 className="font-semibold text-[20px] text-white mb-3.5 relative z-[3]">
              Customer Support
              </h3>
              <p className="font-normal text-white opacity-70 text-base relative z-[3] sm:me-56">
              Access to a dedicated customer service team for assistance with any platform-related questions or issues.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
