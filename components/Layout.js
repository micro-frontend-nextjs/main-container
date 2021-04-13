import React from "react";
import Head from "next/head";

import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";

import styled from "styled-components";

const Layout = (props) => {
  const { children } = props;
  return (
    <Container>
      <Head>
        <title>Main App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppHeader />
      <Content>{children}</Content>
      <AppFooter />
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Layout;
