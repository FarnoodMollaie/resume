import { useEffect, useState } from "react";
import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MainLayout from "./layouts/MainLayout";
import SidebarContainer from "./containers/SidebarContainer";
import ContentContainer from "./containers/ContentContainer";
import Sidebar from "./components/sidebar/Sidebar";
import Page from "./components/pages/Page";
import MainContext from "./context/MainContext";
import DrawerFab from "./components/drawer/DrawerFab";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Abilities from "./Pages/Abilities";
import SwipeableViews from "react-swipeable-views";

const App = () => {
  const theme = useTheme();
  const [page, setPage] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    if (isMdUp) {
      setDrawerOpen(false);
    }
  }, [isMdUp]);
  const handlePageChange = (event, newValue) => {
    setPage(newValue);
  };
  return (
    <MainContext.Provider
      value={{
        page,
        setPage,
        handlePageChange,
        drawerOpen,
        setDrawerOpen,
      }}
    >
      <MainLayout>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <DrawerFab />
        <ContentContainer>
          <SwipeableViews index={page} onChangeIndex={handlePageChange}>
            <Page value={page} index={0}>
              <Home title="صفحه اصلی" />
            </Page>
            <Page value={page} index={1}>
              <About title="درباره من" />
            </Page>
            <Page value={page} index={2}>
              <Typography color="whitesmoke" variant="h6">
                <Abilities title="توانایی ها" />
              </Typography>
            </Page>
            <Page value={page} index={3}>
              <Typography color="whitesmoke" variant="h6">
                نمونه کارها
              </Typography>
            </Page>
          </SwipeableViews>
        </ContentContainer>
      </MainLayout>
    </MainContext.Provider>
  );
};

export default App;
