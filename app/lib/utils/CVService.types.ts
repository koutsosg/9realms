export interface UrlType {
  collectionId: string;
  collectionName: string;
  created: string;
  icon: string;
  id: string;
  name: string;
  updated: string;
}

export interface UserUrl {
  collectionId: string;
  collectionName: string;
  created: string;
  expand: { url_type: UrlType };
  id: string;
  updated: string;
  url: string;
  url_type: string[];
  user_id: string;
}

export interface User {
  avatar: string | null;
  city: string;
  collectionId: string;
  collectionName: string;
  country: string;
  created: string;
  cv: string;
  email: string;
  emailVisibility: boolean;
  expand: { urls: UserUrl[] };
  id: string;
  lastname: string;
  name: string;
  phone: number;
  role: string;
  updated: string;
  urls: string[];
  username: string;
  verified: boolean;
}
export interface DescriptionContent {
  collectionId: string;
  collectionName: string;
  content: string[];
  created: string;
  id: string;
  updated: string;
}

export interface Description {
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
export interface Job {
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

export interface Education {
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

export interface Certification {
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

export interface CvSection {
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

export interface CVResponse {
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

export interface SimplifiedUrlTypes {
  id: string;
  name: string;
  icon: string;
}
export interface SimplifiedUrls {
  id: string;
  url: string;
  url_type: SimplifiedUrlTypes;
  user_id: string;
}

export interface SimplifiedUser {
  avatar: string | null;
  city: string;
  country: string;
  email: string;
  id: string;
  lastname: string;
  name: string;
  phone: number;
  urls: SimplifiedUrls[];
}

export interface SimplifiedDescriptionContent {
  collectionId: string;
  collectionName: string;
  content: string[];
  id: string;
  updated: string;
}

export interface SimplifiedDescription {
  id: string;
  bullets: boolean;
  collectionId: string;
  collectionName: string;
  description_content: SimplifiedDescriptionContent[];
}

export interface SimplifiedJob {
  id: string;
  position: string;
  city: string;
  company: string;
  company_url: string;
  country: string;
  date_start: string;
  date_end: string;
  description: SimplifiedDescription;
}

export interface SimplifiedEducation {
  id: string;
  institution: string;
  city: string;
  country: string;
  degree: string | null;
  field_of_study: string;
  date_start: string;
  date_end: string | null;
  description: SimplifiedDescription;
}

export interface SimplifiedCertification {
  id: string;
  institution: string;
  course: string;
  date_end: string;
  verification: string;
  description: SimplifiedDescription;
}
interface SimplifiedCVSection<DataType> {
  id: string;
  title: string;
  type: string;
  data: DataType[];
}
export type SimpliFiedCVSections =
  | SimplifiedJob
  | SimplifiedEducation
  | SimplifiedCertification;

export interface SimplifiedCVResponse {
  id: string;
  title: string;
  user: SimplifiedUser;
  description: SimplifiedDescription;
  sections: RenderableSection[];
}

export type JobSection = SimplifiedCVSection<SimplifiedJob>;
export type EducationSection = SimplifiedCVSection<SimplifiedEducation>;
export type CertificationSection = SimplifiedCVSection<SimplifiedCertification>;

export type RenderableSection =
  | JobSection
  | EducationSection
  | CertificationSection;
