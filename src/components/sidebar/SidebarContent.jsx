import { Box, Divider } from "@mui/material";
import SidebarHeader from "./SidebarHeader";
import SidebarTab from "./SidebarTab";

const SidebarContent = () => {
  return (
    <Box
      sx={{
        justifyContent: "center",
        textAlign: "center",
        mt: 2,
      }}
    >
      <SidebarHeader />
      <Divider variant="middle" sx={{ mt: 1 }} />
      <SidebarTab />
    </Box>
  );
};

export default SidebarContent;
