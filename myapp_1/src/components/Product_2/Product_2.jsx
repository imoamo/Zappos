import { Box, Button, Flex, Image, Link, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import Styles from './Product_2.module.css';
import Products from "../data/Naturalizer.json";

const Product_2 = () => {
    return (
        <>
            <Box className={Styles.parent}>

                <Box className={Styles.Child_1}>
                    <Text className={Styles.h1}>Naturalizer: Ballet All Day</Text>
                    <Button fontSize={'18px'} borderRadius={'20px'} p={7} className={Styles.btn}>Shop Naturalizer</Button>
                    <Box className={Styles.img_1}>
                        <Image src='https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/2.26/NATURALIZER-FEBRUARY-MELODY-GRID-900x1330.jpg' />
                    </Box>
                </Box>

                <SimpleGrid columns={4} spacing={4} className={Styles.Child_2}>

                    {Products.map((el) => {
                        return <Box key={el.id} className={Styles.product_card}>
                            <Box className={Styles.Carousel_img}><Image w={'50%'} src={el.image} /></Box>
                            <Text className={Styles.Carousel_Text_1}>{el.title}</Text>
                            <Text className={Styles.Carousel_Text_2}>{el.description}</Text>
                            <Text className={Styles.Carousel_Text_3}>{el.price}</Text>
                            <Text className={Styles.Carousel_rating}>Rating {el.review}</Text>
                        </Box>
                    })}

                </SimpleGrid>

            </Box>

            <SimpleGrid columns={4} spacing={5} className={Styles.parent_2}>

                <Box className={Styles.parent_2_child}>
                    <Box className={Styles.parent_2_child_img}>
                        <Image src='https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/2.29/HP-25th-Triptych.jpg' />
                    </Box>
                    <Text className={Styles.parent_2_Text}>Come celebrate all year long with sales, exclusives,and extra-special surprises.</Text>
                    <Link>Join the Party</Link>
                </Box>

                <Box className={Styles.parent_2_child}>
                    <Box className={Styles.parent_2_child_img}>
                        <Image src='https://m.media-amazon.com/images/G/01/Zappos/2023/Homepage/12.29/INITIATIVE-TRIPTYCH-1-Z4G-896x500.png' />
                    </Box>
                    <Text className={Styles.parent_2_Text}>Learn how to easily donate or recycle your secondhand items.</Text>
                    <Link>Explore Zappos for Good</Link>
                </Box>

                <Box className={Styles.parent_2_child}>
                    <Box className={Styles.parent_2_child_img}>
                        <Image src='https://m.media-amazon.com/images/G/01/Zappos/2023/Homepage/12.29/INITIATIVE-TRIPTYCH-2-ZAPPOS-ONE-896x500.png' />
                    </Box>
                    <Text className={Styles.parent_2_Text}>At Zappos,diversity,equity,inclusion,and individuality are central to our core values.</Text>
                    <Link>Learn More About Zappos ONE Purpose</Link>
                </Box>

                <Box className={Styles.parent_2_child}>
                    <Box className={Styles.parent_2_child_img}>
                        <Image src='https://m.media-amazon.com/images/G/01/Zappos/2023/Homepage/12.29/INITIATIVE-TRIPTYCH-3-G4G-896x500.png' />
                    </Box>
                    <Text className={Styles.parent_2_Text}>We're highlighting brands who are making a difference and helping build a better place for us all.</Text>
                    <Link>Shop Goods for Good</Link>
                </Box>

            </SimpleGrid>

        </>
    )
}

export default Product_2;