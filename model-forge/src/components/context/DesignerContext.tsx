"use client";
import React, { createContext, ReactNode, useState } from 'react'
import { ModelElementInstance } from '../ModelElements';

type DesignerContextType =  {
    elements : ModelElementInstance[];
    addElement: (index: number, element:ModelElementInstance)=> void;
}

export const DesignerContext = createContext<DesignerContextType |  null>(null);

export default function DesignerContextProvider({children}:{children:ReactNode}){
    const [elements, setElements] = useState<ModelElementInstance[]>([]);
    const addElement = (index:number, element:ModelElementInstance)=> {
        setElements(prev =>{
            const newElements = [...prev];
            newElements.splice(index,0,element)
            return newElements;
        })
    }
    return (
        <DesignerContext.Provider value={{
            elements,
            addElement
        }}>
            {children}
        </DesignerContext.Provider>
    )

}