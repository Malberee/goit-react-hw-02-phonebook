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
	}

	onSubmitForm = (newContact) => {
		const { contacts } = this.state
		const alreadyExists = this.state.contacts.some(
			({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
		)

		if (alreadyExists) {
			alert(`${newContact.name.value} is already in contacts`)
			return
		}

		this.setState((prevState) => ({
			contacts: [...prevState.contacts, { ...newContact, id: nanoid() }],
		}))
	}

	onRemoveContact = (contactId) => {
		this.setState((prevState) => ({
			contacts: prevState.contacts.filter(({ id }) => id !== contactId),
		}))
	}

	onSearchChange = (e) => {
		this.setState({ filter: e.target.value.toLowerCase() })
	}

	showContacts = () => {
		const { contacts, filter } = this.state

		return contacts.filter(({ name }) => name.toLowerCase().includes(filter))
	}

	render() {
		const { contacts, filter } = this.state
		return (
			<>
				<Section title="Phonebook">
					<ContactForm
						// name={this.state.name}
						// number={this.state.number}
						// onNameChange={this.onNameChange}
						// onNumberChange={this.onNumberChange}
						onSubmitForm={this.onSubmitForm}
					/>
				</Section>

				<Section title="Contacts">
					{contacts.length ? (
						<>
							<Filter
								filter={this.state.filter}
								onChange={this.onSearchChange}
							/>
							<ContactList
								contacts={this.showContacts()}
								onRemoveContact={this.onRemoveContact}
							/>
						</>
					) : (
						<p>Not found</p>
					)}
				</Section>
			</>
		)
	}
}

export default App
