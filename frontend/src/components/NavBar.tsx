import { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, Drawer, List, ListItem, ListItemText, Box, Link,  } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from './Logo';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = ['Home', 'Makes', 'Types', 'Contact'];

  return (
    <>
      <AppBar color='primary' position='sticky'>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Logo />
          </Box>
          
          {/* Desktop Links (Hidden on Mobile) */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} color="inherit">{item}</Button>
            ))}
          </Box>

          {/* Mobile Menu Icon (Hidden on Desktop) */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setMobileOpen(true)}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <Box sx={{ width: 250 }} onClick={() => setMobileOpen(false)}>
          <List>
            {navItems.map((item) => (
              <Link href={`#${item.toLowerCase()}`} underline="none" color="textPrimary" key={item}>
                <ListItem component="div">
                  <ListItemText primary={item} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;