import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Fade } from 'react-awesome-reveal';

import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect, useState } from 'react';
import Footer from './Footer';

const theme = createTheme();

export function ThemeHelper() {
  return (
    <ThemeProvider theme={theme}>
      <MasonryImageList />
    </ThemeProvider>
  );
}

export default function MasonryImageList(props: any) {
  const images = props.images;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const src: string = props.src;

  const [cols, setCols] = useState(props.cols);

  useEffect(() => {
    if (!matches) {
      if (src != 'backgrounds') {
        setCols(2);
      } else {
        setCols(1);
      }
    } else {
      setCols(props.cols);
    }
  }, [matches]);

  return (
    <Box sx={{ width: 1, height: 1, mt: 2 }}>
      <ImageList variant="masonry" cols={cols} gap={8}>
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
