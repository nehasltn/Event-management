import { Navbar } from "@/components/Navbar";
import { EventCard } from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";
import heroImage from "@/assets/hero-events.jpg";

// Mock data - will be replaced with actual data from backend
const mockEvents = [
  {
    id: "1",
    title: "Tech Innovation Summit 2025",
    description: "Join industry leaders for insights on emerging technologies and digital transformation strategies.",
    date: "March 15, 2025",
    location: "San Francisco Convention Center",
    attendees: 247,
    category: "Technology",
    imageUrl: heroImage,
  },
  {
    id: "2",
    title: "Digital Marketing Masterclass",
    description: "Learn advanced strategies for social media, SEO, and content marketing from industry experts.",
    date: "March 22, 2025",
    location: "New York Business Center",
    attendees: 156,
    category: "Marketing",
  },
  {
    id: "3",
    title: "Annual Leadership Conference",
    description: "Network with executives and develop essential leadership skills for modern businesses.",
    date: "April 5, 2025",
    location: "Chicago Grand Hotel",
    attendees: 312,
    category: "Business",
  },
  {
    id: "4",
    title: "Product Design Workshop",
    description: "Hands-on workshop covering UX/UI design principles and prototyping best practices.",
    date: "April 12, 2025",
    location: "Austin Design Hub",
    attendees: 89,
    category: "Design",
  },
  {
    id: "5",
    title: "Startup Pitch Competition",
    description: "Watch innovative startups pitch to investors and compete for funding opportunities.",
    date: "April 18, 2025",
    location: "Seattle Innovation Lab",
    attendees: 203,
    category: "Entrepreneurship",
  },
  {
    id: "6",
    title: "Cloud Computing Symposium",
    description: "Explore the latest in cloud infrastructure, security, and scalable architecture solutions.",
    date: "April 25, 2025",
    location: "Boston Tech Campus",
    attendees: 178,
    category: "Technology",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImage} alt="Events" className="w-full h-full object-cover" />
        </div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Discover & Manage Professional Events
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Connect with industry leaders, expand your network, and grow your career through curated professional events.
            </p>
            <div className="flex gap-4">
              <Button size="lg" variant="secondary">
                Browse Events
              </Button>
              <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                Create Event
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search events by name, location, or keyword..." 
                className="pl-10 h-11"
              />
            </div>
            <div className="flex gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px] h-11">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="entrepreneurship">Entrepreneurship</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="upcoming">
                <SelectTrigger className="w-[180px] h-11">
                  <SelectValue placeholder="Date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="upcoming">Upcoming</SelectItem>
                  <SelectItem value="this-week">This Week</SelectItem>
                  <SelectItem value="this-month">This Month</SelectItem>
                  <SelectItem value="past">Past Events</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Upcoming Events</h2>
          <p className="text-muted-foreground">
            Discover professional events tailored to your interests
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </section>

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

export default Index;
