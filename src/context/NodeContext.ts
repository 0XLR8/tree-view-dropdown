import { createContext } from "react";
import { TypeNodeContext } from "../types";

export const NodeContext = createContext<TypeNodeContext>({
    nodes: [],
    modalInfo: null,
    setModalInfo: () => {},
    handleAddNode: () => {},
    handleDeleteNode: () => {},
    handleEditNode: () => {}
})