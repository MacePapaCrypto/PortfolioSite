import { Typography, Container, Box, Link } from '@mui/material';
import popskulliesExample from '../images/popskulliesExample.png';
import sacrificeExample from '../images/sacrificeExample.png';
import boilerplateCodeExample from '../images/boilerplateCode.png';
import { forwardRef } from 'react';

const Projects = (props: any, ref: any) => {

    return(
        <div ref={ref}>
            <Container
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    marginTop: "5rem"
                }}
            >
                <Typography 
                    variant="h3"
                    marginBottom="3rem"
                >
                    Projects
                </Typography>
            </Container>
            <Container
                sx={{
                    display: "flex",
                    width: "100%",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignItems: "center"
                }}
            >
                <Container
                    sx={{
                        display: "block",
                        width: "30%",
                        justifyContent: "right",
                        marginTop: "2rem",
                        marginBottom: "3rem"
                    }}
                >
                    <Typography
                        variant="h4"
                        gutterBottom
                    >
                        Sacrifice dApp
                    </Typography>
                    <Typography
                        variant="body1"
                        gutterBottom
                    >
                        Have an NFT that is completely useless, an error from the dev, or you simply don't want it in your wallet anymore?
                        The Sacrifice dApp allows users to send their whitelisted NFTs for permanent storage in our contract in exchange for some FTM.
                    </Typography>
                </Container>
                <Container
                    sx={{
                        display: "flex",
                        width: "70%",
                        justifyContent: "left",
                        marginTop: "2rem",
                        marginBottom: "3rem"
                    }}
                >
                    <Box
                            component="img"
                            sx={{
                                height: {xs: "50%", md: "100%"},
                                width: {xs: "50%", md: "100%"},
                                borderRadius: "10px",
                                boxShadow: 5
                            }}
                            alt="sacrifice dApp"
                            src={sacrificeExample}
                    />
                </Container>
                <Container
                    sx={{
                        display: "flex",
                        width: "70%",
                        justifyContent: "left",
                        marginTop: "2rem",
                        marginBottom: "3rem"
                    }}
                >
                    <Box
                        component="img"
                        sx={{
                            height: {xs: "50%", md: "100%"},
                            width: {xs: "50%", md: "100%"},
                            borderRadius: "10px",
                            boxShadow: 5
                        }}
                        alt="pop skullies dApp"
                        src={popskulliesExample}
                    />
                </Container>
                <Container
                    sx={{
                        display: "block",
                        width: "30%",
                        marginTop: "2rem",
                        marginBottom: "3rem"
                    }}
                >
                    <Typography
                        variant="h4"
                        gutterBottom
                    >
                        Pop Skullies NFT
                    </Typography>
                    <Typography
                        variant="body1"
                        gutterBottom
                    >
                        Designed by Funeral from <Link href="https://twitter.com/CultNFTs">@CultNFTs</Link>, Pop Skullies is an NFT project on the Fantom Blockchain.
                        For this project, I built the smart contracts in Solidity, tested them with Foundry, then built out the website functionality in React, using ethers.js for wallet and contract functionality.
                    </Typography>
                </Container>
                <Container
                    sx={{
                        display: "block",
                        width: "30%",
                        justifyContent: "right",
                        marginTop: "2rem",
                        marginBottom: "3rem"
                    }}
                >
                    <Typography
                        variant="h4"
                        gutterBottom
                    >
                        Modularized ERC721 Contract Factory
                    </Typography>
                    <Typography
                        variant="body1"
                        gutterBottom
                    >
                        This project is built entirely in Solidity, with Foundry being used for testing and deployment scripts. The factory utilizes a variety of abstract contracts, referred to as modules in the github,
                        to allow the user to "mix and match" which modules they need for their specific use case.
                    </Typography>
                </Container>
                <Container
                    sx={{
                        display: "flex",
                        width: "70%",
                        justifyContent: "left",
                        marginTop: "2rem",
                        marginBottom: "3rem"
                    }}
                >
                    <Box
                            component="img"
                            sx={{
                                height: {xs: "50%", md: "100%"},
                                width: {xs: "50%", md: "100%"},
                                borderRadius: "10px",
                                boxShadow: 5
                            }}
                            alt="sacrifice dApp"
                            src={boilerplateCodeExample}
                    />
                </Container>
            </Container>
        </div>
    );
}

export default forwardRef(Projects);