import {Modal} from 'react-bootstrap';
import { NodeContext } from '../../context/NodeContext';
import { useContext } from 'react';
import { AddModal } from './AddModal';
import { EditModal } from './EditModal';
import { DeleteModal } from './DeleteModal';

export const TreeNodeModal = () => {
    const {modalInfo, setModalInfo} = useContext(NodeContext);

    const handleClose = () => {
        setModalInfo(null);
    }

    return(
        <Modal show={Boolean(modalInfo)} onHide={handleClose} centered>
            {modalInfo?.modalType === 'Add' && <AddModal type={modalInfo.modalType} nodeId={modalInfo.nodeId} onClose={handleClose}/>}
            {modalInfo?.modalType === 'Edit' && <EditModal type={modalInfo.modalType} nodeId={modalInfo.nodeId} onClose={handleClose}/>}
            {modalInfo?.modalType === 'Delete' && <DeleteModal type={modalInfo.modalType} nodeId={modalInfo.nodeId} onClose={handleClose}/>}
        </Modal>
    )
}