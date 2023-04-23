import React from 'react'
import PropTypes from 'prop-types'
import { Form } from './ContactForm.styled'
import Input from '../Input'

const ContactForm = ({
	name,
	number,
	onNameChange,
	onNumberChange,
	onSubmitForm,
}) => {
	return (
		<Form onSubmit={onSubmitForm}>
			<label>
				Name
				<Input
					type="text"
					name="name"
					pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
					title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
					required
					value={name}
					onChange={onNameChange}
				/>
			</label>
			<label>
				Number
				<Input
					type="tel"
					name="number"
					pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
					title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
					required
					value={number}
					onChange={onNumberChange}
				/>
			</label>
			<button type="submit">Add contact</button>
		</Form>
	)
}

ContactForm.propTypes = {
	name: PropTypes.string.isRequired,
	number: PropTypes.string.isRequired,
	onNameChange: PropTypes.func.isRequired,
	onNumberChange: PropTypes.func.isRequired,
	onSubmitForm: PropTypes.func.isRequired,
}

export default ContactForm
