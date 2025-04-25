import React from 'react';
import { Clock, Music, BookOpen, Heart, Mic, Users } from 'lucide-react';
import Hero from '../components/ui/Hero';
import SectionTitle from '../components/ui/SectionTitle';

const Services = () => {
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <Hero 
        title="Our Services & Ministries"
        subtitle="Join us in worship, learning, and fellowship"
        backgroundImage="https://images.pexels.com/photos/372326/pexels-photo-372326.jpeg"
        height="medium"
        overlay="medium"
      />

      {/* Weekly Services */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Weekly Services"
            subtitle="Join us as we gather to worship, pray, and study God's Word"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card overflow-hidden group">
              <div className="relative h-48">
                <img 
                  src="https://images.pexels.com/photos/7504837/pexels-photo-7504837.jpeg" 
                  alt="Sunday Worship Service"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center text-white">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>Sundays, 9:00 AM - 11:30 AM</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-3">Sunday Worship Service</h3>
                <p className="mb-4">
                  Our main service includes vibrant worship, prayer, and Biblical teaching. 
                  Children's programs are available during the service.
                </p>
                <div className="flex items-start space-x-2">
                  <div className="bg-primary-100 text-primary-800 p-2 rounded-full">
                    <Music className="h-4 w-4" />
                  </div>
                  <div className="bg-primary-100 text-primary-800 p-2 rounded-full">
                    <BookOpen className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card overflow-hidden group">
              <div className="relative h-48">
                <img 
                  src="https://images.pexels.com/photos/7235689/pexels-photo-7235689.jpeg" 
                  alt="Wednesday Prayer Meeting"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center text-white">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>Wednesdays, 6:30 PM - 8:00 PM</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-3">Midweek Prayer Service</h3>
                <p className="mb-4">
                  Gather with us for a time of corporate prayer, worship, and spiritual renewal 
                  in the middle of your week.
                </p>
                <div className="flex items-start space-x-2">
                  <div className="bg-primary-100 text-primary-800 p-2 rounded-full">
                    <Heart className="h-4 w-4" />
                  </div>
                  <div className="bg-primary-100 text-primary-800 p-2 rounded-full">
                    <Music className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card overflow-hidden group">
              <div className="relative h-48">
                <img 
                  src="https://images.pexels.com/photos/6711582/pexels-photo-6711582.jpeg" 
                  alt="Friday Bible Study"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center text-white">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>Fridays, 7:00 PM - 8:30 PM</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-3">Friday Bible Study</h3>
                <p className="mb-4">
                  Dive deeper into God's Word through topical studies and discussions 
                  that help apply Biblical principles to daily life.
                </p>
                <div className="flex items-start space-x-2">
                  <div className="bg-primary-100 text-primary-800 p-2 rounded-full">
                    <BookOpen className="h-4 w-4" />
                  </div>
                  <div className="bg-primary-100 text-primary-800 p-2 rounded-full">
                    <Users className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <SectionTitle 
            title="What to Expect"
            subtitle="Here's what you can look forward to when you visit us"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/2869217/pexels-photo-2869217.jpeg" 
                alt="Church worship service" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">Warm Welcome</h3>
                <p>
                  From the moment you arrive, our greeters will welcome you and help you find your way around. 
                  We want you to feel comfortable and at home.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl mb-2">Inspiring Worship</h3>
                <p>
                  Our worship services blend contemporary and traditional elements, creating a meaningful 
                  experience for people of all generations.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl mb-2">Biblical Teaching</h3>
                <p>
                  Our messages are rooted in Scripture and presented in a way that is practical and applicable 
                  to everyday life.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl mb-2">Community</h3>
                <p>
                  Following the service, join us for coffee and refreshments. It's a great opportunity 
                  to meet others and build connections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Our Ministries"
            subtitle="Find your place to grow and serve in our church community"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 text-primary-800 p-3 rounded-full mr-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl">Children's Ministry</h3>
              </div>
              <p className="mb-4">
                Our children's ministry provides a safe, fun environment where kids learn about God's love 
                through age-appropriate lessons, activities, and worship.
              </p>
              <p className="text-sm text-neutral-600">
                <strong>Ages:</strong> 3-12 years<br />
                <strong>When:</strong> During Sunday services<br />
                <strong>Where:</strong> Children's Wing
              </p>
            </div>
            
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 text-primary-800 p-3 rounded-full mr-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl">Youth Ministry</h3>
              </div>
              <p className="mb-4">
                Our youth program helps teenagers develop a strong foundation in their faith 
                through Bible study, mentorship, fellowship, and service opportunities.
              </p>
              <p className="text-sm text-neutral-600">
                <strong>Ages:</strong> 13-18 years<br />
                <strong>When:</strong> Sundays at 5:00 PM<br />
                <strong>Where:</strong> Youth Center
              </p>
            </div>
            
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 text-primary-800 p-3 rounded-full mr-4">
                  <Music className="h-6 w-6" />
                </div>
                <h3 className="text-xl">Music Ministry</h3>
              </div>
              <p className="mb-4">
                Our music ministry enhances our worship experience through vocal and instrumental talents. 
                We welcome those with musical gifts to join our team.
              </p>
              <p className="text-sm text-neutral-600">
                <strong>Practice:</strong> Thursdays at 7:00 PM<br />
                <strong>Contact:</strong> music@tlrchurch.org<br />
                <strong>Where:</strong> Main Sanctuary
              </p>
            </div>
            
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 text-primary-800 p-3 rounded-full mr-4">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="text-xl">Outreach Ministry</h3>
              </div>
              <p className="mb-4">
                Our outreach team serves the local community through various initiatives, including 
                food distribution, home repairs, and community events.
              </p>
              <p className="text-sm text-neutral-600">
                <strong>Meets:</strong> 1st Saturday of each month<br />
                <strong>Time:</strong> 9:00 AM<br />
                <strong>Where:</strong> Fellowship Hall
              </p>
            </div>
            
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 text-primary-800 p-3 rounded-full mr-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl">Women's Ministry</h3>
              </div>
              <p className="mb-4">
                Our women's ministry provides opportunities for spiritual growth, support, and friendship 
                through Bible studies, retreats, and fellowship events.
              </p>
              <p className="text-sm text-neutral-600">
                <strong>Bible Study:</strong> Tuesdays at 10:00 AM<br />
                <strong>Monthly Gathering:</strong> 3rd Thursday at 6:30 PM<br />
                <strong>Where:</strong> Fellowship Hall
              </p>
            </div>
            
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 text-primary-800 p-3 rounded-full mr-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl">Men's Ministry</h3>
              </div>
              <p className="mb-4">
                Our men's ministry focuses on developing godly men through Bible study, prayer, 
                accountability, and service projects.
              </p>
              <p className="text-sm text-neutral-600">
                <strong>Bible Study:</strong> Saturdays at 7:00 AM<br />
                <strong>Monthly Breakfast:</strong> 1st Saturday at 8:30 AM<br />
                <strong>Where:</strong> Fellowship Hall
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Services */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <SectionTitle 
            title="Special Services"
            subtitle="Join us for these special worship experiences throughout the year"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center p-6">
              <h3 className="text-xl mb-3">Easter Services</h3>
              <p className="mb-4">
                Celebrate the resurrection of Jesus Christ with special worship services 
                on Good Friday and Easter Sunday.
              </p>
              <p className="text-primary-800 font-medium">April</p>
            </div>
            
            <div className="card text-center p-6">
              <h3 className="text-xl mb-3">Prayer & Fasting</h3>
              <p className="mb-4">
                Begin the year with a period of focused prayer and fasting 
                as we seek God's guidance for the year ahead.
              </p>
              <p className="text-primary-800 font-medium">January</p>
            </div>
            
            <div className="card text-center p-6">
              <h3 className="text-xl mb-3">Thanksgiving Service</h3>
              <p className="mb-4">
                Express gratitude for God's blessings at our special Thanksgiving 
                worship service and community meal.
              </p>
              <p className="text-primary-800 font-medium">November</p>
            </div>
            
            <div className="card text-center p-6">
              <h3 className="text-xl mb-3">Christmas Services</h3>
              <p className="mb-4">
                Celebrate the birth of Christ with our Christmas Eve candlelight 
                service and Christmas morning worship.
              </p>
              <p className="text-primary-800 font-medium">December</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Get Involved</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            We invite you to participate in our services and ministries. Whether you're interested in 
            worship, education, outreach, or fellowship, there's a place for you in our church family.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="btn bg-white text-primary-800 hover:bg-neutral-100">
              Contact Us
            </a>
            <a href="/gallery" className="btn border-2 border-white text-white hover:bg-primary-700">
              View Our Gallery
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;