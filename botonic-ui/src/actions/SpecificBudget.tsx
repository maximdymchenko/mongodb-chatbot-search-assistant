import React from "react";
import styled from "styled-components";
import { Text, Button } from "@botonic/react";

const Flex = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-left: 52px;
  margin-right: 52px;
  margin-bottom: 12px;
`;

export default class extends React.Component {
  render() {
    const budgets = [
      { name: "$1500/night", payload: "b-1500-n" },
      { name: "$2000/night", payload: "b-2000-n" },
      { name: "$4000/night", payload: "b-4000-n" },
      { name: "$5000/day", payload: "b-5000-d" },
      { name: "$7000/day", payload: "b-7000-d" },
    ];
    return (
      <>
        <Text>Please tell me what budget you want to find.</Text>
        <Flex>
          {budgets.map((budget, index) => (
            <Button key={index} payload="specific-service">
              {budget.name}
            </Button>
          ))}
        </Flex>
      </>
    );
  }
}
