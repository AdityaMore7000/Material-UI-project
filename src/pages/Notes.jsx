import { useEffect,useState } from "react"
import {Paper, Grid} from '@mui/material'
import { Container } from "@mui/material"
export default function Notes(){
    const [notes, setNotes] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8000/notes')
        .then(res =>res.json())
        .then(data=>setNotes(data))
    },[])

    return(
        <Container>
        {/* <Grid container gap={1}>
            <Grid item xs={12} sm={6} md={3}>
                <Paper>1</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Paper>2</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Paper>3</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Paper>4</Paper>
            </Grid>
        </Grid> */}
        <Grid container gap={1}>
        {notes.map(note=>{
            return(
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key = {note.id}><Paper>{note.id}</Paper></Grid> 
                )
            })}
        </Grid>
        </Container>
    )
}