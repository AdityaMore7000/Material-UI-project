/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Drawer, { drawerClasses } from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
export default function Layout(props) {
  return (
    <div>
        {/* App Bar */}
        {/* Side drawer */}
        <Drawer
        sx={{
            width: 240,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
        }}
        variant='permanent'
        anchor='left'
        >
            <h1>Hello</h1>
        </Drawer>
      <div className="page">{props.children}</div>
    </div>
  );
}
