import { SectionHeaderProps } from "@/app/components/CVPreview/SectionHeader/SectionHeader.types";

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => (
  <div>
    <h2 className="text-xs font-semibold uppercase text-primary_3 sm:text-sm">
      {title}
    </h2>
    <hr className="h-0.5 bg-black" />
  </div>
);

export default SectionHeader;
