import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form } from './ContactForm.styled'
import Input from '../Input'
class ContactForm extends Component {
	state = {
		name: '',
		number: '',
	}

	onChange = (e) => {
		const { name, value } = e.target
		this.setState({ [name]: value })
	}

	onSubmit = (e) => {
		e.preventDefault()

		this.props.onSubmitForm({ ...this.state })
		this.setState({
			name: '',
			number: '',
		})
	}

	render() {
		const { name, number } = this.state
		return (
			<Form onSubmit={this.onSubmit}>
				<label>
					Name
					<Input
						type="text"
						name="name"
						pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
						title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
						required
						value={name}
						onChange={this.onChange}
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
						onChange={this.onChange}
					/>
				</label>
				<button type="submit">Add contact</button>
			</Form>
		)
	}
}

ContactForm.propTypes = {
	onSubmitForm: PropTypes.func.isRequired,
}

export default ContactForm
