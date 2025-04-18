import React from 'react'
import { getModelbyID } from '@/../actions/model'
import ModelBuilder from '@/components/ModelBuilder';

async function Builderpage({params}: {params: {id: string}}) {
  // throw new Error('Error: This is a test error');

  const { id } = await params;


  const model = await getModelbyID(id)
  if (!model) {
    throw new Error('Model not found')
  }
  
  return <ModelBuilder model={model}/>
}

export default Builderpage