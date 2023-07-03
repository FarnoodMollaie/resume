import { KeyboardArrowLeftRounded } from "@mui/icons-material";
import { Typography } from "@mui/material";

const DevInfo = ({ children }) => {
  return (
    <>
      <Typography sx={{ display: "flex", mt: 2, fontWeight: "bold" }}>
        <KeyboardArrowLeftRounded color="primary" />
        {children}
      </Typography>
    </>
  );
};

export default DevInfo;
