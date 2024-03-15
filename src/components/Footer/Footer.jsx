import React from 'react';
import Styles from "./Footer.module.css";
import { Box, Button, Flex, Input, Link, SimpleGrid, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faComments } from '@fortawesome/free-regular-svg-icons';
import { faYoutube, faSquareFacebook, faPinterest, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <>
            <Box className={Styles.footer}>

                <Box className={Styles.container_1}

                >
                    <Text fontSize={'22px'} mb={'5px'}>Make Zappos (Emails) Your New BFF!</Text>
                    <Text fontSize={'18px'}>Email</Text>
                    <Flex className={Styles.flex}
                    >
                        <Input color={'#fff'} className='inps' w={'20%'} variant={'flushed'} placeholder='Email Address' />
                        <Button mt={'10px'}> <FontAwesomeIcon className={Styles.banner_icon} icon={faEnvelope} />  Subscribe to Zappos Emails</Button>
                    </Flex>
                </Box>

                <Box className={Styles.container_2}>

                    <SimpleGrid columns={{
                        base: 1, // 0px
                        sm: 2, // ~480px. em is a relative unit and is dependant on the font size.
                        md: 2, // ~768px
                        lg: 4, // ~992px
                        xl: 4, // ~1280px
                        "2xl": 4,
                    }} spacing={10}

                        textAlign={'center'}

                        className={Styles.container_2_child_1}>

                        <Box className={Styles.box_1}>
                            <Text fontSize={'25px'} mb={'9px'}>Explore Zappos</Text>
                            <Link display={'block'}>Brands</Link>
                            <Link display={'block'}>Clothing</Link>
                            <Link display={'block'}>The Style Room</Link>
                            <Link display={'block'}>Eyewear</Link>
                            <Link display={'block'}>New Arrivals</Link>
                            <Link display={'block'}>Running</Link>
                            <Link display={'block'}>Jackets</Link>
                            <Link display={'block'}>Shoes</Link>
                            <Link display={'block'}>Watches</Link>
                            <Link display={'block'}>Zapos Adaptive</Link>
                            <Link display={'block'}>All Departments</Link>
                        </Box>

                        <Box className={Styles.box_2}>
                            <Text mb={'7px'} fontSize={'25px'}>Customer Service</Text>
                            <Link display={'block'}>FAQs</Link>
                            <Link display={'block'}>Contact Info</Link>
                            <Link display={'block'}>¿Ayuda en español?</Link>
                            <Link display={'block'}>Shipping And Returns Policy</Link>
                            <Link mb={'20px'} display={'block'}>About Proposition 65</Link>

                            <Text fontSize={'25px'}>Fit Info</Text>
                            <Link display={'block'}>Measurement Guide</Link>
                            <Link display={'block'}>Size Conversion Chart</Link>
                            <Link display={'block'}>Measure Your Bra Size</Link>
                        </Box>

                        <Box className={Styles.box_3}>

                            <Text mb={'10px'} fontSize={'25px'}>About Zappos</Text>

                            <Link display={'block'}>About</Link>
                            <Link display={'block'}>Zappos ONE</Link>
                            <Link display={'block'}>Zappos for Good</Link>
                            <Link display={'block'}>Zappos at Work</Link>
                            <Link display={'block'}>Get the Zappos Mobile App</Link>
                            <Link display={'block'}>Amazon Prime Benefits</Link>
                            <Link display={'block'}>Zappos VIP Benefits</Link>
                            <Link display={'block'}>Powered by Zappos</Link>
                            <Link display={'block'}>Coupons</Link>
                            <Link mb={'20px'} display={'block'}>Accessibility Statement</Link>

                            <Text fontSize={'25px'}>Resources</Text>

                            <Link display={'block'}>Associates Program</Link>
                            <Link display={'block'}>Influencer Program</Link>
                            <Link display={'block'}>Jobs</Link>
                            <Link display={'block'}>Press Kit & Brand Inquiries</Link>
                            <Link display={'block'}>Site Map</Link>

                        </Box>

                        <Box className={Styles.box_4}>

                            <Text mb={'10px'} fontSize={'22px'}>Your Voice Matters</Text>

                            <Text mb={'20px'} fontSize={'15px'}>We'd love to learn more about your shopping experiences on Zappos.com and how we can improve!</Text>

                            <Button borderRadius={'20px'} pl={'30px'} pr={'30px'} backgroundColor={'rgb(9, 7, 8)'} color={'#fff'} _hover={{ backgroundColor: 'black', color: 'blue', border: "1px solid blue" }} border={'1px solid #fff'} className={Styles.btn_2} mb={'35px'}

                            >
                                <FontAwesomeIcon className={Styles.msg} icon={faComments} style={{ marginRight: '10px' }} /> Take Survey</Button>

                            <Text mb={'20px'} fontSize={'22px'}>Connect With Us</Text>

                            <Box>
                                <FontAwesomeIcon fontSize={'35px'} icon={faSquareFacebook} style={{ marginRight: '15px' }} />
                                <FontAwesomeIcon fontSize={'35px'} icon={faInstagram} style={{ marginRight: '15px' }} />
                                <FontAwesomeIcon fontSize={'35px'} icon={faTwitter} style={{ marginRight: '15px' }} />
                                <FontAwesomeIcon fontSize={'35px'} icon={faPinterest} style={{ marginRight: '15px' }} />
                                <FontAwesomeIcon fontSize={'35px'} icon={faYoutube} style={{ marginRight: '15px' }} />
                            </Box>

                        </Box>

                    </SimpleGrid>


                </Box >

                <Box className={Styles.container_2_child_1}>

                    <Text fontSize={'18px'} mb={'15px'}>Terms of Use &nbsp; | &nbsp; Privacy Policy &nbsp; | &nbsp; Fur Policy &nbsp; | &nbsp; Interest-Based Ads &nbsp; | &nbsp; 24/7 Customer Service (800) 927-7671</Text>
                    <Text fontSize={'16px'}>© 2009–2024 - Zappos.com LLC or its affiliates</Text>

                </Box>
            </Box>
        </>
    )
}

export default Footer;