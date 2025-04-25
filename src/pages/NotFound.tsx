import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import Hero from '../components/ui/Hero';

const NotFound = () => {
  return (
    <div className="page-transition">
      <Hero 
        title="Page Not Found"
        subtitle="The page you're looking for doesn't exist or has been moved."
        backgroundImage="https://images.pexels.com/photos/1420709/pexels-photo-1420709.jpeg"
        height="medium"
        overlay="medium"
      />

      <section className="section bg-white">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="mb-6">404 Error</h2>
            <p className="text-lg text-neutral-700 mb-8">
              We apologize for the inconvenience. You can use the button below to return to our homepage 
              or use the navigation menu to find what you're looking for.
            </p>
            <Link 
              to="/" 
              className="btn btn-primary inline-flex items-center gap-2"
            >
              <Home className="h-5 w-5" />
              Return to Homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;