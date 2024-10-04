import DndListComponent from "@/app/components/Dnd/NestList/DndNestList"; // Import your DnD component
import DateRange from "@/app/components/DateRange/DateRange";
import { CertificationEditProps } from "./CertEditItem.types";
import LinkC from "@/app/components/LinkC/LinkC";
import DescriptionEditLists from "@/app/components/CVEdit/DescriptionEdit/DescriptionEdit";

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

          dispatch({
            type: "REORDER_ITEMS",
            payload: updatedItems,
          });
        }
      }}
    >
      {(cert) => (
        <div key={cert.id} className="flex flex-col gap-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xxs font-bold sm:text-xs"> {cert.course}</h3>
              <div className="text-xxs font-semibold italic sm:text-xs">
                {cert.institution}
              </div>
            </div>
            <div className="text-right">
              <DateRange end={cert.date_end} format="MMM yyyy" />
              {cert.verification && (
                <LinkC
                  href={cert.verification}
                  className="flex text-xxs sm:text-xs"
                  external
                >
                  Verification
                </LinkC>
              )}
            </div>
          </div>
          <DescriptionEditLists
            items={cert.description}
            dispatch={dispatch}
            sectionId={section.id}
            sections={sections}
            itemId={cert.id}
          />
        </div>
      )}
    </DndListComponent>
  );
};
export default CertEditItem;
