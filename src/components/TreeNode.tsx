import { useCallback, useContext, useMemo, useState } from 'react';
import { NodeContext } from '../context/NodeContext';
import { TreeNodeDropdown } from './dropdown/TreeNodeDropdown';
import { TreeNodeCollapse } from './TreeNodeCollapse';

export const TreeNode = ({id, name, parent_node}: {
    id: number; 
    name: string, 
    parent_node: number
}) => {
    const {nodes} = useContext(NodeContext);
    const [showNode, setShowNode] = useState<boolean>(false);

    const childrenNodes = nodes.filter(node => node.parent_node === id);
    const isChildrenNodesValid = Boolean(childrenNodes.length);
    
    const countNodes = useCallback((parentId: number) => { 
        const childNodes = nodes.filter(node => node.parent_node === parentId);
        let count = childNodes.length;
    
        childNodes.forEach((node) => {
        count += countNodes(node.id);
        });

        return count;
    }, [nodes]);

    const totalNodes = useMemo(() => {
        return countNodes(id)
    }, [id, countNodes])

    const handleShowNode = () => {
        setShowNode(!showNode)
    }

    return(
        <div className='tree-node-wrapper' style={{paddingLeft: parent_node ? `${parent_node + 40}px` : '0px'}}>
            <div className='tree-node mb-3 d-flex align-items-center'>
                <TreeNodeCollapse 
                    showNode={showNode} 
                    handleShowNode={handleShowNode} 
                    isChildrenNodesValid={isChildrenNodesValid} 
                />
                <div className='tree-node-inner py-2 ps-4 flex-grow-1 d-flex justify-content-between align-items-center'>
                    <span>{name}</span>
                    <div className='d-flex align-items-center'>
                        <span>{totalNodes} nodes under</span>
                        <TreeNodeDropdown nodeId={id} />
                    </div>
                </div>
            </div>
            {
                isChildrenNodesValid && showNode && 
                    childrenNodes.map(node => 
                        <TreeNode 
                            key={node.id}
                            id={node.id} 
                            name={node.name} 
                            parent_node={node.parent_node}
                        />
                    )
            }
        </div>
    )
}