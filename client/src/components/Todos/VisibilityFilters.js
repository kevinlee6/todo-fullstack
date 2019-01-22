import React from 'react';
import { connect } from 'react-redux';
import { VISIBILITY_FILTERS } from '../../constants';
import { setFilter } from '../../redux/actions';
import { getTodos } from '../../redux/selectors';
import { Radio } from 'antd';
import styled from 'styled-components';

const { FILTER_ALL, FILTER_COMPLETED, FILTER_INCOMPLETE } = VISIBILITY_FILTERS;

const RadioGroup = styled(Radio.Group)`
  margin: 10px 0 !important;
  white-space: nowrap;
`;
const RadioButton = styled(Radio.Button)`
  @media (max-width: 576px) {
    font-size: 3.5vw;
  }
`;

const VisibilityFilters = ({ setFilter, all, completed, incomplete }) => (
  <RadioGroup
    defaultValue={FILTER_ALL}
    onChange={e => setFilter(e.target.value)}
  >
    <RadioButton value={FILTER_ALL}>All ({all})</RadioButton>
    <RadioButton value={FILTER_COMPLETED}>Completed ({completed})</RadioButton>
    <RadioButton value={FILTER_INCOMPLETE}>
      Incomplete ({incomplete})
    </RadioButton>
  </RadioGroup>
);

const mapStateToProps = state => {
  const todos = getTodos(state);
  const all = todos.length;
  const completed = todos.filter(todo => todo.completed).length;
  const incomplete = all - completed;
  return { all, completed, incomplete };
};

export default connect(
  mapStateToProps,
  { setFilter }
)(VisibilityFilters);
