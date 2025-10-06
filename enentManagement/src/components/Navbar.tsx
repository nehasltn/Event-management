import { Button } from "@/components/ui/button";
import { Calendar, Plus, Search } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="border-b bg-card shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-lg bg-gradient-hero flex items-center justify-center shadow-md">
              <Calendar className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">EventHub</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/events">
                <Search className="h-4 w-4" />
                Browse Events
              </Link>
            </Button>
            <Button variant="secondary" size="sm" asChild>
              <Link to="/create">
                <Plus className="h-4 w-4" />
                Create Event
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
