import React from 'react';
import { connect } from 'react-redux';
import { VISIBILITY_FILTERS } from '../constants';
import { setFilter } from '../redux/actions';
import { Radio } from 'antd';
import './VisibilityFilters.css';

const { FILTER_ALL, FILTER_COMPLETED, FILTER_INCOMPLETE } = VISIBILITY_FILTERS;

const VisibilityFilters = ({ setFilter }) => (
  <Radio.Group
    className="VisibilityFilters"
    defaultValue={FILTER_ALL}
    onChange={e => setFilter(e.target.value)}
  >
    <Radio.Button value={FILTER_ALL}>All</Radio.Button>
    <Radio.Button value={FILTER_COMPLETED}>Completed</Radio.Button>
    <Radio.Button value={FILTER_INCOMPLETE}>Incomplete</Radio.Button>
  </Radio.Group>
);

export default connect(
  null,
  { setFilter }
)(VisibilityFilters);
