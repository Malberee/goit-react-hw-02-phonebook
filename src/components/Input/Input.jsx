import React from 'react'
import { StyledInput } from './Input.styled'
import PropTypes from 'prop-types'

const Input = ({ type, name, pattern, title, value, onChange }) => {
	return (
		<StyledInput
			type={type}
			name={name}
			pattern={pattern}
			title={title}
			required
			value={value}
			onChange={onChange}
		></StyledInput>
	)
}

Input.propTypes = {
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	pattern: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
}

export default Input
