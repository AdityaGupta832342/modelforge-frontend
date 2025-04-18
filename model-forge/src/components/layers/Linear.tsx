"use client";

import { MdTextFields } from "react-icons/md";
import { ElementsType, ModelElement } from "../ModelElements";

const type: ElementsType = "Linear";

export const LinearModelElement : ModelElement = {
    type, 
    construct: (id:string) =>({
        id,
        type,
        extraAttributes:{
          label: "Linear Layer",
          helperText:"Helper Text",
          required: false,
          placeholder:"Value here"
        }
    }),
    designerBtnElement:{
        icon: MdTextFields,
        label:"Linear"
    },
    designerComponent: () => <div> Designer component</div>,
    modelComponent: () => <div> Designer component</div>,
    propertiesComponent: () => <div> Designer component</div>

}