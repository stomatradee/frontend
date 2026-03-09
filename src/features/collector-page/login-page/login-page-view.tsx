import { Box } from "@mui/material";
import { imageConfig } from "@/core/images-config";

export default function LoginPageView() {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundImage: `url(${imageConfig.background.desktop.bgLoginDesktop})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            
        </Box>
    )
}