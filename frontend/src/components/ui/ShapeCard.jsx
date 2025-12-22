import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FiArrowRight, FiLock } from 'react-icons/fi';

const ShapeCard = ({ 
  shape, 
  to, 
  icon, 
  isLocked = false,
  progress = 0 
}) => {
  const content = (
    <Card className={`card-interactive group h-full ${isLocked ? 'opacity-60' : ''}`}>
      <CardContent className="p-5 sm:p-6">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              {icon}
            </div>
            {progress > 0 && (
              <Badge variant="secondary" className="text-xs">
                {progress}% selesai
              </Badge>
            )}
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
            {shape.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground mb-4 flex-1">
            {shape.description}
          </p>

          {/* Formulas */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-muted-foreground">Volume:</span>
              <code className="px-2 py-0.5 bg-muted rounded text-foreground font-mono">
                {shape.formula.volume}
              </code>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-muted-foreground">Luas:</span>
              <code className="px-2 py-0.5 bg-muted rounded text-foreground font-mono">
                {shape.formula.surface}
              </code>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-3 border-t border-border">
            <span className="text-sm text-primary font-medium">
              {isLocked ? 'Terkunci' : 'Pelajari'}
            </span>
            <div className="text-primary group-hover:translate-x-1 transition-transform">
              {isLocked ? (
                <FiLock className="w-4 h-4" />
              ) : (
                <FiArrowRight className="w-4 h-4" />
              )}
            </div>
          </div>
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
