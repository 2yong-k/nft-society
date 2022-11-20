import useReload from "../hooks/useReload";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "../../../common/Container";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import styled from "styled-components";
import Event1 from "./assets/event1.png";
import Event2 from "./assets/event2.png";

const BannerContainer = styled.div`
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 70px;
  font-weight: bold;
  padding-bottom: 50px;
`;
const EventContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  border: 3px solid #2d364e;
`;
const Card = styled.div`
  height: 200px;
  width: 100%;
  border-radius: 30px;
  margin: 15px auto;
  background: ${(props) => `url(${props.imgUrl})`} center;
  background-size: cover;
  overflow: hidden;
`;

export default function Event() {
  const theme = useTheme();
  const [tab, setTab] = useState("ONGOING");
  useReload();

  return (
    <Box>
      <Box bgcolor={theme.palette.alternate.main} position={"relative"}>
        <Container position="relative" zIndex={2}>
          <BannerContainer>Event</BannerContainer>
          <BottomNavigation
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
            showLabels
            value={tab}
            onChange={(event, newTab) => {
              setTab(newTab);
            }}
          >
            <BottomNavigationAction
              label="Ongoing event"
              value="ONGOING"
              icon={<EventAvailableIcon />}
            />
            <BottomNavigationAction
              label="Closed event"
              value="CLOSED"
              icon={<EventBusyIcon />}
            />
          </BottomNavigation>
          <Box>
            {tab === "ONGOING" ? (
              <EventContainer>
                <Card imgUrl={Event1} />
                <Card imgUrl={Event2} />
              </EventContainer>
            ) : null}
            {tab === "CLOSED" ? (
              <EventContainer>{/* <Card imgUrl={}/> */}</EventContainer>
            ) : null}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
