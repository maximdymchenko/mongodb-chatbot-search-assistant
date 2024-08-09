import React from "react";
import styled from "styled-components";
import {
  RequestContext,
  Text,
  Carousel,
  Element,
  Pic,
  Button,
  Title,
  Subtitle,
  Reply,
} from "@botonic/react";
import { BACKEND_URL, API_VECTOR_TOKEN } from "../config";

const AnswerBox = styled.div`
  margin-left: 36px;
  text-wrap: initial;
`;

export default class extends React.Component {
  static contextType = RequestContext;
  static async botonicInit({ input, session, params, lastRoutePath }) {}

  render() {
    return (
      <>
        <Text>
          Nice! 🎁 Here are the perfect properties matching your preference:
          {this.context.input.data}
        </Text>
        {this.context.session.resp?.properties?.length > 0 && (
          <Carousel>
            {this.context.session.resp.properties.map((property, i) => (
              <Element key={property.id}>
                <Title style="">{property.title}</Title>
                <Pic src={property.thumbnailUrl} />
                <Subtitle style="">{property.description}</Subtitle>
                <Button url={property.thumbnailUrl}>View</Button>
              </Element>
            ))}
          </Carousel>
        )}
        {this.context.session.resp?.ext && (
          <Text>
            Also 🚀 Please take a look those things from other services:
          </Text>
        )}
        {this.context.session.resp?.ext?.images?.length > 0 && (
          <Carousel>
            {this.context.session.resp.ext.images.map((image, i) => (
              <Element key={i}>
                <Title style="">{image.title}</Title>
                <Pic src={image.image} />
                <Button url={image.url}>View</Button>
              </Element>
            ))}
          </Carousel>
        )}
        {this.context.session.resp?.ext?.webs?.length > 0 && (
          <Carousel>
            {this.context.session.resp.ext.webs.map((web, i) => (
              <Element key={i}>
                <Title style="">{web.title}</Title>
                <Subtitle style="">{web.content}</Subtitle>
                <Button url={web.url}>View</Button>
              </Element>
            ))}
          </Carousel>
        )}
        {this.context.session.resp?.ext?.answer && (
          <AnswerBox>
            <Title style="">{this.context.session.resp.ext.answer}</Title>
          </AnswerBox>
        )}
        {/* {this.context.session.resp?.ext?.related && (
          <Subtitle style="">{this.context.session.resp.ext.related}</Subtitle>
        )} */}
      </>
    );
  }
}
