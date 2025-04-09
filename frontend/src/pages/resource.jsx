import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Container,
  Link,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Rumble from "../assets/rumble.png";
import TheGameChanger from "../assets/thegamechanger.png";
import TipsAndTrends from "../assets/tipsandtrends.png";
import TheFitnessProvisionals from "../assets/thefitnessprovisionals.png";
import ModoYogaSeattle from "../assets/modoyogaseattle.png";
import Marketing from "../assets/marketing.png";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const CaseStudyComponent = () => {
  const topics = [
    "All",
    "Boxing",
    "Business owner resources",
    "CrossFit",
    "Cycling",
    "Digital/E-Learning",
    "Gym",
    "Marketing",
    "Running",
    "Start-ups",
    "Social media",
    "Spa",
    "Yoga",
  ];

  const resources = [
    {
      id: 1,
      type: "E-BOOK",
      title: "The GameChangers Report",
      image: TheGameChanger,
    },
    {
      id: 2,
      type: "CASE STUDY",
      title: "Rumble",
      image: Rumble,
    },
    {
      id: 3,
      type: "E-BOOK",
      title: "Tips and Trends for Fitness Business Owners in 2020",
      image: TipsAndTrends,
    },
    {
      id: 4,
      type: "E-BOOK",
      title: "The Fitness Professional's Guide to Social Media Strategy",
      image: TheFitnessProvisionals,
    },
    {
      id: 5,
      type: "CASE STUDY",
      title:
        "Modo Yoga Seattle — Exclusivity with Zonebook as the road to success",
      image: ModoYogaSeattle,
    },
    {
      id: 6,
      type: "E-BOOK",
      title: "Marketing 101: Creating Your Studio's Marketing Plan",
      image: Marketing,
    },
  ];

  return (
    <Box>
      <Container maxWidth="lg">
        {/* First Section - Rumble Case Study */}
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          sx={{ mt: 8 }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              component="img"
              src={Rumble}
              alt="Rumble Logo"
              sx={{
                width: "70%",
                height: "100%",
                maxWidth: "100%",
                objectFit: "contain",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Case Study
              </Typography>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{ fontWeight: "bold", mb: 2 }}
              >
                Rumble
              </Typography>
              <Typography
                variant="body1"
                color="text.primary"
                paragraph
                sx={{ mb: 2 }}
              >
                Through collaboration, support and advanced technology, Zonebook
                worked hand in hand with Rumble to bring their concept of 'group
                fitness for the individual' to an even wider audience
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Button
                  color="primary"
                  sx={{
                    textTransform: "none",
                    pl: 0,
                    mb: 4,
                    color: "black", // Setting the text color to black
                    fontWeight: 500, // Making the font weight 500
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  Read more &gt;
                </Button>

                {/* Pagination Dots */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    width: "100%",
                    mt: 1,
                  }}
                >
                  {[0, 1, 2, 3].map((dot, index) => (
                    <Box
                      key={index}
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        mx: 0.5,
                        backgroundColor:
                          index === 1 ? "text.primary" : "action.disabled",
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Second Section - Resource Library */}
        <Box sx={{ py: 8, mt: 4 }}>
          <Typography
            variant="h4"
            component="h1"
            sx={{ fontWeight: "bold", mb: 3 }}
          >
            Resource library
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              borderBottom: "1px solid #eee",
              pb: 2,
              mb: 4,
            }}
          >
            <Link
              href="#"
              underline="none"
              sx={{
                display: "flex",
                alignItems: "center",
                color: "text.primary",
              }}
            >
              All
            </Link>
            <Typography sx={{ color: "text.secondary" }}>•</Typography>
            <Link
              href="#"
              underline="none"
              sx={{
                display: "flex",
                alignItems: "center",
                color: "text.secondary",
              }}
            >
              Case Studies
            </Link>
            <Typography sx={{ color: "text.secondary" }}>•</Typography>
            <Link
              href="#"
              underline="none"
              sx={{
                display: "flex",
                alignItems: "center",
                color: "text.secondary",
              }}
            >
              E-Books
            </Link>
            <Typography sx={{ color: "text.secondary" }}>•</Typography>
            <Link
              href="#"
              underline="none"
              sx={{
                display: "flex",
                alignItems: "center",
                color: "text.secondary",
              }}
            >
              Videos
            </Link>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
                Filter by topic
              </Typography>
              <List dense sx={{ p: 0 }}>
                {topics.map((topic, index) => (
                  <ListItem key={index} disablePadding sx={{ mb: 1 }}>
                    <ListItemText
                      primary={
                        <Typography
                          variant="body2"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            "&:before": {
                              content: '""',
                              display: "inline-block",
                              width: "5px",
                              height: "5px",
                              borderRadius: "50%",
                              bgcolor: "text.primary",
                              mr: 1,
                            },
                          }}
                        >
                          {topic}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>

            <Grid item xs={12} md={9}>
              <Grid container spacing={3}>
                {resources.map((resource) => (
                  <Grid item xs={12} sm={6} key={resource.id}>
                    <Box
                      component="a"
                      href="#"
                      sx={{
                        textDecoration: "none",
                        color: "inherit",
                        display: "block",
                        mb: 4,
                      }}
                    >
                      <Box
                        component="img"
                        src={resource.image}
                        alt={resource.title}
                        sx={{
                          width: "100%",
                          height: "80%",
                          objectFit: "cover",
                          mb: 1,
                          borderRadius: 1,
                        }}
                      />
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ display: "block", mb: 0.5 }}
                      >
                        {resource.type}
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                        {resource.title}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Box
                  component="a"
                  href="#"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mr: 2,
                    color: "text.primary",
                  }}
                >
                  <KeyboardArrowLeftIcon fontSize="small" />
                </Box>
                <Typography variant="body2" sx={{ mx: 1 }}>
                  Page 1 of 5
                </Typography>
                <Box
                  component="a"
                  href="#"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    ml: 2,
                    color: "text.primary",
                  }}
                >
                  <KeyboardArrowRightIcon fontSize="small" />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          textAlign: "center",
          padding: "40px 0",
        }}
      >
        <Typography variant="h6" sx={{ color: "#000" }}>
          From our blog
        </Typography>
        <Button
          variant="outlined"
          sx={{ marginTop: "10px", borderColor: "#000", color: "#000" }}
        >
          Visit our blog
        </Button>
      </Box>

      {/* Subscription Section */}
      <Box
        sx={{
          backgroundColor: "#5f6b4c",
          padding: "40px 0",
          color: "white",
        }}
      >
        <Container>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", color: "white" }}
            >
              Get insights, event info and more
            </Typography>
            <Typography variant="h6">
              Thanks for submitting the form !
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default CaseStudyComponent;
