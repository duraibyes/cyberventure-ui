import { Linkedin } from "lucide-react";
import AdvisorBG from "../assets/teams/adivisor_section.png";
import advisor1 from "../assets/teams/advisor1.jpg";
import advisor2 from "../assets/teams/advisor2.jpg";

const advisors = [
    {
        name: "Mahendra Ramsinghani",
        role: "Managing Director, Secure Octane",
        bio: "Former Global CISO with 25+ years of experience advising Fortune 100 companies on cybersecurity transformation and enterprise risk governance.",
        image: "https://i0.wp.com/fullratchet.net/wp-content/uploads/2015/12/Mahendra_Ramsinghani_Startup_Boards_Part_2.jpg?resize=321%2C217",
    },
    {
        name: "Tim Mather",
        role: "Cybersecurity Leader, Speaker & Author",
        bio: "AI security strategist and venture advisor specializing in AI governance, compliance automation, and advanced threat intelligence systems.",
        image: "https://cltc.berkeley.edu/wp-content/uploads/2021/04/tim-mather.jpg"
    },
];

export default function Advisors() {
    
    return (
        <section className="relative py-28 overflow-hidden">

            {/* Gradient Base */}
            <div className="absolute inset-0 bg-gradient-to-br 
                  from-red-700 
                  via-orange-600 
                  to-orange-400"></div>

            {/* Background Image Layer */}
            <div
                className="absolute inset-0 bg-center bg-cover opacity-20"
                style={{
                    backgroundImage: `url(${AdvisorBG})`,
                }}
            ></div>

            {/* Soft White Overlay (for readability) */}
            <div className="absolute inset-0 bg-white/10"></div>
            <div className="relative container mx-auto px-6 z-10">

                {/* Title */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Our Advisors
                    </h2>
                    <p className="text-white/90 max-w-2xl mx-auto">
                        Industry leaders guiding CyberVenture with strategic insight,
                        governance expertise, and global cybersecurity vision.
                    </p>
                </div>

                <div className="space-y-28">

                    {/* Advisor 1 */}
                    <div className="grid md:grid-cols-2 gap-16 items-center">

                        {/* Image */}
                        <div className="relative">
                            {/* Shard Accent */}
                            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-white/30 rounded-3xl"></div>

                            <div className="relative rounded-3xl overflow-hidden 
                              backdrop-blur-xl bg-white/20 border border-white/40 
                              shadow-[0_20px_50px_rgba(255,255,255,0.3)]">
                                <img
                                    src={advisors[0].image}
                                    alt={advisors[0].name}
                                    className="w-full h-[420px] object-cover"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="text-white">
                            <h3 className="text-3xl font-bold mb-3">
                                {advisors[0].name}
                            </h3>

                            <div className="text-orange-200 font-semibold uppercase tracking-wider mb-6">
                                {advisors[0].role}
                            </div>

                            <p className="text-white/90 leading-relaxed mb-6">
                                {advisors[0].bio}
                            </p>

                            <a
                                href="#"
                                className="inline-flex items-center gap-2 px-6 py-3 
                           bg-white text-red-600 font-semibold 
                           rounded-xl hover:scale-105 
                           transition duration-300 shadow-lg"
                            >
                                <Linkedin className="w-4 h-4" />
                                Connect
                            </a>
                        </div>
                    </div>

                    {/* Advisor 2 */}
                    <div className="grid md:grid-cols-2 gap-16 items-center">

                        {/* Content */}
                        <div className="text-white order-2 md:order-1">
                            <h3 className="text-3xl font-bold mb-3">
                                {advisors[1].name}
                            </h3>

                            <div className="text-orange-200 font-semibold uppercase tracking-wider mb-6">
                                {advisors[1].role}
                            </div>

                            <p className="text-white/90 leading-relaxed mb-6">
                                {advisors[1].bio}
                            </p>

                            <a
                                href="#"
                                className="inline-flex items-center gap-2 px-6 py-3 
                           bg-white text-red-600 font-semibold 
                           rounded-xl hover:scale-105 
                           transition duration-300 shadow-lg"
                            >
                                <Linkedin className="w-4 h-4" />
                                Connect
                            </a>
                        </div>

                        {/* Image */}
                        <div className="relative order-1 md:order-2">
                            {/* Shard Accent */}
                            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-white/30 rounded-3xl"></div>

                            <div className="relative rounded-3xl overflow-hidden 
                              backdrop-blur-xl bg-white/20 border border-white/40 
                              shadow-[0_20px_50px_rgba(255,255,255,0.3)]">
                                <img
                                    src={advisors[1].image}
                                    alt={advisors[1].name}
                                    className="w-full h-[420px] object-cover"
                                />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}