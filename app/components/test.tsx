import DndListComponent from "./dnd/dndList";

const Test = () => {
  const items = [
    { id: 1, content: "item-1" },
    { id: 2, content: "item-2" },
    { id: 3, content: "item-3" },
  ];
  const renderItem = (item: any) => (
    <div style={{ padding: 8, border: "1px solid gray" }}>{item?.content}</div>
  );

  return <DndListComponent items={items} renderItem={renderItem} />;
};
export default Test;
