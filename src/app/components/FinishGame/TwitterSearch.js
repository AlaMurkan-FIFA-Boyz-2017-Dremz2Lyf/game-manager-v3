import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Message, Header, Icon } from 'semantic-ui-react';

const TwitterSearch = ({ hashTag }) => (
  <Segment basic>
    <Header color="teal" as="h2">
      <Icon name="twitter" />
      <Header.Content>
        Tweet it.
      </Header.Content>
    </Header>
    <Message color="teal">
      <Message.Header>
        {`#${hashTag}`}
      </Message.Header>
      <p>Add this hashtag to your tweet and next after the tweet has been sent.</p>
    </Message>
  </Segment>
);

TwitterSearch.propTypes = {
  hashTag: PropTypes.string,
  generateHashtag: PropTypes.func,
};

export default TwitterSearch;
