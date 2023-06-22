import { useContext } from "react"
import { NodeContext } from "../context/NodeContext"
import { TreeNode } from "./TreeNode";
import { TreeNodeModal } from "./modal/TreeNodeModal";

export const TreeView = () => {
    const {nodes} = useContext(NodeContext);
    
    return(
        <>
            <div className="p-5">
                {
                    nodes
                        .filter(node => node.parent_node === null)
                        .map(node => <TreeNode key={node.id} id={node.id} name={node.name} parent_node={node.parent_node} />)
                }
            </div>
            <TreeNodeModal />
        </>
    )
}