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
      <CardContent className="p-5 flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all shrink-0">
              {icon}
            </div>
            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
              {shape.name}
            </h3>
          </div>
          <div className="text-primary bg-primary/5 p-2 rounded-full group-hover:bg-primary/10 group-hover:translate-x-1 transition-all shrink-0">
            {isLocked ? (
              <FiLock className="w-4 h-4" />
            ) : (
              <FiArrowRight className="w-4 h-4" />
            )}
          </div>
        </div>
        {shape.description && (
          <p className="text-sm text-muted-foreground leading-relaxed flex-1">
            {shape.description}
          </p>
        )}
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
