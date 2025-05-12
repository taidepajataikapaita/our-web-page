import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarDays, Clock, MapPin, Users } from 'lucide-react';

interface Workshop {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  capacity: number;
  image: string;
  price: number;
}

const Workshops = () => {
  const { t } = useTranslation();

  // Mock data for workshops
  const workshops: Workshop[] = [
    {
      id: '1',
      title: 'T-shirt Painting Workshop',
      description: 'Learn how to create unique designs and paint them onto t-shirts. All materials provided.',
      date: '2023-08-15',
      time: '14:00 - 17:00',
      location: 'Art Studio, Helsinki',
      capacity: 12,
      image: '/workshop-1.jpg',
      price: 65
    },
    {
      id: '2',
      title: 'Creative Expression Through Fabric',
      description: 'Explore your creativity by expressing your ideas through fabric painting and design.',
      date: '2023-08-22',
      time: '15:00 - 18:00',
      location: 'Cultural Center, Espoo',
      capacity: 10,
      image: '/workshop-2.jpg',
      price: 70
    },
    {
      id: '3',
      title: 'Advanced T-shirt Design Techniques',
      description: 'For experienced artists who want to take their t-shirt design skills to the next level.',
      date: '2023-09-05',
      time: '13:00 - 17:00',
      location: 'Art Studio, Helsinki',
      capacity: 8,
      image: '/workshop-3.jpg',
      price: 85
    },
    {
      id: '4',
      title: 'Family T-shirt Design Day',
      description: 'A fun workshop for the whole family to design and create t-shirts together.',
      date: '2023-09-12',
      time: '10:00 - 13:00',
      location: 'Community Hall, Vantaa',
      capacity: 20,
      image: '/workshop-4.jpg',
      price: 55
    }
  ];

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#FFB6D2] py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold text-[#0074D9] mb-4">
                Creative T-shirt Workshops
              </h1>
              <p className="text-[#6E7B8B] text-lg mb-6">
                Join our hands-on workshops and learn how to create your own unique t-shirt designs.
                Perfect for beginners and experienced artists alike.
              </p>
              <Button className="bg-[#FF5CBF] text-white hover:bg-white hover:text-[#FF5CBF] border border-[#FF5CBF]">
                Book a Workshop
              </Button>
            </div>
            <div className="w-full md:w-1/2">
              <img 
                src="/workshop-hero.jpg" 
                alt="T-shirt workshop" 
                className="rounded-lg shadow-lg w-full max-h-80 object-cover" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Workshops */}
      <div className="container mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold text-[#0074D9] mb-2 text-center">Upcoming Workshops</h2>
        <p className="text-[#6E7B8B] text-center max-w-2xl mx-auto mb-12">
          Explore our schedule of upcoming workshops and secure your spot today. 
          All materials and equipment are provided.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {workshops.map(workshop => (
            <Card key={workshop.id} className="overflow-hidden border-[#FFB6D2] shadow-lg">
              <div className="relative h-60">
                <img 
                  src={workshop.image}
                  alt={workshop.title}
                  className="absolute w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-[#FF5CBF] text-white px-4 py-2 rounded-tr-lg">
                  €{workshop.price}
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-[#0074D9] text-xl">{workshop.title}</CardTitle>
                <CardDescription className="text-[#6E7B8B]">{workshop.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 pt-0">
                <div className="flex items-center text-[#6E7B8B]">
                  <CalendarDays className="mr-2 h-4 w-4 text-[#FF5CBF]" />
                  <span>{formatDate(workshop.date)}</span>
                </div>
                <div className="flex items-center text-[#6E7B8B]">
                  <Clock className="mr-2 h-4 w-4 text-[#FF5CBF]" />
                  <span>{workshop.time}</span>
                </div>
                <div className="flex items-center text-[#6E7B8B]">
                  <MapPin className="mr-2 h-4 w-4 text-[#FF5CBF]" />
                  <span>{workshop.location}</span>
                </div>
                <div className="flex items-center text-[#6E7B8B]">
                  <Users className="mr-2 h-4 w-4 text-[#FF5CBF]" />
                  <span>Capacity: {workshop.capacity} people</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#0074D9] hover:bg-[#5A9BD4]">
                  Register Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Workshop Info */}
      <div className="bg-[#FFB6D2] py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-bold text-[#0074D9] mb-4">What to Expect</h2>
                <div className="space-y-4 text-[#6E7B8B]">
                  <p>
                    Our workshops are designed to be accessible for all skill levels. Whether you're a complete
                    beginner or an experienced artist looking to expand your skills, our instructors will guide
                    you through the process.
                  </p>
                  <p>
                    Each participant will receive a plain t-shirt, paints, brushes, and all necessary materials.
                    By the end of the workshop, you'll take home your own unique creation that you can wear proudly.
                  </p>
                  <p>
                    Workshops are limited to small groups to ensure each participant receives individual attention
                    and guidance from our experienced instructors.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-bold text-[#0074D9] mb-4">FAQ</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-[#FF5CBF]">Do I need any prior experience?</h3>
                    <p className="text-[#6E7B8B]">No prior experience is needed. Our workshops are designed for all skill levels.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#FF5CBF]">What should I wear?</h3>
                    <p className="text-[#6E7B8B]">We recommend wearing clothes that you don't mind getting paint on, though aprons will be provided.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#FF5CBF]">Can I bring my own t-shirt?</h3>
                    <p className="text-[#6E7B8B]">Yes, you're welcome to bring your own 100% cotton t-shirt if you prefer.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#FF5CBF]">How do I register?</h3>
                    <p className="text-[#6E7B8B]">Click the "Register Now" button on any workshop and follow the instructions to secure your spot.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workshops;