import DescriptionList from "@/app/components/CVPreview/Description/Description";
import { JobItemProps } from "@/app/components/CVPreview/JobItem/JobItem.types";
import DateRange from "@/app/components/CVPreview/DateRange/DateRange";

const JobItem = ({ job }: JobItemProps) => (
  <div key={job.id} className="flex flex-col gap-1">
    <div className="flex items-start justify-between">
      <div>
        <h3 className="text-xs font-bold"> {job.position}</h3>
        <div className="text-xs font-semibold italic">{job.company}</div>
      </div>
      <div className="text-right">
        <DateRange
          start={job.date_start}
          end={job.date_end}
          format="MMM yyyy"
        />
        <div className="text-xs">
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
