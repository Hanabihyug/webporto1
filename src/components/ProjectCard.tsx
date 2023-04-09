import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  imageUrl: string;
  description: string;
  projectUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, imageUrl, description, projectUrl }) => {
  return (
    <div className="border-2 border-gray-300 dark:border-gray-600 p-4 rounded-lg">
      <div className="relative h-48 w-full mb-4">
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" className="rounded-t-lg" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm mb-2">{description}</p>
      <Link href={projectUrl}>
        <a target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
          View Project
        </a>
      </Link>
    </div>
  );
};

export default ProjectCard;
