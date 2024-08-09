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
    const services = [
      { name: "pet friendly", payload: "pet-friendly" },
      { name: "free cancellation", payload: "free-cancellation" },
      { name: "discount", payload: "discount" },
      { name: "swimming pool", payload: "swimming-pool" },
      { name: "instrument", payload: "instrument" },
    ];
    return (
      <>
        <Text>Please choose service option for you.</Text>
        <Flex>
          {services.map((service, index) => (
            <Button key={index} payload="">
              {service.name}
            </Button>
          ))}
        </Flex>
      </>
    );
  }
}
