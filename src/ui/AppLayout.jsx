import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Siderbar from "./Siderbar";
import styled from "styled-components";

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export default function AppLayout() {
  return (
    <Grid>
      <Header />
      <Siderbar />

      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </Grid>
  );
}
