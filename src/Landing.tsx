import './App.css';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import { Fade } from 'react-awesome-reveal';
import MasonryImageList from './ImageList';
import { Container } from '@mui/material';

const allImages = Object.values(import.meta.glob('./assets/imgs/all/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }));

const itemData: any = [];

allImages.forEach((url) => {
  itemData.push({ img: url, title: 'ada' });
});

export function Landing() {
  return (
    <>
      <div className="hero">
        <Container className="red" disableGutters={true} maxWidth={'xl'} style={{ maxWidth: '1449px', height: '100vh' }}>
          <Fade delay={500}>
            <Navbar />
          </Fade>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '70vh', flexDirection: 'column' }}>
            <Typography variant="h2" style={{ color: 'white' }}>
              gaurav dal
            </Typography>

            <Fade direction="left" delay={1000} duration={500}>
              <ul style={{ display: 'flex', flexDirection: 'row', gap: '5px', marginTop: '10px' }} className="skills">
                <li>ILLUSTRATION</li>
                <li>x</li>
                <li>CONCEPT</li>
                <li>x</li>
                <li>DESIGN</li>
              </ul>
            </Fade>
          </Box>
        </Container>
      </div>

      <Container className="red" disableGutters={true} maxWidth={'xl'} style={{ maxWidth: '1449px', height: '100vh' }}>
        <MasonryImageList images={itemData} cols={3} src={'main'} />
      </Container>
    </>
  );
}
