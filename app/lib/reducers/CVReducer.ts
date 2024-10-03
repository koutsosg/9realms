import { ActionType } from "@/app/components/Dnd/NestList/DndNestList.types"; // Adjust the import path as necessary
import {
  RenderableSection,
  SimplifiedCVResponse,
} from "@/app/lib/utils/CVService.types";
import { UniqueIdentifier } from "@dnd-kit/core";

// Define the action types
export type CVAction<T extends RenderableSection> =
  | ActionType<T>
  | { type: "DELETE_ITEM"; payload: { id: UniqueIdentifier } }
  | { type: "ADD_SECTION"; payload: T };

export const cvReducer = (
  state: SimplifiedCVResponse,
  action: CVAction<any>,
): SimplifiedCVResponse => {
  switch (action.type) {
    case "REORDER_ITEMS":
      return {
        ...state,
        sections: action.payload,
      };
    case "DELETE_ITEM":
      return {
        ...state,
        sections: state.sections.filter(
          (section) => section.id !== action.payload.id,
        ),
      };
    case "ADD_SECTION":
      return { ...state, sections: [...state.sections, action.payload] };
    default:
      return state;
  }
};
