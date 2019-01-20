import React, { Fragment } from 'react';
import { COMMANDS } from '../constants';

const { DELETE } = COMMANDS;

// Higher-order component that depends on whether todo is to be edited or deleted.
// Defaults so no errors in case any invalid input gets through.
export default (Button, command = '', handleCommand, handleCancel) => {
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
