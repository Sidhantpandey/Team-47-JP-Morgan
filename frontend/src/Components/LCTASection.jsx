import { Heart, BookOpen, Users, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();

  const handleVolunteerRegister = () => {
    navigate('/login', { state: { role: 'volunteer', isRegister: true } });
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 opacity-20">
        <Heart className="h-24 w-24 text-white animate-pulse" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-20">
        <BookOpen
          className="h-32 w-32 text-white animate-bounce"
          style={{ animationDuration: "3s" }}
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Join Our Mission to
          <span className="block">Transform Young Lives</span>
        </h2>

        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
          Every child deserves a bright start. Partner with us to provide
          quality early childhood education to underprivileged children and
          build a stronger, more equitable future for all.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={handleVolunteerRegister}
            className="group bg-white text-orange-600 px-12 py-6 rounded-full text-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 shadow-2xl flex items-center space-x-3"
          >
            <span>Register as Volunteer</span>
            <Heart className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
          </button>

          <button 
            onClick={handleLogin}
            className="border-2 border-white text-white px-12 py-6 rounded-full text-xl font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105"
          >
            Login to Dashboard
          </button>
        </div>

        <div className="mt-12 flex justify-center items-center space-x-8 text-white/80">
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5" />
            <span>1,000+ Volunteers</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="h-5 w-5" />
            <span>Impact Since 2015</span>
          </div>
          <div className="flex items-center space-x-2">
            <Heart className="h-5 w-5" />
            <span>Trusted NGO</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
