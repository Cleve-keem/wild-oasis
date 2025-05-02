import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyle";
import Button from "./ui/Button";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  background-color: red;
  height: 50vh;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">Hello React</Heading>

        <Heading as="h2">Form</Heading>
        <Button onClick={() => alert("You checked in")}>Check in</Button>

        <Heading as="h3">Heading</Heading>
        <Button onClick={() => alert("You checked out")}>Check out</Button>
      </StyledApp>
    </>
  );
}

export default App;
