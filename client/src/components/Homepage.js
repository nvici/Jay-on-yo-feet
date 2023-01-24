import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import 'bulma/css/bulma.min.css';
import benandjerrys from '../assets/bendandjerrys.png';
import denimwash from '../assets/denimwash.png';
import dior from '../assets/dior.png';
import green from '../assets/green.png';
import offwhite from '../assets/offwhite.png';
import polkadots from '../assets/polkadots.png';
import snakeskin from '../assets/snakeskin.png';
import voodoo from '../assets/voodoo.png';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Jays On Your Feet
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

/* const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]; */

const cards = [
  {
    title: "Ben & Jerry's Chunky Dunky ",
    description: "Drawing inspiration from Ben & Jerry’s colorful ice cream pint packaging, this release goes beyond a simple new colorway and features unique detailing that has never been used on the Dunk Low silhouette.",
    img: benandjerrys
  },
  {
    title: "Jordan 1 Low Washed Denim",
    description: "This model is made up of a bright royal blue sole and a classic white midsole. The base is also white, covered in a pattern that features splashes of black, gray, blue, and white. The Nike swoosh symbol can be seen on the side of the shoe in blue.",
    img: denimwash
  },
  {
    title: "Dior Jordan 1 Retro Low",
    description: "Jordan Brand connected with Parisian fashion house Dior to create history with the Jordan 1 Retro Low Dior.This is the first time that Jordan has collaborated with a legacy fashion label like Dior, making this release one for the books. This release was limited to only 4,700 pairs, each pair individually numbered.",
    img: dior
  },
  {
    title: "Jordan 1 Low Pine Green",
    description: "The Jordan 1 Low Pine Green features a white leather upper with Pine Green overlays and visible stitching. From there, a black Nike swoosh and a perforated toe cap complete the design.",
    img: green
  },
  {
    title: "Off-White x Dunk Low Lot 31 of 50 ",
    description: "This Off-White x Nike Dunk Low is taken from the ‘Dear Summer’ collection, a sprawling follow-up to Virgil Abloh’s first Nike Dunk collaboration from 2019. The low-top makes use of a white leather upper with soft grey suede overlays, along with Virgil Abloh’s calling-card flourishes, which include a plastic zip tie and printed Helvetica text. ",
    img: offwhite
  },
  {
    title: "Jordan 1 Retro Phat Low Polka Dot",
    description: "In 2008, the Air Jordan 1 Retro Low OG 'Black / White' polka dot was a component of the 'Countdown Pack' celebrating the Air Jordan 23 sneaker launch. In limited-edition packaging, the 'Countdown Pack' included retros of all past Air Jordan shoes.",
    img: polkadots
  },
  {
    title: "Jordan 1 Low Multicolor Snakeskin",
    description: "The Air Jordan 1 Low ‘Multi Snakeskin’ features an opulent design, highlighted by a black tumbled leather upper with multi-colored snakeskin overlays. The vibrant hues are complemented by metallic gold detailing on the Nike Swoosh, Jumpman logo atop the tongue, and Jordan Wings embroidery on the heel.",
    img: snakeskin
  },
  {
    title: "Williamson Voodoo Jordan 1 Retro Low",
   description: "This Retro Low Air Jordan features a brown suede toe box and a beige suede quarter paneling. The brown upper is contrasted with some rough overlays that come in pale brown, fossil, and oil-green hues. The lateral heel of this shoe features a stitching voodoo doll. There are Zion and voodoo images beneath the heel tabs of this sneaker.",
    img: voodoo
  },
]


const theme = createTheme({
  palette: {
    primary: {
      main: '#b39ddb',
    },
    secondary: {
      main: '#fff59d',
    },
  },
});

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container sx={{ py: 8 }} maxWidth="md">

          </Container>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Air Jordan 1s
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            The Air Jordan 1 was designed by Peter Moore and was released in 1985. The release was tied to Michael Jordan’s rookie season in the NBA.
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 4  }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                    <Typography sx={{ p: 2}} variant="h5" component="h2">
                      {card.title}
                    </Typography>
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '20.25%',
                    }}
                    image={card.img}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                      
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Add to cart</Button>
                    <Button href="/checkout" size="small">Checkout</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
        
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}