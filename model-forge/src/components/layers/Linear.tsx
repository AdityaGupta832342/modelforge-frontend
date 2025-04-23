"use client";

import { MdTextFields } from "react-icons/md";
import { ElementsType, ModelElement, ModelElementInstance } from "../ModelElements";

const type: ElementsType = "Linear";
const extraAttributes = {
    label: "Linear Layer",
    helperText:"Helper Text",
    required: false,
    placeholder:"Value here"
  };
export const LinearModelElement : ModelElement = {
    type, 
    construct: (id:string) =>({
        id,
        type,
        extraAttributes
    }),
    designerBtnElement:{
        icon: MdTextFields,
        label:"Linear"
    },
    designerComponent: DesignerComponent ,
    modelComponent: () => <div className="text-white"> Designer component</div>,
    propertiesComponent: () => <div> Designer component</div>

}
type CustomInstance = ModelElementInstance & {
    extraAttributes : typeof extraAttributes;
}

function DesignerComponent({elementInstance}:{elementInstance:ModelElementInstance}){
    const element = elementInstance as CustomInstance
    return <div className="">{element.extraAttributes.label}</div>
}