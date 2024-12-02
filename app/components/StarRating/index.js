// import React from 'react';
// import { Star } from 'lucide-react';

// const StarRating = ({ rating, maxRating = 5 }) => {
//   return (
//     <div className="flex items-center">
//       {[...Array(maxRating)].map((_, index) => {
//         const starValue = index + 1;
//         return (
//           <Star
//             key={index}
//             className={`w-5 h-5 ${
//               starValue <= rating
//                 ? 'text-yellow-400 fill-current'
//                 : starValue - 0.5 <= rating
//                 ? 'text-yellow-400 fill-current star-half'
//                 : 'text-gray-300'
//             }`}
//           />
//         );
//       })}
//       <span className="ml-2">{rating.toFixed(1)}</span>
//     </div>
//   );
// };

// export default StarRating;

import React from 'react';
import { Star } from 'lucide-react';

const StarRating = ({ rating, maxRating = 5 }) => {
  return (
    <div className="flex items-center">
      {[...Array(maxRating)].map((_, index) => {
        const starValue = index + 1;
        const fillPercentage = Math.min(100, Math.max(0, (rating - index) * 100));

        return (
          <div key={index} className="relative">
            <Star
              className="w-5 h-5 text-gray-300 fill-current"
            />
            <div
              style={{
                width: `${fillPercentage}%`,
                overflow: 'hidden',
                position: 'absolute',
                top: 0,
                left: 0,
              }}
            >
              <Star
                className="w-5 h-5 text-[#ffb400] fill-current"
              />
            </div>
          </div>
        );
      })}
      {/* <span className="ml-2">{rating.toFixed(1)}</span> */}
    </div>
  );
};

export default StarRating;