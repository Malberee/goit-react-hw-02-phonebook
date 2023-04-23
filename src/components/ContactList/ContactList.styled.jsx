import styled from 'styled-components'
import { FaRegTrashAlt } from 'react-icons/fa'

export const List = styled.ul`
	padding: 0;
	list-style: none;
	margin-top: 15px;
`

export const ListItem = styled.li`
	display: flex;
	justify-content: space-between;
	padding: 15px;
	border-radius: 15px;
	margin-top: 15px;
`

export const TrashIcon = styled.div`
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
`
