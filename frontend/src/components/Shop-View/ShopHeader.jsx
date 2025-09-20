
import React, { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
// import { Link } from 'react-scroll';
function ShopHeader() {
    const navRef=useRef(null);
    const linksRef=useRef([]);
    const contactRef=useRef(null);
    const topLineRef=useRef(null);  
    const bottomLineRef=useRef(null);
    const tl=useRef(null);
    const icontl=useRef(null);

    
    const [isOpen, setIsOpen] = useState(false);
    const [showBurger, setShowBurger] = useState(true)
    useGSAP(()=>{
      gsap.set(navRef.current,{xPercent:100});


      gsap.set([linksRef.current,contactRef.current],{
        x:-20,
        autoAlpha:0
      });
    // });
        tl.current=gsap.timeline({paused:true})
          .to(navRef.current,{
              xPercent:0,
              duration:1,
              ease:"power3.out"
          // }).to(validLinks.current,{
          }).to(linksRef.current,{
              autoAlpha:1,
              x:0,
              duration:0.5,
              ease:"power3.out",
              stagger:0.1
     
          },"<")
          .to(contactRef.current,{
          autoAlpha:1,
          x:0,
         duration:0.5,
          ease:"power3.out",
            //  stagger:0.1
      },"<+0.2" );

icontl.current=gsap
.timeline({paused:true})
.to(topLineRef.current,{
  rotate:45,
  y:3.3,
  duration:0.3,
  ease:"power2.inOut"
})
  .to(bottomLineRef.current,{
    rotate:-45,
    y:-3.3,duration:0.3,
    ease:"power2.inOut"
  },"<");
    // });
    }, []);
    useEffect(() => {
      let lastScroll=window.scrollY;
      const handleScroll=()=>{
        const currentScroll=window.scrollY;
        setShowBurger(currentScroll<=lastScroll || currentScroll<10);
        lastScroll=currentScroll;
      }
      window.addEventListener("scroll",handleScroll,{
        passive:true
      });
      return () => window.removeEventListener("scroll",handleScroll);
      },[])

    const toggleMenu=()=>{
      if(isOpen){
        tl.current.reverse()
        icontl.current.reverse()
      }
      else{
        tl.current.play()
        icontl.current.play()
      }
      setIsOpen(!isOpen)
    };
  return (
    <>
 <nav   ref={navRef}
  className="fixed z-50 flex flex-col justify-between w-full h-full px-10 uppercase bg-black text-white/80 py-28 gap-y-10 md:w-1/2 md:left-1/2 "
 >
     <div className="flex flex-col text-5xl gap-y-2 md:text-6xl lg:text-8xl">
        {["home","about","skills","Project","contact"].map(
          (section,index)=>(
    <div key={index} ref={(element)=>(linksRef.current[index]=element)} >
        <div className='transition-all duration-300 hover:text-yellow-800' 
           to={`${section}`}
                  smooth
                  offset={0}
                  duration={2000}
                  >
                    {section}</div>
     </div>
        ))}
        </div>
       
 </nav>
 <div className="fixed z-50 flex flex-col items-center justify-center gap-2 transition-all duration-300 bg-black rounded-full cursor-pointer w-14 h-14 md:w-20 md:h-20 top-4 right-10  hover:bg-yellow-800/80"
 onClick={toggleMenu}
 style={showBurger?{clipPath:"circle(50% at 50% 50%)"}:
                      {clipPath:"circle( 0% at 50% 50%)"}}>
 <span  ref={topLineRef} className="block w-8 h-0.5 bg-white rounded-full origin-center"></span>
 <span ref={bottomLineRef} className="block w-8 h-0.5 bg-white rounded-full origin-center"></span>

 </div>
 </>
  );
}

export default ShopHeader
// import Navbar from '../Navbar'

// function ShopHeader() {
//   return (
//     <Navbar/>
//   )
// }

// export default ShopHeader