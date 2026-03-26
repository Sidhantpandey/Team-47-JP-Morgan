import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Components/LFooter";
import {
    Mail,
    Phone,
    MapPin,
    MessageSquare,
    Send,
    Clock,
    Heart,
    ChevronRight,
    Loader2
} from "lucide-react";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSent(true);
            setFormData({ name: "", email: "", subject: "", message: "" });
            // Reset success message after 5 seconds
            setTimeout(() => setIsSent(false), 5000);
        }, 1500);
    };

    const contactInfo = [
        {
            icon: <Phone className="h-6 w-6 text-orange-500" />,
            title: "Call Us",
            details: "+91 88960 76000",
            description: "Mon-Sat, 9AM-6PM IST"
        },
        {
            icon: <Mail className="h-6 w-6 text-orange-500" />,
            title: "Email Us",
            details: "contact@spacece.in",
            description: "We respond within 24 hours"
        },
        {
            icon: <MapPin className="h-6 w-6 text-orange-500" />,
            title: "Visit Us",
            details: "Bangalore, Karnataka",
            description: "SpacECE India Foundation HQ"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-yellow-50">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl"></div>

                <div className="container mx-auto max-w-6xl relative z-10 text-center">
                    <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full mb-6 font-semibold animate-fade-in text-sm md:text-base">
                        <MessageSquare className="h-5 w-5" />
                        <span>We're here to help</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                        Contact <span className="text-orange-500">Us</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Have questions about our programs or want to partner with us? Reach out and let's build brighter futures together.
                    </p>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        {/* Contact Info Column */}
                        <div className="lg:col-span-1 space-y-8">
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                                <div className="w-16 h-1 bg-orange-500 mb-6"></div>
                                <p className="text-gray-600">
                                    Fill out the form and our team will get back to you within 24 hours.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="flex items-start space-x-4 p-6 bg-orange-50 rounded-2xl border border-orange-100/50 hover:shadow-md transition-all">
                                        <div className="p-3 bg-white rounded-xl shadow-sm">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">{info.title}</h3>
                                            <p className="text-gray-800 font-medium">{info.details}</p>
                                            <p className="text-sm text-gray-500">{info.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Decorative Card */}
                            <div className="p-8 bg-gray-900 rounded-3xl text-white relative overflow-hidden mt-12">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl -mr-16 -mt-16"></div>
                                <Heart className="h-12 w-12 text-orange-500 mb-6 animate-pulse" />
                                <h3 className="text-2xl font-bold mb-4">Join Our Journey</h3>
                                <p className="text-gray-400 mb-6">
                                    Every contribution matters. Join us in our mission to empower underprivileged children.
                                </p>
                                <div className="flex items-center text-orange-400 font-semibold cursor-pointer group">
                                    <span>Learn how to help</span>
                                    <ChevronRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="lg:col-span-2">
                            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-semibold text-gray-700 ml-1">Subject</label>
                                        <input
                                            id="subject"
                                            name="subject"
                                            type="text"
                                            required
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none"
                                            placeholder="How can we help?"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-semibold text-gray-700 ml-1">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="6"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none resize-none"
                                            placeholder="Your message here..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-5 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-2xl font-bold text-lg hover:from-orange-600 hover:to-yellow-600 transition-all transform hover:scale-[1.02] shadow-xl flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed group"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="h-5 w-5 animate-spin" />
                                                <span>Sending message...</span>
                                            </>
                                        ) : isSent ? (
                                            <>
                                                <Send className="h-5 w-5" />
                                                <span>Message Sent!</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Send Message</span>
                                                <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </>
                                        )}
                                    </button>

                                    {isSent && (
                                        <div className="bg-green-50 text-green-700 p-4 rounded-xl text-center font-medium animate-fade-in">
                                            Thank you! Your message has been sent successfully. We will get back to you soon.
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section or Additional Info */}
            <section className="pb-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="rounded-3xl overflow-hidden shadow-2xl h-96 relative group border-4 border-white">
                        {/* Map Placeholder with Rich Styling */}
                        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                            <div className="text-center p-8">
                                <MapPin className="h-16 w-16 text-orange-500 mx-auto mb-4 animate-bounce" />
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Headquarters</h3>
                                <p className="text-gray-600">SpacECE India Foundation, Bangalore, Karnataka</p>
                                <div className="mt-6">
                                <Link to ='https://www.google.com/maps/place/C1+Chandralok+Nagari,+CHANDRALOK+NAGARI,+Dhayari+Phata+Rd,+Sitaee+Nagar,+Dhayari+Phata,+Khadewadi,+Pune,+Maharashtra+411041/@18.4503835,73.8097787,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc29511791acdfd:0xcfc783f2d732b226!8m2!3d18.4503835!4d73.8097787!16s%2Fg%2F11bx1_32d1?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D'>
                                <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-bold shadow-md hover:bg-gray-50 transition-colors">
                                        View on Google Maps
                                    </button></Link>
                                </div>
                            </div>
                            {/* Decorative Overlay */}
                            <div className="absolute inset-0 bg-orange-500/5 pointer-events-none group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactPage;
