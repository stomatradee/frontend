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
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import BusinessIcon from "@mui/icons-material/Business";
import PieChartOutlineIcon from "@mui/icons-material/PieChartOutline";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { themeConfig } from "@/core/config/theme-config";
import { imageConfig } from "@/core/config/images-config";
import { useAccount } from "wagmi";
import { usePathname, useRouter } from "next/navigation";
import { routes } from "@/core/config/routes";
import Image from "next/image";

export const SIDEBAR_WIDTH = 220;

interface NavItem {
  label: string;
  icon: React.ReactNode;
  path: string;
}

export interface DashboardSidebarProps {
  role?: "collector" | "investor";
}

export default function DashboardSidebar({
  role = "collector",
}: DashboardSidebarProps) {
  const theme = themeConfig;
  const { address } = useAccount();
  const pathname = usePathname();
  const router = useRouter();

  const navItems: NavItem[] = useMemo(
    () =>
      role === "collector"
        ? [
            {
              label: "My Asset",
              icon: <FolderOutlinedIcon />,
              path: routes.collector.myProject(),
            },
            {
              label: "Tokenize Asset",
              icon: <AddCircleOutlineIcon />,
              path: routes.collector.addProject(),
            },
            {
              label: "User Profile",
              icon: <BusinessIcon />,
              path: routes.collector.userProfile(),
            },
          ]
        : [
            {
              label: "My Portofolio",
              icon: <PieChartOutlineIcon />,
              path: routes.collector.myProject(),
            },
            {
              label: "Asset List",
              icon: <FormatListBulletedIcon />,
              path: routes.collector.addProject(),
            },
            {
              label: "My Profile",
              icon: <PersonOutlineIcon />,
              path: routes.collector.userProfile(),
            },
          ],
    [role],
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
          }}
        />
      </Box>

      {/* User Info */}
      <Box display="flex" flexDirection="column" alignItems="center">
        {role === "collector" ? (
          <Image
            src={imageConfig.icon.profileIcon}
            alt="Profile Icon"
            width={150}
            height={150}
            style={{ borderRadius: "20%" }}
          />
        ) : (
          <Image
            src={imageConfig.icon.investorProfileIcon}
            alt="Investor Profile Icon"
            width={150}
            height={150}
            style={{ borderRadius: "20%" }}
          />
        )}

        <Box height={20} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            px: 2,
            pb: 3,
          }}
        >
          {role === "collector" ? (
            <>
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
                  sx={{
                    color: theme.colors.white,
                    fontSize: 13,
                    lineHeight: 1.3,
                  }}
                >
                  Collector Pro
                </Typography>
                <Typography
                  variant="caption"
                  noWrap
                  sx={{
                    color: theme.colors.white,
                    fontSize: 11,
                    width: "100%",
                    display: "block",
                  }}
                >
                  {address}
                </Typography>
              </Box>
            </>
          ) : (
            <>
              <Avatar
                sx={{
                  width: 36,
                  height: 36,
                  bgcolor: theme.colors.secondaryBgColors,
                  fontSize: 14,
                }}
              >
                IP
              </Avatar>
              <Box width={120}>
                <Typography
                  variant="body2"
                  fontWeight={600}
                  sx={{
                    color: theme.colors.white,
                    fontSize: 13,
                    lineHeight: 1.3,
                  }}
                >
                  Investor Pro
                </Typography>
                <Typography
                  variant="caption"
                  noWrap
                  sx={{
                    color: theme.colors.white,
                    fontSize: 11,
                    width: "100%",
                    display: "block",
                  }}
                >
                  {address}
                </Typography>
              </Box>
            </>
          )}
        </Box>
      </Box>

      {/* Navigation Items */}
      <List sx={{ px: 1 }}>
        {navItems.map((item) => {
          // Check if current pathname starts with item path
          // Using exact match for generic paths, or startsWith for nested paths
          const isActive =
            pathname === item.path ||
            (pathname?.startsWith(item.path + "/") ?? false);

          return (
            <ListItemButton
              key={item.path}
              onClick={() => router.push(item.path)}
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
