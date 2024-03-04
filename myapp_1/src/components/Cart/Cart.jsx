import React, { useEffect, useState } from 'react';
import Styles from './Cart.module.css'
import { Box, Text, Button, Image, SimpleGrid } from '@chakra-ui/react';

const Cart = () => {
  const products = JSON.parse(localStorage.getItem('cartItems')) || [];

  const [cartData, setCartData] = useState(products);
  const [price, Totalprice] = useState(0);

  function cartTotal() {
    let total = cartData.reduce(function (acc, el) {
      return acc + Number(el.price.substring(1));
    }, 0)
    Totalprice(total);
  }

  const RemoveToCart = (element) => {
    let itemToRemove = element;
    let updatedCartDetails = products.filter(item => item.id !== itemToRemove.id);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartDetails));
    fetchData()
  };

  function fetchData() {
    const products = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartData(products);
  };

  useEffect(() => {
    cartTotal();
  }, [cartData, price]);


  return (
    <Box className={Styles.container}>
      <Text className={Styles.t1}>Cart Page</Text>
      <Text className={Styles.t2}>Cart Total : ${price}</Text>

      <SimpleGrid columns={4} spacing={5} className={Styles.wrapper}>
        {
          cartData.map((el, ind) => {
            return <Box key={ind} className={Styles.Carousel_child}>
              <Box className={Styles.Carousel_img}><Image w={'50%'} src={el.image} /></Box>
              <Text className={Styles.Carousel_Text_1}>{el.title}</Text>
              <Text className={Styles.Carousel_Text_2}>{el.description}</Text>
              <Text className={Styles.Carousel_Text_3}>{el.price}</Text>
              <Text className={Styles.Carousel_rating}>Rating {el.review}</Text>
              <Button onClick={() => RemoveToCart(el)} mb={4} fontSize={'13px'}>Remove from cart</Button>
            </Box>
          })
        }
      </SimpleGrid>

    </Box>
  )
}

export default Cart;