import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeroInternal from '../components/PageHeroInternal';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const WHATSAPP_PHONE_NUMBER = '212626597561';

const ContactPage: React.FC = () => {
  const { ref: contactDetailsRef, isVisible: contactDetailsVisible } = useScrollAnimation(0.2, 0);
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation(0.2, 200);
  const { ref: card1Ref, isVisible: card1Visible } = useScrollAnimation(0.2, 100);
  const { ref: card2Ref, isVisible: card2Visible } = useScrollAnimation(0.2, 200);
  const { ref: card3Ref, isVisible: card3Visible } = useScrollAnimation(0.2, 300);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget as typeof e.currentTarget & {
      name: { value: string };
      email: { value: string };
      phone: { value: string };
      subject: { value: string };
      message: { value: string };
    };

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    const waMessage =
      `Nom: ${name}\n` +
      `Email: ${email}\n` +
      (phone ? `Téléphone: ${phone}\n` : '') +
      `Sujet: ${subject}\n` +
      `Message: ${message}`;

    const encodedMessage = encodeURIComponent(waMessage);
    const waLink = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodedMessage}`;
    window.open(waLink, '_blank');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <PageHeroInternal 
          title="Contactez-Nous"
          subtitle="Nous sommes à votre écoute pour tous vos projets d'ascenseurs."
          backgroundImageUrl="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
        />
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            <section ref={contactDetailsRef} className={`transition-all duration-700 ease-out ${contactDetailsVisible ? 'opacity-100 animate-slide-up' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-bold text-primary mb-6">Nos Coordonnées</h2>
              <div className="space-y-6">
                <div ref={card1Ref} className={`flex items-start p-6 bg-card rounded-lg shadow-md transition-all duration-500 ease-out hover:shadow-xl transform hover:scale-[1.02] ${card1Visible ? 'opacity-100 animate-slide-up' : 'opacity-0 translate-y-8'}`}>
                  <Phone size={28} className="text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-1">Téléphone</h3>
                    <a href="tel:+212677820536" className="text-foreground/80 hover:text-primary transition-colors text-lg break-all">+212 677-820536 <br />
                    +212 626-597561</a>
                    <p className="text-sm text-muted-foreground">Disponible pour urgences 7j/7</p>
                  </div>
                </div>
                <div ref={card2Ref} className={`flex items-start p-6 bg-card rounded-lg shadow-md transition-all duration-500 ease-out hover:shadow-xl transform hover:scale-[1.02] ${card2Visible ? 'opacity-100 animate-slide-up' : 'opacity-0 translate-y-8'}`}>
                  <Mail size={28} className="text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-1">Email</h3>
                    <a href="mailto:support@franceascenseurs.ma" className="text-foreground/80 hover:text-primary transition-colors text-lg break-all">support@franceascenseurs.ma</a>
                    <p className="text-sm text-muted-foreground">Réponse rapide garantie</p>
                  </div>
                </div>
                <div ref={card3Ref} className={`flex items-start p-6 bg-card rounded-lg shadow-md transition-all duration-500 ease-out hover:shadow-xl transform hover:scale-[1.02] ${card3Visible ? 'opacity-100 animate-slide-up' : 'opacity-0 translate-y-8'}`}>
                  <MapPin size={28} className="text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-1">Adresse</h3>
                    <p className="text-foreground/80 text-lg">Oulfa casablanca, Casablanca, Morocco</p>
                    <p className="text-sm text-muted-foreground">Visites sur rendez-vous</p>
                  </div>
                </div>
              </div>
            </section>
            
            <section ref={formRef} className={`p-6 md:p-8 bg-secondary/30 rounded-xl shadow-xl transition-all duration-700 ease-out ${formVisible ? 'opacity-100 animate-slide-up' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-bold text-primary mb-6">Envoyez-nous un message</h2>
              <p className="text-foreground/80 mb-6">
                Pour toute demande de devis, information ou question, n'hésitez pas à remplir le formulaire ci-dessous. Nous vous recontacterons dans les plus brefs délais.
              </p>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/90">Nom complet</label>
                  <input type="text" name="name" id="name" className="mt-1 block w-full px-4 py-3 border-border bg-background rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm" placeholder="Votre Nom" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/90">Email</label>
                  <input type="email" name="email" id="email" className="mt-1 block w-full px-4 py-3 border-border bg-background rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm" placeholder="Votre Email" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground/90">Téléphone </label>
                  <input type="tel" name="phone" id="phone" className="mt-1 block w-full px-4 py-3 border-border bg-background rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm" placeholder="Votre Numéro de Téléphone" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground/90">Sujet</label>
                  <input type="text" name="subject" id="subject" className="mt-1 block w-full px-4 py-3 border-border bg-background rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm" placeholder="Sujet de votre message" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/90">
                  Votre demande</label>
                  <textarea id="message" name="message" rows={5} className="mt-1 block w-full px-4 py-3 border-border bg-background rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm" placeholder="Votre message..." required></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-4 rounded-md shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-[1.02]">
                    Envoyer le Message
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;