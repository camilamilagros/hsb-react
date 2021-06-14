import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const SidebarStyled = styled(Col)`
  background-color: #2d3748;
  padding: 0;
  /* position: fixed; */
`;

const NavItem = styled(Row)`
  a {
    text-decoration: none;
    color: #fff;
  }
  a:hover {
    color: #f1f1f1;
    /* text-decoration: none; */
  }
  font-size: 25px;
  padding: 1rem 0 1rem 0;
  font-weight: 350;
`;

const NavHeader = styled(NavItem)`
  font-size: 30px;
  background-color: #1a202c;
`;

function Sidebar() {
  return (
    <SidebarStyled lg="2">
      <Container>
        <NavHeader>
          <Col>
            <NavLink to="/">HSB</NavLink>
          </Col>
        </NavHeader>
        <NavItem>
          <Col>
            <NavLink to="/doctores">Doctores</NavLink>
          </Col>
        </NavItem>
        <NavItem>
          <Col>
            <NavLink to="/preferencias">Preferencias</NavLink>
          </Col>
        </NavItem>
        <NavItem>
          <Col>
            <NavLink to="/vacaciones">Vacaciones</NavLink>
          </Col>
        </NavItem>
        <NavItem>
          <Col>
            <NavLink to="/licencias">Licencias</NavLink>
          </Col>
        </NavItem>
      </Container>
    </SidebarStyled>
  );
}

export default withRouter(Sidebar);
