import { UniqueIdentifier } from "@dnd-kit/core";

export interface ItemType {
  id: UniqueIdentifier;
  [key: string]: any;
}

export type ActionType = { type: "REORDER_ITEMS"; payload: any };
