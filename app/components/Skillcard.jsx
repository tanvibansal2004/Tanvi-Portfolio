// import React from "react";
// import Image from "next/image";

// const Skillcard = ({ image, skill }) => {
//   return (
//     <div className="flex-shrink-0 w-20 mx-4 text-center">
//       <Image
//         src={image}
//         alt={skill}
//         height={100}
//         width={100}
//         className="mx-auto h-[100px] w-[100px] object-contain"
//       />
//       <p className="text-lg pt-3 text-center mx-auto">{skill}</p>
//     </div>
//   );
// };

// export default Skillcard;

import React from 'react';
import Image from 'next/image';

const Skillcard = ({ image, skill }) => {
  return (
    <div className='flex-shrink-0 w-[120px] mx-4 text-center'>
      <Image
        src={image}
        alt={skill}
        height={100}
        width={100}
        className='mx-auto h-[100px] w-[100px] object-contain'
      />
      <p className='text-sm pt-2 text-[#ADB7BE] font-medium'>{skill}</p>
    </div>
  );
};

export default Skillcard;
