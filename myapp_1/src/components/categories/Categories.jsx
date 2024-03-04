import React from 'react';
import Styles from './Categories.module.css';
import { Box, Flex, Image, Link, SimpleGrid, Text} from '@chakra-ui/react';

const Categories = () => {
    return (
        <>
            <Box className={Styles.parent}>
                <Text className={Styles.heading}>Shop Popular Categories</Text>
                <SimpleGrid columns={6} spacing={5}>

                    <Box className={Styles.container}>
                        <Image src='https://m.media-amazon.com/images/I/611gWvoPQsL._AC_SX400_SR432,540,1,C_BR-10_.jpg' />
                        <Link href='#'>Sneakers & Athletic Shoes</Link>
                    </Box>

                    <Box className={Styles.container}>
                        <Image src='https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/3.4/NEW-TRENDING-CATEGORIES-BIRTHDAY-EXCLUSIVE-BROOKS-432x540.jpg' />
                        <Link href='#'>Brooks</Link>
                    </Box>
                    <Box className={Styles.container}>
                        <Image src='https://m.media-amazon.com/images/I/715VQgn-6YL._AC_SX400_SR432,540,1,C_BR-10_.jpg' />
                        <Link href='#'>Flats</Link>
                    </Box>
                    <Box className={Styles.container}>
                        <Image src='https://m.media-amazon.com/images/I/81d1Xs0JlAL._AC_SX400_SR432,540,1,C_BR-10_.jpg' />
                        <Link href='#'>Sandals</Link>
                    </Box>
                    <Box className={Styles.container}>
                        <Image src='https://m.media-amazon.com/images/I/7183ramOSnL._AC_SX400_SR432,540,1,C_BR-10_.jpg' />
                        <Link href='#'>Lifestyle Sneakers</Link>
                    </Box>
                    <Box className={Styles.container}>
                        <Image src='https://m.media-amazon.com/images/I/61+Ib0HhBHL._AC_SX400_SR432,540,1,C_BR-10_.jpg' />
                        <Link href='#'>Crocs</Link>
                    </Box>
                </SimpleGrid>

                <Box className={Styles.container_2}>
                    <SimpleGrid columns={3} spacing={6}>
                        <Box>
                            <Image src='https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/2.19/TRIPTYCH-1-COLOR-OF-THE-MOMENT-896x896.jpg' />
                            <Text className={Styles.Text_1}>Color of the Moment</Text>
                            <Text className={Styles.Text_2}>Make a statement in this currently trending shade-luscious red.</Text>
                            <Link fontSize={'14px'}>Shop the color of the Moment</Link>
                        </Box>
                        <Box>
                            <Image src='https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/2.19/TRIPTYCH-2-MOODY-ROMANTIC-896x896.jpg' />
                            <Text className={Styles.Text_1}>Moody Romantic</Text>
                            <Text className={Styles.Text_2}>These floral little numbers are your key to feminine fashion.</Text>
                            <Link fontSize={'14px'}>Shop Moody Romantic</Link>
                        </Box>
                        <Box>
                            <Image src='https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/2.19/TRIPTYCH-3-STYLIST-APPROVED-FOOTWEAR-896x896.jpg' />
                            <Text className={Styles.Text_1}>Stylist-Approved Footwear</Text>
                            <Text className={Styles.Text_2}>Get the scoop on hand-selected styles that are sure to stun.</Text>
                            <Link fontSize={'14px'}>Shop Stylist-Approved Footwear</Link>
                        </Box>
                    </SimpleGrid>
                </Box>
            </Box>

            <Box className={Styles.parent_2}>

                <Box className={Styles.banner}>
                    <Image src='https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/3.1/LAUNCH-CALENDAR-PROMO-SITE-SKINNY-BANNER-1440x100.jpg' />

                </Box>

                <SimpleGrid columns={4} spacing={5} className={Styles.grid_2}>
                    <Box>
                        <Box >
                            <Image w={'93.8%'} src='https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/2.19/NEW-ARRIVALS-FEED-658x916_4.jpg' />
                        </Box>
                        <Text className={Styles.grid_heading}>Shop New Crocs</Text>
                    </Box>
                    <Box className={Styles.grid_child}>
                        <Box>
                            <Image src='https://m.media-amazon.com/images/I/71-GIpQf+pL._AC_SR768,1024_.jpg' />
                        </Box>
                        <Text className={Styles.heading_1} >Crocs</Text>
                        <Text className={Styles.heading_2}>Naruto Classic Clogs</Text>
                        <Text className={Styles.heading_3}>$69.95</Text>
                    </Box>
                    <Box className={Styles.grid_child}>
                        <Box >
                            <Image src='https://m.media-amazon.com/images/I/713ZuxVVDDL._AC_SR768,1024_.jpg' />
                        </Box>
                        <Text className={Styles.heading_1} >Crocs</Text>
                        <Text className={Styles.heading_2}>Toy Story Clasic clog</Text>
                        <Text className={Styles.heading_3}>$69.99</Text>
                    </Box>
                    <Box className={Styles.grid_child}>
                        <Box>
                            <Image src='https://m.media-amazon.com/images/I/71HNRtTI-HL._AC_SR768,1024_.jpg' />
                        </Box>
                        <Text className={Styles.heading_1} >Crocs Kids</Text>
                        <Text className={Styles.heading_2}>Toy Story Clasic clog</Text>
                        <Text className={Styles.heading_3}>$54.99</Text>
                    </Box>

                </SimpleGrid>
            </Box>



            <Box className={Styles.container_3}>

                <Flex className={Styles.flex_1}>
                    <Box w={'33%'} p={5} className={Styles.flex_1_child}>
                        <Text className={Styles.flex_h1}>Dolce Vita Dreamin'</Text>
                        <Text className={Styles.flex_h2}>Mellow out with luxurious styles that transport you to your happy place.</Text>
                        <Link fontSize={'14px'} >Shop Deolce Vita</Link>
                    </Box>
                    <Box w={'70%'} >
                        <Image w={'100%'} src='https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/2.26/DOLCE-VITA-FEBRUARY-AOE-960x500.jpg' />
                    </Box>

                </Flex>

                <Flex className={Styles.flex_2}>
                    <Box w={'70%'}>
                        <Image w={'100%'} src='https://m.media-amazon.com/images/G/01/Zappos/2024/Homepage/1.08/M-KEYFOOTWEAR-JANFEB2024-TSR-960X500.jpg' />
                    </Box>
                    <Box w={'33%'} p={5} className={Styles.flex_2_child}>
                        <Text className={Styles.flex_2_h1}>THE STYLE ROOM</Text>
                        <Text className={Styles.flex_2_h2} >Footwear Favorites</Text>
                        <Text className={Styles.flex_2_h3}>Enhance your look with shoes that your provide timeless style for any occasion.</Text>
                        <Link fontSize={'14px'}>Shop Footwear Favorites</Link>
                    </Box>

                </Flex>
            </Box>
        </>
    )
}

export default Categories;