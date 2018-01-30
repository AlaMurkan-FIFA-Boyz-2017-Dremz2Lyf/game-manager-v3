import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Segment, Message, Loader } from 'semantic-ui-react';

class Searching extends PureComponent {
  static propTypes = {
    loading: PropTypes.bool,
    fetchImages: PropTypes.func,
  };

  componentDidMount() {
    this.props.fetchImages();
  }

  render() {
    const { loading } = this.props;

    return (
      <Segment basic>
        <Message color="teal">
          <Message.Header>
            Searching Twitter for your results.
          </Message.Header>
        </Message>
        {loading ? <Loader size="huge" active={loading} inline="centered" /> : null}
      </Segment>
    );
  }
}

export default Searching;
