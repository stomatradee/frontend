"use client";
import { Dialog, DialogContent, DialogContentText, DialogTitle, List, ListItemButton, ListItemText } from "@mui/material";
import { useLandingPageActions } from "../context/landing-page-context";

export default function RoleDialog() {
    const { open, handleCloseRoleDialog, handleRoleSelected } = useLandingPageActions();
    return (
        <Dialog 
            open={open} 
            onClose={handleCloseRoleDialog}
            PaperProps={{
                sx: {
                    bgcolor: 'var(--secondary-bg-colors)',
                    color: 'var(--white)',
                    borderRadius: '16px',
                    border: '1px solid var(--third-bg-colors)',
                    minWidth: { xs: '90vw', sm: '400px' },
                }
            }}
        >
            <DialogTitle sx={{ textAlign: 'center', pb: 1, fontWeight: 'bold' }}>
                Select Your Role
            </DialogTitle>
            <DialogContent>
                <DialogContentText sx={{ color: '#a3a3a3', textAlign: 'center', mb: 2 }}>
                    Please select your role to connect wallet
                </DialogContentText>
                
                <List sx={{ pt: 0, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                    <ListItemButton 
                        onClick={() => handleRoleSelected("collector")}
                        sx={{
                            bgcolor: 'var(--bg-colors)',
                            border: '1px solid var(--third-bg-colors)',
                            borderRadius: '12px',
                            py: 1.5,
                            '&:hover': {
                                borderColor: 'var(--primary-colors)',
                                bgcolor: 'rgba(44, 255, 158, 0.05)',
                            }
                        }}
                    >
                        <ListItemText 
                            primary="Collector" 
                            slotProps={{ primary: {
                                sx: { fontWeight: 500, textAlign: 'center', color: 'var(--white)' }
                            }}} 
                        />
                    </ListItemButton>
                    <ListItemButton 
                        onClick={() => handleRoleSelected("investor")}
                        sx={{
                            bgcolor: 'var(--bg-colors)',
                            border: '1px solid var(--third-bg-colors)',
                            borderRadius: '12px',
                            py: 1.5,
                            '&:hover': {
                                borderColor: 'var(--primary-colors)',
                                bgcolor: 'rgba(44, 255, 158, 0.05)',
                            }
                        }}
                    >
                        <ListItemText 
                            primary="Investor" 
                            slotProps={{ primary: {
                                sx: { fontWeight: 500, textAlign: 'center', color: 'var(--white)' }
                            }}} 
                        />
                    </ListItemButton>
                </List>
            </DialogContent>
        </Dialog>
    );
}