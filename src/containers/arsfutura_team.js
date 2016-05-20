import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectMember} from '../actions/index';
import {bindActionCreators} from 'redux';

class ArsFuturaTeam extends Component {

	renderList() {
		return this.props.team.map((member) => {
			return (
				<li style={{cursor: 'pointer'}} key={member.name} className="list-group-item" onClick={() => this.props.selectMember(member)}>
					{member.name}
				</li>
			);
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		);
	}
}


function mapStateToProps(state) {
	// Everything returned from here will appear in props inside of ArsFuturaTeam Component (Container)
	return {
		team: state.team
	};
}

// Anything returned from this function will end up as props on the ArsFuturaTeam Container
function mapDispatchToProps(dispatch) {
	// Whenever selectMember is called, the result will be passed to all reducers with dispatch
	return bindActionCreators({selectMember: selectMember}, dispatch);
}

// Promote ArsFuturaTeam from a component to a container - it needs to know
// about this new dispatch method, selectMember. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(ArsFuturaTeam) 
