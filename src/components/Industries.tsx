import { Building2, Heart, ShoppingCart, Landmark, Code } from 'lucide-react';
import Logo1 from "../assets/sponsors/logo1.png";
import Logo2 from "../assets/sponsors/logo2.png";
import Logo3 from "../assets/sponsors/logo3.png";
import Logo4 from "../assets/sponsors/logo4.png";
import Logo5 from "../assets/sponsors/logo5.png";
import Logo6 from "../assets/sponsors/logo6.png";

const industries = [
  {
    icon: Building2,
    name: 'Banking & Finance',
    description: 'Protect financial data and transactions'
  },
  {
    icon: Heart,
    name: 'Healthcare',
    description: 'Secure patient records and medical systems'
  },
  {
    icon: ShoppingCart,
    name: 'E-commerce',
    description: 'Guard customer data and payment systems'
  },
  {
    icon: Landmark,
    name: 'Government',
    description: 'Safeguard sensitive public sector data'
  },
  {
    icon: Code,
    name: 'SaaS & Tech Companies',
    description: 'Protect cloud infrastructure and APIs'
  }
];

export default function Industries() {
  return (
    <section id="sponsor" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      {/* Blur Glow Background Elements */}

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted Across Industries
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Leading organizations worldwide rely on CyberVenture for their security needs
          </p>
        </div>
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl">
          <div className="flex flex-wrap justify-center gap-x-[60px] gap-y-8">

            <div className='group bg-white/10  border border-orange-500/20 
                     rounded-2xl p-2 flex items-center justify-center
                     hover:scale-110 hover:bg-orange-600/20
                     transition-all duration-500 shadow-xl'
              style={{ width: '250px' }}
            >
              <img
                src={Logo1}
                alt="Company Logo"
                className=""
              />
            </div>

            <div className='group bg-white/10  border border-orange-500/20 
                     rounded-2xl p-2 flex items-center justify-center
                     hover:scale-110 hover:bg-orange-600/20
                     transition-all duration-500 shadow-xl'
              style={{ width: '250px' }}
            >
              <img
                src={Logo2}
                alt="Company Logo"
                className=" "
              />
            </div>

            <div className='group bg-white/10  border border-orange-500/20 
                     rounded-2xl p-2 flex items-center justify-center
                     hover:scale-110 hover:bg-orange-600/20
                     transition-all duration-500 shadow-xl'
              style={{ width: '250px' }}
            >
              <img
                src={Logo3}
                alt="Company Logo"
                className=" "
              />
            </div>

            <div className='group bg-white/10  border border-orange-500/20 
                     rounded-2xl p-2 flex items-center justify-center
                     hover:scale-110 hover:bg-orange-600/20
                     transition-all duration-500 shadow-xl'
              style={{ width: '250px' }}
            >
              <img
                src={Logo4}
                alt="Company Logo"
                className=" "
              />
            </div>

            <div className='group bg-white/10  border border-orange-500/20 
                     rounded-2xl p-2 flex items-center justify-center
                     hover:scale-110 hover:bg-orange-600/20
                     transition-all duration-500 shadow-xl'
              style={{ width: '250px' }}
            >
              <img
                src={Logo5}
                alt="Company Logo"
                className=" "
              />
            </div>

            <div className='group bg-white/10  border border-orange-500/20 
                     rounded-2xl p-2 flex items-center justify-center
                     hover:scale-110 hover:bg-orange-600/20
                     transition-all duration-500 shadow-xl'
              style={{ width: '250px' }}
            >
              <img
                src={Logo6}
                alt="Company Logo"
                className=" "
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
