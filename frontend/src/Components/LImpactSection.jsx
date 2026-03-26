import { BookOpen, Star, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const ImpactSection = () => {
  const stats = [
    { number: "10,000+", label: "Children Reached" },
    { number: "150+", label: "Learning Centers" },
    { number: "500+", label: "Trained Educators" },
    { number: "50+", label: "Communities Served" },
  ];

  return (
    <section
      id="impact"
      className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Impact
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Making a meaningful difference in the lives of children and families
            across India
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                UMANG: Your Child's Path to a Brighter Future
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our flagship UMANG program represents hope and transformation
                for thousands of underprivileged children. Through
                scientifically-designed curricula and caring educators, we're
                nurturing the next generation of leaders, thinkers, and
                changemakers.
              </p>
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center space-x-2 text-orange-500">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <span className="text-gray-600">4.9/5 Parent Satisfaction</span>
              </div>
              <Link
                to="/umang-fellowship"
                className="inline-flex items-center bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-3 rounded-full font-bold hover:from-orange-600 hover:to-yellow-600 transition-all transform hover:scale-105 shadow-lg group"
              >
                Learn More About UMANG
                <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <BookOpen className="h-16 w-16 mx-auto mb-4" />
                <p>Video: UMANG Program Overview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
