
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Mic2, Bug, Trophy, Lightbulb, Brain, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';

const services = [
  {
    id: 'training',
    title: 'In Person Training',
    description: 'Immersive, hands-on classroom experiences led by industry veterans to build foundational and advanced tech skills.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1592382258436-7751788238e8?auto=format&fit=crop&w=800&q=80',
    colorClass: 'text-[hsl(var(--service-training))]',
    bgClass: 'bg-[hsl(var(--service-training))]',
    borderClass: 'group-hover:border-[hsl(var(--service-training))]'
  },
  {
    id: 'interviews',
    title: 'Mock Interviews',
    description: 'Rigorous practice sessions simulating real tech interviews to build confidence and perfect your technical communication.',
    icon: Mic2,
    image: 'https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3?auto=format&fit=crop&w=800&q=80',
    colorClass: 'text-[hsl(var(--service-interviews))]',
    bgClass: 'bg-[hsl(var(--service-interviews))]',
    borderClass: 'group-hover:border-[hsl(var(--service-interviews))]'
  },
  {
    id: 'debugging',
    title: 'Debugging Skills',
    description: 'Master the art of troubleshooting. Learn advanced techniques to identify, isolate, and resolve complex software issues.',
    icon: Bug,
    image: 'https://images.unsplash.com/photo-1520509414578-d9cbf09933a1?auto=format&fit=crop&w=800&q=80',
    colorClass: 'text-[hsl(var(--service-debugging))]',
    bgClass: 'bg-[hsl(var(--service-debugging))]',
    borderClass: 'group-hover:border-[hsl(var(--service-debugging))]'
  },
  {
    id: 'hackathons',
    title: 'Hackathons on Testing',
    description: 'Competitive, time-bound events focused on building robust testing frameworks and finding critical vulnerabilities.',
    icon: Trophy,
    image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=800&q=80',
    colorClass: 'text-[hsl(var(--service-hackathons))]',
    bgClass: 'bg-[hsl(var(--service-hackathons))]',
    borderClass: 'group-hover:border-[hsl(var(--service-hackathons))]'
  },
  {
    id: 'innovations',
    title: 'Innovations',
    description: 'Explore emerging tech trends and build proof-of-concepts that push the boundaries of modern software development.',
    icon: Lightbulb,
    image: 'https://images.unsplash.com/photo-1683792684734-49b6c8ca20d8?auto=format&fit=crop&w=800&q=80',
    colorClass: 'text-[hsl(var(--service-innovations))]',
    bgClass: 'bg-[hsl(var(--service-innovations))]',
    borderClass: 'group-hover:border-[hsl(var(--service-innovations))]'
  },
  {
    id: 'ai-tools',
    title: 'AI Tools Practice',
    description: 'Hands-on experience with the latest AI-driven development and testing tools to supercharge your productivity.',
    icon: Brain,
    image: 'https://images.unsplash.com/photo-1684369176170-463e84248b70?auto=format&fit=crop&w=800&q=80',
    colorClass: 'text-[hsl(var(--service-ai))]',
    bgClass: 'bg-[hsl(var(--service-ai))]',
    borderClass: 'group-hover:border-[hsl(var(--service-ai))]'
  }
];

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.5 }
  };

  return (
    <section id="services" className="section-padding bg-muted/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div {...fadeIn}>
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 backdrop-blur-sm border border-primary/20">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-6 text-foreground">
              Our Core Services
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Comprehensive programs designed to transform your potential into professional excellence. From foundational training to advanced AI practices.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`group relative h-[400px] overflow-hidden rounded-2xl border-border bg-card service-card-hover ${service.borderClass}`}>
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="service-gradient-overlay" />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full p-8 flex flex-col">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 backdrop-blur-md bg-white/10 border border-white/20 transition-transform duration-300 group-hover:-translate-y-1 ${service.colorClass}`}>
                    <service.icon className="h-7 w-7" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-300 leading-relaxed mb-auto line-clamp-3">
                    {service.description}
                  </p>
                  
                  <div className="pt-6 mt-auto">
                    <Button 
                      onClick={() => setSelectedService(service)}
                      variant="ghost" 
                      className={`p-0 h-auto font-semibold hover:bg-transparent hover:text-white transition-colors ${service.colorClass}`}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </div>
                  
                  {/* Decorative top border line that expands on hover */}
                  <div className={`absolute top-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full ${service.bgClass}`} />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Service Details Modal */}
        <Dialog open={selectedService !== null} onOpenChange={(open) => !open && setSelectedService(null)}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">
                {selectedService?.title}
              </DialogTitle>
            </DialogHeader>
            <div className="py-4">
              <p className="text-muted-foreground leading-relaxed">
                {selectedService?.description}
              </p>
            </div>
            <DialogClose asChild>
              <Button variant="outline" className="w-full">
                Close
              </Button>
            </DialogClose>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
