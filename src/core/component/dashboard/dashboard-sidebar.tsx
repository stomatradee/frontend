"use client";

import { useMemo } from "react";
import { Icon } from "@iconify/react";
import { imageConfig } from "@/core/config/images-config";
import { useAccount } from "wagmi";
import { usePathname, useRouter } from "next/navigation";
import { routes } from "@/core/config/routes";
import Image from "next/image";

export const SIDEBAR_WIDTH = 220;

interface NavItem {
  label: string;
  icon: string;
  path: string;
}

export interface DashboardSidebarProps {
  role?: "collector" | "investor";
}

export default function DashboardSidebar({
  role = "collector",
}: DashboardSidebarProps) {
  const { address } = useAccount();
  const pathname = usePathname();
  const router = useRouter();

  const navItems: NavItem[] = useMemo(
    () =>
      role === "collector"
        ? [
            {
              label: "My Asset",
              icon: "material-symbols:folder-outline",
              path: routes.collector.myProject(),
            },
            {
              label: "Tokenize Asset",
              icon: "material-symbols:add-circle-outline",
              path: routes.collector.addProject(),
            },
            {
              label: "User Profile",
              icon: "material-symbols:business",
              path: routes.collector.userProfile(),
            },
          ]
        : [
            {
              label: "My Portofolio",
              icon: "material-symbols:pie-chart-outline",
              path: routes.investor.myPortofolio(),
            },
            {
              label: "Asset List",
              icon: "material-symbols:format-list-bulleted",
              path: routes.investor.projectList(),
            },
            {
              label: "My Profile",
              icon: "material-symbols:person-outline",
              path: routes.investor.userProfile(),
            },
          ],
    [role],
  );

  return (
    <div
      className="shrink-0 bg-background border-r border-background-secondary text-white pt-4 fixed top-0 bottom-0 left-0 z-20 hidden md:block"
      style={{ width: SIDEBAR_WIDTH }}
    >
      <div className="flex items-center gap-2 px-4 pb-6">
        <img
          src={imageConfig.logo.stomatradeLogo}
          alt="Stomatrade"
          className="w-auto h-auto"
        />
      </div>

      {/* User Info */}
      <div className="flex flex-col items-center">
        {role === "collector" ? (
          <Image
            src={imageConfig.icon.profileIcon}
            alt="Profile Icon"
            width={150}
            height={150}
            className="rounded-[20%]"
          />
        ) : (
          <Image
            src={imageConfig.icon.investorProfileIcon}
            alt="Investor Profile Icon"
            width={150}
            height={150}
            className="rounded-[20%]"
          />
        )}

        <div className="h-5" />
        <div className="flex items-center gap-[6px] px-4 pb-6">
          {role === "collector" ? (
            <>
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-background-secondary text-[14px]">
                CP
              </div>
              <div className="w-[120px]">
                <p className="text-white text-[13px] font-semibold leading-[1.3]">
                  Collector Pro
                </p>
                <p className="text-white text-[11px] w-full block truncate">
                  {address}
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-background-secondary text-[14px]">
                IP
              </div>
              <div className="w-[120px]">
                <p className="text-white text-[13px] font-semibold leading-[1.3]">
                  Investor Pro
                </p>
                <p className="text-white text-[11px] w-full block truncate">
                  {address}
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Navigation Items */}
      <ul className="px-2">
        {navItems.map((item) => {
          // Check if current pathname starts with item path
          // Using exact match for generic paths, or startsWith for nested paths
          const isActive =
            pathname === item.path ||
            (pathname?.startsWith(item.path + "/") ?? false);

          return (
            <li
              key={item.path}
              onClick={() => router.push(item.path)}
              className={`rounded-lg mb-1 px-3 py-2 flex items-center cursor-pointer border-l-4 transition-all duration-200 ease-in-out ${
                isActive
                  ? "border-primary bg-primary-transparent text-primary"
                  : "border-transparent text-white hover:bg-background-secondary"
              }`}
            >
              <div
                className={`min-w-[36px] flex justify-start items-center ${
                  isActive ? "text-primary" : "text-white"
                }`}
              >
                <Icon icon={item.icon} className="text-[20px]" />
              </div>
              <div className="flex-1 min-w-0">
                <span
                  className={`text-[13px] block truncate ${
                    isActive ? "font-semibold" : "font-normal"
                  }`}
                >
                  {item.label}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
