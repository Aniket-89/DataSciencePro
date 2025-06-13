interface FounderType {
  name: string;
  designation: string;
  brief: string;
  skills: string[];
  image: string;
}

interface TeamMemberType {
  name: string;
  designation: string;
  brief: string;
  image: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export type { FounderType, TeamMemberType };
