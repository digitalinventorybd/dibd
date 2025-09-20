import { motion } from "framer-motion";
import logo from "../../../assets/digitalinventorybd.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Search,
  Target,
  Mail,
  Users,
  Phone,
  User,
  Building,
  MessageSquare,
  ChevronRight,
  Star,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState("PPC Advertising");
  //   const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const services = [
    {
      icon: Code,
      title: "Web Design",
      description: "Create a brand and communicate your value.",
    },
    {
      icon: Search,
      title: "SEO",
      description:
        "Find new clients organically and grow a foundation for tomorrow.",
    },
    {
      icon: Target,
      title: "PPC",
      description: "Put your business in front of the right people today.",
    },
    {
      icon: Mail,
      title: "Email & SMS",
      description: "Get more out of your current website visitors.",
    },
    {
      icon: Users,
      title: "Social Media",
      description: "Increase awareness by engaging with your audience.",
    },
  ];

  const testimonials = [
    {
      name: "Brandon Browne",
      company: "Mind & Body Health Center",
      image: "/professional-headshot.png",
      rating: 5,
      text: "Our phones ring off the hook! I very much enjoy working with Digital Inventory BD! Dylan has been great managing our PPC. Our phones ring off the hook!",
    },
    {
      name: "Joe Grace",
      company: "Ancestral Supplements",
      image: "/professional-headshot.png",
      rating: 5,
      text: "Its a real game-changer working with Digital Inventory BD. From email marketing and Conversion Rate Optimization, the whole team operates and produces results at a higher level.",
    },
    {
      name: "Don Bruhnke",
      company: "Chicago Watermark",
      image: "/professional-headshot.png",
      rating: 5,
      text: 'Lowered my click costs dramatically. They are very "hands on" with my account. Easy to reach. Intelligent. Lowered my "click" costs dramatically.',
    },
  ];

  const results = [
    {
      title: "Intra Home Systems",
      image: "/website-mockup-home-systems.jpg",
      metrics: [
        { value: "532%", label: "Increase in total site traffic" },
        { value: "510%", label: "Increase in referral traffic" },
      ],
    },
    {
      title: "Air Duct Brothers",
      image: "/website-mockup-air-duct.jpg",
      metrics: [
        { value: "375%", label: "Increase in leads" },
        { value: "244%", label: "Increase in organic search traffic" },
      ],
    },
    {
      title: "Velocity Moving",
      image: "/website-mockup-moving-company.jpg",
      metrics: [
        { value: "652%", label: "Increase in total site traffic" },
        { value: "28%", label: "Increase in average time on site" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-red-600 py-2 text-center text-sm font-medium"
      >
        Join Digital Inventory BD x Shopify in NYC on 9/30!
      </motion.header>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-black border-b border-gray-800 px-4 py-4"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
  <div className="flex items-center space-x-2">
    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center overflow-hidden">
      <img
        src={logo}
        alt="Digital Inventory BD"
        className="w-full h-full object-cover"
      />
    </div>
    <span className="text-xl font-bold">Digital Inventory BD</span>
  </div>


          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-red-500 transition-colors">
              Services
            </a>
            <a href="#" className="hover:text-red-500 transition-colors">
              Our Work
            </a>
            <a href="#" className="hover:text-red-500 transition-colors">
              Company
            </a>
            <a href="#" className="hover:text-red-500 transition-colors">
              Contact
            </a>
            <a href="#" className="text-red-500 font-semibold">
              201-870-6000
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="text-center lg:text-left"
            >
              <motion.h1
                variants={fadeInUp}
                className="text-5xl lg:text-7xl font-bold mb-6 text-balance"
              >
                Bangladesh Best
                <br />
                <span className="text-red-500">Digital Marketing Agency</span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-xl mb-8 text-gray-300"
              >
                We are passionate about Facebook
              </motion.p>

              {/* Contact Form */}
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
              >
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Full Name"
                    className="pl-10 bg-black/50 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Email Address"
                    className="pl-10 bg-black/50 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Phone Number"
                    className="pl-10 bg-black/50 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
                  Get Started
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:block"
            >
              <img
                src="https://www.matebiz.com/wp-content/uploads/digital-marketing-agency-2.jpg"
                alt="Digital Inventory BD Office"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>

          {/* Partner Logos */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60"
          >
            {[
              "Inc 5000",
              "Google Partner",
              "Microsoft Partner",
              "BBB A+",
              "Meta Partner",
              "Amazon Ads",
            ].map((partner) => (
              <div
                key={partner}
                className="bg-gray-800 px-4 py-2 rounded text-sm"
              >
                {partner}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold text-black mb-6 text-balance">
                The team you need to succeed
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Fueled by passion and a commitment to our clients, our team of
                over 100 digital experts drives performance for small businesses
                and Fortune 500 companies alike.
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                Discover Digital Inventory BD
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://www.spinutech.com/Content/cms/images/blog/Benefits-of-a-Digital-Marketing-Agency.jpg"
                alt="Digital Inventory BD Team"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">
              Results-driven Marketing
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-5 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="text-center group"
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-700 transition-colors">
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">
              Our clients love working with us
            </h2>
            <p className="text-gray-400 mb-8">
              Filter by service or attribute to see what's important to you:
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                "PPC Advertising",
                "Organic SEO",
                "Website Design",
                "Best Agency",
                "Very Responsive",
                "Amazing Results",
                "Great Value",
              ].map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  className={
                    activeFilter === filter
                      ? "bg-red-600 hover:bg-red-700"
                      : "border-gray-600 text-gray-300 hover:bg-gray-800"
                  }
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {testimonial.company}
                      </p>
                    </div>
                    <div className="ml-auto flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {testimonial.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-black mb-8">
              Remarkable Results
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                "Home Services",
                "Medical",
                "Legal",
                "Automotive",
                "B2B",
                "Retail",
                "Industrial",
                "Small Business",
              ].map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  className="border-gray-400 text-gray-700 hover:bg-gray-200 bg-transparent"
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            {results.map((result, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-white shadow-lg">
                  <CardContent className="p-0">
                    <img
                      src={result.image || "/placeholder.svg"}
                      alt={result.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-black mb-4">
                        {result.title}
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {result.metrics.map((metric, i) => (
                          <div key={i} className="text-center">
                            <div className="text-3xl font-bold text-red-600 mb-1">
                              {metric.value}
                            </div>
                            <div className="text-sm text-gray-600">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
              Home Services Marketing
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://aviaanaccounting.com/wp-content/uploads/2025/02/B2B-Digital-Marketing-Agency-scaled-1.jpeg"
                alt="Digital Inventory BD Office Meeting"
                className="rounded-lg shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  Digital Inventory BD was founded by brothers Alex and Michael
                  Melen, who grew up with a passion for all things digital. With
                  an innovative vision and a lot of hard work, Digital Inventory
                  BD quickly became one of America's fastest growing companies.
                </p>
                <p>
                  Our relentless focus on our clients has led us to over 1,000
                  5-star reviews since our inception in 2011. When Dun &
                  Bradstreet asked "How satisfied do you feel about the quality
                  of service?", we scored a phenomenal 97%. We keep our clients
                  happy by delivering results that exceed their expectations.
                </p>
                <p>
                  Our headquarters are located in Paramus, New Jersey, serving
                  numerous clients worldwide. Come join our growing Digital
                  Inventory BD family!
                </p>
              </div>
            </motion.div>
          </div>

          {/* Media Logos */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 flex flex-wrap justify-center items-center gap-12 opacity-60"
          >
            {["Forbes", "Bloomberg", "Inc.", "NPR", "BusinessWeek"].map(
              (media) => (
                <div key={media} className="text-2xl font-bold text-gray-500">
                  {media}
                </div>
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-black mb-6">
                    Get Started
                  </h3>
                  <div className="space-y-4">
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input placeholder="Full Name*" className="pl-10" />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input placeholder="Email Address*" className="pl-10" />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input placeholder="Phone Number*" className="pl-10" />
                    </div>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input placeholder="Company" className="pl-10" />
                    </div>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input
                        placeholder="Services you are interested in*"
                        className="pl-10"
                      />
                    </div>
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-3">
                      Submit
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Ready to speak with a marketing expert?
                </h3>
                <p className="text-xl mb-6">
                  Give us a ring{" "}
                  <span className="text-red-500 font-bold">201-870-6000</span>
                </p>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span>Leading Digital Marketing Agency</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span>900+ Websites Launched</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span>$100M+ Client Revenue Generated</span>
                  </div>
                </div>
              </div>

              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">G</span>
                    </div>
                    <div>
                      <div className="text-yellow-400 text-sm">
                        ★★★★★ Verified Reviews
                      </div>
                      <p className="text-sm text-gray-400">
                        "100% satisfied with Digital Inventory BD customer
                        service and SEO management!"
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Digital Marketing Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-red-500">
                    Web Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500">
                    PPC Advertising
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500">
                    Organic SEO
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500">
                    Email & SMS Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500">
                    Social Media Marketing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-red-500">
                    About Digital Inventory BD
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500">
                    Meet The Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-red-500">
                    Thought Leadership
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500">
                    Our Work
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500">
                    Partners
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500">
                    Industries We Serve
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Recent Blog Posts</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>
                  <div className="text-red-500 text-xs">August 30, 2025</div>
                  <a href="#" className="hover:text-white">
                    What the Yahoo Email SMS Sunset Means for Brands
                  </a>
                </li>
                <li>
                  <div className="text-red-500 text-xs">August 28, 2025</div>
                  <a href="#" className="hover:text-white">
                    Top Tips To Perform Local SEO Keyword Research
                  </a>
                </li>
                <li>
                  <div className="text-red-500 text-xs">August 26, 2025</div>
                  <a href="#" className="hover:text-white">
                    The Essential Guide To PPC For Plastic Surgeons
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                  <img
        src={logo}
        alt="Digital Inventory BD"
        className="w-full h-full object-cover"
      />
                </div>
                <span className="text-xl font-bold">Digital Inventory BD</span>
              </div>
              <div className="flex space-x-4">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-red-500 cursor-pointer" />
                <Twitter className="h-5 w-5 text-gray-400 hover:text-red-500 cursor-pointer" />
                <Instagram className="h-5 w-5 text-gray-400 hover:text-red-500 cursor-pointer" />
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-red-500 cursor-pointer" />
                <Youtube className="h-5 w-5 text-gray-400 hover:text-red-500 cursor-pointer" />
              </div>
            </div>
            <div className="text-gray-400 text-sm">
              Privacy Policy © 2011-2025 All Rights Reserved.
            </div>
          </div>

          {/* Partner Badges */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 opacity-60">
            {[
              "Inc 5000",
              "Google Partner",
              "Microsoft Partner",
              "Meta Partner",
              "HubSpot",
              "BBB A+",
              "Amazon Ads",
            ].map((partner) => (
              <div
                key={partner}
                className="bg-gray-800 px-3 py-2 rounded text-xs"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
