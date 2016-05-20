import React, {Component} from 'react';
import {connect} from 'react-redux';

class MemberDetail extends Component {
	render() {
		if (!this.props.member) {
			return(<div>Select a member.</div>)
		}

		return (
			<div>
				<h3>Member Details</h3>
				<div>Name: {this.props.member.name}</div>
				<span>Position: {this.props.member.position}</span>
			</div>
		);
	};
}


function mapStateToProps(state) {
	return {
		member: state.activeMember
	};
}

export default connect(mapStateToProps)(MemberDetail);