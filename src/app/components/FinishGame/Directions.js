import React from 'react';
import { Segment, Header, Icon, Message } from 'semantic-ui-react';

const Directions = () => (
  <Segment basic textAlign="center">
    <Header color="teal" as="h2">
      <Icon name="share" />
      <Header.Content>
        Directions
      </Header.Content>
    </Header>
    <Message color="teal">
      Please select Match Facts in the post-match menu. When there, please use the share feature to take a screenshot.
    </Message>
  </Segment>
);

export default Directions;
