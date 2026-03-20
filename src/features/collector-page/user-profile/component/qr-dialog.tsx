import { themeConfig } from "@/core/config/theme-config";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

import { QRCodeSVG } from "qrcode.react";

export interface RoleDialogProps {
  walletAddress: string;
  open: boolean;
  onClose: () => void;
}

export default function QrDialog({
  walletAddress,
  open,
  onClose,
}: RoleDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          bgcolor: themeConfig.colors.secondaryBgColors,
          color: themeConfig.colors.white,
          borderRadius: "16px",
          border: `1px solid ${themeConfig.colors.thirdBgColors}`,
          minWidth: { xs: "90vw", sm: "400px" },
        },
      }}
    >
      <DialogTitle
        sx={{ textAlign: "center", pb: 2, pt: 3, fontWeight: "bold" }}
      >
        Your Address
      </DialogTitle>
      <DialogContent sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            padding: "16px",
            backgroundColor: themeConfig.colors.white,
            borderRadius: "16px",
            display: "inline-block",
          }}
        >
          <QRCodeSVG
            value={walletAddress}
            size={200}
            bgColor={themeConfig.colors.white}
            fgColor={themeConfig.colors.bgColors}
            level="H"
          />
        </Box>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center", pb: 3, pt: 1 }}>
        <Button
          onClick={onClose}
          sx={{
            color: themeConfig.colors.bgColors,
            backgroundColor: themeConfig.colors.primaryColors,
            "&:hover": {
              backgroundColor: themeConfig.colors.primaryColors,
              opacity: 0.8,
            },
            borderRadius: "99px",
            fontWeight: 600,
            padding: "8px 32px",
            textTransform: "none",
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
