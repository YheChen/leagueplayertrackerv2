// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function ChampionBanner({ championID }) {
//   const [championName, setChampionName] = useState(null);

//   useEffect(() => {
//     async function fetchChampionData() {
//       try {
//         // Fetch the champion data
//         const response = await axios.get(
//           "https://ddragon.leagueoflegends.com/cdn/14.21.1/data/en_US/champion.json"
//         );

//         const champions = response.data.data;

//         // Find the champion with the matching championID
//         for (const championKey in champions) {
//           if (champions[championKey].key === String(championID)) {
//             setChampionName(champions[championKey].id);
//             break;
//           }
//         }
//       } catch (error) {
//         console.error("Error fetching champion data:", error);
//       }
//     }

//     fetchChampionData();
//   }, [championID]);

//   if (!championName) return <div>Champion Banner Unavailable</div>;

//   const splashUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_0.jpg`;
//   return (
//     <div
//       className="champion-banner w-full h-64 bg-cover bg-center rounded-lg shadow-lg"
//       style={{
//         backgroundImage: `url(${splashUrl})`,
//         backgroundPosition: "center", // Centers the image before applying the crop
//         backgroundSize: "100%", // Zooms in the image
//         height: "400px", // Adjust the height if necessary
//         clipPath: "polygon(0%)", // Crops: top 1/8, left 1/8, right 1/8, bottom 1/2
//       }}
//     ></div>
//   );
// }
