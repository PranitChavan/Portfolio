import './App.css';
import Container from '@mui/material/Container';
import Navbar from './Navbar';
import MasonryImageList from './ImageList';
import { Fade } from 'react-awesome-reveal';
import { ContextProvider } from './Context';
import { Landing } from './Landing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const allImages = Object.values(import.meta.glob('./assets/imgs/all/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }));
//const portraits = Object.values(import.meta.glob('./assets/imgs/portraits/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }));

const itemData: any = [];

allImages.forEach((url) => {
  itemData.push({ img: url, title: 'ada' });
});

// portraits.forEach((url) => {
//   itemData.push({ img: url, title: 'ada' });
// });

function App() {
  return (
    <>
      <Router>
        <div className="hero">
          <Container className="red" disableGutters={true} maxWidth={'xl'} style={{ maxWidth: '1449px', height: '100vh' }}>
            <Fade delay={500}>
              <Navbar />
            </Fade>

            <Routes>
              <Route path="/" element={<Landing />}></Route>
            </Routes>
          </Container>
        </div>

        <ContextProvider>
          <Container className="red" disableGutters={true} maxWidth={'xl'} style={{ maxWidth: '1449px', height: '100vh' }}>
            <MasonryImageList images={itemData} />
          </Container>
        </ContextProvider>
      </Router>
    </>
  );
}

export default App;
