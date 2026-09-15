"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/core/component/shadcn-ui/dialog";
import { Button } from "@/core/component/shadcn-ui/button";

interface RoleDialogProps {
    open: boolean;
    handleCloseRoleDialog: () => void;
    handleRoleSelected: (role: "collector" | "investor") => void;
}

export default function RoleDialog({ open, handleCloseRoleDialog, handleRoleSelected }: RoleDialogProps) {
    return (
        <Dialog open={open} onOpenChange={(isOpen) => !isOpen && handleCloseRoleDialog()}>
            <DialogContent className="sm:max-w-[400px] bg-card border-border/50">
                <DialogHeader>
                    <DialogTitle className="text-center font-bold text-lg text-foreground">
                        Select Your Role
                    </DialogTitle>
                    <DialogDescription className="text-center text-sm text-muted-foreground">
                        Please select your role to connect wallet
                    </DialogDescription>
                </DialogHeader>
                
                <div className="flex flex-col gap-3 mt-4">
                    <Button 
                        onClick={() => handleRoleSelected("collector")}
                        variant="outline"
                        size="lg"
                        className="w-full justify-center bg-background border-border/50 hover:border-primary hover:bg-[rgba(44,255,158,0.05)] transition-colors"
                    >
                        <span className="font-medium text-foreground">
                            Collector
                        </span>
                    </Button>
                    
                    <Button 
                        onClick={() => handleRoleSelected("investor")}
                        variant="outline"
                        size="lg"
                        className="w-full justify-center bg-background border-border/50 hover:border-primary hover:bg-[rgba(44,255,158,0.05)] transition-colors"
                    >
                        <span className="font-medium text-foreground">
                            Investor
                        </span>
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}