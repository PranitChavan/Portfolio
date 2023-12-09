import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Fade } from 'react-awesome-reveal';

export default function MasonryImageList(props: any) {
  const images = props.images;

  return (
    <Box sx={{ width: 1, height: 1, mt: 2 }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {images.map((item: any) => (
          <Fade direction="down" triggerOnce>
            <ImageListItem key={item.img}>
              <img srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`} src={`${item.img}?w=248&fit=crop&auto=format`} alt={item.title} />
            </ImageListItem>
          </Fade>
        ))}
      </ImageList>
    </Box>
  );
}
