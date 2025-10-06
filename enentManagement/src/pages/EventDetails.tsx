import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, MapPin, Users, Clock, Mail, User, Building } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import heroImage from "@/assets/hero-events.jpg";

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    dietary: "",
  });

  // Mock event data - will be replaced with actual data from backend
  const event = {
    id: id,
    title: "Tech Innovation Summit 2025",
    description: "Join industry leaders for insights on emerging technologies and digital transformation strategies. This comprehensive summit features keynote speakers from top tech companies, interactive workshops, and networking opportunities with professionals from around the globe.",
    fullDescription: "The Tech Innovation Summit brings together technology leaders, innovators, and entrepreneurs for a full day of inspiration and learning. Attendees will explore the latest trends in AI, cloud computing, cybersecurity, and digital transformation. The event includes panel discussions, hands-on workshops, and exclusive networking sessions.",
    date: "March 15, 2025",
    time: "9:00 AM - 6:00 PM",
    location: "San Francisco Convention Center",
    address: "747 Howard St, San Francisco, CA 94103",
    attendees: 247,
    capacity: 500,
    category: "Technology",
    organizer: "Tech Events Inc.",
    imageUrl: heroImage,
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Mock RSVP submission
    toast.success("RSVP Confirmed!", {
      description: "You will receive a confirmation email shortly.",
    });

    // Clear form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      dietary: "",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Event Header */}
      <section className="relative bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 opacity-30">
          {event.imageUrl && (
            <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
          )}
        </div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-4xl">
            <Badge variant="secondary" className="mb-4">
              {event.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{event.title}</h1>
            <p className="text-xl text-primary-foreground/90">{event.description}</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Event Details */}
            <Card>
              <CardHeader>
                <CardTitle>Event Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-semibold">Date</p>
                      <p className="text-muted-foreground">{event.date}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-semibold">Time</p>
                      <p className="text-muted-foreground">{event.time}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-muted-foreground">{event.location}</p>
                      <p className="text-sm text-muted-foreground">{event.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-semibold">Attendance</p>
                      <p className="text-muted-foreground">
                        {event.attendees} / {event.capacity} registered
                      </p>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="font-semibold text-lg mb-3">About This Event</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {event.fullDescription}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">What's Included</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                      Full-day access to all sessions and workshops
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                      Networking lunch and refreshments
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                      Event materials and swag bag
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                      Access to exclusive networking sessions
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* RSVP Form Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>RSVP for This Event</CardTitle>
                <CardDescription>
                  Register now to secure your spot
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="company"
                        placeholder="Acme Inc."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dietary">Dietary Requirements</Label>
                    <Textarea
                      id="dietary"
                      placeholder="Any allergies or dietary restrictions?"
                      value={formData.dietary}
                      onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                      rows={3}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg" variant="secondary">
                    Confirm RSVP
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    You will receive a confirmation email with event details
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2025 EventHub. Professional Event Management Platform.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EventDetails;
