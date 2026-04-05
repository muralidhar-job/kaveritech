
import React from 'react';
import { Helmet } from 'react-helmet';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';

function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us - KaveriTech</title>
        <meta name="description" content="Get in touch with KaveriTech for professional training and job placement solutions. We're here to help transform your career." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight" style={{letterSpacing: '-0.02em', textWrap: 'balance'}}>
                  Get in touch with us
                </h1>
                <p className="mt-6 text-lg md:text-xl leading-relaxed max-w-prose mx-auto">
                  Have questions about our training programs or job placement services? We're here to help you take the next step in your career.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  <div className="bg-card rounded-2xl shadow-lg p-8 md:p-10">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-2" style={{textWrap: 'balance'}}>
                      Send us a message
                    </h2>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      Fill out the form below and our team will get back to you within 24 hours.
                    </p>
                    <ContactForm />
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-muted rounded-xl p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <span className="text-sm font-medium tracking-wide uppercase text-muted-foreground">Email</span>
                        <div className="mt-1">
                          <a href="mailto:kaveritech2022@gmail.com" className="font-medium hover:text-primary transition-colors duration-200">
                            kaveritech2022@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted rounded-xl p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <span className="text-sm font-medium tracking-wide uppercase text-muted-foreground">Phone</span>
                        <div className="mt-1 flex flex-col space-y-1.5">
                          <a href="tel:+919642716561" className="font-medium hover:text-primary transition-colors duration-200">+91 9642716561</a>
                          <a href="tel:+917338107925" className="font-medium hover:text-primary transition-colors duration-200">+91 7338107925</a>
                          <a href="tel:+918688084437" className="font-medium hover:text-primary transition-colors duration-200">+91 8688084437</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted rounded-xl p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <span className="text-sm font-medium tracking-wide uppercase text-muted-foreground">Office</span>
                        <p className="mt-1 font-medium text-sm leading-relaxed">
                          Janardhan Complex,<br />
                          Siddartha Theatre back side,<br />
                          Krishna Nagar, Madanapalle,<br />
                          Madanapalle dist, AndhraPradesh,<br />
                          India - 517325
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted rounded-xl p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <span className="text-sm font-medium tracking-wide uppercase text-muted-foreground">Business Hours</span>
                        <p className="mt-1 font-medium">Monday - Saturday</p>
                        <p className="text-sm">9:00 AM - 6:00 PM IST</p>
                        <p className="mt-2 text-sm">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default ContactPage;
