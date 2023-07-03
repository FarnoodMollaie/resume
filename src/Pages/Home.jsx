import { useEffect, useRef, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import { Box, Typography } from "@mui/material";
import Typed from "typed.js";
import bg1 from "../assets/5.jpg";

import { Helmet } from "react-helmet-async";

const Home = ( props ) => {
  const [index, setIndex] = useState(0);
  const nameEl = useRef(null);
  const infoEl = useRef(null);
  const strings = ["front-end developer ", "دانشجو مهندسی کامپیوتر", "درحال پیشرفت"];
  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: ["فرنود ملائی"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 80,
      loop: false,
      showCursor: false,
    });
    const text = setInterval(() => {
      setIndex((index) => index + 1);
    }, 3000);
    return () => {
      typedName.destroy();
      clearInterval(text);
    };
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `url(${bg1})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <Helmet>
        <title>{props.title}</title>
      </Helmet>
      <Typography
        ref={nameEl}
        variant="h2"
        color="#ff5555"
        sx={{ mb: 1 }}
      ></Typography>
      <Typography ref={infoEl} variant="h3" color="#f8f8f2">
        <TextTransition springConfig={presets.wobbly}>
          {strings[index % strings.length]}
        </TextTransition>
      </Typography>
    </Box>
  );
};

export default Home;
