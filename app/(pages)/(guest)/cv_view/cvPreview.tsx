"use client";
import LinkC from "@/app/components/LinkC/LinkC";
import {
  CertificationSection,
  EducationSection,
  JobSection,
  SimplifiedCVResponse,
} from "@/app/lib/utils/CVService.types";
import { formatDate } from "@/app/lib/utils/dateUtils";
import { useEffect, useState } from "react";

const CvPreview = () => {
  const [cv, setCv] = useState<SimplifiedCVResponse | null>();

  useEffect(() => {
    const fetchCvData = async () => {
      try {
        const response = await fetch(`/api/fetchCv`);
        if (!response.ok) {
          throw new Error("Failed to fetch CV data");
        }
        const result = await response.json();
        setCv(result.cv as SimplifiedCVResponse);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCvData();
  }, []);
  console.log(cv);
  const renderSection = (
    section: JobSection | EducationSection | CertificationSection,
  ) => {
    switch (section.type) {
      case "job":
        return (
          <div key={section.id}>
            <h3 className="font-semibold uppercase">{section.title}</h3>
            <hr className="h-0.5 bg-black"></hr>
            {section.data.map((job: any) => (
              <div key={job.id} className="mb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-semibold">{job.company}</div>
                    <div>{job.position}</div>
                  </div>
                  <div className="text-right">
                    <div>
                      {job.city} ({job.country})
                    </div>
                    <div className="italic">
                      {formatDate(job.date_start)}&nbsp;-&nbsp;
                      {job.date_end ? formatDate(job.date_end) : "Present"}
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  {job.description.description_content[0]?.content}
                </div>
              </div>
            ))}
          </div>
        );
      case "education":
        return (
          <div key={section.id}>
            <h3 className="font-semibold">{section.title}</h3>
            {section.data.map((edu: any) => (
              <div key={edu.id} className="mb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-semibold">{edu.institution}</div>
                    <div>{edu.field_of_study}</div>
                  </div>
                  <div className="text-right">
                    <div>
                      {edu.city} ({edu.country})
                    </div>
                    {
                      <div className="italic">
                        {edu.date_start && formatDate(edu.date_start, "yyyy")}
                        &nbsp;-&nbsp;
                        {edu.date_end
                          ? formatDate(edu.date_end, "yyyy")
                          : "Present"}
                      </div>
                    }
                  </div>
                </div>
                <div className="mt-2"></div>

                <p className="font-semibold">
                  {edu.degree} in {edu.field_of_study}, {edu.institution} (
                  {edu.city}, {edu.country})
                </p>
                <p>
                  {edu.date_start} - {edu.date_end || "Present"}
                </p>
                <p>{edu.description.description_content[0]?.content}</p>
              </div>
            ))}
          </div>
        );
      case "certification":
        return (
          <div key={section.id}>
            <h3 className="font-semibold">{section.title}</h3>
            {section.data.map((cert: any) => (
              <div key={cert.id} className="">
                <p className="font-semibold">
                  {cert.course}, {cert.institution}
                </p>
                <p>Issued: {cert.date_end}</p>
                <p>
                  {cert.verification && `Verification: ${cert.verification}`}
                </p>
                <p>{cert.description.description_content[0]?.content}</p>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  if (!cv) {
    return <p>Loading...</p>;
  }
  return (
    <div className="flex max-w-a4 flex-col gap-2 border border-neutral-500 px-8 py-8">
      {/* header */}
      <div className="flex justify-between">
        <div className="text-nowrap text-xl font-semibold uppercase">
          {cv?.user.name} {cv?.user.lastname}
        </div>
        <div className="flex items-end gap-2 text-nowrap">
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
      <div className="flex flex-col gap-2">
        <div className="font-semibold">{cv?.title}</div>
        <div>{cv?.description.description_content[0].content}</div>
      </div>
      {/**Sections */}
      {cv.sections.map((section) => renderSection(section))}
    </div>
  );
};

export default CvPreview;
