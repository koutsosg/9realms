interface User {
  avatar: string | null;
  city: string;
  collectionId: string;
  collectionName: string;
  country: string;
  created: string;
  cv: string;
  email: string;
  emailVisibility: boolean;
  id: string;
  lastname: string;
  name: string;
  role: string;
  updated: string;
  username: string;
  verified: boolean;
}
interface simplifyUser {
  avatar: string | null;
  city: string;
  country: string;
  email: string;
  id: string;
  lastname: string;
  name: string;
}
interface DescriptionContent {
  collectionId: string;
  collectionName: string;
  content: string;
  created: string;
  id: string;
  updated: string;
}

interface Description {
  bullets: boolean;
  collectionId: string;
  collectionName: string;
  created: string;
  description_content: string[];
  expand: DescriptionContent;
  id: string;
  updated: string;
}
interface Job {
  city: string;
  collectionId: string;
  collectionName: string;
  company: string;
  company_url: string;
  country: string;
  created: string;
  cv_section_id: string;
  date_end: string;
  date_start: string;
  descriptions: string[];
  expand: {
    descriptions: Description[];
  };
  id: string;
  position: string;
  updated: string;
  user_id: string;
}
interface Education {
  city: string;
  collectionId: string;
  collectionName: string;
  country: string;
  created: string;
  cv_section_id: string;
  date_end: string | null;
  date_start: string;
  degree: string | null;
  descriptions: string[];
  expand: {
    descriptions: Description[];
  };
  field_of_study: string;
  id: string;
  institution: string;
  updated: string;
  user_id: string;
}
interface Certification {
  collectionId: string;
  collectionName: string;
  course: string;
  created: string;
  cv_section_id: string;
  date_end: string;
  descriptions: string[];
  expand: {
    descriptions: Description[];
  };
  id: string;
  institution: string;
  updated: string;
  verification: string;
}
interface CvSection {
  certifications?: string[];
  collectionId: string;
  collectionName: string;
  created: string;
  cv_id: string;
  education?: string[];
  expand: {
    jobs?: Job[];
    education?: Education[];
    certifications?: Certification[];
    /*  skills?: Skills[]; */
  };
  id: string;
  jobs?: string[];
  skills?: string[];
  title: string;
  updated: string;
  user_id: string;
}

interface CVResponse {
  collectionId: string;
  collectionName: string;
  created: string;
  cv_sections: string[];
  description: Description;
  expand: {
    cv_sections?: CvSection[];
    description?: Description;
    user_id: User;
  };
  friendly_title: string | null;
  id: string;
  title: string;
  updated: string;
  user_id: string;
}
interface SimplifiedJob {
  id: string;
  position: string;
  city: string;
  company: string;
  company_url: string;
  country: string;
  date_start: string;
  date_end: string;
  descriptions: DescriptionContent[];
}

interface SimplifiedEducation {
  id: string;
  institution: string;
  city: string;
  country: string;
  degree: string | null;
  field_of_study: string;
  date_start: string;
  date_end: string | null;
  descriptions: DescriptionContent[];
}

interface SimplifiedCertification {
  id: string;
  institution: string;
  course: string;
  date_end: string;
  verification: string;
  descriptions: DescriptionContent[];
}
interface simplifyCVSection {
  id: string;
  title: string;
  section: {
    jobs: SimplifiedJob[];
    education: SimplifiedEducation[];
    certifications: SimplifiedCertification[];
  };
}
interface SimplifiedCVResponse {
  id: string;
  title: string;
  user: simplifyUser;
  sections: simplifyCVSection[];
}
export const simplifyCVResponse = (
  cvResp: CVResponse
): SimplifiedCVResponse => {
  const {
    id: cv_id,
    title,
    expand: { cv_sections, user_id },
  } = cvResp;

  const { avatar, city, country, email, id, lastname, name } = user_id;

  const sections = cv_sections?.map((section) => {
    const { id, title, expand } = section;

    if (expand.jobs && expand.jobs.length > 0) {
      return {
        id: id,
        title: title,
        jobs: expand.jobs.map((job) => ({
          id: job.id,
          position: job.position,
          city: job.city,
          company: job.company,
          company_url: job.company_url,
          country: job.country,
          date_start: job.date_start,
          date_end: job.date_end,
          descriptions: job.descriptions,
        })),
      };
    }

    if (expand.certifications && expand.certifications.length > 0) {
      return {
        id: id,
        title: title,
        education: expand.certifications.map((cert) => ({
          id: cert.id,
          institution: cert.institution,
          course: cert.course,
          date_end: cert.date_end,
          verification: cert.verification,
          descriptions: cert.descriptions,
        })),
      };
    }

    if (expand.education && expand.education.length > 0) {
      return {
        id: id,
        title: title,
        certifications: expand.education.map((edu) => ({
          id: edu.id,
          institution: edu.institution,
          city: edu.city,
          country: edu.country,
          degree: edu.degree,
          field_of_study: edu.field_of_study,
          date_start: edu.date_start,
          date_end: edu.date_end,
          descriptions: edu.descriptions,
        })),
      };
    }
  });

  return {
    id: cv_id,
    title: title,
    user: { avatar, city, country, email, id, lastname, name },
    sections: sections,
  };
};
