// File: lib/reducers/cvReducer.ts

import { ActionType } from "@/app/components/Dnd/NestList/DndNestList.types"; // Adjust the import path as necessary
import {
  RenderableSection,
  SimplifiedCVResponse,
} from "../utils/CVService.types";

// Define the action types
type CVAction<T extends RenderableSection> = ActionType<T>; // Includes DND action
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
        sections: action.payload, // Update sections based on the reordered items
      };
    /*  case "UPDATE_CV":
      return {
        ...state,
        ...action.payload, // Handle other CV updates
      }; */
    default:
      return state;
  }
};
