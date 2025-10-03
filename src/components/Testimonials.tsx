import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Project Manager, Tech Innovations",
      text: "Parth's ability to transform complex requirements into elegant solutions is remarkable. His attention to detail and commitment to quality made our project a huge success.",
    },
    {
      name: "Dr. Rajesh Kumar",
      role: "Research Lead, AI Solutions Lab",
      text: "An exceptional talent with a rare combination of technical prowess and creative thinking. Parth's contributions to our AI research project were invaluable.",
    },
    {
      name: "Emily Chen",
      role: "Senior Developer, WebCraft Studios",
      text: "Working with Parth was a pleasure. His code is clean, his communication is clear, and his enthusiasm for learning is infectious. A true team player!",
    },
    {
      name: "Michael Brown",
      role: "Founder, StartupXYZ",
      text: "Parth delivered beyond our expectations. His innovative approach and problem-solving skills helped us launch our product ahead of schedule.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What People <span className="gradient-text">Say</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-8 md:p-12">
                    <div className="bg-card rounded-2xl p-8 md:p-12 card-shadow border border-border">
                      <Quote className="h-12 w-12 text-primary/20 mb-6" />
                      <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed italic">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-lg">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-lg">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
