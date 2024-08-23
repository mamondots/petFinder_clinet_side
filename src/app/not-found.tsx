/* eslint-disable react/no-unescaped-entities */
import { Container, Typography, Button, Paper, Grid } from "@mui/material";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <Container 
      maxWidth="xl" 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh', 
        textAlign: 'center',
        background: 'linear-gradient(135deg, #f5f5f5, #e0e0e0)' 
      }}
    >
      <Typography 
        variant="h1" 
        component="h1" 
        color="primary" 
        sx={{ 
          fontWeight: 700, 
          fontSize: { xs: '3rem', sm: "5rem", md: '6rem', lg: '7rem' }, 
          mb: { xs: 2, sm: 4 },
          mt: { xs: 5, sm: 8, md: 10 }
        }}
      >
        404
      </Typography>
      <Typography 
        variant="h4" 
        component="h2" 
        color="text.primary" 
        sx={{ 
          mb: { xs: 2, sm: 3, md: 4 }, 
          fontWeight: 600 
        }}
      >
        Oops! Page Not Found
      </Typography>
      <Typography 
        variant="body1" 
        color="text.secondary" 
        sx={{ 
          mb: { xs: 3, sm: 4, md: 5 } 
        }}
      >
        It looks like the page you're trying to reach doesn't exist. Perhaps it was moved or deleted, or maybe you mistyped the URL.
      </Typography>
      <Paper 
        sx={{ 
          padding: { xs: 2, sm: 3, md: 4 }, 
          textAlign: 'center', 
          borderRadius: 2, 
          boxShadow: 3, 
          backgroundColor: '#ffffff',
          maxWidth: 600, 
          width: '100%', 
          margin: 'auto',
          position: 'relative',
          overflow: 'hidden',
          mt: { xs: 2, sm: 3, md: 4 }
        }}
      >
        <Typography 
          variant="h6" 
          component="p" 
          color="text.secondary" 
          sx={{ 
            mb: { xs: 1, sm: 2, md: 3 }, 
            fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }
          }}
        >
          Still need help? Contact our support team or visit our FAQ page.
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Link href="/support" passHref>
              <Button 
                variant="contained" 
                color="primary" 
                size="large" 
                sx={{ 
                  borderRadius: '20px', 
                  px: { xs: 2, sm: 3, md: 4 } 
                }}
              >
                Contact Support
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link href="/" passHref>
              <Button 
                variant="outlined" 
                color="primary" 
                size="large" 
                sx={{ 
                  borderRadius: '20px', 
                  px: { xs: 2, sm: 3, md: 4 } 
                }}
              >
                Back to Home
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default NotFoundPage;
