"use client";

import React, { memo, useMemo } from "react";
import { Box, Typography, Button, Stack, Container, Card, Link } from "@mui/material";
import { imageConfig } from "@/core/images-config";
import { themeConfig } from "../theme-config";
import NorthEastIcon from "@mui/icons-material/NorthEast";

export interface SocialLoginAction {
    id: string;
    label: string;
    icon?: React.ReactNode;
    onClick: () => void;
}

export interface LoginPageComponentProps {
    onConnectWalletClick: () => void;
    onTermsClick: () => void;
    onPrivacyClick: () => void;
}

export default function LoginPageComponent({
    onConnectWalletClick,
    onTermsClick,
    onPrivacyClick,
}: LoginPageComponentProps) {
    const theme = themeConfig;

    const pageMemo = useMemo(() => ({
        bgImage: imageConfig.background.desktop.bgLoginDesktop,
        authTitle: "Access Your Profile",
        authDesc: "Track your carbon credit, unlock Xp, and get reward with real opportunities.",
        connectWalletButtonText: "Connect Wallet",
        termsText: "Terms of Service",
        privacyText: "Privacy Policy",
        
    }), [])

    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundImage: `url(${pageMemo.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <Container maxWidth="xl" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Box 
                    display="flex" 
                    flexWrap="wrap" 
                    justifyContent="space-between" 
                    alignItems="center" 
                    sx={{ flexGrow: 1, py: { xs: 4, md: 10 } }}
                >
                    {/* Left Card Section */}
                    <Box 
                        flex={{ xs: 1, md: 0.4 }} 
                        minWidth={{ xs: '100%', md: '450px' }} 
                        display="flex" 
                        justifyContent={{ xs: 'center', md: 'flex-start' }}
                    >
                        <Card sx={{ 
                            bgcolor: theme.colors.secondaryBgColors, 
                            borderRadius: '30px', 
                            padding: "13px",
                            marginLeft: "120px",
                            maxWidth: '430px',
                        }}>
                            <Stack spacing={4}>
                                {/* Auth Component */}
                                <Box
                                    padding="34px"
                                    display="flex"
                                    flexDirection="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    sx={{
                                        backgroundColor:theme.colors.bgColors,
                                        borderRadius: '30px', 
                                    }}
                                >
                                    <Typography variant="body1" color={theme.colors.white} sx={{ fontSize: 20 }}>
                                        {pageMemo.authTitle}
                                    </Typography>
                                    <Box height={8}/>
                                    <Typography variant="body1" color={theme.colors.thirdBgColors} align="center" sx={{fontSize: 12 }}>
                                        {pageMemo.authDesc}
                                    </Typography>
                                    <Box height={46}/>
                                    <Button
                                        onClick={onConnectWalletClick}
                                        fullWidth
                                        variant="outlined"
                                        endIcon={<NorthEastIcon sx={{ fontSize: 16 }} />}
                                        sx={{
                                            borderRadius: "9999px",
                                            borderColor: "var(--primary-colors)",
                                            color: "var(--primary-colors)",
                                            fontWeight: 600,
                                            textTransform: "none",
                                            paddingTop:"9px",
                                            paddingBottom:"9px",
                                            "&:hover": {
                                                backgroundColor: "var(--primary-colors)",
                                                borderColor: "var(--primary-colors)",
                                                color: "#0A0A0A",
                                            },
                                            transition: "all 0.3s",
                                        }}
                                    >
                                        {pageMemo.connectWalletButtonText} 
                                    </Button>
                                     <Box height={20}/>
                                </Box>
                                
                                {/* Terms */}
                                <Typography variant="caption" textAlign="center" color="#737373" sx={{ mt: 2, fontSize: '0.7rem' }}>
                                    By continuing, you agree to opportunities <br />
                                    <Link component="button" variant="caption" onClick={onTermsClick} sx={{ color: '#a3a3a3', fontWeight: 600, textDecoration: 'underline' }}>
                                        {pageMemo.termsText}
                                    </Link>
                                    {' '}and{' '}
                                    <Link component="button" variant="caption" onClick={onPrivacyClick} sx={{ color: '#a3a3a3', fontWeight: 600, textDecoration: 'underline' }}>
                                        {pageMemo.privacyText}
                                    </Link>
                                </Typography>
                              
                            </Stack>
                        </Card>
                    </Box>

                    {/* Right Hero Section */}
                    <Box 
                        flex={{ xs: 1, md: 0.5 }} 
                        minWidth={{ xs: '100%', md: '500px' }} 
                        display="flex" 
                        flexDirection="column" 
                        justifyContent="flex-end" 
                        sx={{ mt: { xs: 6, md: 'auto' }, alignSelf: 'stretch', pb: { md: 5 } }}
                    >
                        <Stack 
                            spacing={3} 
                            sx={{ 
                                
                                alignSelf: { xs: 'center', md: 'flex-start' }, 
                                textAlign: { xs: 'center', md: 'left' },
                                mt: 'auto',
                                pl: { md: 4 }
                            }}
                        >
                           <Typography 
                                variant="h2" 
                                fontWeight={500}
                                sx={{
                                    fontSize: 64,
                                    lineHeight: 1.1
                                }}
                            >
                                Where Farmer <br/> Meet Identity
                            </Typography>
                            <Typography variant="body1" color="#a3a3a3" sx={{ maxWidth: '500px', lineHeight: 1.6 }}>
                                Every your contribution, growth, and carbon tells a story. <br/> Your profile directly reflects your reputation for supporting farmers into opportunities.
                            </Typography>
                        </Stack>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};