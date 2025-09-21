import { BadgeSwissFranc, CloudCog, HousePlug, LogOut, Menu, ShoppingCart, UserCog } from "lucide-react";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import {Avatar,AvatarFallback,} from "../ui/avatar"
// import { useDispatch, useSelector } from "react-redux";
// import { shoppingViewHeaderMenuItems } from "@/config";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { DialogTitle } from "@radix-ui/react-dialog";

// import { logoutUser } from "@/store/auth-slice";
// // import UserCartWrapper from "./cart-wrapper";
import { useEffect, useState } from "react";
// import { fetchCartItems } from "@/store/shop/cart-slice";
import { Label } from "../ui/label";
import { ShopingViewHeaderMenuItems } from "../../config/config";
import { useDispatch, useSelector } from "react-redux";
import Hero from "../Hero";
import { logoutUser } from "../../store/authSlice";

function MenuItems() {
  const navigate = useNavigate();
  const location = useLocation();
//   const [searchParams, setSearchParams] = useSearchParams();

  function handleNavigate(getCurrentMenuItem) {
    sessionStorage.removeItem("filters");
    const currentFilter =
      getCurrentMenuItem.id !== "home" &&
      getCurrentMenuItem.id !== "products" &&
      getCurrentMenuItem.id !== "search"
        ? {
            category: [getCurrentMenuItem.id],
          }
        : null;

    sessionStorage.setItem("filters", JSON.stringify(currentFilter));

    location.pathname.includes("listing") && currentFilter !== null
      ? setSearchParams(
          new URLSearchParams(`?category=${getCurrentMenuItem.id}`)
        )
      : navigate(getCurrentMenuItem.path);
  }

  return (
    <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row">
      {ShopingViewHeaderMenuItems.map((menuItem) => (
        <Label
          onClick={() => handleNavigate(menuItem)}
          className="text-xl font-medium cursor-pointer"
          key={menuItem.id}
        >
         {menuItem.label}
         </Label>
     ))}
     </nav>
  );
}

