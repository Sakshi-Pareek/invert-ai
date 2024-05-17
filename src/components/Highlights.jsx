import Image from "next/image";
import { Facebookicon, Instaicon, Logo, Twittericon } from "./Icons";

export default function Highlights() {
  const Dates = new Date();
  const year = Dates.getFullYear();
  return (
    <>
      <div className="bg-footer_bg lg:bg-full bg-cover bg-no-repeat relative">
        <Image
          src="/assets/images/png/hero_bottom_layer.png" alt="bottom_layer"
          className="absolute left-0 w-full top-0 z-20"
          width={100}
          height={148}
        />
        <div className="container lg:max-w-[1164px] px-3 mx-auto relative z-30">
          <div className="border-4 border-solid border-[#AB68FF] rounded-[24px] overflow-hidden">
            <div className="flex flex-wrap-reverse">
              <div className="lg:w-1/2 bg-[#18102B] lg:border-r-[#AB68FF] lg:border-r-4 lg:border-r-solid flex flex-wrap">
                <table className="w-full">
                  <tbody>
                    <tr className="border-b">
                      <td className="w-[42%] md:ps-7 ps-3 py-3">
                        <p className="font-semibold text-[20px] text-white">
                          Registration Cost
                        </p>
                      </td>
                      <td className="w-[60%] md:px-7 px-3 py-3">
                        <p className="font-semibold text-base text-white opacity-80">
                          Free
                        </p>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="w-[42%] md:ps-7 ps-3 py-3">
                        <p className="font-semibold text-[20px] text-white">
                          Fees
                        </p>
                      </td>
                      <td className="w-[60%] md:px-7 px-3 py-3">
                        <p className="font-semibold text-base text-white opacity-80">
                          250 USD
                        </p>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="w-[42%] md:ps-7 ps-3 py-3">
                        <p className="font-semibold text-[20px] text-white">
                          Registration
                        </p>
                      </td>
                      <td className="w-[60%] md:px-7 px-3 py-3">
                        <p className="font-semibold text-base text-white opacity-80">
                          Simple, quick
                        </p>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="w-[42%] md:ps-7 ps-3 py-3">
                        <p className="font-semibold text-[20px] text-white">
                          Education Focus
                        </p>
                      </td>
                      <td className="w-[60%] md:px-7 px-3 py-3">
                        <p className="font-semibold text-base text-white opacity-80">
                          Cryptocurrencies, Fores, Mutual Funds, and Other
                          Investments
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-[42%] md:ps-7 ps-3 py-3">
                        <p className="font-semibold text-[20px] text-white">
                          Supported Countries
                        </p>
                      </td>
                      <td className="w-[60%] md:px-7 px-3 py-3">
                        <p className="font-semibold text-base text-white opacity-80">
                          Most countries Except USA
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="lg:w-1/2 bg-[#1811344d] backdrop-blur-sm md:px-10 px-3 lg:py-8 py-10">
                <h4 className="text-white font-bold lg:text-[40px] md:text-[34px] text-[28px] leading-[120%] max-lg:text-center" data-aos="fade-left">
                  InvestGPT{" "}
                  <span className="font-extrabold text-[#AB68FF]">
                    Highlights
                  </span>
                </h4>
                <p className="font-normal text-base text-[#ffffffb3] my-4 xl:py-4 max-lg:text-center" data-aos="fade-left">
                  InvestGPT illuminates the path to financial success with its
                  array of empowering features tailored for every investor. Dive
                  into a world of curated investment opportunities, where
                  personalized recommendations align with your unique goals and
                  risk appetite.
                </p>
               <div className="max-lg:text-center" data-aos="fade-left">
               <button className="font-semibold text-base text-white py-3.5 px-5 bg-[#AB68FF] rounded-[38px] shadow-[0px_0px_6px_0px_rgba(171,104,255,0.6)] common_btn">
                  Get Started
                </button>
               </div>
              </div>
            </div>
          </div>
          <div className="xl:pt-48 lg:pt-36 sm:pt-28 pt-16 lg:pb-14 pb-7 flex justify-center items-center flex-col">
            <a href="#" className="text-center animate-spin">
              {" "}
              <Logo />
            </a>
            <a
              href="/"
              className="font-bold text-[24px] text-white xs:mt-4 no-underline text-center"
            >
              Invest GPT
            </a>
            <p className="font-normal text-base text-white opacity-70 text-center mx-auto max-w-[261px] lg:mb-7 mb-4">
              Amet consectetur ignissim posuere suscipit neque eget velit.
            </p>
            <div className="flex items-center gap-5 justify-center">
              <a href="https://www.facebook.com/" target="_black">
                <Facebookicon />
              </a>
              <a href="https://www.twitter.com/" target="_blank">
                <Twittericon />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <Instaicon />
              </a>
            </div>
          </div>
        </div>
        <hr className="h-[1px] w-full bg-white opacity-30" />
        <p className="font-normal text-base text-white opacity-70 text-center lg:py-[27px] py-4">
          Copyright@{year}(All Rights reserved)
        </p>
      </div>
    </>
  );
}
