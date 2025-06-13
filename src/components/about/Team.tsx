import { motion } from 'framer-motion';
import type { TeamMemberType } from '../../types/about';
import { FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';

const team: TeamMemberType[] = [
  {
    name: 'Emily Zhang',
    designation: 'Lead Data Engineer',
    brief: 'Expert in building data pipelines and ETL processes. Specialized in Apache Spark and Hadoop.',
    image: '/team/emily.jpg',
    socials: {
      linkedin: 'https://linkedin.com/in/emily-zhang',
      github: 'https://github.com/emilyzhang'
    }
  },
  {
    name: 'David Rodriguez',
    designation: 'ML Research Scientist',
    brief: 'Focuses on natural language processing and transformer models. Previously at OpenAI.',
    image: '/team/david.jpg',
    socials: {
      twitter: 'https://twitter.com/davidr_ai',
      github: 'https://github.com/davidr'
    }
  },
  {
    name: 'Priya Patel',
    designation: 'Data Analytics Lead',
    brief: 'Expert in business intelligence and statistical analysis. Former consultant at McKinsey.',
    image: '/team/priya.jpg',
    socials: {
      linkedin: 'https://linkedin.com/in/priya-patel',
      twitter: 'https://twitter.com/priyapatel'
    }
  },
  {
    name: 'Alex Kim',
    designation: 'Cloud Infrastructure Engineer',
    brief: 'Specializes in DevOps and cloud architecture. AWS certified solutions architect.',
    image: '/team/alex.jpg',
    socials: {
      linkedin: 'https://linkedin.com/in/alexkim',
      github: 'https://github.com/alexkim'
    }
  }
];

export default function Team() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl tracking-tight font-light text-gray-900">Our Team</h2>
          <p className="mt-4 text-lg text-gray-500">The experts behind our success</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6"
            >
              <div className="aspect-square mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <h3 className="text-lg font-light text-gray-900">{member.name}</h3>
              <p className="text-sm text-gray-600 mt-1 font-mono">{member.designation}</p>
              <p className="mt-4 text-gray-600 text-sm">{member.brief}</p>
              <div className="mt-6 flex gap-4">
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <FaLinkedinIn size={20} />
                  </a>
                )}
                {member.socials.twitter && (
                  <a
                    href={member.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <FaTwitter size={20} />
                  </a>
                )}
                {member.socials.github && (
                  <a
                    href={member.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <FaGithub size={20} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
