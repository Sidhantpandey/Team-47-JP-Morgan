import {
  Baby,
  BookOpen,
  Users,
  GraduationCap,
  Heart,
  Globe,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const ProgramsSection = () => {
  const programs = [
    {
      icon: <Baby className="h-12 w-12 text-orange-500" />,
      title: "Early Learning Centers",
      description:
        "Safe, nurturing environments where children aged 0-4 receive quality early childhood education through play-based learning methods.",
    },
    {
      icon: <BookOpen className="h-12 w-12 text-blue-500" />,
      title: "UMANG Program",
      description:
        "Comprehensive development program focusing on cognitive, social, and emotional growth of underprivileged children in their crucial early years.",
    },
    {
      icon: <Users className="h-12 w-12 text-green-500" />,
      title: "Parent Education",
      description:
        "Training and support for parents and caregivers to create stimulating home environments that promote healthy child development.",
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-purple-500" />,
      title: "Teacher Training",
      description:
        "Professional development programs for educators specializing in early childhood development and age-appropriate teaching methodologies.",
    },
    {
      icon: <Heart className="h-12 w-12 text-pink-500" />,
      title: "Nutrition Support",
      description:
        "Ensuring proper nutrition and health monitoring for children to support their physical and cognitive development during critical early years.",
    },
    {
      icon: <Globe className="h-12 w-12 text-teal-500" />,
      title: "Community Outreach",
      description:
        "Expanding access to early childhood education in underserved communities through mobile learning units and community partnerships.",
    },
  ];

  return (
    <section id="programs" className="py-20 bg-orange-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Programs
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive early childhood development programs designed to give
            every child the best start in life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Link
              key={index}
              to="/umang-fellowship"
              className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-orange-300 hover:shadow-xl transition-all duration-300 transform hover:scale-105 block"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {program.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-between">
                <span>{program.title}</span>
                <ChevronRight className="h-6 w-6 text-orange-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {program.description}
              </p>
              <div className="flex items-center text-orange-500 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                <span>View Details</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
