import { Shield, ArrowRight } from 'lucide-react';
import Banner from "../assets/banner/banner.png";

export default function Hero() {
  return (
    <section id="home" style={{ top: '55px' }} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-600 via-orange-500 to-red-600">

      {/* 🔥 Background Image Layer */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-20"
        style={{
          backgroundImage: `url(${Banner})`,
        }}
      ></div>

      {/* 🔥 Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8 animate-float">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-6 shadow-2xl">
              <Shield className="w-20 h-20 text-white" strokeWidth={1.5} />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Cyber Venture
            <br />
            <span className="text-orange-200">A Global Forum for Cybersecurity, AI Security & Privacy Leaders</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl">
            CyberVenture is an international platform uniting cybersecurity innovators, AI security experts, privacy leaders, founders, venture capitalists, CISOs, and technology executives shaping the future of digital trust.

            We empower collaboration, accelerate innovation, and foster strategic partnerships across the global cybersecurity ecosystem.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group px-8 py-4 bg-white text-orange-600 rounded-lg font-semibold text-lg hover:bg-orange-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2">
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              View Live Events
            </button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 md:gap-16">
            <div className="text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">10K+</div>
              <div className="text-white/80 text-sm md:text-base">Threats Blocked</div>
            </div>
            <div className="text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-white/80 text-sm md:text-base">Enterprise Clients</div>
            </div>
            <div className="text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">99.9%</div>
              <div className="text-white/80 text-sm md:text-base">Uptime</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
