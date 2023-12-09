import './App.css';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

import { Fade } from 'react-awesome-reveal';

export function Landing() {
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '70vh', flexDirection: 'column' }}>
        <Typography variant="h2" style={{ color: 'white' }}>
          gaurav dal
        </Typography>

        <Fade direction="left" delay={1000} duration={500}>
          <ul style={{ display: 'flex', flexDirection: 'row', gap: '5px', marginTop: '10px' }} className="skills">
            <li>CONCEPT</li>
            <li>x</li>
            <li>DESIGN</li>
            <li>x</li>
            <li>ILLUSTRATION</li>
          </ul>
        </Fade>
      </Box>
    </>
  );
}
