import { useContext } from "react";
import { MenuRounded } from "@mui/icons-material";
import { Box, Fab } from "@mui/material";
import { red } from "@mui/material/colors";
import MainContext from "../../context/MainContext";

const DrawerFab = () => {
  const { setDrawerOpen } = useContext(MainContext);
  return (
    <>
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
            xl: "none",
          },
          position: "absolute",
          m: 3,
        }}
      >
        <Fab
          size="small"
          sx={{ backgroundColor: red[500] }}
          aria-label="menu"
          onClick={() => setDrawerOpen(true)}
        >
          <MenuRounded />
        </Fab>
      </Box>
    </>
  );
};

export default DrawerFab;