function HeaderRightContent() {
  const { user } = useSelector((state) => state.auth);
  // const { cartItems } = useSelector((state) => state.shopCart);
  const [openCartSheet, setOpenCartSheet] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logoutUser());
    
  }

  // useEffect(() => {
  //   dispatch(fetchCartItems(user?.id));
  // }, [dispatch]);

  // console.log(cartItems, "sangam");

  return (
    <div className="flex lg:items-center lg:flex-row flex-col gap-4">
      {/* <Sheet open={openCartSheet} onOpenChange={() => setOpenCartSheet(false)}> */}
        <Button
          // onClick={() => setOpenCartSheet(true)}
          variant="outline"
          size="icon"
          className="relative"
        >
          <ShoppingCart className="w-7 h-7" />
          <span className="absolute top-[-5px] right-[2px] font-bold text-sm">
            {/* {cartItems?.items?.length || 0} */}
          </span>
          <span className="sr-only">User cart</span>
        </Button>
        {/* <UserCartWrapper
          setOpenCartSheet={setOpenCartSheet}
          cartItems={
            cartItems && cartItems.items && cartItems.items.length > 0
              ? cartItems.items
              : []
          }
              
        /> */}
      {/* </Sheet> */}

      <DropdownMenu>
        <DropdownMenuTrigger asChild  >
          
          <Avatar className="bg-black">
            <AvatarFallback className="bg-black text-white font-extrabold">
              {user?.userName[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
          
          {/* <Avatar userName={user?.userName} /> */}

        </DropdownMenuTrigger>
        <DropdownMenuContent side="right" className="w-56 z-50">
          <DropdownMenuLabel>Logged in as {user?.userName}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem 
          // onClick={() => navigate("/shop/account")}
          >
            <UserCog className="mr-2 h-4 w-4" />
            Account
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

function ShopHeader() {
  const { isAuthenticated ,user} = useSelector((state) => state.auth);
  return (
    <>
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/shop/home" className="flex items-center gap-2">
          <BadgeSwissFranc className="h-8 w-8"/>
          <span className="myLogofont-bold text-xl">Freedom Shop</span>
        </Link>
        
       <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <Menu className="h-7 w-7" />
              <span className="sr-only">Toggle header menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full max-w-xs p-3 ">
            <MenuItems />
            <HeaderRightContent />
          </SheetContent>
        </Sheet>
        <div className="hidden lg:block">
          <MenuItems />
        </div>

        <div className="hidden lg:block ">
          <HeaderRightContent />
        </div>
      </div>
    </header>
    {/* <Hero/> */}
    </>
  );
}


export default ShopHeader;
// import React, { useEffect, useRef, useState } from 'react'
// import { useGSAP } from '@gsap/react';
// import gsap from "gsap";
// // import { Link } from 'react-scroll';
// function ShopHeader() {
//     const navRef=useRef(null);
//     const linksRef=useRef([]);
//     const contactRef=useRef(null);
//     const topLineRef=useRef(null);  
//     const bottomLineRef=useRef(null);
//     const tl=useRef(null);
//     const icontl=useRef(null);

    
//     const [isOpen, setIsOpen] = useState(false);
//     const [showBurger, setShowBurger] = useState(true)
//     useGSAP(()=>{
//       gsap.set(navRef.current,{xPercent:100});


//       gsap.set([linksRef.current,contactRef.current],{
//         x:-20,
//         autoAlpha:0
//       });
//     // });
//         tl.current=gsap.timeline({paused:true})
//           .to(navRef.current,{
//               xPercent:0,
//               duration:1,
//               ease:"power3.out"
//           // }).to(validLinks.current,{
//           }).to(linksRef.current,{
//               autoAlpha:1,
//               x:0,
//               duration:0.5,
//               ease:"power3.out",
//               stagger:0.1
     
//           },"<")
//           .to(contactRef.current,{
//           autoAlpha:1,
//           x:0,
//          duration:0.5,
//           ease:"power3.out",
//             //  stagger:0.1
//       },"<+0.2" );

// icontl.current=gsap
// .timeline({paused:true})
// .to(topLineRef.current,{
//   rotate:45,
//   y:3.3,
//   duration:0.3,
//   ease:"power2.inOut"
// })
//   .to(bottomLineRef.current,{
//     rotate:-45,
//     y:-3.3,duration:0.3,
//     ease:"power2.inOut"
//   },"<");
//     // });
//     }, []);
//     useEffect(() => {
//       let lastScroll=window.scrollY;
//       const handleScroll=()=>{
//         const currentScroll=window.scrollY;
//         setShowBurger(currentScroll<=lastScroll || currentScroll<10);
//         lastScroll=currentScroll;
//       }
//       window.addEventListener("scroll",handleScroll,{
//         passive:true
//       });
//       return () => window.removeEventListener("scroll",handleScroll);
//       },[])

//     const toggleMenu=()=>{
//       if(isOpen){
//         tl.current.reverse()
//         icontl.current.reverse()
//       }
//       else{
//         tl.current.play()
//         icontl.current.play()
//       }
//       setIsOpen(!isOpen)
//     };
//   return (
//     <>
//  <nav   ref={navRef}
//   className="fixed z-50 flex flex-col justify-between w-full h-full px-10 uppercase bg-black text-white/80 py-28 gap-y-10 md:w-1/2 md:left-1/2 "
//  >
//      <div className="flex flex-col text-5xl gap-y-2 md:text-6xl lg:text-8xl">
//         {["home","about","skills","Project","contact"].map(
//           (section,index)=>(
//     <div key={index} ref={(element)=>(linksRef.current[index]=element)} >
//         <div className='transition-all duration-300 hover:text-yellow-800' 
//            to={`${section}`}
//                   smooth
//                   offset={0}
//                   duration={2000}
//                   >
//                     {section}</div>
//      </div>
//         ))}
//         </div>
       
//  </nav>
//  <div className="fixed z-50 flex flex-col items-center justify-center gap-2 transition-all duration-300 bg-black rounded-full cursor-pointer w-14 h-14 md:w-20 md:h-20 top-4 right-10  hover:bg-yellow-800/80"
//  onClick={toggleMenu}
//  style={showBurger?{clipPath:"circle(50% at 50% 50%)"}:
//                       {clipPath:"circle( 0% at 50% 50%)"}}>
//  <span  ref={topLineRef} className="block w-8 h-0.5 bg-white rounded-full origin-center"></span>
//  <span ref={bottomLineRef} className="block w-8 h-0.5 bg-white rounded-full origin-center"></span>

//  </div>
//  </>
//   );
// }

// export default ShopHeader
// // import Navbar from '../Navbar'

// // function ShopHeader() {
// //   return (
// //     <Navbar/>
// //   )
// // }

// // export default ShopHeader