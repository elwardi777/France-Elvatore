import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { useFavorites } from '../contexts/FavoritesContext';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const FavoritesPage = () => {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="text-center">
            <Heart size={80} className="mx-auto text-gray-400 mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Aucun favori pour le moment</h1>
            <p className="text-gray-600 mb-8">Ajoutez des produits à vos favoris pour les retrouver facilement</p>
            <Link
              to="/pieces"
              className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Découvrir nos produits
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Mes Favoris</h1>
          <p className="text-gray-600">{favorites.length} produit{favorites.length !== 1 ? 's' : ''} en favoris</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {favorites.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FavoritesPage;