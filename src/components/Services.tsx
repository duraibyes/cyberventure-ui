import { Brain, Activity, FileCheck, Zap } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI Threat Detection',
    description: 'Advanced machine learning algorithms identify and neutralize threats before they can cause damage.',
    color: 'orange'
  },
  {
    icon: Activity,
    title: 'Real-Time Event Monitoring',
    description: 'Continuous surveillance of your network with instant alerts and comprehensive event logging.',
    color: 'red'
  },
  {
    icon: FileCheck,
    title: 'Risk & Compliance Analysis',
    description: 'Automated compliance reporting and risk assessment to meet industry standards and regulations.',
    color: 'orange'
  },
  {
    icon: Zap,
    title: 'Incident Response Automation',
    description: 'Rapid automated response to security incidents with customizable playbooks and workflows.',
    color: 'red'
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Security Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Protect your organization with cutting-edge cybersecurity tools designed for the modern threat landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-orange-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`mb-6 inline-block p-4 rounded-xl ${
                  service.color === 'orange'
                    ? 'bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white'
                    : 'bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white'
                } transition-all duration-300`}>
                  <Icon className="w-8 h-8" strokeWidth={2} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <div className={`absolute bottom-0 left-0 right-0 h-1 ${
                  service.color === 'orange' ? 'bg-orange-600' : 'bg-red-600'
                } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
