import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight, AlertCircle } from 'lucide-react';
import Hero from '../components/ui/Hero';
import SectionTitle from '../components/ui/SectionTitle';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error on field change
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      
      // Reset status after a delay
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }
  };

  const faqItems = [
    {
      question: "What time do Sunday services start?",
      answer: "Our Sunday worship service starts at 3:00 PM and typically concludes around 5:00 PM. We recommend arriving 10-15 minutes early to find seating and connect with our welcome team."
    },
    {
      question: "Is there parking available?",
      answer: "Yes, we have ample free parking available on our church premises. Our parking attendants will be happy to direct you to an available spot."
    },
    {
      question: "What should I wear to church?",
      answer: "We have no formal dress code. Some members dress formally while others come in casual attire. We invite you to come as you are and dress comfortably."
    },
    {
      question: "Do you have programs for children?",
      answer: "Yes, we have age-appropriate programs for children during our Sunday services. Children are safely checked in and engaged in fun, Bible-based activities."
    },
    {
      question: "How can I become a member of the church?",
      answer: "No requirement of membership."
    }
  ];

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <Hero 
        title="Contact Us"
        subtitle="We'd love to hear from you and answer any questions you might have"
        backgroundImage="https://images.pexels.com/photos/3850213/pexels-photo-3850213.jpeg"
        height="medium"
        overlay="medium"
      />

      {/* Contact Information */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-4">Get In Touch</h2>
              <div className="h-1 bg-secondary-400 w-20 mb-6"></div>
              <p className="mb-6">
                We welcome your questions, comments, and prayer requests. Feel free to reach out to us
                through any of the methods below, or visit us during our service times.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-primary-800" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Our Location</h4>
                    <address className="not-italic text-neutral-700">
                      KINGS FARM, Vaderahalli Village,<br />
                      Vidyaranyapura post, Bengaluru- 560098
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-primary-800" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Phone</h4>
                    <p className="text-neutral-700">+91 8660814284</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary-800" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Email</h4>
                    <p className="text-neutral-700">ofgodelijah@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-primary-800" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Service Times</h4>
                    <ul className="text-neutral-700 space-y-2">
                      <li><strong>Sunday Worship:</strong> 3:00 PM - 5:00 PM</li>
                      <li><strong>Wednesday Prayer:</strong> 6:30 PM - 8:00 PM</li>
                      <li><strong>Friday Bible Study:</strong> 7:00 PM - 8:30 PM</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="rounded-lg overflow-hidden shadow-lg h-[400px] mb-6">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.9369599951835!2d77.55!3d13.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA0JzQ4LjAiTiA3N8KwMzMnMDAuMCJF!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Church Location Map"
                ></iframe>
              </div>
              
              <div className="bg-primary-50 p-5 rounded-lg">
                <h4 className="mb-2 font-semibold">Directions</h4>
                <p className="text-neutral-700 mb-3">
                  From central Bengaluru, take the Outer Ring Road north. After passing Vidyaranyapura, 
                  turn left onto Vaderahalli Village Road and continue for 2 km. The church is on the right side, 
                  identified by our sign.
                </p>
                <a 
                  href="https://goo.gl/maps/your-map-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-800 font-medium flex items-center hover:text-primary-600 transition-colors"
                >
                  Get directions on Google Maps
                  <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section bg-neutral-50">
        <div className="container-custom max-w-4xl">
          <SectionTitle 
            title="Send Us a Message"
            subtitle="Fill out the form below, and we'll get back to you as soon as possible"
          />
          
          <div className="card p-8">
            {submitStatus === 'success' ? (
              <div className="text-center py-8">
                <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6 inline-flex items-center justify-center">
                  <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl mb-4">Thank You!</h3>
                <p className="text-neutral-700 mb-6">
                  Your message has been sent successfully. We'll get back to you as soon as possible.
                </p>
                <button 
                  onClick={() => setSubmitStatus('idle')}
                  className="btn btn-primary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-neutral-800 font-medium mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.name 
                          ? 'border-red-500 focus:ring-red-200' 
                          : 'border-neutral-300 focus:ring-primary-200 focus:border-primary-400'
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.name}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-neutral-800 font-medium mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.email 
                          ? 'border-red-500 focus:ring-red-200' 
                          : 'border-neutral-300 focus:ring-primary-200 focus:border-primary-400'
                      }`}
                      placeholder="Your email address"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-neutral-800 font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-400"
                      placeholder="Your phone number (optional)"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-neutral-800 font-medium mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full p-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-400 bg-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Prayer Request">Prayer Request</option>
                      <option value="Visiting Information">Visiting Information</option>
                      <option value="Volunteering">Volunteering</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-neutral-800 font-medium mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.message 
                        ? 'border-red-500 focus:ring-red-200' 
                        : 'border-neutral-300 focus:ring-primary-200 focus:border-primary-400'
                    }`}
                    placeholder="Your message"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.message}
                    </p>
                  )}
                </div>
                
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <SectionTitle 
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about visiting our church"
          />
          
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="card p-6">
                <h3 className="text-xl mb-2">{item.question}</h3>
                <p className="text-neutral-700 mb-0">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Join Us This Sunday</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            We look forward to welcoming you to our church family. Come experience worship, 
            fellowship, and spiritual growth with us.
          </p>
          <div className="inline-block bg-white text-primary-800 py-4 px-8 rounded-lg font-medium">
            Sunday Service at 3:00 PM
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;