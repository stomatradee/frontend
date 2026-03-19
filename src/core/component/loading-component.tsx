import type { Theme, SxProps } from "@mui/material/styles";
import type { LinearProgressProps } from "@mui/material/LinearProgress";

import { Fragment } from "react";

import Portal from "@mui/material/Portal";
import { styled } from "@mui/material/styles";
import LinearProgress from "@mui/material/LinearProgress";
import { themeConfig } from "@/core/config/theme-config";

export type LoadingScreenProps = React.ComponentProps<"div"> & {
  portal?: boolean;
  primaryBgActive?: boolean;
  sx?: SxProps<Theme>;
  slots?: {
    progress?: React.ReactNode;
  };
  slotsProps?: {
    progress?: LinearProgressProps;
  };
};

export function LoadingScreen({
  portal,
  slots,
  slotsProps,
  sx,
  primaryBgActive,
  ...other
}: LoadingScreenProps) {
  const PortalWrapper = portal ? Portal : Fragment;

  return (
    <PortalWrapper>
      <LoadingContent sx={sx} {...other}>
        {slots?.progress ?? (
          <LinearProgress
            sx={[
              {
                width: 1,
                maxWidth: 360,
                backgroundColor: primaryBgActive
                  ? themeConfig.colors.bgColors
                  : themeConfig.colors.secondaryBgColors,
                "& .MuiLinearProgress-bar": {
                  backgroundColor: themeConfig.colors.primaryColors,
                },
              },
              ...(Array.isArray(slotsProps?.progress?.sx)
                ? slotsProps.progress.sx
                : [slotsProps?.progress?.sx]),
            ]}
            {...slotsProps?.progress}
          />
        )}
      </LoadingContent>
    </PortalWrapper>
  );
}

// ----------------------------------------------------------------------

const LoadingContent = styled("div")(({ theme }) => ({
  flexGrow: 1,
  width: "100%",
  display: "flex",
  minHeight: "100%",
  alignItems: "center",
  justifyContent: "center",
  paddingLeft: theme.spacing(5),
  paddingRight: theme.spacing(5),
}));
