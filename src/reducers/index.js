import { combineReducers } from 'redux';
import TeamReducer from './reducer_arsfutura_team';

const rootReducer = combineReducers({
	team: TeamReducer
});

export default rootReducer;
