import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, Book, Heart, Music } from 'lucide-react';

import Hero from '../components/ui/Hero';
import SectionTitle from '../components/ui/SectionTitle';
import EventCard from '../components/ui/EventCard';

const Home = () => {
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <Hero 
        title="Welcome to THE LORD REIGNS CHURCH"
        subtitle="A place of worship, fellowship, and spiritual growth"
        backgroundImage="https://images.pexels.com/photos/5705090/pexels-photo-5705090.jpeg"
        buttonText="Join Us This Sunday"
        buttonLink="/contact"
        height="large"
        overlay="medium"
      />

      {/* Welcome Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="mb-4">Welcome to Our Church Family</h2>
              <div className="h-1 bg-secondary-400 w-20 mb-6"></div>
              <p className="mb-4">
                At THE LORD REIGNS CHURCH, we are a community of believers dedicated to spreading the love of Christ. 
                Our mission is to create a welcoming environment where people can connect with God and each other.
              </p>
              <p className="mb-6">
                We believe in the power of worship, the importance of Biblical teaching, and the strength of community. 
                No matter where you are in your spiritual journey, you'll find a home with us.
              </p>
              <Link to="/about" className="btn btn-primary">
                Learn More About Us
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg" 
                alt="Church community" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-secondary-400 text-primary-900 p-4 rounded-lg shadow-lg hidden md:block">
                <p className="font-serif text-xl font-bold">"Where the Spirit of the Lord is, there is freedom."</p>
                <p className="text-right mt-2">- 2 Corinthians 3:17</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Times Section */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <SectionTitle 
            title="Join Us in Worship"
            subtitle="We welcome you to be a part of our services and experience the love of Christ"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center flex flex-col items-center">
              <div className="bg-primary-100 text-primary-800 p-4 rounded-full mb-4">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-xl mb-2">Sunday Service</h3>
              <p className="mb-0">3:00 PM - 5:00 PM</p>
              <p className="text-sm text-neutral-600">Main Sanctuary</p>
            </div>
            
            <div className="card p-8 text-center flex flex-col items-center">
              <div className="bg-primary-100 text-primary-800 p-4 rounded-full mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl mb-2">Wednesday Prayer</h3>
              <p className="mb-0">6:30 PM - 8:00 PM</p>
              <p className="text-sm text-neutral-600">Prayer Hall</p>
            </div>
            
            <div className="card p-8 text-center flex flex-col items-center">
              <div className="bg-primary-100 text-primary-800 p-4 rounded-full mb-4">
                <Book className="h-8 w-8" />
              </div>
              <h3 className="text-xl mb-2">Friday Bible Study</h3>
              <p className="mb-0">7:00 PM - 8:30 PM</p>
              <p className="text-sm text-neutral-600">Fellowship Hall</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Ministries Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Our Ministries"
            subtitle="We offer various ministries to help you grow spiritually and connect with others"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card overflow-hidden group">
              <div className="relative h-48">
                <img 
                  src="https://images.pexels.com/photos/3984852/pexels-photo-3984852.jpeg" 
                  alt="Children's Ministry"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h3 className="text-white p-4">Children's Ministry</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="mb-4">Nurturing young hearts and minds through Biblical teaching, fun activities, and worship.</p>
                <button className="text-primary-800 font-medium hover:text-primary-600 transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
            
            <div className="card overflow-hidden group">
              <div className="relative h-48">
                <img 
                  src="https://images.pexels.com/photos/7103/writing-notes-idea-conference.jpg" 
                  alt="Youth Ministry"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h3 className="text-white p-4">Youth Ministry</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="mb-4">Empowering teenagers to develop a personal relationship with Christ through fellowship and guidance.</p>
                <button className="text-primary-800 font-medium hover:text-primary-600 transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
            
            <div className="card overflow-hidden group">
              <div className="relative h-48">
                <img 
                  src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg" 
                  alt="Music Ministry"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h3 className="text-white p-4">Music Ministry</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="mb-4">Creating a powerful worship experience through music that glorifies God and uplifts the congregation.</p>
                <button className="text-primary-800 font-medium hover:text-primary-600 transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <SectionTitle 
            title="Upcoming Events"
            subtitle="Join us for these special events in our church community"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <EventCard 
              title="Community Outreach"
              date="June 24, 2025"
              time="9:00 AM - 2:00 PM"
              location="Vaderahalli Village"
              description="Join us as we serve our local community through various acts of kindness and support."
              imageUrl="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg"
            />
            
            <EventCard 
              title="Worship Night"
              date="July 3, 2025"
              time="7:00 PM - 9:00 PM"
              location="Main Sanctuary"
              description="An evening of praise and worship to connect with God through music and prayer."
              imageUrl="https://images.pexels.com/photos/1309898/pexels-photo-1309898.jpeg"
            />
            
            <EventCard 
              title="Family Picnic"
              date="July 15, 2025"
              time="11:00 AM - 3:00 PM"
              location="Kings Farm"
              description="A day of food, games, and fellowship for all families in our church community."
              imageUrl="https://images.pexels.com/photos/1660995/pexels-photo-1660995.jpeg"
            />
          </div>
          
          <div className="text-center mt-12">
            <Link to="/events" className="btn btn-primary">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Join Our Church Family Today</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            We invite you to be a part of our growing community of believers. Experience the love of Christ and the fellowship of our church family.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn bg-white text-primary-800 hover:bg-neutral-100">
              Visit Us This Sunday
            </Link>
            <Link to="/about" className="btn border-2 border-white text-white hover:bg-primary-700">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;