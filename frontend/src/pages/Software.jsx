import { Box, Typography, Grid, Link } from '@mui/material';

const softwareList = [
  "AimHarder", "Acuity", "Angulare", "Arketa", "BeWe", "Blossom", "Bookee booker",
  "BoxMagic", "Bsport byChronos", "Club Ready", "CODEX", "Control Plus",
  "Cow Face (CowTinker)", "Dibs", "DIG", "Evo", "Evini", "fitDEGREE",
  "FlexyBox", "GetGrib", "Glofox", "GymControl", "GymMaster", "GymTool", "Hapana",
  "In2", "LemonCode", "MakeSweat", "MarianaTek", "Mindbody Appointments",
  "Mindbody Classes", "Momence", "MyTime", "OClass (Omni)", "Otter", "PerfectGym",
  "Pike13", "Plan2Play", "Recess", "Resamania", "Rezerv", "SimplyBook",
  "Sport Solution", "Square", "Stamy", "StudioGrowth", "Team Up", "TecnoFit", "TimP",
  "Trainin", "Vibefam", "Virtuagym", "Walla", "Wix", "Wellness Living", "WodBoard",
  "Wondr", "Yogo", "Zenoti", "Zingfit", "Zoezi", "Square", "Stamy", "TimP"
];

// Helper to split array into 4 columns
const chunkArray = (array, chunks) =>
  Array.from({ length: chunks }, (_, i) =>
    array.slice(i * Math.ceil(array.length / chunks), (i + 1) * Math.ceil(array.length / chunks))
  );

const Software = () => {
  const columns = chunkArray(softwareList, 4); // Split into 4 columns

  return (
    <Box
      sx={{
        padding: '4rem 2rem',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" gutterBottom>
        All supported software
      </Typography>

      <Typography variant="body1" sx={{ mb: 4 }}>
        Learn how to integrate your specific system{' '}
        <Link href="#" underline="hover" color="#5F6F52">
          here
        </Link>.
      </Typography>

      <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: '80%' }}>
        {columns.map((column, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            {column.map((software) => (
              <Typography key={software} variant="body2" sx={{ lineHeight: 2, textAlign: 'justify' }}>
                • {software}
              </Typography>
            ))}
          </Grid>
        ))}
      </Grid>

      <Typography variant="h6" sx={{ mt: 6 }}>
        Want to add an integration?
      </Typography>
      <Typography>
        Click{' '}
        <Link href="#" underline="hover" color="#5F6F52">
          here
        </Link>{' '}
        to learn more about getting your system set up as an integration.
      </Typography>
    </Box>



  );
};

export default Software;
