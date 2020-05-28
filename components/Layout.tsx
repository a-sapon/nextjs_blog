import Link from 'next/link';
import {Header, Navbar, Logo, NavList, Navlink} from './styled-components/Header';
import {GenericLink, PostSection} from './styled-components/Main';

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <>
      <Header>
        <Navbar>
          <Logo>Welcome to our blog</Logo>
          <NavList>
            <li>
              <Link href='/'>
                <Navlink>Home</Navlink>
              </Link>
            </li>
            <li>
              <Link href='/posts/new'>
                <Navlink>Write a post</Navlink>
              </Link>
            </li>
          </NavList>
        </Navbar>
      </Header>
      <main>{children}</main>
      {!home && (
        <PostSection>
          <Link href='/'>
            <GenericLink>← Go back</GenericLink>
          </Link>
        </PostSection>
      )}
    </>
  );
}
