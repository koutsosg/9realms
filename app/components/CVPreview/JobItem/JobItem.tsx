import DescriptionList from "@/app/components/CVPreview/Description/Description";
import { JobItemProps } from "@/app/components/CVPreview/JobItem/JobItem.types";
import DateRange from "@/app/components/DateRange/DateRange";

const JobItem = ({ job }: JobItemProps) => (
  <div key={job.id} className="flex flex-col gap-1">
    <div className="flex items-start justify-between">
      <div>
        <h3 className="text-xxs font-bold sm:text-xs"> {job.position}</h3>
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
      content={job.description.description_content}
      bullets={job.description.bullets}
    />
  </div>
);
export default JobItem;
