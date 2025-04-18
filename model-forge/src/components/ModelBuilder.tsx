"use client";
import { SequentialModel } from '@/generated/prisma';
import React from 'react'
import PreviewDialogBtn from './PreviewDialogBtn';
import SaveBtn from './SaveBtn';
import PublishBtn from './PublishBtn';
import Designer from './Designer';
import { DndContext } from '@dnd-kit/core';
import DragOverlayWrapper from './DragOverlayWrapper';

function ModelBuilder({ model }: { model: SequentialModel }) {
    return (
        <DndContext>
            <main className='flex flex-col w-full'>
                <nav className="flex justify-between border-b-2 p-4 gap-3 items-center">
                    <h2 className="truncate font-medium">
                        <span className='text-muted-foreground mr-2'>Model Name:</span>
                        {model.name}
                    </h2>
                    <div className="flex items-center gap-2">
                        <PreviewDialogBtn />
                        {!model.public && (
                            <>
                                <SaveBtn />
                                <PublishBtn />
                            </>
                        )}


                    </div>
                </nav>
                <div className="flex w-full flex-grow items-center justify-center relative overflow-y-auto h-[200px] bg-accent bg-[url(/paper.svg)] dark:bg-[url(/paper-dark.svg)] ">
                    <Designer />
                </div>
            </main>
            <DragOverlayWrapper />
        </DndContext>
    )
}

export default ModelBuilder