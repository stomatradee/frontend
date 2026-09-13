"use client";

interface RoleDialogProps {
    open: boolean;
    handleCloseRoleDialog: () => void;
    handleRoleSelected: (role: "collector" | "investor") => void;
}

export default function RoleDialog({ open, handleCloseRoleDialog, handleRoleSelected }: RoleDialogProps) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="relative w-full max-w-[400px] rounded-2xl border border-background-third bg-background-secondary p-6 shadow-xl">
                {/* Close Overlay (Optional: click outside to close) */}
                <div 
                    className="fixed inset-0 -z-10" 
                    onClick={handleCloseRoleDialog}
                />

                <div className="text-center pb-2 font-bold text-lg text-white">
                    Select Your Role
                </div>
                
                <div className="text-[#a3a3a3] text-center mb-4 text-sm">
                    Please select your role to connect wallet
                </div>
                
                <div className="flex flex-col gap-3">
                    <button 
                        onClick={() => handleRoleSelected("collector")}
                        className="w-full rounded-xl border border-background-third bg-background py-3 hover:border-primary hover:bg-[rgba(44,255,158,0.05)] transition-colors"
                    >
                        <span className="font-medium text-white text-center">
                            Collector
                        </span>
                    </button>
                    
                    <button 
                        onClick={() => handleRoleSelected("investor")}
                        className="w-full rounded-xl border border-background-third bg-background py-3 hover:border-primary hover:bg-[rgba(44,255,158,0.05)] transition-colors"
                    >
                        <span className="font-medium text-white text-center">
                            Investor
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}