import DndListComponent from "@/app/components/Dnd/NestList/DndNestList"; // Import your DnD component
import { CertificationEditProps } from "@/app/components/CVEdit/CertEditItem/CertEditItem.types";
import EditItem from "@/app/components/CVEdit/EditItem/EditItem";

const CertEditItem: React.FC<CertificationEditProps> = ({
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
      {(cert) => (
        <EditItem
          item={cert}
          section={section}
          dispatch={dispatch}
          sections={sections}
          format="MMM yyyy"
        />
      )}
    </DndListComponent>
  );
};
export default CertEditItem;
