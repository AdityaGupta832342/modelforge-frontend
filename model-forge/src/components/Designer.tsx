"use client"
import React, { act } from 'react'
import DesignerSidebar from './DesignerSidebar'
import {DragEndEvent, useDndMonitor, useDroppable} from '@dnd-kit/core'
import { cn } from '@/lib/utils';
import useDesigner from '@/hooks/useDesigner';
import { LinearModelElement } from './layers/Linear';
import { ElementsType, ModelElementInstance, modelElements } from './ModelElements';
import { idGenerator } from '@/lib/idGenerator';

function Designer() {
    const {elements, addElement} = useDesigner();
    const droppable = useDroppable({
        id:'designer-drop-area',
        data: { isDesignerDropArea: true },
    });
    console.log("ELEMENTS:", elements);
    useDndMonitor({
        onDragEnd: (event: DragEndEvent)=>{
            const {active, over } = event;
            if(!active|| !over) return;
            const isDesignerBtnElement = active.data?.current?.isDesignerBtnElement;
            if(isDesignerBtnElement){
                const type = active.data?.current?.type;
                const newElement = modelElements[type as ElementsType].construct(
                    idGenerator()
                )
                addElement(0, newElement);
            }

        }
    })
  return (
    <div className="flex w-full h-full">
        <div className="p-4 w-full">
            <div  
            ref={droppable.setNodeRef} 
            className={cn("bg-background max-w-[920px] h-full m-auto rounded-xl flex flex-col flex-grow items-center justify-start flex-1 overflow-y-auto", droppable.isOver && "ring-2 ring-primary/25")}>
              {!droppable.isOver && elements.length === 0 &&<p className="text-3xl text-muted-foreground flex flex-grow items-center font-bold">
                    Drop here
                </p>}
                {droppable.isOver && (
                    <div className="p-4 w-full">
                        <div className="h-[120px] rounded-md bg-primary/20"></div>
                    </div>
                )}
                {elements.length >0 && (
                    <div className="flex flex-col  w-full gap-2 p-4">
                        {elements.map(element => <DesignerElementWrapper key={element.id} element={element}/>)}
                    </div>
                )}
            </div>
        </div>
        <DesignerSidebar/>
</div>
  )
}

function DesignerElementWrapper({element}: {element:ModelElementInstance}){
    const DesignerElement = modelElements[element.type].designerComponent;
    return <DesignerElement elementInstance={element}/>
}
export default Designer