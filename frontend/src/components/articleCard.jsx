import React from 'react';
import { Box, Card, CardMedia, CardContent, Typography, Chip, Grid } from '@mui/material';

const ArticleCard = ({ title, content, image, tag, isMain }) => {
  if (isMain) {
    // Main Article: No Card Border
    return (
      <Grid container spacing={2} sx={{ margin: 2, alignItems: 'center' }}>
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            image={image}
            alt={title}
            sx={{
              width: '100%',
              height: 300,
              objectFit: 'cover',
              borderRadius: 2,
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ padding: 3 }}>
            <Chip label={tag} color="success" sx={{ marginBottom: 1 }} />
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
              {title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {content}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    );
  }

  // Sub-Articles: With Card Border and Image on the Left
  return (
    <Card
      sx={{
        margin: 2,
        boxShadow: 3,
        borderRadius: 2,
        display: 'flex',
      }}
    >
      <Grid container spacing={0}>
        <Grid item xs={12} md={5}>
          <CardMedia
            component="img"
            image={image}
            alt={title}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 8,
            }}
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <CardContent sx={{ padding: 3 }}>
            <Chip label={tag} color="success" sx={{ marginBottom: 1 }} />
            <Typography variant="h5" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {content}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ArticleCard;
