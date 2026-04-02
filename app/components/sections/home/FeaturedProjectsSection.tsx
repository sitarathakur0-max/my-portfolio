// components/sections/home/FeaturedProjectsSection.tsx
'use client'

import ScrollReveal from '../../shared/ScrollReveal';
import SectionHeading from '../../shared/SectionHeading';
import Button from '../../shared/Button';

const FeaturedProjectsSection = () => {
  const projects = [
    {
      title: 'Cultural Textile Marketplace',
      description: 'An e-commerce platform connecting artisans with global buyers and featuring secure payments.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '/projects/cultural-textile',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-featured online store with inventory management, user authentication, and order tracking.',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc',
      tech: ['Next.js', 'Tailwind', 'Prisma', 'PostgreSQL'],
      link: '/projects/ecommerce',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Business Dashboard',
      description: 'Analytics dashboard for business intelligence with real-time data visualization and reporting.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      tech: ['React', 'D3.js', 'Firebase', 'Material-UI'],
      link: '/projects/dashboard',
      color: 'from-orange-500 to-red-500'
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="Some of my best work that showcases my skills and creativity"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title}>
              <div className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button href="/projects" variant="primary">
            View All Projects <i className="fas fa-arrow-right ml-2"></i>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;