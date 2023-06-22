import { NodeContext } from "./context/NodeContext";
import { useState } from 'react';
import { TypeModalNode, TypeModalInfo, TypeNode } from "./types";
import { nodesArray } from "./data/nodes";
import { TreeView } from "./components/TreeView";

export const App = () => {
	const [nodes, setNodes] = useState<TypeNode[]>(nodesArray);
	const [modalInfo, setModalInfo] = useState<null | TypeModalInfo>(null);

	const handleAddNode = (node: TypeModalNode) => {
		let newNodeId = 0;
		
		nodes.forEach(node => {
			if(node.id > newNodeId){
				newNodeId = node.id;
			}
		});

		newNodeId++;

		setNodes([...nodes, {
			id: newNodeId,
			name: node.nodeName,
			parent_node: node.modalNodeId
		}])
	}

	const handleDeleteNode = (nodeId: number) => {
		setNodes(nodes.filter(node => node.id !== nodeId))
	}

	const handleEditNode = (editedNode: TypeModalNode) => {
		setNodes(nodes.map(node => {
			if(node.id === editedNode.modalNodeId){
				node.name = editedNode.nodeName
			}
			return node;
		}))
	}

	return(
		<NodeContext.Provider value={{
			nodes,
			modalInfo,
			setModalInfo,
			handleAddNode,
			handleEditNode,
			handleDeleteNode
		}}>
			<TreeView />
		</NodeContext.Provider>
	)
}