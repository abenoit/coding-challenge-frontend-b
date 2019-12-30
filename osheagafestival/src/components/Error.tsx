import React from "react";
import styled from "styled-components";

import { reg } from "../assets/Spacing";
import { secondary } from "../assets/Colors";

interface IErrorProps {
  onRetry: () => void;
}

const Error: React.FC<IErrorProps> = ({ onRetry }) => (
  <Container>
    <span>Oops ! An error occured.</span>

    <Button className="pure-button pure-button-primary" onClick={onRetry}>
      Retry
    </Button>
  </Container>
);

const Container = styled.div`
  margin-top: ${reg};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.span`
  margin: ${reg} 0;
  grid-row: 2;
  grid-column: 5;
  align-self: center;
  background-color: ${secondary};
`;

export default Error;
