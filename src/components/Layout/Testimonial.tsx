import { StarIcon } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Home Gardener',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
      quote:
        "I never thought I could grow my own vegetables in my apartment. Thanks to GreenGrow's countertop system, I have fresh herbs and lettuce year-round!",
    },
    {
      name: 'Michael Chen',
      role: 'Restaurant Owner',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
      quote:
        "We installed GreenGrow's commercial system in our restaurant and now grow all our own herbs and microgreens. The freshness is unmatched and our customers notice the difference.",
    },
    {
      name: 'Emma Rodriguez',
      role: 'School Teacher',
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
      quote:
        'Our classroom hydroponic garden has been an amazing educational tool. The students are engaged and excited to learn about sustainable agriculture.',
    },
  ];

  return (
    <section className="w-full py-16 relative">
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(180deg, #1E3A8A 0%, #3B82F6 50%, #60A5FA 100%)`,
        }}
      />
      
      <div 
        className="absolute inset-0 z-0 opacity-100"
        style={{
          backgroundImage: `url('/wave.svg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="mb-2 text-3xl font-bold text-[#FFFFFF] md:text-5xl">
            VOICES FROM OUR COMMUNITY
          </h2>
          <p
            className="max-w-9xl text-1xl mx-auto font-light text-[#FFFFFF]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 100 }}
          >
            Your feedback helps us improve, innovate, and continue building
            solutions that make coastal communities safer and more resilient.
          </p>
        </div>

        <div className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:gap-8 md:overflow-x-visible">
          {testimonials.map((testimonial, index) => {
            const gradients = [
              "from-blue-400 to-cyan-400",
              "from-cyan-400 to-blue-500", 
              "from-blue-500 to-cyan-400"
            ];
            
            return (
              <div
                key={index}
                className="group relative flex min-w-[88vw] snap-center flex-col md:min-w-0 md:snap-align-none"
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${gradients[index]} rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200`}></div>
                <div className="relative rounded-xl glass-effect p-6 shadow-lg border border-white/20 backdrop-blur-sm transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:border-white/40 flex flex-col flex-1">
                  <div className="mb-4 flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        size={20}
                        className="fill-white/80 text-white/60"
                      />
                    ))}
                  </div>
                  
                  <p className="montserrat mb-6 flex-1 text-lg font-light text-white/90 text-justify leading-relaxed">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center">
                    <div className="mr-4 h-12 w-12 overflow-hidden rounded-full border-2 border-white/30">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="montserrat font-light text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-white/80">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}