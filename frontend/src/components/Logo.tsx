import { Box, Typography } from '@mui/material';

export default function Logo() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box component="span" sx={{ display: 'inline-flex', width: 32, height: 32 }}>
        <svg viewBox="0 0 64 64" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="10" width="60" height="36" rx="10" fill="#212121" />
          <path d="M8 28c6-8 14-12 24-12s18 4 24 12" stroke="#ffcc00" strokeWidth="4" strokeLinecap="round" />
          <circle cx="18" cy="40" r="6" fill="#fff" />
          <circle cx="46" cy="40" r="6" fill="#fff" />
          <path d="M24 18l5 10h6l5-10" stroke="#ffcc00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Box>
      <Typography component="span" variant="h6" sx={{ ml: 1, fontWeight: 700, letterSpacing: 0.5 }}>
        AutoHub
      </Typography>
    </Box>
  );
}
