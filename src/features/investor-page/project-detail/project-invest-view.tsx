"use client";

import UseProjectInvest from "./hooks/use-project-invest";
import { LoadingScreen } from "@/core/component/loading-component";
import Image from "next/image";
import { imageConfig } from "@/core/config/images-config";
import { Icon } from "@iconify/react";
import SubmitButtonComponent from "@/core/component/submit-button-component";
import EmptyAssetComponent from "@/core/component/empty-asset-component";
import AmountInformationComponent from "./component/amount-information-component";

export default function ProjectInvestView() {
    const { data, isLoading, isPayLoading, amountValue, methods, address, handleAmountValueChange, handleTokenCodeChange, onInvest } = UseProjectInvest();

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <LoadingScreen />
            </div>
        );
    }

    if (!data) {
        return (
            <EmptyAssetComponent title="No Project Detail Found" image={imageConfig.icon.confusedIconRich} />
        );
    }

    const { project, investments, collector } = data;

    const truncateAddress = (address: string) => {
        if (!address) return "-";
        return `${address.slice(0, 6)}...${address.slice(-4)}`;
    };

    const handleCopyAddress = (address: string) => {
        navigator.clipboard.writeText(address);
    };

    const cardClass = "bg-background-secondary border border-background-third rounded-[30px] transition-all duration-300 hover:border-primary hover:shadow-[0_8px_24px_rgba(44,255,158,0.15)]";

    return (
        <>
            <header className="bg-background px-[30px] py-[20px] flex flex-row items-center justify-between">
                <Image
                    src={imageConfig.logo.stomatradeLogo}
                    alt="Stomatrade"
                    width={200}
                    height={60}
                    className="w-[200px] h-auto"
                />

                <div className="flex items-center gap-1">
                    <Image
                        src={imageConfig.icon.investorProfileIcon}
                        alt="Profile Icon"
                        width={40}
                        height={40}
                        className="rounded-[20%]"
                    />
                    <div className="w-[10px]" />
                    <span className="text-white font-bold text-[16px] font-mono">
                        {truncateAddress(address ?? "0x0")}
                    </span>
                    <button
                        onClick={() => handleCopyAddress(address ?? "0x0")}
                        className="text-background-third p-[2px] transition-all duration-300 hover:text-primary rounded-full hover:bg-white/5 ml-1"
                    >
                        <Icon icon="mdi:content-copy" width={16} />
                    </button>
                </div>
            </header>
            <div className="flex flex-col pt-[100px] px-5 pb-10 md:py-[121px] md:px-[10px] mx-auto max-w-[900px] w-full gap-[20px]">
                {/* Page Header */}
                <div className="text-center mb-2">
                    <h1 className="text-white font-semibold text-[16px] sm:text-[18px] md:text-[30px]">
                        Start Investment In {project.metadata?.assetName} Project
                    </h1>
                    <div className="h-[10px]" />
                    <p className="text-background-third font-semibold text-[16px] sm:text-[18px] md:text-[15px]">
                        Make your first contribution to support this project
                    </p>
                    <div className="h-[30px]" />
                </div>

                {/* Image Card */}
                <div className={`${cardClass} overflow-hidden`}>
                    <div 
                        className="h-[250px] sm:h-[350px] md:h-[400px] bg-background-third bg-cover bg-center"
                        style={{ backgroundImage: `url(${project.metadata?.imageCID ? `https://gateway.pinata.cloud/ipfs/${project.metadata.imageCID}` : "https://placehold.co/800x400?text=No+Image"})` }}
                        title={project.metadata?.assetName ?? "Project Image"}
                    />
                </div>

                {/* Asset Title Card */}
                <div className={`${cardClass} py-4 px-5 sm:py-5 sm:px-7`}>
                    <div className="flex items-center justify-between flex-wrap gap-3">
                        <h2 className="text-white font-bold text-[18px] sm:text-[22px] md:text-[26px]">
                            {project.metadata?.assetName ?? project.commodityType}
                        </h2>
                        <span className="bg-primary/20 text-primary font-bold text-[11px] tracking-[0.5px] px-[8px] py-[4px] rounded-full uppercase">
                            {project.statusLabel}
                        </span>
                    </div>
                </div>

                {/* Project Details + Funding Progress Row */}
                <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-[20px]">
                    {/* Project Details Card */}
                    <div className={cardClass}>
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-5">
                                <h3 className="text-white font-bold text-[18px]">
                                    Project Details
                                </h3>
                                <span className={`font-semibold text-[11px] px-[8px] py-[4px] rounded-full ${project.collateralVerified ? 'bg-primary/20 text-primary' : 'bg-background-third text-white'}`}>
                                    {project.collateralVerified ? "Verified" : "Unverified"}
                                </span>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                <InfoPill
                                    label="Commodity Type"
                                    value={project.commodityType}
                                    icon="mdi:leaf"
                                />
                                <InfoPill
                                    label="Volume"
                                    value={`${project.volumeKg} Kg`}
                                />
                                <InfoPill
                                    label="Collateral Value"
                                    value={`$${project.collateralValueUSD.toFixed(2)}`}
                                />
                                <InfoPill
                                    label="Max Funding"
                                    value={`$${project.maxFundingUSD.toFixed(2)}`}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Funding Progress Card */}
                    <div className={cardClass}>
                        <div className="p-6">
                            <h3 className="text-white font-bold text-[18px] mb-5">
                                Funding Progress
                            </h3>

                            {/* Progress Bar */}
                            <div className="mb-5">
                                <p className="text-primary font-semibold text-[13px] mb-2">
                                    {project.fundingProgress}%
                                </p>
                                <div className="h-[6px] rounded-full bg-background-third overflow-hidden">
                                    <div 
                                        className="h-full rounded-full bg-gradient-to-r from-secondary to-primary"
                                        style={{ width: `${project.fundingProgress}%` }}
                                    />
                                </div>
                            </div>

                            {/* Funding Stats */}
                            <div className="flex flex-col gap-2.5">
                                <div className="flex justify-between">
                                    <span className="text-[12px] text-background-third">Total Funded</span>
                                    <span className="text-[12px] font-semibold text-white">
                                        ${project.totalFundedUSD.toLocaleString()}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-[12px] text-background-third">Investor Count</span>
                                    <span className="text-[12px] font-semibold text-white">
                                        {project.investorCount}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Collector Information Card */}
                <div className={cardClass}>
                    <div className="p-6">
                        <h3 className="text-white font-bold text-[18px] mb-5">
                            Collector Information
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 items-start">
                            {/* Collector Address */}
                            <div>
                                <p className="text-[11px] text-background-third mb-1">
                                    Collector Address
                                </p>
                                <div className="flex items-center gap-1">
                                    <span className="text-[16px] font-bold text-white font-mono">
                                        {truncateAddress(collector.address)}
                                    </span>
                                    <button
                                        onClick={() => handleCopyAddress(collector.address)}
                                        className="text-background-third p-[2px] transition-all duration-300 hover:text-primary rounded-full hover:bg-white/5"
                                    >
                                        <Icon icon="mdi:content-copy" width={16} />
                                    </button>
                                </div>
                            </div>

                            {/* Project Count */}
                            <div>
                                <p className="text-[11px] text-background-third mb-1">
                                    Project Count
                                </p>
                                <p className="text-[16px] font-bold text-white">
                                    {collector.projectCount}
                                </p>
                            </div>

                            {/* Verification Status */}
                            <div>
                                <p className="text-[11px] text-background-third mb-1">
                                    Verification Status
                                </p>
                                <div 
                                    className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-[12px] font-semibold border ${
                                        collector.isBlacklisted 
                                        ? 'bg-[#3D0000] text-[#FF4444] border-[#FF4444]' 
                                        : 'bg-primary/20 text-primary border-primary'
                                    }`}
                                >
                                    <Icon 
                                        icon={collector.isBlacklisted ? "mdi:close-circle" : "mdi:check-circle"}
                                        width={16}
                                    />
                                    <span>{collector.isBlacklisted ? "Blacklisted" : "Verified"}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Investments Card */}
                <div className={cardClass}>
                    <div className="p-6">
                        <h3 className="text-white font-bold text-[18px] mb-5">
                            Recent Investments
                        </h3>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr>
                                        {["Investor", "Amount ($)", "Share (%)"].map((header) => (
                                            <th
                                                key={header}
                                                className="text-white bg-background border-b border-background-third text-[12px] font-semibold py-3 px-4"
                                            >
                                                {header}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {investments.length === 0 ? (
                                        <tr>
                                            <td
                                                colSpan={3}
                                                className="text-background-third border-b border-background-third text-center py-6 text-[14px]"
                                            >
                                                No recent investments yet
                                            </td>
                                        </tr>
                                    ) : (
                                        investments.map((inv, index) => (
                                            <tr
                                                key={index}
                                                className="transition-all duration-200 hover:bg-background-third/20 border-b border-background-third last:border-0"
                                            >
                                                <td className="text-primary text-[13px] font-mono py-3 px-4">
                                                    {truncateAddress(inv.investor)}
                                                </td>
                                                <td className="text-white text-[13px] py-3 px-4">
                                                    ${inv.amountUSD.toLocaleString()}
                                                </td>
                                                <td className="text-secondary font-semibold text-[13px] py-3 px-4">
                                                    {inv.sharePercent}%
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <AmountInformationComponent
                    amountValue={amountValue}
                    onAmountValueChange={handleAmountValueChange}
                    onTokenCodeChange={handleTokenCodeChange}
                />

                <SubmitButtonComponent
                    isLoading={isPayLoading}
                    title="Pay to join this project?"
                    buttonTitle="Pay"
                    description="Make sure you have enough balance before investing."
                    onSubmit={onInvest}
                    disabled={!methods.formState.isValid}
                />
            </div>
        </>
    );
}

type InfoPillProps = {
    label: string;
    value: string;
    icon?: string;
};

function InfoPill({ label, value, icon }: InfoPillProps) {
    return (
        <div className="bg-background border border-background-third rounded-[12px] p-3 transition-all duration-300 hover:border-primary">
            <p className="text-[10px] text-background-third mb-1.5">
                {label}
            </p>
            <div className="flex items-center gap-1.5">
                {icon && (
                    <Icon icon={icon} width={16} className="text-primary" />
                )}
                <span className="text-[14px] font-bold text-white">
                    {value}
                </span>
            </div>
        </div>
    );
}