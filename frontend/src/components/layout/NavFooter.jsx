import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FiChevronLeft, FiChevronRight, FiHome } from 'react-icons/fi';

const NavFooter = ({ prev, next, prevLabel, nextLabel }) => {
  return (
    <div className="mt-12 pt-6 border-t border-border">
      <div className="flex items-center justify-between gap-4">
        {/* Previous Button */}
        {prev ? (
          <Button
            asChild
            variant="outline"
            className="flex items-center gap-2"
          >
            <Link to={prev}>
              <FiChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">{prevLabel || 'Sebelumnya'}</span>
              <span className="sm:hidden">Prev</span>
            </Link>
          </Button>
        ) : (
          <div />
        )}

        {/* Home Button */}
        <Button
          asChild
          variant="ghost"
          size="icon"
          className="h-10 w-10"
        >
          <Link to="/home">
            <FiHome className="w-5 h-5" />
          </Link>
        </Button>

        {/* Next Button */}
        {next ? (
          <Button
            asChild
            className="flex items-center gap-2"
          >
            <Link to={next}>
              <span className="hidden sm:inline">{nextLabel || 'Selanjutnya'}</span>
              <span className="sm:hidden">Next</span>
              <FiChevronRight className="w-4 h-4" />
            </Link>
          </Button>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default NavFooter;
