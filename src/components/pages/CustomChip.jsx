import { useEffect, useState } from "react";
import { Divider, Chip, Typography, Slide } from "@mui/material";
const CustomChip = (props) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, []);
  return (
    <>
      <Slide
        direction="left"
        in={loading}
        style={{
          transitionDelay: loading ? "200ms" : "0ms",
          transitionDuration: loading ? "400ms" : "0ms",
        }}
      >
        <Divider
          textAlign={props.align}
          variant="middle"
          sx={{
            mt: 2.5,
            "&::before,&::after": {
              borderColor: `${props.color}`,
            },
          }}
        >
          <Chip
            label={
              <Typography color="black" sx={{ fontWeight: "bold" }}>
                {props.label}
              </Typography>
            }
            sx={{
              backgroundColor: `${props.color}`,
              p: 3,
            }}
          />
        </Divider>
      </Slide>
    </>
  );
};

export default CustomChip;
