import DndListComponent from "@/app/components/Dnd/NestList/DndNestList"; // Import your DnD component
import DateRange from "@/app/components/DateRange/DateRange";
import { EducationEditProps } from "@/app/components/CVEdit/EduEditItem/EduEditItem.types";
import DescriptionEditLists from "@/app/components/CVEdit/DescriptionEdit/DescriptionEdit";

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

          dispatch({
            type: "REORDER_ITEMS",
            payload: updatedItems,
          });
        }
      }}
    >
      {(edu) => (
        <div key={edu.id} className="flex flex-col gap-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xxs font-bold sm:text-xs">
                {edu.field_of_study}
              </h3>
              <div className="text-xxs font-semibold italic sm:text-xs">
                {edu.institution}
              </div>
            </div>
            <div className="text-right">
              <DateRange
                start={edu.date_start}
                end={edu.date_end}
                format="yyyy"
              />
              <div className="text-xxs sm:text-xs">
                {edu.city}, {edu.country}
              </div>
            </div>
          </div>
          <DescriptionEditLists
            items={edu.description}
            dispatch={dispatch}
            sectionId={section.id}
            sections={sections}
            itemId={edu.id}
          />
        </div>
      )}
    </DndListComponent>
  );
};
export default EduEditItem;
