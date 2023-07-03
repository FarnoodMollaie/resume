import { createContext } from "react";

const MainContext = createContext({
  page: 0,
  setPage: () => {},
  drawerOpen: false,
  setDrawerOpen: () => {},
  handlePageChange: () => {},
});
export default MainContext;
