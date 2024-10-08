import Button from "@/app/components/Button/Button";
interface AddSectionsProps {
  onAddSection: (type: string) => void; // Type for the function prop
}
const AddSections: React.FC<AddSectionsProps> = ({ onAddSection }) => {
  return (
    <div className="flex gap-2">
      <Button
        size="none"
        extraClasses="bg-green-500 text-white w-full px-2"
        onClick={() => onAddSection("job")}
      >
        + Job Section
      </Button>
      <Button
        variant="none"
        size="none"
        extraClasses="bg-green-500 text-white w-full px-2"
        onClick={() => onAddSection("certification")}
      >
        + Certification section
      </Button>
      <Button
        variant="none"
        size="none"
        extraClasses="bg-green-500 text-white w-full px-2"
        onClick={() => onAddSection("education")}
      >
        + education section
      </Button>
    </div>
  );
};
export default AddSections;
