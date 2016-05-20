export function selectMember(member) {
	// selectMember is a ActionCreator, it needs to return an action,
	// an object with a 'type' property (and optional 'payload').
	return {
		type: 'MEMBER_SELECTED',
		payload: member
	};
}