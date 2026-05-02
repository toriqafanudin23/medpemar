import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { FiArrowRight, FiLock } from 'react-icons/fi';

const ShapeCard = ({ 
  shape, 
  to, 
  icon, 
  isLocked = false
}) => {
  const content = (
    <Card className={`card-interactive group h-full ${isLocked ? 'opacity-60' : ''}`}>
      <CardContent className="p-4 sm:p-5 flex items-center justify-between h-full">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            {icon}
          </div>
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {shape.name}
          </h3>
        </div>
        <div className="text-primary group-hover:translate-x-1 transition-transform">
          {isLocked ? (
            <FiLock className="w-5 h-5" />
          ) : (
            <FiArrowRight className="w-5 h-5" />
          )}
        </div>
      </CardContent>
    </Card>
  );

  if (isLocked) {
    return <div className="cursor-not-allowed">{content}</div>;
  }

  return (
    <Link to={to} className="block h-full">
      {content}
    </Link>
  );
};

export default ShapeCard;
