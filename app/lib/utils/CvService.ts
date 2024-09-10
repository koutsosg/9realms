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
  content: string[];
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
  expand: {
    description_content: DescriptionContent[];
  };
  id: string;
  updated: string;
}
interface simplifyDescriptionContent {
  collectionId: string;
  collectionName: string;
  content: string[];
  id: string;
  updated: string;
}

interface simplifyDescription {
  id: string;
  bullets: boolean;
  collectionId: string;
  collectionName: string;
  description_content: simplifyDescriptionContent[];
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
    descriptions: Description;
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
    descriptions: Description;
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
    descriptions: Description;
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
  type: string;
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
    description: Description;
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
  description: simplifyDescription;
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
  description: simplifyDescription;
}

interface SimplifiedCertification {
  id: string;
  institution: string;
  course: string;
  date_end: string;
  verification: string;
  description: simplifyDescription;
}
interface SimplifiedCVSection<DataType> {
  id: string;
  title: string;
  type: string;
  data: DataType[];
}

type JobSection = SimplifiedCVSection<SimplifiedJob>;
type EducationSection = SimplifiedCVSection<SimplifiedEducation>;
type CertificationSection = SimplifiedCVSection<SimplifiedCertification>;

interface SimplifiedCVResponse {
  id: string;
  title: string;
  user: simplifyUser;
  description: simplifyDescription;
  sections: (JobSection | EducationSection | CertificationSection)[];
}

const simplifyDescriptionContent = (
  descriptionContent: DescriptionContent[]
): simplifyDescriptionContent[] => {
  return descriptionContent.map((content) => ({
    collectionId: content.collectionId,
    collectionName: content.collectionName,
    content: content.content,
    created: content.created,
    id: content.id,
    updated: content.updated,
  }));
};
const simplifyDescription = (description: Description): simplifyDescription => {
  return {
    id: description.id,
    bullets: description.bullets,
    collectionId: description.collectionId,
    collectionName: description.collectionName,
    description_content: simplifyDescriptionContent(
      description.expand.description_content
    ),
  };
};
const simplifyJob = (job: Job): SimplifiedJob => ({
  id: job.id,
  position: job.position,
  city: job.city,
  company: job.company,
  company_url: job.company_url,
  country: job.country,
  date_start: job.date_start,
  date_end: job.date_end,
  description: simplifyDescription(job.expand.descriptions),
});

const simplifyEducation = (edu: Education): SimplifiedEducation => ({
  id: edu.id,
  institution: edu.institution,
  city: edu.city,
  country: edu.country,
  degree: edu.degree,
  field_of_study: edu.field_of_study,
  date_start: edu.date_start,
  date_end: edu.date_end,
  description: simplifyDescription(edu.expand.descriptions),
});

const simplifyCertification = (
  cert: Certification
): SimplifiedCertification => ({
  id: cert.id,
  institution: cert.institution,
  course: cert.course,
  date_end: cert.date_end,
  verification: cert.verification,
  description: simplifyDescription(cert.expand.descriptions),
});

// Function to map and simplify a section
const mapSection = (
  section: CvSection
): JobSection | EducationSection | CertificationSection | null => {
  const { id, title, type, expand } = section;

  switch (type) {
    case "job":
      if (expand.jobs) {
        return {
          id,
          title,
          type,
          data: expand.jobs.map(simplifyJob),
        };
      }
      break;
    case "education":
      if (expand.education) {
        return {
          id,
          title,
          type,
          data: expand.education.map(simplifyEducation),
        };
      }
      break;
    case "certification":
      if (expand.certifications) {
        return {
          id,
          title,
          type,
          data: expand.certifications.map(simplifyCertification),
        };
      }
      break;
    default:
      return null;
  }

  return null;
};

// Main function to simplify CVResponse
export const simplifyCVResponse = (
  cvResp: CVResponse
): SimplifiedCVResponse => {
  const {
    id: cv_id,
    title,
    expand: { description, cv_sections, user_id },
  } = cvResp;

  // Simplify user object
  const { avatar, city, country, email, id, lastname, name } = user_id;

  // Simplify sections
  const sections =
    cv_sections?.map(mapSection).filter((section) => section !== null) || [];

  return {
    id: cv_id,
    title,
    user: { avatar, city, country, email, id, lastname, name },
    description: simplifyDescription(description),
    sections: sections as (
      | JobSection
      | EducationSection
      | CertificationSection
    )[],
  };
};
