import { useState } from "react";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import emailjs from "emailjs-com";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0] as string] = error.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});

    // 🔑 Replace with your own EmailJS values
    emailjs
      .send(
        "service_328mlii",     // e.g. service_abcd123
        "template_r0a8arv",    // e.g. template_xyz789
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "MGoaiM218y_lRZB_K"      // e.g. K9sd8dHJwW1
      )
      .then(
        () => {
          toast({
            title: "Message sent!",
            description: "Thank you for reaching out. I'll get back to you soon.",
          });
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          toast({
            title: "Error",
            description: "Failed to send message. Please try again later.",
          });
        }
      );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "gaikwadparth2304@gmail.com", link: "mailto:gaikwadparth2304@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 9834701051", link: "tel:+919834701051" },
    { icon: MapPin, label: "Location", value: "Shirdi, India" },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://www.github.com/parth-gz" },
    { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/parth-gaikwad-c202497" },
    /*{ icon: Twitter, label: "Twitter", url: "https://insertyourlink.com" },*/
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 card-shadow border border-border animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="h-12" />
                {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <Input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="h-12" />
                {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <Textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} className="min-h-[150px] resize-none" />
                {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
              </div>

              <Button type="submit" className="w-full gradient-primary text-white font-semibold h-12 glow-effect">
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-card rounded-xl p-6 card-shadow border border-border hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.link ? (
                        <a href={info.link} className="font-medium hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-card rounded-xl p-6 card-shadow border border-border">
              <h3 className="font-bold text-lg mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors group" aria-label={social.label}>
                    <social.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
