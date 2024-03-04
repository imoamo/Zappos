import { Box, Flex, Image, Link } from '@chakra-ui/react';
import React from 'react';
import Styles from './Img.module.css';

const Img = () => {
  return (
    <Box className={Styles.parent}>
      <Box>
        <Image src='https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/2.19/NEW-BALANCE-HERO-STANDARD-1440x700.jpg' />
      </Box>

      <Box
        className={Styles.LinkBox}
      >
        <Link className={Styles.LinkBox_1} _hover={{ textDecoration: 'none' }}>Freshly-Picked Sneakers</Link>
        <Link className={Styles.LinkBox_2} _hover={{ textDecoration: 'none' }}>Take on the busy day ahead with classic shoes made for on-the-go moments.</Link>
        <Link className={Styles.LinkBox_3} textDecoration={'underline'}>Shop New Balance Classics</Link>
      </Box>

    </Box>
  )
}

export default Img;