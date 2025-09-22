import React from "react";

interface ProfileCardProps {
  name: string;
  bio?: string;
  avatarUrl?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, bio, avatarUrl }) => (
  <article role="article" aria-label={`Perfil de ${name}`} className="border p-4 rounded-xl shadow-md flex flex-col items-center gap-2">
    <img src={avatarUrl || "/default-avatar.png"} alt={name} className="w-24 h-24 rounded-full object-cover" />
    <h2 className="font-bold text-lg">{name}</h2>
    {bio && <p className="text-gray-600 text-sm">{bio}</p>}
  </article>
);

export default ProfileCard;
