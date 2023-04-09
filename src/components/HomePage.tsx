import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

function HomePage() {
  const h11 = useRef<HTMLHeadingElement>(null);
  const h12 = useRef<HTMLHeadingElement>(null);
  const h13 = useRef<HTMLHeadingElement>(null);
  const myimageref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(h11.current, {
      x: "-100%",
      delay: 0.1,
      opacity: 0,
      duration: 0.5,
      ease: "Power3.easeOut",
    }).from(h12.current, {
      x: "-100%",
      delay: 0.1,
      opacity: 0,
      duration: 0.6,
      ease: "Power3.easeOut",
    }).from(h13.current, {
      x: "-100%",
      delay: 0.1,
      opacity: 0,
      duration: 0.7,
      ease: "Power3.easeOut",
    }).from(myimageref.current, {
      x: "200%",
      delay: 0.4,
      opacity: 0,
      duration: 2,
      ease: "Power3.easeOut",
    });
  }, []);

  const name = "Waca";
  const tagline = "I Like Build Web things with next";
  const img = "/image/profile.png"; 

  return (
    <div className="bg-fixed bg-no-repeat bg-center bg-cover min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="md:flex justify-between items-center">
          <div>
            <h1
              ref={h11}
              className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
            >
              Hi,👋<br></br>My Name is Waca<br></br>
            </h1>
            <h1
              ref={h12}
              className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
            >
              {name}
            </h1>
            <h2
              ref={h13}
              className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
            >
              {tagline}
            </h2>
          </div>
          <div className="mt-5 md:mt-0">
            <div ref={myimageref} className="w-40 h-40">
              <Image src={img} alt="Your Name" layout="responsive" width={300} height={300} className="object-cover rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
