import React, { useState } from 'react';
import { Product } from '../types/product';
import { useCart } from '../contexts/CartContext';
import { useFavorites } from '../contexts/FavoritesContext';
import { Heart, ShoppingCart, Eye, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    
    // Add visual feedback
    const button = e.currentTarget as HTMLElement;
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
      button.style.transform = 'scale(1)';
    }, 150);
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(product);
  };

  const handleWhatsAppOrder = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const message = `Bonjour, je souhaite commander cette pièce :\n\n` +
      `📦 *${product.name}*\n` +
      `💰 Prix: ${product.price}€\n` +
      `🔧 Référence: ${product.reference}\n` +
      `📱 Lien: ${window.location.origin}/product/${product.id}\n\n` +
      `Merci de me confirmer la disponibilité et les délais de livraison.`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/212677820536?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {product.isNew && (
          <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
            NOUVEAU
          </span>
        )}
        {product.isPromo && (
          <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
            PROMO
          </span>
        )}
      </div>

      {/* Favorite Button */}
      <button
        onClick={handleToggleFavorite}
        className="absolute top-3 right-3 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 group/heart"
      >
        <Heart
          size={20}
          className={`transition-all duration-300 ${
            isFavorite(product.id)
              ? 'fill-red-500 text-red-500 scale-110'
              : 'text-gray-600 group-hover/heart:text-red-500'
          }`}
        />
      </button>

      <Link to={`/product/${product.id}`} className="block">
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden bg-gray-100">
          {!isImageLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
            </div>
          )}
          <img
            src={product.images[0]}
            alt={product.name}
            className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
              isImageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setIsImageLoaded(true)}
            onError={() => setIsImageLoaded(true)}
          />
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                <Eye size={24} className="text-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {product.description}
          </p>

          {product.reference && (
            <p className="text-xs text-gray-500 mb-2">
              Réf: {product.reference}
            </p>
          )}

          {/* Price */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl font-bold text-primary">
              {product.price}€
            </span>
            {product.originalPrice && (
              <span className="text-lg text-gray-500 line-through">
                {product.originalPrice}€
              </span>
            )}
          </div>

          {/* Stock Status */}
          <div className="flex items-center gap-2 mb-4">
            <div className={`w-2 h-2 rounded-full ${product.stock > 0 ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <span className={`text-sm ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {product.stock > 0 ? `En stock (${product.stock})` : 'Rupture de stock'}
            </span>
          </div>
        </div>
      </Link>

      {/* Action Buttons */}
      <div className="px-6 pb-6 flex gap-2">
        <button
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          className="flex-1 bg-primary hover:bg-primary/90 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
        >
          <ShoppingCart size={18} />
          Ajouter
        </button>
        
        <button
          onClick={handleWhatsAppOrder}
          className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
        >
          <MessageCircle size={18} />
          WhatsApp
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;