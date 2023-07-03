import { CircularProgress, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const Skill = (props) => {
  return (
    <Grid xs={6} sm={3} lg={3} sx={{ textAlign: "center" }}>
      <Box
        sx={{
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <CircularProgress
          size={100}
          variant="determinate"
          sx={{ color: props.color }}
          value={props.value}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="caption"
            sx={{ fontWeight: "bold" }}
            component="div"
            color="secondary"
          >
            {`${Math.round(props.value)}%`}
          </Typography>
        </Box>
      </Box>
      <Typography sx={{ color: "black" }}>{props.label}</Typography>
    </Grid>
  );
};

export default Skill;
