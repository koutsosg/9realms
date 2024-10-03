import SectionHeader from "@/app/components/CVPreview/SectionHeader/SectionHeader";
import { SectionContentProps } from "@/app/components/CVPreview/Section/SectionContent.types";

const SectionContent = ({ title, items, renderItem }: SectionContentProps) => (
  <div className="flex flex-col gap-2">
    <SectionHeader title={title} />
    <div className="flex flex-col gap-3">{items.map(renderItem)}</div>
  </div>
);

export default SectionContent;
