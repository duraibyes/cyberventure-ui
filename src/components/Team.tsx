import { Linkedin, Twitter, Mail } from "lucide-react";

import User1 from "../assets/teams/user1.jpg";
import User2 from "../assets/teams/user2.jpg";
import User3 from "../assets/teams/user3.jpg";
import User4 from "../assets/teams/user4.jpg";

const teamMembers = [
  {
    name: "Gopi Ramamoorthy",
    role: "CISSP, CISA, CIPP/US, CISM President",
    bio: "Former CISO at Fortune 500 companies with 15+ years in cybersecurity.",
    image: User1
  },
  {
    name: "Sakthiswaran Rangaraju",
    role: "CISA, CISSP, CDPSE Secretary & Distinguished Member",
    bio: "AI researcher and security architect with PhD in Machine Learning.",
    image: User2
  },
  {
    name: "Ganesh Prasad",
    role: "MBA, CISM, CISA, CDPSE Vice President & Technology Director",
    bio: "Cybersecurity expert specializing in threat intelligence.",
    image: User3
  },
  {
    name: "Shashank Nadig",
    role: "CISA Communications Director",
    bio: "Published researcher in AI security and advanced threat detection.",
    image: User4
  },
];

export default function Team() {

  return (
    <section className="py-28 bg-gradient-to-b from-orange-50 via-white to-red-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Leadership
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A team of cybersecurity visionaries and AI pioneers building secure digital ecosystems.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-200 
             rounded-xl overflow-hidden
             transition-all duration-500 ease-out
             transform hover:scale-[1.05]"
              style={{
                boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 25px 50px rgba(249,115,22,0.3), 0 15px 35px rgba(239,68,68,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 5px 15px rgba(0,0,0,0.05)";
              }}
            >
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-xl p-[1px] 
                  bg-gradient-to-r from-orange-500 to-red-600 
                  opacity-0 group-hover:opacity-100 
                  transition duration-300"></div>

              <div className="relative bg-white rounded-xl overflow-hidden">
                {/* Sharp Accent Corner */}
                <div className="absolute top-0 right-0 w-0 h-0 
                                border-t-[40px] border-t-orange-600 
                                border-l-[40px] border-l-transparent 
                                opacity-80"></div>

                {/* Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-72 object-cover"
                />

            

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>

                  <div className="text-orange-600 font-medium mb-4 text-sm uppercase tracking-wide">
                    {member.role}
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Social */}
                  <div className="flex gap-4">
                    {[Linkedin, Twitter, Mail].map((Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="p-2 border border-gray-300 rounded-md
                                   hover:border-orange-500
                                   hover:text-orange-600
                                   transition duration-300"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}