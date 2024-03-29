import { useState } from "react";

import { parseISO } from "date-fns";
import { Col, Container, Row } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { AlertHunger } from "./components/AlertHunger";
import Calendar from "./components/Calendar";
import { Charts } from "./components/Charts";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { Resources } from "./components/Resources";
import { Scale } from "./components/Scale";
import { Reminder } from "./Reminder";

export interface HungerInput {
  date: Date;
  hunger: number;
}

function getSavedHungerInputs() {
  const text = localStorage.getItem("hungerInput");
  const savedHungerInputs: any[] = text !== null ? JSON.parse(text) : [];

  const hungerInputsWithDateType = savedHungerInputs.map((i) => ({
    date: parseISO(i.date),
    hunger: i.hunger,
  }));

  return hungerInputsWithDateType;
}

function App() {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(false);

  const [hungerInput, setHungerInput] = useState<HungerInput[]>(
    getSavedHungerInputs()
  );

  return (
    <Container className="overflow-auto">
      <NavBar />
      <Row className="h-100">
        <Col
          md={{ span: 7, offset: 2 }}
          lg={{ span: 4, offset: 4 }}
          className="h-100"
        >
          <AlertHunger show={show} toggleShow={toggleShow} />
          <Routes>
            <Route path="*" element={<Home />} />
            <Route
              path="charts"
              element={<Charts hungerInput={hungerInput} />}
            ></Route>
            <Route
              path="scale"
              element={
                <Scale
                  hungerInput={hungerInput}
                  setHungerInput={setHungerInput}
                />
              }
            ></Route>
            <Route path="reminder" element={<Reminder setShow={setShow} />} />
            <Route
              path="calendar"
              element={<Calendar hungerInput={hungerInput} />}
            />
            <Route path="resources/*" element={<Resources />}></Route>
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
