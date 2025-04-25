import React from 'react';
import { BookOpen, Heart, Users, Shield } from 'lucide-react';
import Hero from '../components/ui/Hero';
import SectionTitle from '../components/ui/SectionTitle';

const About = () => {
  const pastoral = [
    {
      name: "Brother Suman Raj S",
      role: "Worship Leader",
      image: "https://images.pexels.com/photos/5717627/pexels-photo-5717627.jpeg",
      bio: "Pastor John has been leading our congregation for over 15 years with wisdom and compassion. His heart for God and people shines through in his teaching and leadership."
    },
    {
      name: "Sowjanya S",
      role: "Worship Leader",
      image: "https://images.pexels.com/photos/8437866/pexels-photo-8437866.jpeg",
      bio: "Sarah leads our worship ministry with passion and creativity. Her love for music and worship has helped create meaningful experiences in our services."
    },
    {
      name: "Pastor David Wilson",
      role: "Youth Pastor",
      image: "https://images.pexels.com/photos/8438982/pexels-photo-8438982.jpeg",
      bio: "Pastor David has a heart for mentoring young people. His energy and enthusiasm are contagious, and he helps our youth build strong foundations in their faith."
    }
  ];

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <Hero 
        title="About Our Church"
        subtitle="Discover the heart and mission of THE LORD REIGNS CHURCH"
        backgroundImage="https://images.pexels.com/photos/1616463/pexels-photo-1616463.jpeg"
        height="medium"
        overlay="medium"
      />

      {/* Our Story */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/5426403/pexels-photo-5426403.jpeg" 
                alt="Church building" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <h2 className="mb-4">Our Story</h2>
              <div className="h-1 bg-secondary-400 w-20 mb-6"></div>
              <p className="mb-4">
                THE LORD REIGNS CHURCH was founded in 2016 with a small group of believers who gathered in a local home. 
                As our congregation grew, we moved to our current location at Kings Farm in 2018.
              </p>
              <p className="mb-4">
                Over the years, we've seen God's faithfulness in countless ways. From humble beginnings, 
                we've grown into a vibrant community of faith that serves not only our members but also the wider community.
              </p>
              <p>
                Today, we continue our mission to spread the love of Christ, provide spiritual guidance, 
                and create a welcoming environment for all who seek to know God better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision and Mission */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <SectionTitle 
            title="Our Vision & Mission"
            subtitle="Guided by faith, we pursue our calling to serve God and others"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-8">
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 text-primary-800 p-3 rounded-full mr-4">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="text-2xl">Our Vision</h3>
              </div>
              <p className="mb-0">
                To be a beacon of God's light in our community, transforming lives through the Gospel of Jesus Christ. 
                We envision a church that equips believers to live out their faith in meaningful ways and 
                share God's love with everyone they encounter.
              </p>
            </div>
            
            <div className="card p-8">
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 text-primary-800 p-3 rounded-full mr-4">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="text-2xl">Our Mission</h3>
              </div>
              <p className="mb-0">
                To love God wholeheartedly, grow in faith together, and serve others sacrificially. 
                We are committed to creating disciples who understand God's Word, embrace His purpose, 
                and extend His kingdom through acts of compassion and service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Our Core Values"
            subtitle="These principles guide our decisions, actions, and ministry"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary-100 text-primary-800 p-3 rounded-full">
                  <BookOpen className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-xl mb-3">Biblical Teaching</h3>
              <p className="mb-0">
                We uphold the Bible as God's inspired Word and the foundation for all we believe and practice.
              </p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary-100 text-primary-800 p-3 rounded-full">
                  <Users className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-xl mb-3">Community</h3>
              <p className="mb-0">
                We value authentic relationships and strive to create a loving, supportive family of believers.
              </p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary-100 text-primary-800 p-3 rounded-full">
                  <Heart className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-xl mb-3">Compassion</h3>
              <p className="mb-0">
                We demonstrate God's love through acts of kindness, generosity, and service to those in need.
              </p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary-100 text-primary-800 p-3 rounded-full">
                  <Shield className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-xl mb-3">Integrity</h3>
              <p className="mb-0">
                We commit to honesty, transparency, and ethical conduct in all our actions and relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Church Leadership */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <SectionTitle 
            title="Our Leadership"
            subtitle="Meet the dedicated team that guides our church"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastoral.map((pastor, index) => (
              <div key={index} className="card overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={pastor.image} 
                    alt={pastor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-1">{pastor.name}</h3>
                  <p className="text-primary-600 font-medium mb-4">{pastor.role}</p>
                  <p className="mb-0">{pastor.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statement of Faith */}
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <SectionTitle 
            title="Our Statement of Faith"
            subtitle="The core beliefs that unite us and inform our worship and ministry"
          />
          
          <div className="card p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-2">The Bible</h3>
                <p>
                  We believe the Bible is the inspired Word of God, without error in its original manuscripts, 
                  and our final authority in matters of faith and practice.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl mb-2">God</h3>
                <p>
                  We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit, 
                  who is the Creator and Sustainer of all things.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl mb-2">Jesus Christ</h3>
                <p>
                  We believe in the deity of Jesus Christ, His virgin birth, sinless life, 
                  miracles, atoning death, bodily resurrection, ascension to the right hand of the Father, 
                  and His promised return in power and glory.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl mb-2">Salvation</h3>
                <p>
                  We believe salvation is a gift from God received through faith in Jesus Christ alone. 
                  It is not earned by good works but is demonstrated through a transformed life.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl mb-2">The Church</h3>
                <p>
                  We believe the Church is the body of Christ, with the mission to worship God, 
                  nurture believers, and share the Gospel with the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Come Worship With Us</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            We'd love to welcome you to our church family. Join us this Sunday for worship and fellowship.
          </p>
          <a href="/contact" className="btn bg-white text-primary-800 hover:bg-neutral-100">
            Plan Your Visit
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;