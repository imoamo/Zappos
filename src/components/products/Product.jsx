import React from 'react';
import Styles from './Product.module.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box, Text, Image, Button } from '@chakra-ui/react';
import data from '../data/Carousel.json';
import { Link } from 'react-router-dom';

const Product = () => {

    function AddToCart(element) {

        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        let cartLength = cartItems.length || 0;

        cartItems.push(element);
        cartLength = cartItems.length;
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        localStorage.setItem('cartLength', cartLength);

    }

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1024 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>
            <Box className={Styles.parent}>
                <Text className={Styles.heading}>Zappos 25th Birthday Exclusives</Text>
            </Box>

            <Carousel responsive={responsive} className={Styles.Carousel} showDots={true}>

                {data.map((el) => {
                    return <Box key={el.id} className={Styles.Carousel_child}>
                        <Box className={Styles.Carousel_img}><Image w={'50%'} src={el.image} /></Box>
                        <Text className={Styles.Carousel_Text_1}>{el.title}</Text>
                        <Text className={Styles.Carousel_Text_2}>{el.description}</Text>
                        <Text className={Styles.Carousel_Text_3}>{el.price}</Text>
                        <Text className={Styles.Carousel_rating}>Rating {el.review}</Text>
                        <Link to='/cart'>
                            <Button onClick={() => AddToCart(el)} mb={4} fontSize={'13px'}>Add to cart</Button>
                        </Link>
                    </Box>
                })}
            </Carousel >

        </>
    )
}

export default Product;