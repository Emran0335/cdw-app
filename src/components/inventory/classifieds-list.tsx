import { ClassifiedWithImages, Favourites } from "@/config/types";
import { ClassifiedCard } from "./classified-card";
import { use } from "react";

interface ClassifiedsListProps {
  classifieds: ClassifiedWithImages[];
  favourites: number[];
}

export const ClassifiedsList = (props: ClassifiedsListProps) => {
  const { classifieds, favourites } = props;
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {classifieds.map((classified) => {
        return <ClassifiedCard classified={classified} key={classified.id} favourites={favourites}/>;
      })}
    </div>
  );
};
