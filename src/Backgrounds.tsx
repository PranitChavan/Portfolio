import Navbar from './Navbar';
import { Container } from '@mui/material';
import { Fade } from 'react-awesome-reveal';
import MasonryImageList from './ImageList';
import { useEffect } from 'react';

const portraits = Object.values(import.meta.glob('./assets/imgs/backgrounds/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }));

const itemData: any[] = [];

portraits.forEach((url) => {
  itemData.push({ img: url, title: 'ada' });
});

export default function Backgrounds() {
  useEffect(() => {
    document.title = 'BACKGROUNDS — gaurav dal';
  }, []);

  return (
    <>
      <Container className="container" disableGutters={true} maxWidth={'xl'}>
        <Fade delay={500} triggerOnce={true}>
          <Navbar />
        </Fade>

        <MasonryImageList images={itemData} cols={2} src={'backgrounds'} />
      </Container>
    </>
  );
}
