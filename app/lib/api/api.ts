import { cookies } from "next/headers";

const API_URL = process.env.API_URL;

const getToken = (): string | undefined => {
  const cookiesList = cookies();

  if (cookiesList.has("jwt-token")) {
    const authCookie = cookiesList.get("jwt-token");
    return authCookie?.value;
  }
  return undefined;
};

export const fetchData = async (
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  body?: any,
) => {
  const authToken = getToken();
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
  };

  const response = await fetch(`${API_URL}${url}`, {
    method,
    headers,
    body: method !== "GET" && body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }

  return response.json();
};

export const fetchCvData = async () => {
  const authToken = process.env.ADMIN_TOKEN || "";
  const cvId = "8ruortmj0vdvbjh";
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${authToken}`,
  };

  const expandUser = "user_id,user_id.urls,user_id.urls.url_type";

  const expandDesc = "description,description.description_content";

  const cvSections = "cv_sections";

  const expandJobs =
    "cv_sections.jobs,cv_sections.jobs.descriptions,cv_sections.jobs.descriptions.description_content";

  const expandEdu =
    "cv_sections.education,cv_sections.education.descriptions,cv_sections.education.descriptions.description_content";

  const expandCert =
    "cv_sections.certifications,cv_sections.certifications.descriptions,cv_sections.certifications.descriptions.description_content";

  const expand = `${expandUser},${expandDesc},${cvSections},${expandJobs},${expandEdu},${expandCert}`;

  const response = await fetch(
    `${API_URL}collections/cvs/records/${cvId}?expand=${expand}`,
    { headers },
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch CV data: ${response.statusText}`);
  }

  return response.json();
};
