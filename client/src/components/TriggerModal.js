import React from 'react';
import ModalWrapper from './ModalWrapper';
import { connect } from 'react-redux';

const TriggerModal = ({ visible }) => (visible ? <ModalWrapper /> : null);

const mapStateToProps = state => {
  const { modal } = state;
  const { visible } = modal;
  return { visible };
};

export default connect(mapStateToProps)(TriggerModal);
