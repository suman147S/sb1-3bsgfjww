import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  withLine?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = true,
  withLine = true,
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="mb-4">{title}</h2>
      
      {withLine && (
        <div className={`h-1 bg-secondary-400 w-20 mb-6 ${centered ? 'mx-auto' : ''}`}></div>
      )}
      
      {subtitle && (
        <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;