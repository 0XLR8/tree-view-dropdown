export type TypeNode = {
    id: number;
    name: string;
    parent_node: number;
}

export type TypeModalInfo = {
    modalType: string | null;
    nodeId: number;
}

export type TypeModalNode = {
    nodeName: string;
    modalNodeId: number;
}

export type TypeNodeContext = {
    nodes: TypeNode[];
    modalInfo: TypeModalInfo | null;
    setModalInfo: (modal: TypeModalInfo | null) => void;
    handleAddNode: (node: TypeModalNode) => void;
    handleDeleteNode: (nodeId: number) => void;
    handleEditNode: (node: TypeModalNode) => void;
}