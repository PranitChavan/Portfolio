import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Fade, Bounce, Flip, Hinge, JackInTheBox, Roll, Slide, Zoom } from 'react-awesome-reveal';

const gallery = Object.values(import.meta.glob('./assets/imgs/comp/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }));
const gallery1 = Object.values(import.meta.glob('./assets/imgs/portraits/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }));

export default function MasonryImageList() {
  return (
    <Box sx={{ width: 1, height: 1, mt: 2 }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item: any) => (
          <Fade direction="down">
            <ImageListItem key={item.img}>
              <img srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`} src={`${item.img}?w=248&fit=crop&auto=format`} alt={item.title} />
            </ImageListItem>
          </Fade>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData: any = [];

gallery.forEach((url) => {
  if (!url.includes('batman_main.jpg')) {
    itemData.push({ img: url, title: 'ada' });
  }
});

gallery1.forEach((url) => {
  itemData.push({ img: url, title: 'ada' });
});
