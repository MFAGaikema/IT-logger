import React from 'react';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize';

import {connect} from 'react-redux';
import {deleteTech} from '../../actions/techActions';
 
const TechItem = ({ tech: {firstName, lastName, id}, deleteTech }) => {
	const onClick = () => {
		deleteTech(id)
		M.toast({html: `${firstName} ${lastName} deleted`})
	}
	return (
		<li className='collection-item'>
			<div>
				{firstName} {lastName}
				<a href='#!' className='secondary-content'>
					<i className='material-icons grey-text' onClick={onClick}>delete</i>
				</a>
			</div>
		</li>
	);
};

TechItem.propTypes = {
	tech: PropTypes.object.isRequired,
	deleteTech: PropTypes.func.isRequired,
};
export default connect(null, {deleteTech})(TechItem);
