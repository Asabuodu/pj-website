// import { useState } from 'react';
// import Image from "next/image";
// import Carousel from 'react-bootstrap/Carousel';
// import slide1 from '@/public/assets/slide1.jpg';

// function ControlledCarousel() {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <Carousel activeIndex={index} onSelect={handleSelect}>
//       <Carousel.Item>
//         <div className="relative w-full h-[500px]">
//           <Image src={slide1} alt="Slide 1" className="w-full h-1/6 object-cover" />
//           <Carousel.Caption className="absolute inset-0 flex justify-center items-center text-center text-white">
//             <div>
//               <h3>First slide label</h3>
//               <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//             </div>
//           </Carousel.Caption>
//         </div>
//       </Carousel.Item>

//       <Carousel.Item>
//         <div className="relative w-full h-[500px]">
//           <Image src={slide1} alt="Slide 1" className="w-full h-full object-cover" />
//           <Carousel.Caption className="absolute inset-0 flex justify-center items-center text-center text-white">
//             <div>
//               <h3>Second slide label</h3>
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//             </div>
//           </Carousel.Caption>
//         </div>
//       </Carousel.Item>

//       <Carousel.Item>
//         <div className="relative w-full h-[500px]">
//           <Image src={slide1} alt="Slide 1" className="w-full h-full object-cover" />
//           <Carousel.Caption className="absolute inset-0 flex justify-center items-center text-center text-white">
//             <div>
//               <h3>Third slide label</h3>
//               <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//             </div>
//           </Carousel.Caption>
//         </div>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default ControlledCarousel;

// import { useState } from 'react';
// import Image from 'next/image';
// import Carousel from 'react-bootstrap/Carousel';
// import slide1 from '@/public/assets/slide1.jpg';

// function ControlledCarousel() {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <Carousel activeIndex={index} onSelect={handleSelect} fade interval={5000}>
//       {[1, 2, 3].map((_, i) => (
//         <Carousel.Item key={i}>
//           <div style={{ position: 'relative', width: '100%', height: '80vh', overflow: 'hidden' }}>
//             <Image
//               src={slide1}
//               alt={`Slide ${i + 1}`}
//               fill
//               style={{ objectFit: 'cover' }}
//               priority
//             />
//             <div
//               className="d-flex justify-content-center align-items-center"
//               style={{
//                 position: 'absolute',
//                 top: 0,
//                 left: 0,
//                 width: '100%',
//                 height: '100%',
//                 backgroundColor: 'rgba(0, 0, 0, 0.4)',
//                 color: '#fff',
//                 textAlign: 'center',
//               }}
//             >
//               <div>
//                 <h3>{`Slide ${i + 1} Label`}</h3>
//                 <p>
//                   {i === 0
//                     ? 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
//                     : i === 1
//                     ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
//                     : 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// }

// export default ControlledCarousel;

// import { useState } from 'react';
// import Image from 'next/image';
// import Carousel from 'react-bootstrap/Carousel';
// import slide1 from '@/public/assets/slide1.jpg';

// function ControlledCarousel() {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <Carousel activeIndex={index} onSelect={handleSelect} interval={5000}>
//       {[1, 2, 3].map((_, i) => (
//         <Carousel.Item key={i}>
//           <div style={{ position: 'relative', width: '100%', height: '80vh', overflow: 'hidden' }}>
//             <Image
//               src={slide1}
//               alt={`Slide ${i + 1}`}
//               fill
//               style={{ objectFit: 'cover' }}
//               priority
//             />
//             <div
//               className="d-flex justify-content-center align-items-center"
//               style={{
//                 position: 'absolute',
//                 top: 0,
//                 left: 0,
//                 width: '100%',
//                 height: '100%',
//                 backgroundColor: 'rgba(0, 0, 0, 0.4)',
//                 color: '#fff',
//                 textAlign: 'center',
//               }}
//             >
//               <div>
//                 <h3>{`Slide ${i + 1} Label`}</h3>
//                 <p>
//                   {i === 0
//                     ? 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
//                     : i === 1
//                     ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
//                     : 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// }

// export default ControlledCarousel;

// import { useState } from "react";
// import Image from "next/image";
// import Carousel from "react-bootstrap/Carousel";
// import slide1 from "@/public/assets/slide1.jpg";
// import cctv2 from "@/public/assets/cctv2.jpeg";
// import alarm from "@/public/assets/alarm.jpeg";

// function ControlledCarousel() {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <>
//       <style jsx>{`
//         .carousel-container {
//           position: relative;
//           width: 100%;
//           height: 80vh;
//           overflow: hidden;
//         }

//         @media (max-width: 768px) {
//           .carousel-container {
//             height: 40vh; /* Reduce height on mobile */
//           }
//         }
//       `}</style>

//       <Carousel activeIndex={index} onSelect={handleSelect} interval={5000}>
//         {[1, 2, 3].map((_, i) => (
//           <Carousel.Item key={i}>
//             <div className="carousel-container">
//               <Image
//                 src={cctv2}
//                 alt={`Slide ${i + 1}`}
//                 fill
//                 style={{ objectFit: "cover" }}
//                 priority
//               />
//               <div
//                 className="d-flex justify-content-center align-items-center"
//                 style={{
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   width: "100%",
//                   height: "100%",
//                   backgroundColor: "rgba(0, 0, 0, 0.4)",
//                   color: "#fff",
//                   textAlign: "center",
//                 }}
//               >
//                 <div>
//                   <h3>{`Slide ${i + 1} Label`}</h3>
//                   <p>
//                     {i === 0
//                       ? "Nulla vitae elit libero, a pharetra augue mollis interdum."
//                       : i === 1
//                       ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
//                       : "Praesent commodo cursus magna, vel scelerisque nisl consectetur."}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </Carousel.Item>
//         ))}
//       </Carousel>
//     </>
//   );
// }

// export default ControlledCarousel;

"use client";

import { useState } from "react";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import slide1 from "@/public/assets/slide1.jpg";
import cctv3 from "@/public/assets/cctv3.jpg";
import alarm1 from "@/public/assets/alarm1.jpg";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const slides = [
    {
      image: slide1,
      label: "High-Quality Installations",
      description: "Providing top-notch electrical solutions since 2004.",
    },
    {
      image: cctv3,
      label: "Advanced Surveillance",
      description: "Secure your premises with our cutting-edge CCTV systems.",
    },
    {
      image: alarm1,
      label: "Reliable Alarm Systems",
      description: "Stay protected with our smart alarm & access solutions.",
    },
  ];

  return (
    <>
      <style jsx>{`
        .carousel-container {
          position: relative;
          width: 100%;
          height: 80vh;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .carousel-container {
            height: 40vh;
          }
        }

        .carousel-caption {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.4);
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .carousel-caption h3 {
          font-size: 2rem;
        }

        .carousel-caption p {
          font-size: 1.1rem;
        }
      `}</style>

      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={5000}
        fade
      >
        {slides.map((slide, i) => (
          <Carousel.Item key={i}>
            <div className="carousel-container">
              <Image
                src={slide.image}
                alt={slide.label}
                fill
                style={{ objectFit: "cover" }}
                priority={i === 0}
              />
              <div className="carousel-caption">
                <div>
                  <h3>{slide.label}</h3>
                  <p>{slide.description}</p>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default ControlledCarousel;
