import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Header, Button, Modal } from 'semantic-ui-react';
import TeamSearch from '../TeamSearch';
import FinishGame from '../FinishGame';
import { imageFetcher, getCompetitions, getTeams } from '../../utilities';


class GameForm extends PureComponent {
  static propTypes = {
    status: PropTypes.string,
  }

  state = {
    modalOpen: false,
  }

  closeModal = () => {
    this.setState({
      modalOpen: false,
    });
  }

  openModal = () => {
    this.setState({
      modalOpen: true,
    });
  }

  render() {
    const { modalOpen } = this.state;
    const { status } = this.props;
    let headerContent = 'Select Teams';
    let buttonContent = 'Start';
    let buttonPrimary = false;

    if (status === 'started') {
      headerContent = 'Complete Game';
      buttonContent = 'Complete Game';
      buttonPrimary = true;
    }

    return (
      <Modal
        open={modalOpen}
        onOpen={this.openModal}
        onClose={this.closeModal}
        trigger={<Button primary={buttonPrimary} fluid>{buttonContent}</Button>}
        basic
        size="small"
      >
        <Header icon="soccer" content={headerContent} />
        {
          status === 'started' ? (
            <FinishGame imageFetcher={imageFetcher} closeModal={this.closeModal} />
          ) : (
            <TeamSearch getCompetitions={getCompetitions} getTeams={getTeams} closeModal={this.closeModal} />
          )
        }
      </Modal>
    );
  }
}

export default GameForm;
