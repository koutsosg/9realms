import {
  Certification,
  CVResponse,
  CvSection,
  Description,
  DescriptionContent,
  Education,
  Job,
  RenderableSection,
  SimplifiedCertification,
  SimplifiedCVResponse,
  SimplifiedDescription,
  SimplifiedDescriptionContent,
  SimplifiedEducation,
  SimplifiedJob,
  SimplifiedUrls,
  SimplifiedUrlTypes,
  SimplifiedUser,
  UrlType,
  User,
  UserUrl,
} from "./CVService.types";

const simplifyDescriptionContent = (
  descriptionContent: DescriptionContent[],
): SimplifiedDescriptionContent[] => {
  return descriptionContent.map((content) => ({
    collectionId: content.collectionId,
    collectionName: content.collectionName,
    content: content.content,
    id: content.id,
    updated: content.updated,
  }));
};
const simplifyDescription = (
  description: Description,
): SimplifiedDescription => {
  return {
    id: description.id,
    bullets: description.bullets,
    collectionId: description.collectionId,
    collectionName: description.collectionName,
    description_content: simplifyDescriptionContent(
      description.expand.description_content,
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
  cert: Certification,
): SimplifiedCertification => ({
  id: cert.id,
  institution: cert.institution,
  course: cert.course,
  date_end: cert.date_end,
  verification: cert.verification,
  description: simplifyDescription(cert.expand.descriptions),
});

// Function to map and simplify a section
const mapSection = (section: CvSection): RenderableSection | null => {
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
    default:
      return null;
  }

  return null;
};
const simplifyUrlTypes = (type: UrlType): SimplifiedUrlTypes => {
  return { id: type.id, name: type.name, icon: type.icon };
};

const simplifyUrls = (urls: UserUrl[]): SimplifiedUrls[] => {
  return urls.map((url) => ({
    id: url.id,
    url: url.url,
    url_type: simplifyUrlTypes(url.expand.url_type),
    user_id: url.user_id,
  }));
};
const simplifyUser = (user: User): SimplifiedUser => {
  return {
    avatar: user.avatar,
    city: user.city,
    country: user.country,
    email: user.email,
    id: user.id,
    lastname: user.lastname,
    name: user.name,
    phone: user.phone,
    urls: simplifyUrls(user.expand.urls),
  };
};
// Main function to simplify CVResponse
export const simplifyCVResponse = (
  cvResp: CVResponse,
): SimplifiedCVResponse => {
  const {
    id: cv_id,
    title,
    expand: { description, cv_sections, user_id },
  } = cvResp;

  // Simplify sections
  const sections =
    cv_sections?.map(mapSection).filter((section) => section !== null) || [];

  return {
    id: cv_id,
    title,
    user: simplifyUser(user_id),
    description: simplifyDescription(description),
    sections: sections as RenderableSection[],
  };
};
