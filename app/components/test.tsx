import { useReducer } from "react";
import { itemsReducer } from "@/app/components/ssDnd/DndReducer";
import { ItemType } from "@/app/components/ssDnd/DndNestList.types";
import DndListComponent from "@/app/components/ssDnd/DndNestList";

const initialItems: ItemType[] = [
  {
    id: 1,
    title: "work expirience",
    data: [
      {
        id: 4,
        title: "Nested Item 1",
      },
      { id: 5, title: "Nested Item 2" },
      { id: 6, title: "Nested Item 3" },
    ],
  },
  {
    id: 2,
    title: "education",
    data: [
      { id: 7, title: "Nested Item 4" },
      { id: 8, title: "Nested Item 5" },
      { id: 9, title: "Nested Item 6" },
    ],
  },
  {
    id: 3,
    title: "certificates",
    data: [
      { id: 12, title: "Nested Item 7" },
      { id: 13, title: "Nested Item 8" },
      { id: 14, title: "Nested Item 9" },
    ],
  },
  {
    id: 4,
    title: "education",
    data: [
      { id: 12, title: "Nested Item 7" },
      { id: 13, title: "Nested Item 8" },
      { id: 14, title: "Nested Item 9" },
    ],
  },
];

const Test = () => {
  const [items, dispatch] = useReducer(itemsReducer, initialItems);
  console.log(items);
  return (
    <DndListComponent items={items} dispatch={dispatch}>
      {(item) => (
        <div style={{ padding: 8, border: "1px solid gray" }}>
          <div>{item.title}</div>
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
                  <div>{nestedItem.title}</div>
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
