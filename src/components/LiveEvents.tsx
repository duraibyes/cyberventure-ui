import { Calendar, Clock, MapPin, Video, ArrowRight } from "lucide-react";

const upcomingEvent = {
  title: "AI-Driven Threat Intelligence for Modern Enterprises",
  date: "March 28, 2026",
  time: "6:00 PM – 7:30 PM EST",
  platform: "Zoom Webinar",
  link: "#",
  description:
    "Join cybersecurity leaders, AI researchers, and CISOs as we explore next-generation threat intelligence powered by artificial intelligence and machine learning.",
};

const moreEvents = [
  {
    title: "Zero Trust Architecture in 2026",
    date: "April 12, 2026",
    time: "5:00 PM EST",
    platform: "Microsoft Teams",
  },
  {
    title: "Cloud Security & DevSecOps Integration",
    date: "May 5, 2026",
    time: "4:00 PM EST",
    platform: "Zoom",
  },
  {
    title: "Cybersecurity Investment & VC Insights",
    date: "May 22, 2026",
    time: "6:30 PM EST",
    platform: "Hybrid Event",
  },
];

export default function EventsPage() {
  return (
    <section id="event" className="relative py-20 bg-gradient-to-br from-black via-red-900 to-orange-900 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-orange-500 blur-[150px] opacity-20 rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-red-600 blur-[150px] opacity-20 rounded-full"></div>

      <div className="container mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white  mb-6">
            CyberVenture Events
          </h2>
          <p className="text-lg text-gray-50 max-w-2xl mx-auto">
            Connect with cybersecurity leaders, AI innovators, and enterprise
            decision-makers through curated virtual and hybrid events.
          </p>
        </div>

        {/* FEATURED EVENT */}
        <div className="relative bg-white border border-orange-200 rounded-3xl p-10 mb-5 shadow-xl overflow-hidden">

          {/* Accent Top Bar */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 to-red-600"></div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

            <div className="flex-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {upcomingEvent.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {upcomingEvent.description}
              </p>

              <div className="flex flex-wrap gap-6 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-orange-600" />
                  {upcomingEvent.date}
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange-600" />
                  {upcomingEvent.time}
                </div>

                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-orange-600" />
                  {upcomingEvent.platform}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div>
              {/* <a
                href={upcomingEvent.link}
                className="inline-flex items-center gap-2 px-8 py-4 
                           bg-gradient-to-r from-orange-500 to-red-600 
                           text-white font-semibold rounded-xl 
                           hover:scale-105 transition-all duration-300 
                           shadow-lg hover:shadow-xl"
              >
                Register Now
                <ArrowRight className="w-4 h-4" />
              </a> */}
            </div>
          </div>
        </div>

        {/* MORE EVENTS */}
        {/* <div className="grid md:grid-cols-3 gap-10">
          {moreEvents.map((event, index) => (
            <div
              key={index}
              className="group backdrop-blur-xl bg-white/5 border border-white/10
             rounded-2xl p-6 transition-all duration-500
             hover:scale-[1.03]
             hover:border-orange-400/50
             hover:shadow-[0_20px_40px_rgba(249,115,22,0.3)]"
            >
              <h4 className="text-xl font-semibold text-white mb-4">
                {event.title}
              </h4>


              <div className="space-y-2 text-sm text-gray-300 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-orange-600" />
                  {event.date}
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange-600" />
                  {event.time}
                </div>

                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-orange-600" />
                  {event.platform}
                </div>
              </div>

              <button className="w-full py-3 bg-white border border-orange-500 
                                 text-orange-600 font-semibold rounded-lg 
                                 hover:bg-orange-600 hover:text-white 
                                 transition-all duration-300">
                View Details
              </button>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}