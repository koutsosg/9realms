import { ActionType } from "@/app/components/Dnd/NestList/DndNestList.types"; // Adjust the import path as necessary
import {
  RenderableSection,
  SimplifiedCVResponse,
} from "@/app/lib/utils/CVService.types";

// Define the action types
export type CVAction<T extends RenderableSection> = ActionType<T>; // Includes DND action
/*  | { type: "UPDATE_CV"; payload: Partial<SimplifiedCVResponse> }; // Action for other CV updates */

// The main reducer function
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

    default:
      return state;
  }
};
