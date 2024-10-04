import { ActionType } from "@/app/components/Dnd/NestList/DndNestList.types"; // Adjust the import path as necessary
import {
  RenderableSection,
  SimplifiedCertification,
  SimplifiedCVResponse,
  SimplifiedEducation,
  SimplifiedJob,
} from "@/app/lib/utils/CVService.types";
import { UniqueIdentifier } from "@dnd-kit/core";

// Define the action types
export type CVAction<T extends RenderableSection> =
  | ActionType<T>
  | { type: "DELETE_SECTION"; payload: { id: UniqueIdentifier } }
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
    case "DELETE_SECTION":
      return {
        ...state,
        sections: state.sections.filter(
          (section) => section.id !== action.payload.id,
        ),
      };
    case "ADD_SECTION":
      return { ...state, sections: [...state.sections, action.payload] };

    case "DELETE_ITEM": {
      const { sectionId, itemId } = action.payload;

      return {
        ...state,
        sections: state.sections.map((section) => {
          if (section.id === sectionId) {
            if (section.type === "job") {
              return {
                ...section,
                data: (section.data as SimplifiedJob[]).filter(
                  (item) => item.id !== itemId,
                ),
              };
            } else if (section.type === "education") {
              return {
                ...section,
                data: (section.data as SimplifiedEducation[]).filter(
                  (item) => item.id !== itemId,
                ),
              };
            } else if (section.type === "certification") {
              return {
                ...section,
                data: (section.data as SimplifiedCertification[]).filter(
                  (item) => item.id !== itemId,
                ),
              };
            }
          }
          return section;
        }),
      };
    }
    default:
      return state;
  }
};
