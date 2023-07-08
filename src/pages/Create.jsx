import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container, FormControlLabel, Radio, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import RadioGroup from "@mui/material/RadioGroup";
import { FormLabel, FormControl } from "@mui/material";
import { useNavigate } from 'react-router-dom'

export default function Create() {
  const navigate = useNavigate()
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("work");
  const [detailsError, setDetailsError] = useState(false);
  return (
    <Container maxWidth="xl">
      <Typography
        variant={"h6"}
        component={"h2"}
        gutterBottom
        color="textSecondary"
      >
        Create a New Note
      </Typography>

      <form
        noValidate
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          if (title == "") setTitleError(true);
          else setTitleError(false);
          if (details == "") setDetailsError(true);
          else setDetailsError(false);
          if (title && details) {
            fetch("http://localhost:8000/notes", {
              method: "POST",
              headers: { "Content-type": "application/json" },
              body: JSON.stringify({ title, details, category }),
            }).then(()=>navigate('/'))
          }
        }}
      >
        <TextField
          sx={{ margin: "20px 0", display: "block" }}
          label="Note Title"
          variant="outlined"
          onChange={(e) => setTitle(e.target.value)}
          color="secondary"
          fullWidth
          error={titleError}
          required
        />
        <TextField
          sx={{ margin: "20px 0", display: "block" }}
          label="Details"
          onChange={(e) => setDetails(e.target.value)}
          variant="outlined"
          color="secondary"
          fullWidth
          error={detailsError}
          multiline
          rows={4}
          required
        />
        <FormControl>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={category}
            name="use-radio-group"
            defaultValue="first"
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel label="Money" value="money" control={<Radio />} />
            <FormControlLabel label="Todos" value="todos" control={<Radio />} />
            <FormControlLabel
              label="Reminders"
              value="reminders"
              control={<Radio />}
            />
            <FormControlLabel label="Work" value="work" control={<Radio />} />
          </RadioGroup>
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </FormControl>
      </form>
      {/* <Button variant="contained" type="submit">Submit</Button>
    <br />
    <br />
    <Button variant="outlined"color="secondary">Submit</Button>
    <br />
    <br />
    <ButtonGroup variant="contained" >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
    </ButtonGroup> */}
    </Container>
  );
}
