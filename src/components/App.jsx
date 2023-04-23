import { Component, useState } from 'react'
import { nanoid } from 'nanoid'
import './App.scss'
import Section from './Section'
import ContactForm from './ContactForm'
import ContactList from './ContactList'
import Filter from './Filter'

class App extends Component {
	state = {
		contacts: [
			{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
			{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
			{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
			{ id: 'id-4', name: 'Жук Борис', number: '227-91-26' },
		],
		filter: '',
		name: '',
		number: '',
	}

	onNameChange = (e) => {
		this.setState({ name: e.currentTarget.value })
	}

	onNumberChange = (e) => {
		this.setState({ number: e.currentTarget.value })
	}

	onSearchChange = (e) => {
		this.setState({ filter: e.currentTarget.value.toLowerCase() })
	}

	onRemoveContact = (contactId) => {
		this.setState({
			contacts: this.state.contacts.filter(({ id }) => id !== contactId),
		})
	}

	onSubmitForm = (e) => {
		e.preventDefault()
		const { name, number } = e.currentTarget
		const names = this.state.contacts.map(({ name }) => name)

		if (!names.includes(name.value)) {
			this.setState({
				contacts: [
					...this.state.contacts,
					{ name: name.value, number: number.value, id: nanoid() },
				],
			})
		} else alert(`${name.value} is already in contacts`)
	}

	showContacts = () => {
		const { contacts, filter } = this.state

		return contacts.filter((contact) =>
			contact.name.toLowerCase().includes(filter)
		)
	}

	render() {
		return (
			<>
				<Section title="Phonebook">
					<ContactForm
						name={this.state.name}
						number={this.state.number}
						onNameChange={this.onNameChange}
						onNumberChange={this.onNumberChange}
						onSubmitForm={this.onSubmitForm}
					/>
				</Section>

				<Section title="Contacts">
					<Filter filter={this.state.filter} onChange={this.onSearchChange} />
					<ContactList
						contacts={this.showContacts()}
						onRemoveContact={this.onRemoveContact}
					/>
				</Section>
			</>
		)
	}
}

export default App