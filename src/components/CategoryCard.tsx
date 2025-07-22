import React from 'react';
import { Category } from '../types/product';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface CategoryCardProps {
  category: Category;
  productCount?: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, productCount = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      className="group"
    >
      <Link
        to={`/pieces?category=${category.id}`}
        className="block bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border-2 border-transparent hover:border-primary/20"
      >
        <div className="text-center">
          <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
            {category.icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
            {category.name}
          </h3>
          <p className="text-gray-600 text-sm mb-3">
            {category.description}
          </p>
          <div className="text-primary font-semibold">
            {productCount} produit{productCount !== 1 ? 's' : ''}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;