import React from "react";
import { connect } from "react-redux";
import { VISIBILITY_FILTERS } from "../constants";
import { setFilter } from "../redux/actions";
import { getTodos } from "../redux/selectors";
import { Radio } from "antd";
import "./VisibilityFilters.css";

const { FILTER_ALL, FILTER_COMPLETED, FILTER_INCOMPLETE } = VISIBILITY_FILTERS;

const VisibilityFilters = ({ setFilter, all, completed, incomplete }) => (
  <Radio.Group
    className="VisibilityFilters"
    defaultValue={FILTER_ALL}
    onChange={e => setFilter(e.target.value)}
  >
    <Radio.Button value={FILTER_ALL}>All ({all})</Radio.Button>
    <Radio.Button value={FILTER_COMPLETED}>
      Completed ({completed})
    </Radio.Button>
    <Radio.Button value={FILTER_INCOMPLETE}>
      Incomplete ({incomplete})
    </Radio.Button>
  </Radio.Group>
);

const mapStateToProps = state => {
  const todos = getTodos(state);
  const COMPLETED = "completed";
  const INCOMPLETE = "incomplete";
  const all = todos.length;
  return todos.reduce(
    (acc, todo) => {
      const { completed } = todo;
      completed ? (acc[COMPLETED] += 1) : (acc[INCOMPLETE] += 1);
      return acc;
    },
    { all, completed: 0, incomplete: 0 }
  );
};

export default connect(
  mapStateToProps,
  { setFilter }
)(VisibilityFilters);
