/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Avatar, IconButton, Typography } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export default function NoteCard({note,handleDelete}) {
  return (
    <div>
        <Card>
            <CardHeader
            title={note.title}
            avatar={
              <Avatar>
                {note.category[0].toUpperCase()}
              </Avatar>
            }
            action={
            <IconButton onClick={()=> handleDelete(note.id)}>
                <DeleteOutlineOutlinedIcon />
          </IconButton>
            }
            subheader={note.category}
            />
            <CardContent>
                <Typography variant = {`body2`} color={`textSecondary`}>
                    {note.details}
                </Typography>
            </CardContent>
        </Card>
    </div>
  )
}
