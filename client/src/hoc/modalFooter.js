import React, { Fragment } from 'react';
import { COMMANDS } from '../constants';

const { DELETE } = COMMANDS;

export default (Button, command, handleCommand, handleCancel) => {
  const buttonText =
    command.slice(0, 1).toUpperCase() + command.slice(1).toLowerCase();
  const buttonType = command === DELETE ? 'danger' : 'primary';
  return (
    <Fragment>
      <Button type={buttonType} onClick={handleCommand}>
        {buttonText}
      </Button>
      <Button key="back" onClick={handleCancel}>
        Return
      </Button>
    </Fragment>
  );
};
