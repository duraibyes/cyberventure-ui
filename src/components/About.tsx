import { Shield, TrendingUp, Users, Award } from 'lucide-react';

const stats = [
  {
    icon: Shield,
    value: '10,000+',
    label: 'Threats Prevented',
    description: 'Daily security incidents blocked'
  },
  {
    icon: Users,
    value: '500+',
    label: 'Enterprise Clients',
    description: 'Organizations protected worldwide'
  },
  {
    icon: TrendingUp,
    value: '99.9%',
    label: 'Uptime',
    description: 'Guaranteed system availability'
  },
  {
    icon: Award,
    value: '50+',
    label: 'Industry Awards',
    description: 'Recognition for security excellence'
  }
];

export default function About() {
  return (
    <section id="aboutus" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Leading the Future of
              <span className="text-orange-600"> AI-Driven Cybersecurity</span>
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in 2020, CyberVenture emerged from a simple mission: to make enterprise-grade
              cybersecurity accessible and intelligent. Our team of security experts and AI researchers
              developed a platform that learns, adapts, and evolves with the threat landscape.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Today, we protect some of the world's most critical infrastructure, processing billions
              of security events daily and preventing threats before they impact your business. Our
              AI-powered platform doesn't just react to threats—it predicts them.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-lg font-semibold">
                <Shield className="w-5 h-5" />
                SOC 2 Certified
              </div>
              <div className="flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-lg font-semibold">
                <Award className="w-5 h-5" />
                ISO 27001
              </div>
              <div className="flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-lg font-semibold">
                <Shield className="w-5 h-5" />
                GDPR Compliant
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-orange-200 rounded-xl p-6 hover:border-orange-500 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="mb-4">
                    <div className="inline-block p-3 bg-orange-100 rounded-lg group-hover:bg-orange-600 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                    </div>
                  </div>

                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>

                  <div className="text-sm font-semibold text-orange-600 mb-2">
                    {stat.label}
                  </div>

                  <div className="text-xs text-gray-600">
                    {stat.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
