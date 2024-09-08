interface DescriptionContent {
  content: string;
}

interface Descriptions {
  description_content: DescriptionContent[];
}

interface Job {
  position: string;
  company: string;
  company_url: string;
  city: string;
  country: string;
  date_start: string;
  date_end: string | null;
  expand: {
    descriptions: Descriptions;
  };
}

interface Education {
  degree: string | null;
  city: string;
  country: string;
  date_start: string | null;
  date_end: string | null;
  expand: {
    descriptions: Descriptions;
  };
}

interface CvSection {
  title: string;
  jobs?: Job[];
  education?: Education[];
  expand?: {
    jobs?: Job[];
    education?: Education[];
  };
}

interface Expand {
  cv_sections: CvSection[];
}

export interface CVResponse {
  id: string;
  created: string;
  expand: Expand;
}

interface SimplifiedJob {
  position: string;
  company: string;
  company_url: string;
  location: {
    city: string;
    country: string;
  };
  start_date: string;
  end_date: string | null;
  descriptions: string[];
}

interface SimplifiedEducation {
  degree: string | null;
  city: string;
  country: string;
  start_date: string | null;
  end_date: string | null;
  descriptions: string[];
}

interface SimplifiedSection {
  title: string;
  jobs?: SimplifiedJob[];
  institutions?: SimplifiedEducation[];
}

interface SimplifiedCVResponse {
  cv_id: string;
  created: string;
  sections: SimplifiedSection[];
}

export function simplifyCVResponse(
  cvResponse: CVResponse
): SimplifiedCVResponse {
  return {
    cv_id: cvResponse.id,
    created: cvResponse.created,
    sections: cvResponse.expand.cv_sections.map((section) => {
      const expandedJobs = section.expand?.jobs || section.jobs || [];
      const expandedEducation =
        section.expand?.education || section.education || [];

      if (expandedJobs.length > 0) {
        return {
          title: section.title || "Work Experience",
          jobs: expandedJobs.map((job) => ({
            position: job.position,
            company: job.company,
            company_url: job.company_url,
            location: {
              city: job.city,
              country: job.country,
            },
            start_date: job.date_start,
            end_date: job.date_end || null,
            descriptions: job.expand.descriptions.description_content.map(
              (desc) => desc.content
            ),
          })),
        };
      }

      if (expandedEducation.length > 0) {
        return {
          title: section.title || "Education",
          institutions: expandedEducation.map((edu) => ({
            degree: edu.degree || null,
            city: edu.city,
            country: edu.country,
            start_date: edu.date_start || null,
            end_date: edu.date_end || null,
            descriptions: edu.expand.descriptions.description_content.map(
              (desc) => desc.content
            ),
          })),
        };
      }

      return {
        title: section.title || "Other",
        details: [],
      };
    }),
  };
}
