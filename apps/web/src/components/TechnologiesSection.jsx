
import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Coffee, TestTube2, Atom, Cloud, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const technologies = [
  {
    id: 'ai-testing',
    title: 'AI-Driven Testing Tools',
    description: 'Revolutionizing software quality with artificial intelligence.',
    icon: Bot,
    image: 'https://images.unsplash.com/photo-1650234083177-871b96b6c575',
    colorClass: 'text-[hsl(var(--tech-badge-ai))]',
    bgClass: 'bg-[hsl(var(--tech-badge-ai))]/10',
    span: 'col-span-1 md:col-span-2 lg:col-span-2',
    details: [
      'Faster test execution and intelligent test generation',
      'Automated anomaly detection and predictive analytics',
      'Reduces manual testing effort while improving accuracy',
      'Self-healing test scripts that adapt to UI changes'
    ]
  },
  {
    id: 'java',
    title: 'Java Enterprise',
    description: 'Robust backend development and automation.',
    icon: Coffee,
    image: 'https://images.unsplash.com/photo-1567005197762-1dcee73e230d',
    colorClass: 'text-[hsl(var(--tech-badge-java))]',
    bgClass: 'bg-[hsl(var(--tech-badge-java))]/10',
    span: 'col-span-1',
    details: [
      'Platform independence and strong security',
      'Extensive libraries for testing frameworks',
      'Scalable architecture for enterprise applications'
    ]
  },
  {
    id: 'testing-tech',
    title: 'Testing Technologies',
    description: 'Comprehensive quality assurance frameworks.',
    icon: TestTube2,
    image: 'https://images.unsplash.com/photo-1531837404483-bdbd0d209ec1',
    colorClass: 'text-[hsl(var(--tech-badge-test))]',
    bgClass: 'bg-[hsl(var(--tech-badge-test))]/10',
    span: 'col-span-1',
    details: [
      'Selenium, TestNG, JUnit, Cucumber, Appium',
      'Performance and load testing tools',
      'API testing and validation frameworks',
      'Mobile testing across iOS and Android'
    ]
  },
  {
    id: 'react',
    title: 'ReactJS',
    description: 'Modern, interactive frontend development.',
    icon: Atom,
    image: 'https://images.unsplash.com/photo-1682561477064-44fb2dfd82bf',
    colorClass: 'text-[hsl(var(--tech-badge-react))]',
    bgClass: 'bg-[hsl(var(--tech-badge-react))]/10',
    span: 'col-span-1 md:col-span-2 lg:col-span-1',
    details: [
      'Component-based architecture for reusability',
      'Fast rendering with Virtual DOM',
      'Creating responsive testing dashboards',
      'Rich ecosystem for data visualization'
    ]
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    description: 'Scalable infrastructure and continuous delivery.',
    icon: Cloud,
    image: 'https://images.unsplash.com/photo-1667984390553-7f439e6ae401',
    colorClass: 'text-[hsl(var(--tech-badge-cloud))]',
    bgClass: 'bg-[hsl(var(--tech-badge-cloud))]/10',
    span: 'col-span-1 md:col-span-2 lg:col-span-1',
    details: [
      'AWS, Azure, and GCP cloud platforms',
      'Jenkins, GitLab CI, and GitHub Actions',
      'Advanced monitoring and logging tools',
      'Containerization with Docker and Kubernetes'
    ]
  }
];

export default function TechnologiesSection() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.5 }
  };

  return (
    <section id="technologies" className="section-padding relative bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute top-[60%] -left-[10%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div {...fadeIn}>
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Innovation at Core
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-6">
              Our Technology Stack
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              KaveriTech is committed to cutting-edge technologies. We leverage the most advanced tools and frameworks to deliver robust, scalable, and intelligent solutions for our clients and comprehensive training for our students.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={tech.span}
            >
              <Card className="group h-full overflow-hidden border-border/50 bg-card tech-card-hover flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={tech.image} 
                    alt={`${tech.title} visualization`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="tech-image-overlay" />
                  <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                    <div className={`p-2 rounded-lg backdrop-blur-md bg-white/10 border border-white/20 ${tech.colorClass}`}>
                      <tech.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{tech.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-6 font-medium">
                    {tech.description}
                  </p>
                  <ul className="space-y-3 mt-auto">
                    {tech.details.map((detail, i) => (
                      <li key={i} className="flex items-start space-x-3 text-sm">
                        <CheckCircle2 className={`h-5 w-5 shrink-0 mt-0.5 ${tech.colorClass}`} />
                        <span className="text-foreground/80 leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          {...fadeIn} 
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Button asChild size="lg" className="h-14 px-8 text-base transition-all duration-200 active:scale-[0.98] shadow-lg shadow-primary/20">
            <a href="#contact-us">
              Contact Us to Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
