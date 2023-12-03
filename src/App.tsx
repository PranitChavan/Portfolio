import './App.css';
import Container from '@mui/material/Container';
import Navbar from './Navbar';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <>
      <div className="hero">
        <Container className="red" disableGutters={true} maxWidth={'xl'} style={{ maxWidth: '1449px', height: '100vh' }}>
          <Navbar />
          {/* <Typography variant="h1" component="h2" style={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            gaurav
          </Typography> */}
        </Container>
      </div>
    </>
  );
}

export default App;
