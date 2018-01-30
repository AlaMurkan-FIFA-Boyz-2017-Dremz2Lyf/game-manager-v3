import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Message, Header, Icon } from 'semantic-ui-react';

const TwitterSearch = ({ searchTerm }) => (
  <Segment basic>
    <Header color="teal" as="h2">
      <Icon name="twitter" />
      <Header.Content>
        Use the Hashtag below to tweet the screenshot.
      </Header.Content>
    </Header>
    <Message color="teal">
      <Message.Header>
        {searchTerm}
      </Message.Header>
      <p>Hit next after the tweet has been sent.</p>
    </Message>
  </Segment>
);

TwitterSearch.propTypes = {
  searchTerm: PropTypes.string,
  generateHashtag: PropTypes.func,
};

export default TwitterSearch;
