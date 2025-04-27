"use client";

import { FC } from "react";
import Link from "next/link";
import { Instagram, Phone } from "lucide-react";

interface ProfileCardProps {
  name: string;
  profession: string;
  city: string;
  instagram: string;
  whatsapp: string;
}

const ProfileCard: FC<ProfileCardProps> = ({ name, profession, city, instagram, whatsapp }) => {
  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-md transition w-full max-w-xs bg-white">
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-gray-600">{profession}</p>
      <p className="text-gray-500 text-sm">{city}</p>
      <div className="flex gap-4 mt-4">
        <Link href={instagram} target="_blank" rel="noopener noreferrer">
          <Instagram className="w-5 h-5 text-pink-500 hover:text-pink-700" />
        </Link>
        <Link href={whatsapp} target="_blank" rel="noopener noreferrer">
          <Phone className="w-5 h-5 text-green-500 hover:text-green-700" />
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
