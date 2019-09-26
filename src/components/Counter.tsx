import React, { useState } from "react";
import {
  Button,
  H1,
  ButtonGroup
} from "collector-portal-framework/dist/components";
import styled from "collector-portal-framework";

const Container = styled.div({
  display: "flex",
  alignItems: "center"
});

const StyledButtonGroup = styled(ButtonGroup)({
  height: "100%"
});

const CounterLabel = styled(H1)({
  margin: 16,
  minWidth: 50,
  textAlign: "center"
});

export const Counter: React.FC = () => {
    const [count, setCount] = useState(0);

  return (
    <Container>
      <StyledButtonGroup>
        <Button onClick={() => setCount(prev => prev - 1)}>Minska</Button>
      </StyledButtonGroup>

      <CounterLabel>{count}</CounterLabel>

      <StyledButtonGroup>
        <Button onClick={() => setCount(prev => prev + 1)}>Öka</Button>
      </StyledButtonGroup>
    </Container>
  );
};
