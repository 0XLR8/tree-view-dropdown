import { useContext, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { NodeContext } from '../../context/NodeContext';

export const EditModal = ({type, nodeId, onClose}: {type: string, nodeId: number, onClose: () => void}) => {
    const {nodes, handleEditNode} = useContext(NodeContext);
    const targetNode = nodes.find(node => node.id === nodeId)?.name;
    const [nodeName, setNodeName] = useState<string>(targetNode!);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleEditNode({
            nodeName,
            modalNodeId: nodeId
        })
        onClose();
    }
    
    return(
        <>
            <Modal.Header closeButton>
                <Modal.Title>{type} node</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                        <Form.Control 
                            required
                            type='text' 
                            placeholder='Node name' 
                            value={nodeName}
                            onChange={(e) => setNodeName(e.target.value)}
                        />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>
                        Close
                    </Button>
                    <Button variant="primary" type='submit'>
                        {type}
                    </Button>
                </Modal.Footer>
            </Form>
        </>
    )
}