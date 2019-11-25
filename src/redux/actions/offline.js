import {createAction} from 'redux-actions';

const prefix = '@@offline/';

export default {
  addChild: createAction(prefix + 'ADD_CHILD'),
  updateChild: createAction(prefix + 'UPDATE_CHILD'),
  removeChild: createAction(prefix + 'REMOVE_CHILD'),
  removeChildWithSavingChildren: createAction(
    prefix + 'REMOVE_CHILD_WITH_SAVING_CHILDREN',
  ),
  sendActions: createAction(prefix + 'SEND_ACTIONS'),
  changeConnectivityStatus: createAction(prefix + 'CHANGE_CONNECTIVITY_STATUS'),
};
