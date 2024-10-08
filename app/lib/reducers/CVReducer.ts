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
  | { type: "ADD_SECTION"; payload: T }
  | { type: "ADD_ITEM"; payload: { newItem: T; sectionId: UniqueIdentifier } };

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
            }
            if (section.type === "education") {
              return {
                ...section,
                data: (section.data as SimplifiedEducation[]).filter(
                  (item) => item.id !== itemId,
                ),
              };
            }
            if (section.type === "certification") {
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

    case "ADD_ITEM": {
      const { newItem, sectionId } = action.payload;
      console.log("add", newItem, sectionId);
      return {
        ...state,
        sections: state.sections.map((section) => {
          if (section.id === sectionId) {
            console.log(section.id);
            return {
              ...section,
              data: [...section.data, newItem],
            };
          }
          return section;
        }),
      };
    }
    case "DELETE_DESC": {
      const { itemId, descId } = action.payload;

      return {
        ...state,
        sections: state.sections.map((section) => {
          if (section.type === "job") {
            return {
              ...section,
              data: (section.data as SimplifiedJob[]).map((item) => {
                if (item.id === itemId) {
                  // Filter out the description
                  const updatedDescContent =
                    item.description?.description_content.filter(
                      (desc) => desc.id !== descId,
                    );

                  return {
                    ...item,
                    description: {
                      ...item.description,
                      // Set bullets to false if only 1 description remains
                      bullets: updatedDescContent.length > 1,
                      description_content: updatedDescContent,
                    },
                  };
                }
                return item;
              }),
            };
          }

          if (section.type === "education") {
            return {
              ...section,
              data: (section.data as SimplifiedEducation[]).map((item) => {
                if (item.id === itemId) {
                  // Filter out the description
                  const updatedDescContent =
                    item.description?.description_content.filter(
                      (desc) => desc.id !== descId,
                    );

                  return {
                    ...item,
                    description: {
                      ...item.description,
                      // Set bullets to false if only 1 description remains
                      bullets: updatedDescContent.length > 1,
                      description_content: updatedDescContent,
                    },
                  };
                }
                return item;
              }),
            };
          }

          if (section.type === "certification") {
            return {
              ...section,
              data: (section.data as SimplifiedCertification[]).map((item) => {
                if (item.id === itemId) {
                  // Filter out the description
                  const updatedDescContent =
                    item.description?.description_content.filter(
                      (desc) => desc.id !== descId,
                    );

                  return {
                    ...item,
                    description: {
                      ...item.description,
                      // Set bullets to false if only 1 description remains
                      bullets: updatedDescContent.length > 1,
                      description_content: updatedDescContent,
                    },
                  };
                }
                return item;
              }),
            };
          }

          return section;
        }),
      };
    }

    case "ADD_DESC": {
      const { newDesc, itemId, descId } = action.payload;

      return {
        ...state,
        sections: state.sections.map((section) => {
          // Check section type and handle accordingly
          if (section.type === "job") {
            return {
              ...section,
              data: (section.data as SimplifiedJob[]).map((item) => {
                if (item.id === itemId && item.description?.id === descId) {
                  // Add the new description
                  const updatedDescContent = [
                    ...item.description.description_content,
                    newDesc,
                  ];

                  return {
                    ...item,
                    description: {
                      ...item.description,
                      // Set bullets to true if length is more than 1
                      bullets: updatedDescContent.length > 1,
                      description_content: updatedDescContent,
                    },
                  };
                }
                return item;
              }),
            };
          }

          if (section.type === "education") {
            return {
              ...section,
              data: (section.data as SimplifiedEducation[]).map((item) => {
                if (item.id === itemId && item.description?.id === descId) {
                  // Add the new description
                  const updatedDescContent = [
                    ...item.description.description_content,
                    newDesc,
                  ];

                  return {
                    ...item,
                    description: {
                      ...item.description,
                      // Set bullets to true if length is more than 1
                      bullets: updatedDescContent.length > 1,
                      description_content: updatedDescContent,
                    },
                  };
                }
                return item;
              }),
            };
          }

          if (section.type === "certification") {
            return {
              ...section,
              data: (section.data as SimplifiedCertification[]).map((item) => {
                if (item.id === itemId && item.description?.id === descId) {
                  // Add the new description
                  const updatedDescContent = [
                    ...item.description.description_content,
                    newDesc,
                  ];

                  return {
                    ...item,
                    description: {
                      ...item.description,
                      // Set bullets true if length is more than 1
                      bullets: updatedDescContent.length > 1,
                      description_content: updatedDescContent,
                    },
                  };
                }
                return item;
              }),
            };
          }

          return section; // Return unchanged section if not matching
        }),
      };
    }

    default:
      return state;
  }
};
