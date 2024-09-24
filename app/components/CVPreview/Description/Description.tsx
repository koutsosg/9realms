import classNames from "classnames";
import { DescriptionProps } from "@/app/components/CVPreview/Description/Description.types";

const DescriptionList: React.FC<DescriptionProps> = ({ content, bullets }) => (
  <div className="text-xxs sm:text-xs">
    {content.map((desc, index, arr) => {
      const isLastItem = index === arr.length - 1;
      const listClasses = classNames("flex list-disc gap-4 pl-3.5", {
        "mb-1": !isLastItem,
      });

      return bullets ? (
        <div key={desc.id} className={listClasses}>
          <div className="list-item">{desc.content}</div>
        </div>
      ) : (
        <p key={desc.id}>{desc.content}</p>
      );
    })}
  </div>
);

export default DescriptionList;
