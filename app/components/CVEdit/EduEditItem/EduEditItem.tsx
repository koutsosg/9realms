import DndListComponent from "@/app/components/Dnd/NestList/DndNestList";
import { EducationEditProps } from "@/app/components/CVEdit/EduEditItem/EduEditItem.types";
import EditItem from "@/app/components/CVEdit/EditItem/EditItem";

const EduEditItem: React.FC<EducationEditProps> = ({
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
      {(edu) => (
        <EditItem
          item={edu}
          section={section}
          dispatch={dispatch}
          sections={sections}
          format="yyyy"
        />
      )}
    </DndListComponent>
  );
};

export default EduEditItem;
