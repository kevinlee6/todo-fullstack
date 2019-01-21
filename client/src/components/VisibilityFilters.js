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
  const all = todos.length;
  const completed = todos.filter(todo => todo.completed).length;
  const incomplete = all - completed;
  return { all, completed, incomplete };
};

export default connect(
  mapStateToProps,
  { setFilter }
)(VisibilityFilters);
