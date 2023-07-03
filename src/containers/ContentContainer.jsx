import Grid from "@mui/material/Unstable_Grid2/Grid2";

const ContentContainer = ({ children }) => {
  return (
    <Grid
      xs={12}
      sm={12}
      md={9}
      lg={10}
      xlg={10}
      sx={{ backgroundColor: "whitesmoke", }}
    >
      {children}
    </Grid>
  );
};

export default ContentContainer;
