import React from "react";
import styled from "styled-components";

import Link from "next/link";

const AppHeader = () => {
  return (
    <Header>
      <Navigation>
        <List>
          <ListItem>
            <Link href="/">
              <Anchor>Home</Anchor>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/art">
              <Anchor>Artist</Anchor>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/meditation">
              <Anchor>Meditation</Anchor>
            </Link>
          </ListItem>
        </List>
      </Navigation>
    </Header>
  );
};

const Header = styled.header`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Navigation = styled.nav`
  width: 80%;
`;

const List = styled.ul`
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const ListItem = styled.li`
  display: inline;
`;

const Anchor = styled.a`
  color: #696969;
  cursor: pointer;

  :hover {
    color: #000;
  }
`;

export default AppHeader;
