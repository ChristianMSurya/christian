'use client';
import { useLayoutEffect, useRef, useState } from "react";
import AnText from "@/components/an-text";
import Footer from "@/components/footer";

export default function Home() {
  const [returning, setReturning] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);
  const introRequested = useRef(false);

  useLayoutEffect(() => {
    if (!introRequested.current && sessionStorage.getItem("home-return-intro") !== "true") return;
    introRequested.current = true;
    sessionStorage.removeItem("home-return-intro");
    setReturning(true);
    setFadingOut(false);
    document.documentElement.classList.add("home-returning");
    const revealTimer = window.setTimeout(() => {
      setFadingOut(true);
      document.documentElement.classList.remove("home-returning");
      document.documentElement.classList.add("home-revealing");
    }, 5000);
    const finishTimer = window.setTimeout(() => {
      setReturning(false);
      document.documentElement.classList.remove("home-revealing");
    }, 5750);
    return () => {
      window.clearTimeout(revealTimer);
      window.clearTimeout(finishTimer);
      document.documentElement.classList.remove("home-revealing");
      document.documentElement.classList.remove("home-returning");
    };
  }, []);

  return (
    <div>
    <div className={`flex flex-col w-full min-h-[50vh] scroll-smooth items-start justify-center ${introRequested.current ? "" : "animate-fade-in"}`}>
        <div className="flex flex-col text-sm gap-1">
          <p className="relative">
            <span className="home-name"><AnText>christian</AnText></span><span data-return-reveal> matthew</span>
            {returning && <span className={`home-return-message ${fadingOut ? "home-return-fading" : ""}`} role="status" aria-label="it’s christian">
              <span className="home-return-prefix">it&apos;s </span>
            </span>}
          </p>
          <p data-return-reveal><AnText>thank you</AnText></p>
        </div>
    </div>
    <div data-return-reveal className={`mt-12 mb-24 ${introRequested.current ? "" : "animate-fade-in"}`} style={introRequested.current ? undefined : { animationDelay: '70ms', opacity: 0 }}>
      <Footer/>
    </div>
    </div>
  );
}
