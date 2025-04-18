import { Active, DragOverlay, useDndMonitor } from '@dnd-kit/core'
import React, { useState } from 'react'
import { SidebarBtnElementDragOverlay } from './SidebarBtnElement';
import { ElementsType, modelElements } from './ModelElements';

function DragOverlayWrapper() {
    const [draggedItem ,setDraggedItem] = useState<Active| null>(null);
    useDndMonitor({
        onDragStart:(event)=>{
            setDraggedItem(event.active);
        },
        onDragCancel: ()=>{
            setDraggedItem(null);
        },
        onDragEnd: ()=>{
            setDraggedItem(null);
        }
    })
    let node = <div>No drag overlay</div>
    if(!draggedItem){
        return null;
    }
    const isSidebarBtnElement = draggedItem.data?.current?.isDesignerBtnElement ;
    if(isSidebarBtnElement){
        const type = draggedItem.data?.current?.type as ElementsType;
        node = <SidebarBtnElementDragOverlay modelElement={modelElements[type]}/>
    }
  return (
    <DragOverlay >{node}</DragOverlay>
  )
}

export default DragOverlayWrapper