import { Navbar } from "@/components/Navbar";
import { EventCard } from "@/components/EventCard";
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
  {
    id: "7",
    title: "Financial Planning Seminar",
    description: "Expert insights on investment strategies, retirement planning, and wealth management.",
    date: "May 3, 2025",
    location: "Miami Financial District",
    attendees: 134,
    category: "Finance",
  },
  {
    id: "8",
    title: "Healthcare Innovation Forum",
    description: "Discover breakthrough technologies transforming patient care and medical research.",
    date: "May 10, 2025",
    location: "Houston Medical Center",
    attendees: 198,
    category: "Healthcare",
  },
  {
    id: "9",
    title: "EdTech Conference 2025",
    description: "Explore the future of education technology and digital learning platforms.",
    date: "May 17, 2025",
    location: "Denver Education Hub",
    attendees: 165,
    category: "Education",
  },
];

const Events = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Page Header */}
      <section className="bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Browse All Events
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Find the perfect professional event for your career and interests
            </p>
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
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
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
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {mockEvents.length} events
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

export default Events;
