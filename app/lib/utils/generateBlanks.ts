import { RenderableSection } from "@/app/lib/utils/CVService.types";

export const generateDescriptionContent = () => ({
  collectionId: "ijp29fg63v639me",
  collectionName: "description_content",
  content: [
    "Platform Development: Contributed to the development of MySrapp, a platform for tutors to create video instrument lessons,\r\nintegrating frontend with a Strapi-based backend using Next.js for server-side rendering and performance optimization.",
  ],
  id: crypto.randomUUID(),
  updated: "2024-09-02 08:08:28.617Z",
});
// Helper function to generate description
export const generateDescription = () => ({
  id: crypto.randomUUID(),
  bullets: false,
  collectionId: "4lsm2j2z412ydq3",
  collectionName: "descriptions",
  description_content: [generateDescriptionContent()],
});

// Function to generate blank item based on type
export const generateBlankItem = (type: string) => {
  const itemTemplates: { [key: string]: () => any } = {
    job: () => ({
      id: crypto.randomUUID(),
      city: "Athens",
      company: "Wild Wild Web2",
      company_url: "https://www.wildwildweb.gr/en/",
      country: "Greece2",
      date_end: "",
      date_start: "2023-11-01 00:00:00.000Z",
      description: generateDescription(),
      position: "React Ecosystem Developer2",
    }),
    education: () => ({
      id: crypto.randomUUID(),
      city: "Athens",
      country: "Greece2",
      date_end: "2023-11-01 00:00:00.000Z",
      date_start: "2023-11-01 00:00:00.000Z",
      degree: "",
      description: generateDescription(),
      field_of_study: "Computer Engineering",
      institution: "Technological Education Institute of Piraeus",
    }),
    certification: () => ({
      id: crypto.randomUUID(),
      course: "Full-Stack Web Development with React (Specialization)",
      date_end: "2022-11-01 12:00:00.000Z",
      institution:
        "The Hong Kong University of Science and Technology / Coursera",
      verification:
        "https://www.coursera.org/account/accomplishments/specialization/MUYWD9V2PS4U",
      description: generateDescription(),
    }),
  };

  // Note to self: Choose the default render
  return (
    itemTemplates[type]?.() || {
      id: crypto.randomUUID(),
      title: `New ${type} item`,
    }
  );
};

// Function to generate common fields, with a default blank item in the data array
export const generateBlankSection = (type: string): RenderableSection => ({
  id: crypto.randomUUID(),
  title: `New ${type} section`,
  type: type,
  data: [generateBlankItem(type)], // Add one default blank item in the data
});
