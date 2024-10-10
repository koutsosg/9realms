import { ActionType } from "@/app/components/Dnd/NestList/DndNestList.types"; // Adjust the import path as necessary
import {
  RenderableSection,
  SimplifiedCertification,
  SimplifiedCVResponse,
  SimplifiedEducation,
  SimplifiedJob,
} from "@/app/lib/utils/CVService.types";
import { UniqueIdentifier } from "@dnd-kit/core";

interface CVState {
  data: SimplifiedCVResponse;
  modal: {
    open: boolean;
  };
  loading: boolean;
  saving: boolean;
}
// Define the action types
export type CVAction<T extends RenderableSection> =
  | ActionType<T>
  | { type: "DELETE_SECTION"; payload: { id: UniqueIdentifier } }
  | { type: "ADD_SECTION"; payload: T }
  | { type: "ADD_ITEM"; payload: { newItem: T; sectionId: UniqueIdentifier } };

export const cvReducer = (state: CVState, action: CVAction<any>): CVState => {
  switch (action.type) {
    case "REORDER_ITEMS":
      return {
        ...state,
        data: {
          ...state.data,
          sections: action.payload,
        },
      };

    case "DELETE_SECTION":
      return {
        ...state,
        data: {
          ...state.data,
          sections: state.data.sections.filter(
            (section) => section.id !== action.payload.id,
          ),
        },
      };

    case "ADD_SECTION":
      return {
        ...state,
        data: {
          ...state.data,
          sections: [...state.data.sections, action.payload],
        },
      };

    case "DELETE_ITEM": {
      const { sectionId, itemId } = action.payload;

      return {
        ...state,
        data: {
          ...state.data,
          sections: state.data.sections.map((section) => {
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
        },
      };
    }

    case "ADD_ITEM": {
      const { newItem, sectionId } = action.payload;
      return {
        ...state,
        data: {
          ...state.data,
          sections: state.data.sections.map((section) => {
            if (section.id === sectionId) {
              return {
                ...section,
                data: [...section.data, newItem],
              };
            }
            return section;
          }),
        },
      };
    }

    case "DELETE_DESC": {
      const { itemId, descId } = action.payload;

      return {
        ...state,
        data: {
          ...state.data,
          sections: state.data.sections.map((section) => {
            if (section.type === "job") {
              return {
                ...section,
                data: (section.data as SimplifiedJob[]).map((item) => {
                  if (item.id === itemId) {
                    const updatedDescContent =
                      item.description?.description_content.filter(
                        (desc) => desc.id !== descId,
                      );

                    return {
                      ...item,
                      description: {
                        ...item.description,
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
                    const updatedDescContent =
                      item.description?.description_content.filter(
                        (desc) => desc.id !== descId,
                      );

                    return {
                      ...item,
                      description: {
                        ...item.description,
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
                data: (section.data as SimplifiedCertification[]).map(
                  (item) => {
                    if (item.id === itemId) {
                      const updatedDescContent =
                        item.description?.description_content.filter(
                          (desc) => desc.id !== descId,
                        );

                      return {
                        ...item,
                        description: {
                          ...item.description,
                          bullets: updatedDescContent.length > 1,
                          description_content: updatedDescContent,
                        },
                      };
                    }
                    return item;
                  },
                ),
              };
            }

            return section;
          }),
        },
      };
    }

    case "ADD_DESC": {
      const { newDesc, itemId, descId } = action.payload;

      return {
        ...state,
        data: {
          ...state.data,
          sections: state.data.sections.map((section) => {
            if (section.type === "job") {
              return {
                ...section,
                data: (section.data as SimplifiedJob[]).map((item) => {
                  if (item.id === itemId && item.description?.id === descId) {
                    const updatedDescContent = [
                      ...item.description.description_content,
                      newDesc,
                    ];

                    return {
                      ...item,
                      description: {
                        ...item.description,
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
                    const updatedDescContent = [
                      ...item.description.description_content,
                      newDesc,
                    ];

                    return {
                      ...item,
                      description: {
                        ...item.description,
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
                data: (section.data as SimplifiedCertification[]).map(
                  (item) => {
                    if (item.id === itemId && item.description?.id === descId) {
                      const updatedDescContent = [
                        ...item.description.description_content,
                        newDesc,
                      ];

                      return {
                        ...item,
                        description: {
                          ...item.description,
                          bullets: updatedDescContent.length > 1,
                          description_content: updatedDescContent,
                        },
                      };
                    }
                    return item;
                  },
                ),
              };
            }

            return section;
          }),
        },
      };
    }

    default:
      return state;
  }
};
