/*global chrome*/
import logo from './logo.svg';
import './App.css';
import { createStyles, Header, Group, Container, Button, Stack} from "@mantine/core"
import { useEffect, useState } from "react"


const useStyles = createStyles((theme) => ({
    nav: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center'
    }
    
}));

function App() {
  const { classes } = useStyles();
  const [trips, setTrips] = useState([]);
  const [currentTrip, setCurrentTrip] = useState("")

  useEffect(() => {
    const hydrateTrips = async () => {
        const res = await fetch("http://localhost:5000/trips") 
        const json = await res.json();
        const data = json.data;
        console.log(data)
        setTrips(data)
    }
    hydrateTrips();
}, [])

  const addBookmark = async () => {
    if (currentTrip !== "") {
        const tabs = await chrome.tabs.query({active: true, currentWindow: true})
        let url = tabs[0].url;
        alert(url);
    } else {
        alert("Set Trip")
    }
  }

  return (
    <div className="App">
        <Header className={classes.nav} height={56} >
            <Container fluid>
                <Group position="center" grow>
                    <Button onClick={addBookmark}>Bookmark</Button>
                    <Button>Trips</Button>
                    <Button>Accounts</Button>
                  </Group>
              </Container>
        </Header>
        <h1>Vay-k</h1>
        <Stack className="cards">
            {trips ? trips.map((trip) => {
                return (<Button key={trip.id} onClick={() => setCurrentTrip(trip.id)}>{trip.title}</Button>)
            }) : null}
        </Stack>
    </div>
  );
}

export default App;
