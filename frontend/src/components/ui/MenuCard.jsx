import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { FiArrowRight } from 'react-icons/fi';

const MenuCard = ({ icon, title, description, to, external = false, color = 'primary' }) => {
  const content = (
    <Card className="card-interactive group h-full">
      <CardContent className="p-5 sm:p-6 flex items-center gap-4">
        {/* Icon */}
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0">
          <div className={`absolute inset-0 bg-${color}/10 rounded-xl`} />
          {typeof icon === 'string' ? (
            <img
              src={icon}
              alt={title}
              className="relative w-full h-full object-contain rounded-xl p-2 group-hover:scale-110 transition-transform duration-300"
            />
          ) : (
            <div className="relative w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors truncate">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
            {description}
          </p>
        </div>

        {/* Arrow */}
        <div className="flex-shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300">
          <FiArrowRight className="w-5 h-5" />
        </div>
      </CardContent>
    </Card>
  );

  if (external) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }

  return (
    <Link to={to} className="block">
      {content}
    </Link>
  );
};

export default MenuCard;
