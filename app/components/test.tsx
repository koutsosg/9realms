import DndListComponent from "./dnd/dndList";

const Test = () => {
  const items = {
    id: 1,
    table: [
      { id: 1, content: "item-1" },
      { id: 2, content: "item-2" },
      { id: 3, content: "item-3" },
    ],
  };

  return (
    <DndListComponent items={items.table}>
      {(item) => (
        <div style={{ padding: 8, border: "1px solid gray" }}>
          <div>{item.id}</div>
          <div>{item.content}</div>
        </div>
      )}
    </DndListComponent>
  );
};
export default Test;
