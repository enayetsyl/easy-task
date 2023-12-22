import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WorkIcon from "@mui/icons-material/Work";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";
import { Box, Paper, Typography } from "@mui/material";

const Footer = () => {
  const [value, setValue] = React.useState("portfolio");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper elevation={20}>
      <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#1976D2",
      }}
    >
      <BottomNavigation value={value} onChange={handleChange}>

        <BottomNavigationAction
          label="Portfolio"
          value="portfolio"
          icon={<WorkIcon />}
          component={Link}
          to="https://enayet-portfolio.netlify.app/"
          target="_blank"
        />

        <BottomNavigationAction
          label="Linkedin"
          value="linkedin"
          icon={<LinkedInIcon />}
          component={Link}
          to="https://www.linkedin.com/in/md-enayetur-rahman/"
          target="_blank"
        />

        <BottomNavigationAction
          label="Facebook"
          value="facebook"
          icon={<FacebookIcon />}
          component={Link}
          to="https://www.facebook.com/profile.php?id=100094416483981"
          target="_blank"
        />

        <BottomNavigationAction
          label="Twitter"
          value="twitter"
          icon={<TwitterIcon />}
          component={Link}
          to="https://twitter.com/enayetu_syl"
          target="_blank"
        />
      </BottomNavigation>
      <Typography textAlign="center" variant="body2"
      color={'#fff'}
      >
        copyright@ Md Enayetur Rahman 01730197620
      </Typography>
    </Box>
    </Paper>
  );
};

export default Footer;
