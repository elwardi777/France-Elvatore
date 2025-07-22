import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { useFavorites } from '../contexts/FavoritesContext';
import { 
  Heart, 
  ShoppingCart, 
  MessageCircle, 
  ArrowLeft, 
  Check, 
  Package, 
  Shield,
  Truck,
  ChevronLeft,
  ChevronRight,
  ZoomIn
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showImageModal, setShowImageModal] = useState(false);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Produit non trouvé</h1>
          <Link to="/pieces" className="text-primary hover:underline">
            Retour au catalogue
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Related products (same category, excluding current product)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleWhatsAppOrder = () => {
    const message = `Bonjour, je souhaite commander cette pièce :\n\n` +
      `📦 *${product.name}*\n` +
      `💰 Prix: ${product.price}€\n` +
      `🔢 Quantité: ${quantity}\n` +
      `🔧 Référence: ${product.reference}\n` +
      `📱 Lien: ${window.location.href}\n\n` +
      `Merci de me confirmer la disponibilité et les délais de livraison.`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/212677820536?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-primary">Accueil</Link>
          <span>/</span>
          <Link to="/pieces" className="hover:text-primary">Nos Pièces</Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        {/* Back Button */}
        <Link
          to="/pieces"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Retour au catalogue
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Images Section */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative bg-white rounded-xl overflow-hidden shadow-lg group">
              <img
                src={product.images[selectedImageIndex]}
                alt={product.name}
                className="w-full h-96 object-cover cursor-zoom-in transition-transform duration-300 group-hover:scale-105"
                onClick={() => setShowImageModal(true)}
              />
              
              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn size={20} />
              </div>

              {/* Navigation Arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isNew && (
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    NOUVEAU
                  </span>
                )}
                {product.isPromo && (
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    PROMO
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImageIndex === index
                        ? 'border-primary'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold text-primary">{product.price}€</span>
              {product.originalPrice && (
                <span className="text-2xl text-gray-500 line-through">
                  {product.originalPrice}€
                </span>
              )}
            </div>

            {/* Product Details */}
            <div className="bg-white rounded-xl p-6 shadow-lg space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Détails du produit</h3>
              
              {product.reference && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Référence:</span>
                  <span className="font-medium">{product.reference}</span>
                </div>
              )}
              
              {product.brand && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Marque:</span>
                  <span className="font-medium">{product.brand}</span>
                </div>
              )}
              
              <div className="flex justify-between">
                <span className="text-gray-600">Stock:</span>
                <span className={`font-medium ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {product.stock > 0 ? `${product.stock} disponible(s)` : 'Rupture de stock'}
                </span>
              </div>

              {product.compatibility && product.compatibility.length > 0 && (
                <div>
                  <span className="text-gray-600 block mb-2">Compatible avec:</span>
                  <div className="flex flex-wrap gap-2">
                    {product.compatibility.map((brand, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="text-gray-700 font-medium">Quantité:</label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className="flex-1 bg-primary hover:bg-primary/90 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
                >
                  <ShoppingCart size={20} />
                  Ajouter au panier
                </button>
                
                <button
                  onClick={() => toggleFavorite(product)}
                  className="p-3 border-2 border-gray-300 hover:border-red-500 rounded-lg transition-all duration-300 group"
                >
                  <Heart
                    size={20}
                    className={`transition-all duration-300 ${
                      isFavorite(product.id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-gray-600 group-hover:text-red-500'
                    }`}
                  />
                </button>
              </div>

              <button
                onClick={handleWhatsAppOrder}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
              >
                <MessageCircle size={20} />
                Commander via WhatsApp
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow">
                <Package className="text-primary" size={24} />
                <div>
                  <div className="font-medium text-gray-900">Livraison rapide</div>
                  <div className="text-sm text-gray-600">2-3 jours ouvrés</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow">
                <Shield className="text-primary" size={24} />
                <div>
                  <div className="font-medium text-gray-900">Garantie qualité</div>
                  <div className="text-sm text-gray-600">Pièces certifiées</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow">
                <Truck className="text-primary" size={24} />
                <div>
                  <div className="font-medium text-gray-900">Support technique</div>
                  <div className="text-sm text-gray-600">Assistance 7j/7</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Produits similaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Image Modal */}
      <AnimatePresence>
        {showImageModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setShowImageModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={product.images[selectedImageIndex]}
                alt={product.name}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              <button
                onClick={() => setShowImageModal(false)}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                ✕
              </button>

              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;