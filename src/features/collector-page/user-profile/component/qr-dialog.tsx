import { QRCodeSVG } from "qrcode.react";
import { useEffect, useRef } from "react";

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
  const dialogRef = useRef<HTMLDivElement>(null);

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div 
        ref={dialogRef}
        className="bg-background border border-background-third rounded-2xl text-white w-full max-w-[400px] flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        <div className="text-center pb-4 pt-6 px-6 font-bold text-lg">
          Your Address
        </div>
        
        <div className="flex justify-center px-6 py-4">
          <div className="bg-white p-4 rounded-2xl inline-block">
            <QRCodeSVG
              value={walletAddress}
              size={200}
              bgColor="#ffffff"
              fgColor="#0A0A0A"
              level="H"
            />
          </div>
        </div>
        
        <div className="flex justify-center pb-6 pt-2 px-6">
          <button
            onClick={onClose}
            className="bg-primary text-background rounded-full font-semibold px-8 py-2 hover:bg-primary/80 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
