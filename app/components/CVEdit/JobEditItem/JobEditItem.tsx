import DndListComponent from "@/app/components/Dnd/NestList/DndNestList"; // Import your DnD component
import { JobEditProps } from "./JobEditItem.types";
import DateRange from "../../DateRange/DateRange";
import DescriptionList from "../DescriptionEdit/DescritpionEdit";

const JobEditItem: React.FC<JobEditProps> = ({
  section,
  dispatch,
  sections,
}) => {
  return (
    <DndListComponent
      items={section.data}
      dispatch={(action) => {
        const updatedItems = sections.map((i) =>
          i.id === section.id ? { ...i, data: action.payload } : i,
        );
        dispatch({
          type: "REORDER_ITEMS",
          payload: updatedItems,
        });
      }}
    >
      {(job) => (
        <div key={job.id} className="flex flex-col gap-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xxs font-bold sm:text-xs">{job.position}</h3>
              <div className="text-xxs font-semibold italic sm:text-xs">
                {job.company}
              </div>
            </div>
            <div className="text-right">
              <DateRange
                start={job.date_start}
                end={job.date_end}
                format="MMM yyyy"
              />
              <div className="text-xxs sm:text-xs">
                {job.city}, {job.country}
              </div>
            </div>
          </div>
          <DescriptionList
            items={job.description}
            dispatch={dispatch}
            sectionId={section.id}
            sections={sections}
            itemId={job.id}
          />
        </div>
      )}
    </DndListComponent>
  );
};
export default JobEditItem;
