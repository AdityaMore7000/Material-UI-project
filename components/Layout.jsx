/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Drawer, { drawerClasses } from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
export default function Layout(props) {
  const navigate = useNavigate()
  const menuItem = [
    {
      text:'My Notes',
      icon: <SubjectOutlined color="secondary"/>,
      path:'/',
    }, {
      text:'Create Note',
      icon: <AddCircleOutlineOutlined color="secondary"/>,
      path:'/create',
    }
  ]
  return (
    <div className='flex-container'>
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
          <Typography variant={`h4`} align='center'>
            Ninja Notes
          </Typography>
            <List>
              {menuItem.map((item,index)=>{
                return(
                <ListItem key={index} onClick={()=>{
                  navigate(item.path)
                }}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text}/>
                </ListItem>
              )
              })}
            </List>
        </Drawer>
      <div className="page">{props.children}</div>
    </div>
  );
}
