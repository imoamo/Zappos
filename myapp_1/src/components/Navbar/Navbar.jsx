import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import { Flex, Box, Link, Input, InputGroup, InputLeftElement, Button, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { SearchIcon } from '@chakra-ui/icons';

const Navbar = () => {

    let cartLength = localStorage.getItem('cartLength');
    const [cart, setCart] = useState(0);


    function getLength() {
        let cartLength = localStorage.getItem('cartLength');
        setCart(cartLength);
    }

    useEffect(() => {
      getLength();
    }, [cart])

    return (
        <>
            <Box>
                {/* heading start */}
                <Box
                    bg="rgb(231,244,255)"
                    p='.5rem'
                    textAlign={'center'}
                    className={styles.info}>
                    Top 10 Casual Shoes for Spring <span>Shop Our Guide</span>
                </Box>
                {/* heading end */}

                {/* first flexbox start */}
                <Flex
                    justifyContent={'space-between'}
                    p='1rem'>
                    <Flex
                        align="center"
                        w={'60%'}
                        justifyContent={'space-between'}>
                        <Box>
                            <Link href="#" fontSize="xl" fontWeight="bold">
                                <img width={'100%'} style={{ marginLeft: '15px' }} src="https://m.media-amazon.com/images/G/01/Zappos/25th-birthday-logo/Zappos-25-Years-Logo-Site.svg" alt="logo" />
                            </Link>
                        </Box>

                        <Box w={'75%'} display={'flex'} className={styles.inp_1}>

                            <InputGroup>

                                <InputLeftElement pl={2} mt={5}   >
                                    <SearchIcon ml={5} fontSize={'15px'} color='gray.400' />
                                </InputLeftElement>

                                <Input fontSize={'15px'} placeholder='Search for crocs, naturalizer, etc.' borderRadius={'20px'}
                                    borderTopEndRadius={'0'}
                                    borderBottomEndRadius={'0'}
                                />

                            </InputGroup>

                            <Button borderRadius={'20px'} p={5}
                                borderTopStartRadius={'0'}
                                borderBottomStartRadius={'0'}
                            >
                                Search
                            </Button>
                        </Box>
                    </Flex>

                    <Flex
                        align="center"
                        className={styles.iconBox}
                    >
                        <Box>
                            <Link href='/login'>
                                <FontAwesomeIcon icon={faUser} className={styles.icon_1} style={{ border: "1px solid black", padding: '5px', borderRadius: '50%', marginTop: '5px' }} />
                            </Link>
                        </Box>

                        <Box >
                            <Link href='/Cart' display={'flex'}>
                                <FontAwesomeIcon icon={faBagShopping} className={styles.icon_2} />
                                <Text color={'red'} ml={1} mt={-5} fontSize={'18px'}>{cart}</Text>
                            </Link>
                        </Box>
                    </Flex>
                </Flex>
                {/* first flexbox start */}

                {/* second flexbox start */}
                <Flex
                    justifyContent={'space-between'}
                    borderBottom='1px solid rgb(233,233,233)'
                    p='.5rem'>
                    <Box className={styles.text_1}>
                        <Link fontSize={'14px'} href="#" _hover={{ textDecoration: 'none' }}>New</Link>
                        <Link fontSize={'14px'} href="#" _hover={{ textDecoration: 'none' }} >Women</Link>
                        <Link fontSize={'14px'} href="#" _hover={{ textDecoration: 'none' }} >Men</Link>
                        <Link fontSize={'14px'} href="#" _hover={{ textDecoration: 'none' }}>Kids</Link>
                        <Link fontSize={'14px'} href="#" _hover={{ textDecoration: 'none' }}>Collections</Link>
                        <Link fontSize={'14px'} href="#" _hover={{ textDecoration: 'none' }} >Brands</Link>
                        <Link fontSize={'14px'} href="#" _hover={{ textDecoration: 'none' }} >Sale</Link>
                    </Box>
                    <Box className={styles.text_2}>
                        <Link fontSize={'14px'} href="#" _hover={{ textDecoration: 'none' }}>Help & Support</Link>
                    </Box>
                </Flex>
                {/* second flexbox end */}
            </Box>
        </>
    );
};

export default Navbar;
