import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import { FaUserMd, FaPlaneDeparture, FaStar, FaCalendarTimes } from "react-icons/fa";

const SidebarStyled = styled(Col)`
  background-color: #2d3748;
  padding: 0;
  /* position: fixed; */
`;

const NavItem = styled(Row)`
  a {
    text-decoration: none;
    color: #d4d2d2;
  }
  a:hover {
    color: #fff;
    text-decoration: none;
  }
  font-size: 1.5rem;
  padding: 1rem 0 1rem 0;
  font-weight: 350;
  a svg {
    margin: 0 1rem 0 0;
  }
`;

const NavHeader = styled(NavItem)`
  font-size: 2rem;
  background-color: #1a202c;
  font-weight: bold;
  letter-spacing: 0.3rem;
  text-align: center;
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
            <NavLink to="/doctores"><FaUserMd /><span>Doctores</span></NavLink>
          </Col>
        </NavItem>
        <NavItem>
          <Col>
            <NavLink to="/preferencias"><FaStar /><span>Preferencias</span></NavLink>
          </Col>
        </NavItem>
        <NavItem>
          <Col>
            <NavLink to="/vacaciones"><FaPlaneDeparture /><span>Vacaciones</span></NavLink>
          </Col>
        </NavItem>
        <NavItem>
          <Col>
            <NavLink to="/licencias"><FaCalendarTimes /><span>Licencias</span></NavLink>
          </Col>
        </NavItem>
      </Container>
    </SidebarStyled>
  );
}

export default withRouter(Sidebar);
