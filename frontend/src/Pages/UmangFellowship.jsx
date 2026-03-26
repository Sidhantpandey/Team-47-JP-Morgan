import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/LFooter";
import {
    GraduationCap,
    Users,
    Search,
    BookOpen,
    Trophy,
    Briefcase,
    CheckCircle2,
    FileText,
    UserPlus,
    Video,
    MapPin,
    Heart,
    ChevronRight,
    HelpCircle,
} from "lucide-react";

const UmangFellowship = () => {
    const benefits = [
        {
            icon: <BookOpen className="h-10 w-10 text-orange-500" />,
            title: "Hands-On Learning Experience",
            description:
                "Direct engagement with communities to understand real-world challenges. Work on projects that shape the future of early childhood education.",
        },
        {
            icon: <Users className="h-10 w-10 text-blue-500" />,
            title: "Mentorship and Leadership Development",
            description:
                "Expert guidance to refine leadership skills and build sustainable solutions. Reflection sessions and collaboration with peers and mentors.",
        },
        {
            icon: <Trophy className="h-10 w-10 text-yellow-500" />,
            title: "Financial Support and Stipend",
            description:
                "Monthly stipend for selected fellows. Additional resources for travel and learning opportunities.",
        },
    ];

    const routeSteps = [
        {
            title: "1. Orientation & Training",
            description: "Build foundational knowledge and skills before engaging with communities.",
            icon: <GraduationCap className="h-8 w-8 text-orange-500" />,
        },
        {
            title: "2. Community Immersion Phase",
            description: "Understand the socio-cultural and educational landscape through firsthand experiences.",
            icon: <MapPin className="h-8 w-8 text-blue-500" />,
        },
        {
            title: "3. Conducting Research & Assessments",
            description: "Identify gaps and challenges in early childhood education.",
            icon: <Search className="h-8 w-8 text-green-500" />,
        },
        {
            title: "4. Hands-on Teaching",
            description: "Apply teaching strategies and engage directly with children.",
            icon: <BookOpen className="h-8 w-8 text-purple-500" />,
        },
        {
            title: "5. Impact Evaluation & Graduation",
            description: "Reflect on learnings and measure the impact of fellowship initiatives.",
            icon: <CheckCircle2 className="h-8 w-8 text-pink-500" />,
        },
        {
            title: "6. Specialized Tracks – Employment & Entrepreneurship",
            description: "Prepare fellows for long-term careers in education through two specialized pathways.",
            icon: <Briefcase className="h-8 w-8 text-teal-500" />,
        },
    ];

    const eligibility = [
        "Open to graduates passionate about education and community development.",
        "Must demonstrate leadership qualities and a commitment to social impact.",
    ];

    const documents = [
        "Academic and work-related certificates.",
        "Statement of Purpose (SOP).",
        "Identity proof and recent photographs.",
    ];

    const selectionProcess = [
        {
            title: "Online Application",
            description: "Share your aspirations and motivation through our online application. Highlight your passion for early childhood education and community development.",
            icon: <FileText className="h-6 w-6 text-orange-500" />,
        },
        {
            title: "Virtual Interview",
            description: "Engage in a one-on-one conversation with our team. This is an opportunity to express your commitment, experiences, and readiness for the fellowship.",
            icon: <Video className="h-6 w-6 text-blue-500" />,
        },
        {
            title: "Community Immersion Assessment",
            description: "Experience real-world challenges by engaging with communities. Showcase your ability to connect, learn, and contribute meaningfully to early childhood education initiatives.",
            icon: <Users className="h-6 w-6 text-green-500" />,
        },
        {
            title: "Final Selection & Offer",
            description: "If you demonstrate the potential to create impact, you will receive an offer to join the Umang Fellowship.",
            icon: <CheckCircle2 className="h-6 w-6 text-purple-500" />,
        },
    ];

    const faqs = [
        {
            question: "Who is eligible to apply for the fellowship?",
            answer: "The fellowship is open to individuals with a strong passion for education and community development. Applicants must meet the minimum educational and professional criteria outlined in the program details.",
        },
        {
            question: "How do I apply for the fellowship?",
            answer: "You can apply by filling out the online application form available on our website. Ensure that you submit all required documents, including your resume, statement of purpose, and identity proof.",
        },
        {
            question: "What is the selection process for the fellowship?",
            answer: "The selection process consists of multiple stages, including an initial application review, a virtual interview, and a community immersion assessment.",
        },
        {
            question: "Is there an application fee?",
            answer: "No, applying for the fellowship is completely free.",
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-yellow-50">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl"></div>

                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full mb-6 font-semibold animate-fade-in">
                            <Heart className="h-5 w-5" />
                            <span>Join the Movement</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                            Umang <span className="text-orange-500">Fellowship</span>
                        </h1>
                        <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                            Make Your Debut In Education Truly Meaningful. Empowering Educators, Transforming Communities.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a
                                href="https://www.spacece.co/udaan-centre/training-programs/application-form-dtey/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center space-x-2"
                            >
                                <span>Apply Now</span>
                                <ChevronRight className="h-5 w-5" />
                            </a>
                            <Link to ='https://www.spacece.co/udaan-centre/training-programs/application-form-dtey'>
                            <button className="border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-orange-50 transition-all flex items-center justify-center">
                                Download Brochure
                            </button></Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Join Umang Fellowship?</h2>
                        <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:border-orange-200 hover:shadow-2xl transition-all duration-300 group"
                            >
                                <div className="mb-6 group-hover:scale-110 transition-transform">{benefit.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fellowship Route */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your Fellowship Route</h2>
                        <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            A structured fellowship experience designed to equip changemakers with real-world insights, teaching skills, and community-driven impact.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {routeSteps.map((step, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start"
                            >
                                <div className="p-3 bg-orange-50 rounded-xl mb-6">{step.icon}</div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Eligibility & Documents */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Eligibility Criteria</h2>
                                <div className="space-y-4">
                                    {eligibility.map((item, index) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
                                            <p className="text-gray-700">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Required Documents</h2>
                                <div className="space-y-4">
                                    {documents.map((item, index) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <CheckCircle2 className="h-6 w-6 text-orange-500 flex-shrink-0" />
                                            <p className="text-gray-700">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="bg-orange-500 rounded-3xl p-12 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
                            <h3 className="text-3xl font-bold mb-6">Ready to make an impact?</h3>
                            <p className="text-orange-50 mb-8 text-lg">
                                We are looking for passionate individuals who are committed to transforming early childhood education.
                            </p>
                            <a
                                href="https://swarfellowship.ivolunteer.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-white text-orange-500 px-8 py-3 rounded-full font-bold hover:bg-orange-50 transition-colors shadow-lg"
                            >
                                Apply for Fellowship
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Selection Process */}
            <section className="py-20 px-4 bg-gray-900 text-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Application & Selection Process</h2>
                        <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {selectionProcess.map((step, index) => (
                            <div key={index} className="relative">
                                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 h-full backdrop-blur-sm">
                                    <div className="mb-4">{step.icon}</div>
                                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                    <p className="text-gray-400 text-sm">{step.description}</p>
                                </div>
                                {index < 3 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                                        <ChevronRight className="h-8 w-8 text-white/20" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
                            <HelpCircle className="h-8 w-8 text-orange-500" />
                            Frequently Asked Questions
                        </h2>
                        <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
                    </div>
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:border-orange-200 transition-colors"
                            >
                                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                                <p className="text-gray-600">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default UmangFellowship;
