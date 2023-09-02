import { useState, useEffect } from "react";
import YouTube from "react-youtube";

interface YouTubePlayer {
  videoId: string;
}

const YouTubePlayer: React.FC<YouTubePlayer> = ({ videoId }) => {
  const [opts, setOpts] = useState({
    height: "150px",
    width: "300px",
    playerVars: {
      autoplay: 0,
    },
  });
  const handleResize = () => {
    if (screen.width >= 767) {
      setOpts({
        height: "400px",
        width: "700px",
        playerVars: {
          autoplay: 0,
        },
      });
    } else if (screen.width < 767 && screen.width > 530) {
      setOpts({
        height: "300px",
        width: "500px",
        playerVars: {
          autoplay: 0,
        },
      });
    } else if (screen.width <= 530) {
      setOpts({
        height: "150px",
        width: "300px",
        playerVars: {
          autoplay: 0,
        },
      });
    }
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return <YouTube videoId={videoId} opts={opts} />;
};

export default YouTubePlayer;
