"use client";

import { useMemo } from "react";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Avatar,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import BusinessIcon from "@mui/icons-material/Business";
import { themeConfig } from "@/core/theme-config";
import { imageConfig } from "@/core/images-config";
import { useAccount } from "wagmi";

export const SIDEBAR_WIDTH = 220;

interface NavItem {
  label: string;
  icon: React.ReactNode;
  segment: string;
}

interface CollectorSidebarProps {
  activeSegment?: string;
  onNavigate?: (segment: string) => void;
}

export default function CollectorSidebar({
  activeSegment = "my-project",
  onNavigate,
}: CollectorSidebarProps) {
  const theme = themeConfig;

  const { address } = useAccount();

  const navItems: NavItem[] = useMemo(
    () => [
      { label: "Home", icon: <HomeIcon />, segment: "home" },
      {
        label: "Add Project",
        icon: <AddCircleOutlineIcon />,
        segment: "add-project",
      },
      {
        label: "My Project",
        icon: <FolderOutlinedIcon />,
        segment: "my-project",
      },
      {
        label: "Company Profile",
        icon: <BusinessIcon />,
        segment: "company-profile",
      },
    ],
    []
  );

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: SIDEBAR_WIDTH,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: SIDEBAR_WIDTH,
          boxSizing: "border-box",
          backgroundColor: theme.colors.bgColors,
          borderRight: `1px solid ${theme.colors.secondaryBgColors}`,
          color: theme.colors.white,
          paddingTop: "16px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          px: 2,
          pb: 3,
        }}
      >
        <Box
          component="img"
          src={imageConfig.logo.stomatradeLogo}
          alt="Stomatrade"
          sx={{
            width: "auto",
            height: "auto",
          }}/>
      </Box>

      {/* User Info */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          px: 2,
          pb: 3,
        }}
      >
        <Avatar
          sx={{
            width: 36,
            height: 36,
            bgcolor: theme.colors.secondaryBgColors,
            fontSize: 14,
          }}
        >
          CP
        </Avatar>
        <Box width={120}>
          <Typography
            variant="body2"
            fontWeight={600}
            sx={{ color: theme.colors.white, fontSize: 13, lineHeight: 1.3 }}
          >
            Collector Pro
          </Typography>
          <Typography
            variant="caption"
            noWrap
            sx={{ color: theme.colors.thirdBgColors, fontSize: 11, width: "100%", display: "block"  }}
          >
            {address}
          </Typography>
        </Box>
      </Box>

      {/* Navigation Items */}
      <List sx={{ px: 1 }}>
        {navItems.map((item) => {
          const isActive = item.segment === activeSegment;
          return (
            <ListItemButton
              key={item.segment}
              onClick={() => onNavigate?.(item.segment)}
              sx={{
                borderRadius: "8px",
                mb: 0.5,
                px: 1.5,
                py: 1,
                borderLeft: isActive
                  ? `3px solid ${theme.colors.primaryColors}`
                  : "3px solid transparent",
                backgroundColor: isActive
                  ? theme.colors.fourGreenColors
                  : "transparent",
                color: isActive
                  ? theme.colors.primaryColors
                  : theme.colors.white,
                "&:hover": {
                  backgroundColor: isActive
                    ? theme.colors.fourGreenColors
                    : theme.colors.secondaryBgColors,
                },
                transition: "all 0.2s ease",
              }}
            >
              <ListItemIcon
                sx={{
                  color: isActive
                    ? theme.colors.primaryColors
                    : theme.colors.white,
                  minWidth: 36,
                  "& .MuiSvgIcon-root": { fontSize: 20 },
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: 13,
                  fontWeight: isActive ? 600 : 400,
                }}
              />
            </ListItemButton>
          );
        })}
      </List>
    </Drawer>
  );
}
