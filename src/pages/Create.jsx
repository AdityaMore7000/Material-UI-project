import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import { Container } from "@mui/material";
export default function Create() {
  return (
    <Container>
    <Typography
    variant={"h6"}
    component={"h2"}
    gutterBottom
    color="textSecondary"
    >
        Create a New Note
    </Typography>

    <Button type="submit" color="secondary" variant="contained" onClick={()=>{
        console.log('You submitted');
    }}>Submit</Button>
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
