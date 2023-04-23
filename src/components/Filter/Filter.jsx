import React from 'react'
import PropTypes from 'prop-types'
import Input from '../Input'

const Filter = ({ filter, onChange }) => {
	return (
		<label>
			Find contacts by name
			<Input
				type="text"
				name={filter}
				pattern=""
				title=""
				value={filter}
				onChange={onChange}
			/>
		</label>
	)
}

Filter.propTypes = {
	filter: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
}

export default Filter
