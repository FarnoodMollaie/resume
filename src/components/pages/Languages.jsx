import { useEffect, useState } from "react";
import { Typography, Box, LinearProgress } from "@mui/material";
import CustomChip from "./CustomChip";
const Languages = () => {
  const [english, setEnglish] = useState(0);
  const [french, setFrench] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setEnglish((prev) => {
        const diff = Math.floor(Math.random() * 10);
        return Math.min(prev + diff, 75);
      });
      setFrench((prev) => {
        const diff = Math.floor(Math.random() * 10);
        return Math.min(prev + diff, 20);
      });
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <CustomChip label={"انگلیسی"} color={"#ff79c6"} align={"left"} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: "100%", mx: 2 }}>
          <LinearProgress
            variant="determinate"
            value={english}
            color="secondary"
            sx={{
              "& .MuiLinearProgress-barColorSecondary": {
                backgroundColor: "#ff79c6",
              },
            }}
          />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="black">{`${Math.round(
            english
          )}%`}</Typography>
        </Box>
      </Box>

      <CustomChip label={"فرانسوی"} color={"#bd93f9"} align={"left"} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 2,
        }}
      >
        <Box sx={{ width: "100%", mx: 2 }}>
          <LinearProgress
            variant="determinate"
            value={french}
            color="secondary"
          />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="black">{`${Math.round(
            french
          )}%`}</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Languages;
