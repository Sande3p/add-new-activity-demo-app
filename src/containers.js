import { connect } from 'react-redux';
import * as components from './components';
import { addTodo, toggleTodo } from './actions';

export const ActivityList = connect(
  function mapStateToProps(state) {
    return { todos: state };
  },
  function mapDispatchToProps(dispatch) {
    return {
      addTodo: text => dispatch(addTodo(text)),
      toggleTodo: id => dispatch(toggleTodo(id))
    };
  }
)(components.ActivityList);

