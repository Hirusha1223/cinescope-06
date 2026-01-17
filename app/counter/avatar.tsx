"use client";
import Image from "next/image";
import { getImageUrl } from "../../lib/utils";

//child component-avatar
//type definition for props
type AvatarProps = {
  person: { name: string; imageId: string }; // Define the structure of the person prop
  size?: number;
  onClick?: (name: string) => void;
};

export default function Avatar({ person, size = 100, onClick }: AvatarProps) {
  return (
    <div onClick={() => onClick?.(person.name)}>
      <Image
        className="m-2.5 rounded-full"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
      />
    </div>
  );
}
