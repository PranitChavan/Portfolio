import './App.css';
import Container from '@mui/material/Container';
import Navbar from './Navbar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import MasonryImageList from './ImageList';
import { Fade, Bounce, Flip, Hinge, JackInTheBox, Roll, Slide, Zoom } from 'react-awesome-reveal';

function App() {
  return (
    <>
      <div className="hero">
        <Container className="red" disableGutters={true} maxWidth={'xl'} style={{ maxWidth: '1449px', height: '100vh' }}>
          <Fade>
            <Navbar />
          </Fade>

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '70vh', flexDirection: 'column' }}>
            <Typography variant="h2" style={{ color: 'white' }}>
              gaurav
            </Typography>

            <Fade direction="left">
              <ul style={{ display: 'flex', flexDirection: 'row', gap: '10px', marginTop: '10px' }} className="skills">
                <li>CONCEPT</li>
                <li>DESIGN</li>
                <li>ILLUSTRATION</li>
              </ul>
            </Fade>
          </Box>
        </Container>
      </div>
      <Container className="red" disableGutters={true} maxWidth={'xl'} style={{ maxWidth: '1449px', height: '100vh' }}>
        <MasonryImageList />
      </Container>
    </>
  );
}

export default App;
