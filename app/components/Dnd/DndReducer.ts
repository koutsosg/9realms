import { ActionType, ItemType } from "./DndNestList.types";

export const itemsReducer = (
  state: ItemType[],
  action: ActionType
): ItemType[] => {
  switch (action.type) {
    case "REORDER_ITEMS":
      return action.payload;
    default:
      return state;
  }
};
