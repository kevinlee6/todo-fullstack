import React, { Fragment } from "react";
import { COMMANDS } from "../constants";
import { titleCase } from "../helper";

const { DELETE } = COMMANDS;

// Higher-order component that depends on whether todo is to be edited or deleted.
// Defaults so no errors in case any invalid input gets through.
export default (Button, command = "", handleCommand, handleCancel) => {
  const buttonText = titleCase(command);
  const buttonType = command === DELETE ? "danger" : "primary";
  return (
    <Fragment>
      <Button type={buttonType} onClick={handleCommand}>
        {buttonText}
      </Button>
      <Button key="back" onClick={handleCancel}>
        Cancel
      </Button>
    </Fragment>
  );
};
