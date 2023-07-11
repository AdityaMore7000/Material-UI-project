import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import NoteCard from "../../components/NoteCard";
export default function Notes() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);
  const handleDelete = async (id) => {
    await fetch("http://localhost:3000/notes/" + id, {
      method: "DELETE",
    });
    setNotes(notes.filter((note) => note.id != id));
  };
  return (
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
      <Grid container spacing={3}>
        {notes.map((note) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={note.id}>
              <NoteCard handleDelete={handleDelete} note = {note} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
