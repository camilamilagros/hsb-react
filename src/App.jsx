import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import DoctorsPage from './pages/doctors';
import HomePage from './pages/home';
import React, { useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const RowStyled = styled(Row)`
  min-height: 100vh;
`;
const PageStyled = styled(Col)`
  background-color: #eef1f4;
  width: 100vw;
  padding: 4em;
`;

function App() {
  useEffect(() => {
    document.title = "HSB Rol";
  }, []);

  return (
    <BrowserRouter>
      <Container fluid>
        <RowStyled>
          <Sidebar />
          <PageStyled>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/doctores' component={DoctorsPage} />
            </Switch>
          </PageStyled>
        </RowStyled>
      </Container>
    </BrowserRouter>
  );
}

export default App;
