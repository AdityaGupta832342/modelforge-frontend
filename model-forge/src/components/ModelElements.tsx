import { LinearModelElement } from "./layers/Linear";

export type ElementsType = "Linear";

export type ModelElement = {
    type: ElementsType;
    construct: (id:string) =>ModelElementInstance;
    designerBtnElement :{
        icon: React.ElementType;
        label: string
    }
    designerComponent: React.FC<{
        elementInstance: ModelElementInstance
    }>;
    modelComponent: React.FC<any>;
    propertiesComponent: React.FC<any>;
}

export type ModelElementInstance = {
    id: string;
    type: ElementsType;
    extraAttributes?: Record<string, any>;
}

type ModelElementsType = {
    [key in ElementsType]: ModelElement;
}

export const modelElements: ModelElementsType = {
    Linear:LinearModelElement
};

