import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
  background-color: #9999ff;
`;

export const Navbar = styled.nav`
  width: 96vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Helvetica, Montserrat, Arial, sans-serif;
  font-size: 18px;
  color: #ffffff;
  margin-bottom: 40px;
`;

export const Logo = styled.h1`
  font-size: 18px;
  padding-left: 40px;
  font-weight: 500;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  font-weight: 500;
  padding: 0;
`;

export const Navlink = styled.a`
  padding: 17px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: #8080ff;
  }
`;
