import { Typography, Container } from '@mui/material';
import { Box, Button } from '@mui/material';
import iconImg from '../images/smoov.png';
import { forwardRef } from 'react';

const Heading = (props: any, ref: any) => {
    return(
        <div ref={ref}>
            <Container sx={{
                display: "flex",
                position: "relative",
                alignItems: "center",
                marginBottom: { xs: "2rem", sm: "3rem", md: "5rem", lg: "10rem"},
                marginTop: { xs: "2rem", sm: "3rem", md: "5rem", lg: "8rem"}     
            }}>
                <Box sx={{
                    display: "block",
                    justifyContent: "left",
                    height: "100%",
                    width: "50%",
                    marginRight: "1rem"
                }}
                >
                <Typography 
                    variant="h3"
                    sx={{
                        marginBottom: "1rem",
                        fontSize: {xs: "1rem", sm: "2rem", md: "3rem", lg: "3rem"}
                    }}
                >
                    Hey, I'm Mace, a Software Engineer in Web3!
                </Typography>
                <Button
                    sx={{
                        marginTop: "1rem",
                        marginBottom: "1rem"
                    }}
                    href="https://calendly.com/cryptomacepapa"
                >
                    Get in touch
                </Button>
                <Typography
                    variant="body1"
                    display="flex"
                    sx={{
                        position: 'relative',
                        bottom: 0,
                        alignItems: "center",
                        marginTop: "1rem"
                    }}
                >
                    <Button href="https://twitter.com/CryptoMacePapa">
                        Twitter
                    </Button>
                    /   
                    <Button href="https://www.linkedin.com/in/eric-strohl-b87b79152/">
                        LinkedIn
                    </Button>
                    /   
                    <Button href="https://github.com/MacePapaCrypto">
                        Github
                    </Button>
                </Typography>
                </Box>
                <Box
                    component="img"
                    sx={{
                        height: "100%",
                        width: "50%",
                        marginLeft: "1rem",
                        justifyContent: "right",
                        alignItems: "center",
                        borderRadius: "10px",
                        boxShadow: 5
                    }}
                    alt="Placeholder Landing Image"
                    src={iconImg}
                />
            </Container>
        </div>
    );
}

export default forwardRef(Heading);