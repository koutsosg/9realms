import { useReducer } from "react";
import DndListComponent from "./dnd/dndList";
import { itemsReducer } from "./dnd/dndReducer";
import { ItemType, ActionType } from "./dnd/dndTypes";

const initialItems: ItemType[] = [
  {
    id: 1,
    content: "Item 1",
    data: [
      {
        id: 4,
        content: "Nested Item 1",
        data: [
          { id: 10, content: "Inner Nested Item 1" },
          { id: 11, content: "Inner Nested Item 2" },
        ],
      },
      { id: 5, content: "Nested Item 2" },
      { id: 6, content: "Nested Item 3" },
    ],
  },
  {
    id: 2,
    content: "Item 2",
    data: [
      { id: 7, content: "Nested Item 1" },
      { id: 8, content: "Nested Item 2" },
      { id: 9, content: "Nested Item 3" },
    ],
  },
  {
    id: 3,
    content: "Item 3",
    data: [
      { id: 12, content: "Nested Item 1" },
      { id: 13, content: "Nested Item 2" },
      { id: 14, content: "Nested Item 3" },
    ],
  },
];

const Test = () => {
  const [items, dispatch] = useReducer(itemsReducer, initialItems);

  return (
    <DndListComponent items={items} dispatch={dispatch}>
      {(item) => (
        <div style={{ padding: 8, border: "1px solid gray" }}>
          <div>{item.id}</div>
          <div>{item.content}</div>
          {item.data && (
            <DndListComponent
              items={item.data}
              dispatch={(action) => {
                const updatedItems = items.map((i) =>
                  i.id === item.id ? { ...i, data: action.payload } : i
                );
                dispatch({ type: "REORDER_ITEMS", payload: updatedItems });
              }}
            >
              {(nestedItem) => (
                <div style={{ padding: 8, border: "1px solid gray" }}>
                  <div>{nestedItem.id}</div>
                  <div>{nestedItem.content}</div>
                </div>
              )}
            </DndListComponent>
          )}
        </div>
      )}
    </DndListComponent>
  );
};

export default Test;
