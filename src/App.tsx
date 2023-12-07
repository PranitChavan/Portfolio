import './App.css';
import Container from '@mui/material/Container';
import Navbar from './Navbar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

function App() {
  return (
    <>
      <div className="hero">
        <Container className="red" disableGutters={true} maxWidth={'xl'} style={{ maxWidth: '1449px', height: '100vh' }}>
          <Navbar />

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '70vh', flexDirection: 'column' }}>
            <Typography variant="h2" className="fade-in" style={{ color: 'white' }}>
              gaurav
            </Typography>

            <ul style={{ display: 'flex', flexDirection: 'row', gap: '10px', marginTop: '10px' }} className="skills fade-in">
              <li>CONCEPT</li>
              <li>DESIGN</li>
              <li>ILLUSTRATION</li>
            </ul>
          </Box>

          {/* <InteractiveList /> */}
        </Container>
      </div>
    </>
  );
}

export default App;
