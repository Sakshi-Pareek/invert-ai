import Head from "next/head";
import Gateway from "@/components/Gateway";
import Header from "@/components/Header";
import Highlights from "@/components/Highlights";
import Traders from "@/components/Traders";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { React, useEffect, useState } from 'react';
import { BackToTop } from "@/components/Icons";
import Preloader from "@/components/Preloader";

export default function Home() {
  // -------------aos-------------
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, []);
  // -------------backtotop-----------
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 100) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  // ------------preloader-------------
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 4000);
  }, []);
  return (
    <>
      {screenLoading ? (
        <Preloader />
      ) : (
        <>
          <main className='overflow-hidden bg-black'>
            <Header />
            <Gateway />
            <Traders />
            <Highlights />
            <div>
              <button className={`${backToTop ? "fixed w-[40px] h-[40px] rounded-[50%] bg-[#AB68FF] border-2 border-solid border-white cursor-pointer updown_animation flex justify-center items-center z-40 right-5 bottom-5" : "hidden"}`} onClick={() => top()}><BackToTop /></button>
            </div>
          </main>
        </>
      )}
    </>
  );
}


