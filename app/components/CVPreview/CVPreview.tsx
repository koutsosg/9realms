import CertItem from "@/app/components/CVPreview/CertItem/CertItem";
import DescriptionList from "@/app/components/CVPreview/Description/Description";
import EduItem from "@/app/components/CVPreview/EduItem/EduItem";
import JobItem from "@/app/components/CVPreview/JobItem/JobItem";
import SectionContent from "@/app/components/CVPreview/Section/SectionContent";
import LinkC from "@/app/components/LinkC/LinkC";
import {
  RenderableSection,
  SimplifiedCVResponse,
} from "@/app/lib/utils/CVService.types";

const CvPreview: React.FC<{ cv: SimplifiedCVResponse | null }> = ({ cv }) => {
  const renderSection = (section: RenderableSection) => {
    switch (section.type) {
      case "job":
        return (
          <SectionContent
            key={section.id}
            title={section.title}
            items={section.data}
            renderItem={(job) => <JobItem key={job.id} job={job} />}
          />
        );
      case "certification":
        return (
          <SectionContent
            key={section.id}
            title={section.title}
            items={section.data}
            renderItem={(cert) => <CertItem key={cert.id} cert={cert} />}
          />
        );
      case "education":
        return (
          <SectionContent
            key={section.id}
            title={section.title}
            items={section.data}
            renderItem={(edu) => <EduItem key={edu.id} edu={edu} />}
          />
        );

      default:
        return null;
    }
  };

  if (!cv) {
    return <p>Loading...</p>;
  }
  return (
    <div className="flex flex-col items-center">
      <div className="flex max-w-a4 flex-col gap-3 border border-neutral-500 bg-white px-8 py-8 text-primary_3">
        {/* header */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <div className="text-nowrap text-xl font-semibold uppercase">
              {cv?.user.name} {cv?.user.lastname}
            </div>
            <div className="flex items-center gap-1 text-nowrap text-xs">
              <p>
                {cv?.user.city}, {cv?.user.country}
              </p>
              |
              <LinkC href={`tel:${cv?.user.phone}`} />|
              <LinkC href={`mailto:${cv?.user.email}`} />|
              <LinkC href={`/`}>Linkedin</LinkC>
            </div>
          </div>
          {/** title-Description */}
          <div className="flex flex-col gap-1">
            <h1 className="text-sm font-semibold">{cv?.title}</h1>
            <DescriptionList
              content={cv?.description.description_content}
              bullets={cv?.description.bullets}
            />
          </div>
        </div>
        {/**Sections */}
        <div className="flex flex-col gap-3">
          {cv.sections.map((section) => renderSection(section))}
        </div>
      </div>
    </div>
  );
};

export default CvPreview;
