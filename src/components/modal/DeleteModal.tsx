import { useContext } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { NodeContext } from '../../context/NodeContext';

export const DeleteModal = ({type, nodeId, onClose}: {type: string, nodeId: number, onClose: () => void}) => {
    const {handleDeleteNode} = useContext(NodeContext);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleDeleteNode(nodeId);
        onClose();
    }
    
    return(
        <>
            <Modal.Header closeButton>
                <Modal.Title>{type} node</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    Are you sure you want to delete the node?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>
                        Close
                    </Button>
                    <Button variant="danger" type='submit'>
                        {type}
                    </Button>
                </Modal.Footer>
            </Form>
        </>
    )
}