import {combineReducers} from 'redux';
import TeamReducer from './reducer_arsfutura_team';
import ActiveMemberReducer from './reducer_active_member';

const rootReducer = combineReducers({
	team: TeamReducer,
	activeMember: ActiveMemberReducer
});

export default rootReducer;
