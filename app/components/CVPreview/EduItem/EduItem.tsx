import DescriptionList from "@/app/components/CVPreview/Description/Description";
import { EduItemProps } from "./EduItem.types";
import DateRange from "@/app/components/CVPreview/DateRange/DateRange";

const EduItem = ({ edu }: EduItemProps) => (
  <div key={edu.id} className="flex flex-col gap-1">
    <div className="flex items-start justify-between">
      <div>
        <h3 className="text-xs font-bold"> {edu.field_of_study}</h3>
        <div className="text-xs font-semibold italic">{edu.institution}</div>
      </div>
      <div className="text-right">
        <DateRange start={edu.date_start} end={edu.date_end} format="yyyy" />
        <div className="text-xs">
          {edu.city}, {edu.country}
        </div>
      </div>
    </div>
    <DescriptionList
      content={edu.description.description_content}
      bullets={edu.description.bullets}
    />
  </div>
);
export default EduItem;
