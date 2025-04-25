import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl?: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  time,
  location,
  description,
  imageUrl,
}) => {
  return (
    <div className="card group h-full flex flex-col">
      {imageUrl && (
        <div className="relative overflow-hidden h-48">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl mb-3">{title}</h3>
        
        <div className="text-sm text-neutral-600 mb-4 space-y-2">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 text-primary-600 mr-2" />
            <span>{date}</span>
          </div>
          
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-primary-600 mr-2" />
            <span>{time}</span>
          </div>
          
          <div className="flex items-center">
            <MapPin className="h-4 w-4 text-primary-600 mr-2" />
            <span>{location}</span>
          </div>
        </div>
        
        <p className="text-neutral-700 mb-5 flex-grow">{description}</p>
        
        <button className="btn btn-outline self-start mt-auto">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default EventCard;