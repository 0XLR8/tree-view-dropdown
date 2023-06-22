import { Dropdown } from 'react-bootstrap';
import { TreeNodeToggle } from './TreeNodeToggle';
import { ThreeDotsVertical } from 'react-bootstrap-icons';
import { NodeContext } from '../../context/NodeContext';
import { useContext } from 'react';

export const TreeNodeDropdown = ({nodeId}: {nodeId: number}) => {
    const {setModalInfo} = useContext(NodeContext)

    const handleDropdownItemClick = (eventKey: string | null) => {
        setModalInfo({
            modalType: eventKey,
            nodeId
        })
    }

    return(
        <Dropdown drop='start' className='ms-1' onSelect={handleDropdownItemClick}>
            <Dropdown.Toggle as={TreeNodeToggle}>
                <ThreeDotsVertical className='trigger'/>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item eventKey='Add' as='div'>Add</Dropdown.Item>
                <Dropdown.Item eventKey='Edit' as='div'>Edit</Dropdown.Item>
                <Dropdown.Item eventKey='Delete' as='div'>Delete</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}