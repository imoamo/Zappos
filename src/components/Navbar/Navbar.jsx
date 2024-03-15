import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import { Flex, Box, Link, Input, InputGroup, InputLeftElement, Button, Text, IconButton, useDisclosure } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { SearchIcon } from '@chakra-ui/icons';
import { HamburgerIcon } from '@chakra-ui/icons';

import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    VStack
} from '@chakra-ui/react'

const Navbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();



    return (
        <>
            <Box >
                {/* heading start */}
                <Box
                    w='100%'
                    bg="rgb(231,244,255)"
                    p='.5rem'
                    textAlign={'center'}
                    className={styles.info}
                    fontSize={{ base: '1.1rem', sm: '1.4rem', md: '1.6rem' }}

                >

                    Top 10 Casual Shoes for Spring <span>Shop Our Guide</span>
                </Box>

                {/* heading end */}

                {/* first flexbox start */}



                <Flex
                    justifyContent={'space-between'}
                    p='1rem'

                >


                    <Flex
                        className={styles.first_flex}
                        align="center"
                        w={'70%'}
                        justifyContent={'space-between'}
                    >

                        <Box className={styles.logo}>
                            <Link href="#" fontSize="xl" fontWeight="bold">
                                <img width={'90%'} style={{ marginLeft: '15px' }} src="https://m.media-amazon.com/images/G/01/Zappos/25th-birthday-logo/Zappos-25-Years-Logo-Site.svg" alt="logo" />
                            </Link>
                        </Box>

                        <Flex
                            w={'75%'} className={styles.inp_1}
                            display={{ base: 'none', md: 'none', lg: 'flex' }}
                        >

                            <InputGroup>

                                <InputLeftElement pl={2} mt={2}   >
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


                        </Flex>


                    </Flex>

                    <Flex
                        align="center"
                        className={styles.iconBox}

                        display={{ base: 'none', md: 'none', lg: 'flex' }}
                    >

                        <Box >
                            <Link href='/Cart' display={'flex'}>
                                <FontAwesomeIcon icon={faBagShopping} className={styles.icon_2} />
                          </Link>
                        </Box>
                    </Flex>

                    <Box
                        align="center"
                        cursor={'pointer'}
                        className={styles.iconBox_2}
                        display={{ md: 'flex', lg: 'none' }}
                    >

                        <HamburgerIcon w={'3.5rem'} h={'5rem'} onClick={onOpen} />
                        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
                            <DrawerOverlay />
                            <DrawerContent>
                                <DrawerCloseButton />

                                <DrawerBody mt={'3rem'}>
                                    <VStack spacing={9} fontSize={'1.5rem'}>
                                        <Link>New</Link>
                                        <Link>Women</Link>
                                        <Link>Men</Link>
                                        <Link>Kids</Link>
                                        <Link>Collections</Link>
                                        <Link>Brands</Link>
                                        <Link>Sale</Link>
                                    </VStack>
                                </DrawerBody>
                            </DrawerContent>
                        </Drawer>

                    </Box>
                </Flex>
                {/* first flexbox start */}

                {/* second flexbox start */}
                <Box
                    justifyContent={'space-between'}
                    borderBottom='1px solid rgb(233,233,233)'
                    display={{ base: 'none', md: 'none', lg: 'flex' }}
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
                </Box>
                {/* second flexbox end */}
            </Box>
        </>
    );
};

export default Navbar;
