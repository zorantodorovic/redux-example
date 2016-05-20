import React, {Component} from 'react';
import {connect} from 'react-redux';

class ArsFuturaTeam extends Component {
	
	renderList() {
		return this.props.team.map((member) => {
			return (
				<li key={member.name} className="list-group-item">
					<h5>{member.name}</h5>
					<span>{member.position}</span>
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

export default connect(mapStateToProps)(ArsFuturaTeam) 
