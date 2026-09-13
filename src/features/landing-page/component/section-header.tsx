import Image from "next/image";

interface SectionHeaderProps {
    logoSrc?: string;
    heading: string;
    subheading?: string;
}

export default function SectionHeader({
    logoSrc,
    heading,
    subheading,
}: SectionHeaderProps) {
    return (
        <div className="flex flex-col items-center gap-4 text-center mb-12">
            {/* Logo */}
            {logoSrc && (
                <div className="mb-2">
                    <Image
                        src={logoSrc}
                        alt="Stomatrade Logo"
                        width={200}
                        height={50}
                        className="h-12 w-auto object-contain"
                    />
                </div>
            )}

            {/* Main Heading */}
            <h2 className="text-[1.875rem] sm:text-[2.5rem] lg:text-[3rem] font-bold leading-[1.15] text-white max-w-3xl">
                {heading}
            </h2>

            {/* Subheading */}
            {subheading && (
                <p className="text-[0.875rem] sm:text-[1rem] text-white/50 font-light italic">
                    {subheading}
                </p>
            )}
        </div>
    );
}

