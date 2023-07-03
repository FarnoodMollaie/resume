import { useContext } from "react";
import { Tabs, Tab } from "@mui/material";
import {
  CallRounded,
  ColorLensRounded,
  EngineeringRounded,
  HomeRounded,
  PersonRounded,
} from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import MainContext from "../../context/MainContext";

const SidebarTab = () => {
  const { page, handlePageChange, setDrawerOpen } = useContext(MainContext);
  const tabProps = ({ index }) => {
    return {
      id: `sidebar-${index}`,
      "aria-controls": `sidebar-tab-${index}`,
    };
  };
  const tabs = [
    { label: "صفحه اصلی", icon: <HomeRounded />, ...tabProps(0) },
    { label: "درباره من ", icon: <PersonRounded />, ...tabProps(1) },
    { label: " توانایی ها ", icon: <EngineeringRounded />, ...tabProps(2) },
    {
      label: "نمونه کارها ",
      icon: <ColorLensRounded />,
      ...tabProps(3),
      disabled: true,
    },
  ];
  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      scrollButtons="auto"
      allowScrollButtonsMobile
      value={page}
      onChange={handlePageChange}
      
    >
      {tabs.map((t, index) => (
        <Tab
          key={index}
          label={t.label}
          icon={t.icon}
          iconPosition="start"
          onClick={() => setDrawerOpen(false)}
          disabled={t.disable}
          {...t}
          sx={{
            borderRadius: 5,
            backgroundColor: grey[800],
            mx: 1,
            my: 0.5,
            "&.MuiTab-root": {
              minHeight: 70,
            },
          }}
        />
      ))}
    </Tabs>
  );
};

export default SidebarTab;
