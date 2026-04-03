// components/sections/home/SkillsSection.tsx
'use client'

import ScrollReveal from '../../shared/ScrollReveal';
import SectionHeading from '../../shared/SectionHeading';

const SkillsSection = () => {
  const skills = [
    { name: 'HTML/CSS', level: 95, icon: 'fa-code' },
    { name: 'JavaScript', level: 90, icon: 'fa-js' },
    { name: 'React', level: 88, icon: 'fa-react' },
    { name: 'Next.js', level: 85, icon: 'fa-server' },
    { name: 'Tailwind', level: 92, icon: 'fa-paint-brush' },
    { name: 'Node.js', level: 80, icon: 'fa-node' },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Technical Skills" 
          subtitle="Technologies I work with to bring ideas to life"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <ScrollReveal key={skill.name}>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-2 group">
                <div className="flex items-center mb-4">
                  <i className={`fab ${skill.icon} text-3xl text-blue-600 group-hover:scale-110 transition-transform`}></i>
                  <h3 className="text-xl font-semibold ml-3">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-1000 relative overflow-hidden"
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
                  </div>
                </div>
                <p className="text-right mt-2 text-sm text-gray-600 dark:text-gray-400">{skill.level}%</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;