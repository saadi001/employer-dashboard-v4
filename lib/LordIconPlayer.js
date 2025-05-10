"use client";

import { Player } from "@lordicon/react";
import { useRef } from "react";

const dashboardIcon = require("../app/assets/json/dashboard.json");

const LordIconPlayer = () => {
  const playerRef = useRef(null);

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current?.playFromBeginning();
    }
  }, []);

  return <Player ref={playerRef} icon={dashboardIcon} trigger="hover" />;
};

export default LordIconPlayer;

// const LordIconPlayer = ({
//   iconData,
//   trigger = "hover",
//   size = 40,
//   stroke = "regular",
//   onComplete,
// }) => {
//   return (
//     <Player
//       icon={iconData}
//       trigger={trigger}
//       size={size}
//       stroke={stroke}
//       //   className={className}
//     />
//   );
// };

// export default LordIconPlayer;
