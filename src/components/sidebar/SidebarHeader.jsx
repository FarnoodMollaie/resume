import { GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Avatar, Typography, IconButton } from "@mui/material";
import avatar from "../../assets/farnood - mehr 1399.jpg";

const SidebarHeader = () => {
  return (
    <>
      <Avatar
        src={avatar}
        alt="Farnood"
        variant="rounded"
        sx={{
          width: 200,
          height: 200,
          margin: "0 auto",
          display: {
            xs: "none",
            sm: "none",
            md: "none",
            lg: "block",
            xl: "block",
          },
        }}
      >
        Fr
      </Avatar>
      <Typography variant="h5" color="whitesmoke">
        فرنود ملائی
      </Typography>
      <Typography variant="body2" color="whitesmoke">
        Front-end Developer
      </Typography>
      <Box sx={{ margin: "0 auto", textAlign: "center" }}>
        <IconButton>
          <a
            href="https://github.com/FarnoodMollaie/farnood.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub
              sx={{
                color: "gray",
                "&:hover": {
                  color: "#ffff",
                },
              }}
            />
          </a>
        </IconButton>
        <IconButton>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn
              sx={{
                color: "gray",
                "&:hover": {
                  color: "#ffff",
                },
              }}
            />
          </a>
        </IconButton>
      </Box>
    </>
  );
};

export default SidebarHeader;
