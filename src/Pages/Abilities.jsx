import { Helmet } from "react-helmet-async";
import { Box } from "@mui/material";
import CustomChip from "../components/pages/CustomChip";
import Skills from "../components/pages/Skills";
import Languages from "../components/pages/Languages";
const Abilities = (props) => {
  return (
    <>
      <Helmet>
        <title>{props.title} </title>
      </Helmet>
      <Box sx={{ height: "100vh", overflow: "scroll", direction: "ltr" }}>
        <CustomChip label={"مهارت های من"} color={"#4fc3f7"} />
        <Skills />
        <CustomChip label={"زبان های خارجی"} color={"#4fc3f7"} />
        <Languages />
      </Box>
    </>
  );
};

export default Abilities;
