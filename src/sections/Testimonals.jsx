import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Deepshika worked as a react.js developer under my supervision in UOB Infinity project. I was consistently impressed by her down to earth attitude, her dedication and her quality delivery. She is a hardworking and talented young lady, and it was indeed a delight to work with her. Deepshika earns my recommendation. Wish you all the very best for your future endeavours Deepshika.",
    author: "Sivakumaar Palaniappan",
    role: "Vice President | Technical Delivery Manager at UOB",
    avatar: "/avatars/sivakumar.jpg",
  },
  {
    quote:
      "Deepshika was a programmer while working for us. She is very reliable and we had the utmost confidence that she would get the job done. She joined as a fresher and quickly learnt necessary skills required for the project. She was very much an asset to our development team. She would be a great addition to anyone's team.",
    author: "Vijayavel Rathnavel",
    role: "Senior Director - Program & Project Management at LTI Mindtree",
    avatar: "/avatars/vijayavel.jpg",
  },
  {
    quote:
      "Deepshika is one of the most dedicated professional I've worked with who is willing to go the extra mile for perfection. She has had a penchant for learning new technologies and has also been a quick learner.",
    author: "Sobnesh Nallasamy Komaraswamy",
    role: "Associate Principal - Software Engineering at LTI Mindtree",
    avatar: "/avatars/sobnesh.jpg",
  },
  {
    quote:
      "Had an opportunity to work with Deepshika during my work @ Mindtree. She is technically strong and being a fast learner, her contribution was profound. She is a valuable asset to any company she joins!",
    author: "Vikash Gupta",
    role: "Software Engineer at LTI Mindtree",
    avatar: "/avatars/vikash.jpg",
  },
  {
    quote:
      "Deepshika is very dedicated and smart working person. She has got many appreciations from the leadership. Apart from work, she participated in extra curricular activities. Very creative and dedicated resource.",
    author: "Vaishali Manoharan",
    role: "Senior Software Engineer at LTI Mindtree",
    avatar: "/avatars/vaishali.jpg",
  },
  {
    quote:
      "Deepshika is one of the best among all the people I have ever worked with. She is hardworking, intelligent, energetic, broad minded and forward thinking individual. She is a trusted colleague.",
    author: "Siba Shankar Sahu",
    role: "Software Engineer at LTI Mindtree",
    avatar: "/avatars/siba.jpg",
  },
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  const previous = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            What People Say
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Kind words from
            <span className="font-serif italic font-normal text-white">
              {" "}
              amazing people.
            </span>
          </h2>
        </div>
        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonials */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center ">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                "{testimonials[activeIndex].quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].author}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <div className="font-semibold">
                    {testimonials[activeIndex].author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIndex].role}
                  </div>
                </div>
              </div>
            </div>
            {/* Testimonial Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
              >
                <ChevronLeft />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? "w-8 bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}
                    onClick={() => setActiveIndex(idx)}
                  />
                ))}
              </div>
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={next}
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
