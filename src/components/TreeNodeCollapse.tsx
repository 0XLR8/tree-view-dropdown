import { DashCircleFill, PlusCircleFill } from 'react-bootstrap-icons';

export const TreeNodeCollapse = ({showNode, handleShowNode, isChildrenNodesValid}: {
    showNode: boolean;
    handleShowNode: () => void;
    isChildrenNodesValid: boolean;
}) => {

    if(showNode){
        return <DashCircleFill className={`icon ${!isChildrenNodesValid && 'invisible'}`} onClick={handleShowNode} />
    }

    return <PlusCircleFill className={`icon ${!isChildrenNodesValid && 'invisible'}`} onClick={handleShowNode} />
}