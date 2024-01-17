import { Typography } from "@mui/material";
import SwiperComponent from "./Swiper";

const Review = () => {
  return (
    <div className="space-y-5 my-14">
      <Typography variant="h3"
      textAlign='center'
      pb={6}
      >
        Our User Say
      </Typography>
      <SwiperComponent/>
    </div>
  );
};

export default Review;