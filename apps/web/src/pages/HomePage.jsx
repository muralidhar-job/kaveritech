import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Code, ShieldCheck, Users, Zap, GraduationCap, Building2, Star, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';
import TechnologiesSection from '@/components/TechnologiesSection.jsx';
import ServicesSection from '@/components/ServicesSection.jsx';
function HomePage() {
  const fadeIn = {
    initial: {
      opacity: 0,
      y: 20
    },
    whileInView: {
      opacity: 1,
      y: 0
    },
    viewport: {
      once: true
    },
    transition: {
      duration: 0.5
    }
  };
  return <>
      <Helmet>
        <title>KaveriTech - Accelerate Your Tech Career</title>
        <meta name="description" content="KaveriTech offers premium IT training, career transition programs, and guaranteed job placement for aspiring tech professionals." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* 1. Hero Section */}
          <section id="home" className="relative min-h-[90dvh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img src="https://images.unsplash.com/photo-1684563983781-ce52a026f139" alt="Modern tech workspace" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-slate-950/80 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.7,
              ease: "easeOut"
            }}>
                <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary-foreground border border-primary/30 text-sm font-medium mb-6 backdrop-blur-sm">
                  Empowering the Next Generation of Tech Leaders
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight text-balance mx-auto max-w-5xl">
                  Accelerate your career in technology
                </h1>
                <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                  From non-IT backgrounds to guaranteed placements, KaveriTech provides the training, mentorship, and network you need to succeed.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="text-base h-14 px-8 transition-all duration-200 active:scale-[0.98]">
                    <a href="#contact-us">
                      Start Your Journey
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-base h-14 px-8 bg-white/5 backdrop-blur-md border-white/10 text-white hover:bg-white/10 transition-all duration-200 active:scale-[0.98]">
                    <a href="#career-transition">
                      Explore Programs
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* 2. Career Transition */}
          <section id="career-transition" className="section-padding bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div {...fadeIn}>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance mb-6">
                    Seamless Career Transition
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    Switching careers can be daunting. Our structured transition programs are designed for professionals looking to pivot into high-growth tech roles without starting from scratch.
                  </p>
                  <ul className="space-y-4">
                    {['Personalized skill gap analysis', '1-on-1 industry mentorship', 'Portfolio building projects', 'Interview preparation & mock sessions'].map((item, i) => <li key={i} className="flex items-center space-x-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="font-medium">{item}</span>
                      </li>)}
                  </ul>
                </motion.div>
                <motion.div {...fadeIn} transition={{
                delay: 0.2
              }} className="relative">
                  <div className="aspect-square rounded-2xl bg-muted overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Team collaborating" className="w-full h-full object-cover" />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* 3. Non-IT To IT */}
          <section id="non-it-to-it" className="section-padding bg-muted/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance mb-4">
                  From Non-IT to Tech Professional
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  No coding experience? No problem. We specialize in transforming individuals from diverse backgrounds into capable software engineers, data analysts, and cloud architects.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[{
                icon: Code,
                title: 'Foundational Bootcamps',
                desc: 'Start with the basics of programming logic, databases, and web architecture.'
              }, {
                icon: Zap,
                title: 'Intensive Hands-on Labs',
                desc: 'Learn by doing. Build real applications from week one.'
              }, {
                icon: Users,
                title: 'Peer Learning Pods',
                desc: 'Collaborate with others on the same journey in small, focused groups.'
              }].map((feature, i) => <motion.div key={i} {...fadeIn} transition={{
                delay: i * 0.1
              }} className="bg-background p-8 rounded-2xl shadow-sm border border-border/50">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </motion.div>)}
              </div>
            </div>
          </section>

          {/* 4. Job Guarantee */}
          <section id="job-guarantee" className="section-padding bg-primary text-primary-foreground">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div {...fadeIn}>
                  <ShieldCheck className="h-16 w-16 text-primary-foreground/80 mb-6" />
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance mb-6">
                    100% Job Guarantee Program
                  </h2>
                  <p className="text-lg text-primary-foreground/90 leading-relaxed mb-8">
                    We are so confident in our curriculum and network that we offer a full job guarantee for qualifying graduates. If you don't land a job within 6 months of graduation, your tuition is refunded.
                  </p>
                  <Button asChild variant="secondary" size="lg" className="text-primary font-semibold">
                    <a href="#contact-us">Check Eligibility</a>
                  </Button>
                </motion.div>
                <motion.div {...fadeIn} transition={{
                delay: 0.2
              }} className="bg-primary-foreground/10 rounded-2xl p-8 backdrop-blur-sm border border-primary-foreground/20">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center border-b border-primary-foreground/20 pb-4">
                      <span className="text-lg font-medium">Placement Rate</span>
                      <span className="text-3xl font-bold">94.8%</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-primary-foreground/20 pb-4">
                      <span className="text-lg font-medium">Average Salary Hike</span>
                      <span className="text-3xl font-bold">120%</span>
                    </div>
                    <div className="flex justify-between items-center pb-2">
                      <span className="text-lg font-medium">Hiring Partners</span>
                      <span className="text-3xl font-bold">500+</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* 5. Corporate Training */}
          <section id="corporate-training" className="section-padding bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div {...fadeIn} className="order-2 lg:order-1">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4 mt-8">
                      <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&q=80" alt="Training session" className="rounded-2xl object-cover h-48 w-full" />
                      <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80" alt="Workshop" className="rounded-2xl object-cover h-64 w-full" />
                    </div>
                    <div className="space-y-4">
                      <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=80" alt="Corporate meeting" className="rounded-2xl object-cover h-64 w-full" />
                      <img src="https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=400&q=80" alt="Presentation" className="rounded-2xl object-cover h-48 w-full" />
                    </div>
                  </div>
                </motion.div>
                <motion.div {...fadeIn} className="order-1 lg:order-2">
                  <Building2 className="h-12 w-12 text-primary mb-6" />
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance mb-6">
                    Corporate Training Solutions
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Upskill your entire workforce with KaveriTech's customized corporate training programs. We deliver cutting-edge curriculum tailored to your company's specific tech stack and business goals.
                  </p>
                  <Button asChild variant="outline" size="lg">
                    <a href="#contact-us">Request Corporate Brochure</a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </section>

          {/* 6. Testimonials */}
          <section id="testimonials" className="section-padding bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance mb-4">
                  Success Stories
                </h2>
                <p className="text-lg text-muted-foreground">Hear from professionals who transformed their careers with us.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[{
                name: 'Priya Sharma',
                role: 'Software Engineer at TechCorp',
                quote: 'Coming from a sales background, I never thought I could code. KaveriTech made the transition smooth and landed me my dream job.'
              }, {
                name: 'David Chen',
                role: 'Data Analyst at FinServe',
                quote: 'The job guarantee program gave me the confidence to quit my old job and focus entirely on upskilling. Best decision of my life.'
              }, {
                name: 'Sarah Jenkins',
                role: 'Cloud Architect',
                quote: 'The corporate training our team received from KaveriTech completely modernized our infrastructure approach.'
              }].map((testimonial, i) => <motion.div key={i} {...fadeIn} transition={{
                delay: i * 0.1
              }} className="bg-card p-8 rounded-2xl shadow-sm border border-border">
                    <div className="flex text-amber-400 mb-4">
                      {[...Array(5)].map((_, j) => <Star key={j} className="h-5 w-5 fill-current" />)}
                    </div>
                    <p className="text-foreground leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </motion.div>)}
              </div>
            </div>
          </section>

          {/* 7. Technologies Section */}
          <TechnologiesSection />

          {/* 8. Services Section */}
          <ServicesSection />

          {/* 9. Careers */}
          <section id="careers" className="section-padding bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-primary/5 rounded-3xl p-8 md:p-16 border border-primary/10 text-center">
                <GraduationCap className="h-16 w-16 text-primary mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance mb-6">
                  Join the KaveriTech Team
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  We are always looking for passionate instructors, mentors, and industry experts to help shape the next generation of tech talent.
                </p>
                <Button asChild variant="outline" size="lg">
                  <a href="#contact-us">View Open Positions</a>
                </Button>
              </div>
            </div>
          </section>

          {/* 10. Contact Us */}
          <section id="contact-us" className="section-padding bg-muted/30 border-t border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-1">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance mb-6">
                    Let's Connect
                  </h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Whether you're looking to start your tech journey, hire talent, or upskill your team, we're here to help.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-background p-3 rounded-lg shadow-sm border border-border flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Email Us</p>
                        <a href="mailto:kaveritech2022@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                          kaveritech2022@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-background p-3 rounded-lg shadow-sm border border-border flex-shrink-0">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Call Us</p>
                        <div className="flex flex-col space-y-1">
                          <a href="tel:+919642716561" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">Kumar K : +91 9642716561</a>
                          <a href="tel:+917338107925" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">Hemalatha: +91 7338107925</a>
                          <a href="tel:+918688084437" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">Office: +91 8688084437</a>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-background p-3 rounded-lg shadow-sm border border-border flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Visit Us</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Janardhan Complex,<br />
                          Siddartha Theatre back side,<br />
                          Krishna Nagar, Madanapalle,<br />
                          Madanapalle Dist,<br />
                          AndhraPradesh,<br />
                          India - 517325
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <div className="bg-card rounded-2xl shadow-lg p-8 border border-border">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>;
}
export default HomePage;