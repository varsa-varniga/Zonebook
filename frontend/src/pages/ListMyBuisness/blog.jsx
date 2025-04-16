import React from 'react';
import { Container, Grid, Box } from '@mui/material';
// import Navbar from '../../components/navbarListmybuisness';
// import Footer from '../../components/Footer';
import ArticleCard from '../../components/articleCard';
import Newsletter from '../../components/newLetter';
import articles from '../../components/articles';

const ListofMyBuisnessBlog = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Container sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={4}>
          {/* Main Article */}
          <Grid item xs={12}>
            <ArticleCard {...articles[0]} isMain={true} />
          </Grid>

          {/* Newsletter and First Sub-Article Side by Side */}
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <Box sx={{ height: '100%', display: 'flex' }}>
                <Newsletter />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ height: '100%', display: 'flex' }}>
                <ArticleCard {...articles[1]} />
              </Box>
            </Grid>
          </Grid>

          {/* Remaining Sub Articles */}
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {articles.slice(2).map((article, index) => (
              <Grid item xs={12} md={6} key={index}>
                <ArticleCard {...article} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
      {/* <Footer /> */}
    </>
  );
};

export default ListofMyBuisnessBlog;
