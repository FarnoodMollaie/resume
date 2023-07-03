import { Avatar, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Helmet } from "react-helmet-async";
import avatar from "../assets/farnood - mehr 1399.jpg";
import DevInfo from "../components/pages/DevInfo";
import { Container } from "@mui/system";
import CustomChip from "../components/pages/CustomChip";

const About = (props) => {
  const ImgContainer = styled("div")(({ theme }) => ({
    [theme.breakpoints.up("sm")]: {
      alignItems: "start",
      flexDirection: "row",
    },
  }));
  return (
    <>
      <Helmet>
        <title>{props.title}</title>
      </Helmet>
      <Box sx={{ height: "100vh", overflowY: "scroll", direction: "ltr" }}>
        <CustomChip label={"درباره من"} color={"#4fc3f7"} />
        <Container sx={{ mt: 2 }}>
          <ImgContainer
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              variant="rounded"
              src={avatar}
              alt="Farnood"
              sx={{
                width: 250,
                height: 250,
                display: {
                  xs: "block",
                  sm: "block",
                  md: "block",
                  lg: "none",
                  xlg: "none",
                },
              }}
            >
              FM
            </Avatar>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <DevInfo>نام ونام خانوادگی: فرنود ملائی</DevInfo>
              <DevInfo>شهر: تهران</DevInfo>
              <DevInfo>ایمیل: farnood.molaie@gmail.com</DevInfo>
              <DevInfo>شغل: دانشجو</DevInfo>
            </Box>
          </ImgContainer>
        </Container>
        <Container
          sx={{
            width: "100%",
            my: 4,
            textAlign: "justify",
          }}
        >
          <Typography variant="h6">
            اینجانب فرنود ملائی متولد مرداد ماه 1381 دانشجوی رشته کامپیوتر - نرم
            افزار در دانشگاه آزاد اسلامی واحد تهران شمال هستم. علاقمند به کسب
            تجربه عملی و روبه رو شدن با چالش های واقعی و قابل لمس محیط شغلی می
            باشم.
          </Typography>
        </Container>
        <CustomChip label={"تحصیلات"} color={"#4fc3f7"} />

        <Container>
          <Box sx={{ my: 2 }}>
            <Typography sx={{ mb: 1 }}>
              دیپلم ریاضی فیزیک ـ دبیرستان امام موسی صدر ـ فارغ التحصیل سال 1399
            </Typography>
            <Typography>
              لیسانس ـ مهندسی کامپیوتر ـ دانشگاه آزاد تهران شمال ـ در حال تحصیل
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default About;
