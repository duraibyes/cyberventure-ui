import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '99',
    description: 'Perfect for small teams getting started with enterprise security',
    features: [
      'Up to 50 monitored endpoints',
      'Basic threat detection',
      'Email support',
      '30-day log retention',
      'Weekly security reports',
      'Single user account'
    ],
    highlighted: false
  },
  {
    name: 'Supporter',
    price: '299',
    description: 'Advanced protection for growing businesses',
    features: [
      'Up to 500 monitored endpoints',
      'AI-powered threat detection',
      'Priority 24/7 support',
      '90-day log retention',
      'Real-time security alerts',
      'Up to 10 user accounts',
      'Custom compliance reports',
      'API access'
    ],
    highlighted: true,
    badge: 'Most Popular'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Complete security solution for large organizations',
    features: [
      'Unlimited monitored endpoints',
      'Advanced AI threat intelligence',
      'Dedicated security team',
      'Unlimited log retention',
      'Custom integrations',
      'Unlimited user accounts',
      'White-label options',
      'SLA guarantees'
    ],
    highlighted: false
  }
];

export default function Pricing() {
  return (
    <section id="membership" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Membership
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            CyberVenture offers exclusive membership programs designed to empower professionals at every stage of their cybersecurity journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-2xl scale-105 border-4 border-orange-400'
                  : 'bg-gray-50 text-gray-900 hover:shadow-xl border-2 border-gray-200'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${
                  plan.highlighted ? 'text-white' : 'text-gray-900'
                }`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${
                  plan.highlighted ? 'text-white/80' : 'text-gray-600'
                }`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  {plan.price !== 'Custom' && (
                    <span className={`text-5xl font-bold ${
                      plan.highlighted ? 'text-white' : 'text-gray-900'
                    }`}>
                      ${plan.price}
                    </span>
                  )}
                  {plan.price === 'Custom' && (
                    <span className={`text-4xl font-bold ${
                      plan.highlighted ? 'text-white' : 'text-gray-900'
                    }`}>
                      {plan.price}
                    </span>
                  )}
                  {plan.price !== 'Custom' && (
                    <span className={`${
                      plan.highlighted ? 'text-white/70' : 'text-gray-600'
                    }`}>
                      /month
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      plan.highlighted ? 'text-white' : 'text-orange-600'
                    }`} strokeWidth={3} />
                    <span className={`${
                      plan.highlighted ? 'text-white/90' : 'text-gray-700'
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-white text-orange-600 hover:bg-orange-50 shadow-lg hover:shadow-xl'
                  : 'bg-orange-600 text-white hover:bg-orange-700'
              }`}>
                {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
