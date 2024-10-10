import { RenderableSection } from "@/app/lib/utils/CVService.types";
import { generateUUID } from "@/app/lib/utils/generateUUID";

export const generateDescriptionContent = () => ({
  collectionId: "ijp29fg63v639me",
  collectionName: "description_content",
  content: ["Add description content"],
  id: generateUUID(),
});
// Helper function to generate description
export const generateDescription = () => ({
  id: generateUUID(),
  bullets: false,
  collectionId: "4lsm2j2z412ydq3",
  collectionName: "descriptions",
  description_content: [generateDescriptionContent()],
});

// Function to generate blank item based on type
export const generateBlankItem = (type: string) => {
  const itemTemplates: { [key: string]: () => any } = {
    job: () => ({
      id: generateUUID(),
      city: "add city name",
      company: "add company name",
      company_url: "add company url",
      country: "add country name",
      date_end: "add job end date",
      date_start: "add job start date",
      description: generateDescription(),
      position: "add position title",
    }),
    education: () => ({
      id: generateUUID(),
      city: "add city name",
      country: "add country name",
      date_end: "add education end date",
      date_start: "add education start date",
      degree: "degree yes or no",
      description: generateDescription(),
      field_of_study: "Add field of study",
      institution: "Add institution name",
    }),
    certification: () => ({
      id: generateUUID(),
      course: "add course title",
      date_end: "add courses end date",
      institution: "Add courses institution name",
      verification: "verification link",
      description: generateDescription(),
    }),
  };

  // Note to self: Choose the default render
  return (
    itemTemplates[type]?.() || {
      id: generateUUID(),
      title: `New ${type} item`,
    }
  );
};

// Function to generate common fields, with a default blank item in the data array
export const generateBlankSection = (type: string): RenderableSection => ({
  id: generateUUID(),
  title: `New ${type} section`,
  type: type,
  data: [generateBlankItem(type)], // Add one default blank item in the data
});
