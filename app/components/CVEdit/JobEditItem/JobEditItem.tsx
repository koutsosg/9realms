import DndListComponent from "@/app/components/Dnd/NestList/DndNestList";
import { JobEditProps } from "@/app/components/CVEdit/JobEditItem/JobEditItem.types";
import EditItem from "@/app/components/CVEdit/EditItem/EditItem";

const JobEditItem: React.FC<JobEditProps> = ({
  section,
  dispatch,
  sections,
}) => {
  return (
    <DndListComponent
      items={section.data}
      dispatch={(action) => {
        if (action.type === "REORDER_ITEMS") {
          const updatedItems = sections.map((i) =>
            i.id === section.id ? { ...i, data: action.payload } : i,
          );
          dispatch({ type: "REORDER_ITEMS", payload: updatedItems });
        }
      }}
    >
      {(job) => (
        <EditItem
          item={job}
          section={section}
          dispatch={dispatch}
          sections={sections}
          format="MMM yyyy"
        />
      )}
    </DndListComponent>
  );
};

export default JobEditItem;
