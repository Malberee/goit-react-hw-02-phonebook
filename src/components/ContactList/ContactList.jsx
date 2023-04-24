import React from 'react'
import PropTypes from 'prop-types'
import { FaRegTrashAlt } from 'react-icons/fa'
import { List, ListItem, TrashIcon } from './ContactList.styled'
import Input from '../Input'

const ContactList = ({ contacts, onRemoveContact }) => {
	return (
		<List>
			{contacts.map(({ id, name, number }) => {
				return (
					<ListItem key={id}>
						<p>{name}</p>
						<p>{number}</p>
						<TrashIcon onClick={() => onRemoveContact(id)}>
							<FaRegTrashAlt size={18} />
						</TrashIcon>
					</ListItem>
				)
			})}
		</List>
	)
}

ContactList.propTypes = {
	contacts: PropTypes.array.isRequired,
	onRemoveContact: PropTypes.func.isRequired,
}

export default ContactList
