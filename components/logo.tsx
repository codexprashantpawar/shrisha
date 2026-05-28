// 'use client';

// export default function Logo() {
//   return (
//     <div className="flex flex-col">
//       <span
//         className="text-white font-bold tracking-[0.15em] leading-none"
//         style={{ fontSize: '20px', fontFamily: "'Montserrat', sans-serif" }}
//       >
//         SHRISHA
//       </span>
//       <svg width="110" height="10" viewBox="0 0 110 10" className="mt-1">
//         <line x1="0" y1="5" x2="110" y2="5" stroke="rgba(212,175,55,0.5)" strokeWidth="0.5" />
//         {[0,8,16,24,32,40,48,56,64,72,80,88,96,104,110].map((x, i) => (
//           <line key={x} x1={x} y1={i % 4 === 0 ? 1 : 3} x2={x} y2={i % 4 === 0 ? 9 : 7}
//             stroke="rgba(212,175,55,0.5)" strokeWidth="0.7" />
//         ))}
//       </svg>
//     </div>
//   );
// }


import Image from 'next/image';

export default function Logo() {
  return (
    <Image
      src="/images/media/logo.png"
      alt="Shrisha"
      width={130}
      height={55}
      className="object-contain"
    />
  );
}