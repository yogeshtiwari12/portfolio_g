import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Linkedin,
  Mail,
  Send,
  Menu,
  ExternalLink,
  Code,
  Palette,
  Layout,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import img from "../components/123.jpg";
import img2 from "../components/23.png";
import img3 from "../components/34.png";

import resumeUrl from "../components/45.pdf";

export default function Portfolio() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="min-h-screen w-full bg-background flex flex-col items-center">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container max-w-6xl mx-auto px-4 flex h-16 items-center justify-between">
          <Link
            to="/"
            className="font-bold text-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text"
          >
            Gopal Gautam
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              to="#skills"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Skills
            </Link>
            <Link
              to="#projects"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </Link>
            <Link
              to="#platforms"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Platforms
            </Link>
            <Link
              to="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            {/* ✅ Corrected: Use <a> for external links like PDFs */}
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="hidden md:flex">
                <ExternalLink className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </a>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>
   
  

      <main className="w-full flex flex-col items-center    ">
        {/* Hero Section */}
        <section className="py-10 w-full bg-gradient-to-r from-purple-50 to-indigo-50">
          <div className="container max-w-6xl mx-auto px-2">
            <motion.div
              className="flex flex-col md:flex-row items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="md:w-3/5 space-y-6 text-left">
                <div className="space-y-2">
                  <motion.p
                    className="text-lg text-indigo-600 font-medium"
                    {...fadeInUp}
                  >
                    Hello, I am a
                  </motion.p>
                  <motion.h1
                    className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text"
                    {...fadeInUp}
                  >
                    UI UX Designer
                  </motion.h1>
                  <motion.div
                    className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 my-4"
                    {...fadeInUp}
                  />
                  <motion.p
                    className="text-xl text-gray-700 max-w-2xl"
                    {...fadeInUp}
                  >
                    A passionate UI/UX designer with a keen eye for aesthetics
                    and usability. Specializing in creating intuitive and
                    visually engaging digital experiences, with a strong
                    foundation in user-centered design principles.
                  </motion.p>
                </div>
                <motion.div className="flex gap-4 mt-8" {...fadeInUp}>
                  <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white">
                    View Projects
                  </Button>
                  <Button
                    variant="outline"
                    className="border-purple-200 hover:border-purple-300"
                  >
                    Contact Me
                  </Button>
                </motion.div>
                <motion.div className="flex gap-4 mt-4" {...fadeInUp}>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-white shadow-sm hover:bg-gray-100"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-white shadow-sm hover:bg-gray-100"
                  >
                    <Mail className="h-5 w-5" />
                  </Button>
                </motion.div>
              </div>
              <motion.div
                className="md:w-2/5 mt-10 md:mt-0 flex justify-center md:justify-end"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full blur-3xl opacity-20"
                    animate={{
                      background: [
                        "linear-gradient(to right, rgba(124, 58, 237, 0.2), rgba(99, 102, 241, 0.2))",
                        "linear-gradient(to right, rgba(99, 102, 241, 0.2), rgba(124, 58, 237, 0.2))",
                        "linear-gradient(to right, rgba(124, 58, 237, 0.2), rgba(99, 102, 241, 0.2))",
                      ],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  ></div>
                  <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                    <img
                      src={img}
                      alt="Gopal Gautam"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 w-full bg-white">
          <div className="container max-w-6xl mx-auto px-4 space-y-6 text-center">
            <motion.div
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
                Design Skills
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto my-4"></div>
              <p className="text-gray-700 mt-2">
                Tools & Technologies I work with
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <motion.div
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="h-16 w-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Palette className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">UI Design</h3>
                <p className="text-gray-600">
                  Creating beautiful and intuitive interfaces that users love to
                  interact with.
                </p>
              </motion.div>

              <motion.div
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="h-16 w-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Layout className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">UX Design</h3>
                <p className="text-gray-600">
                  Crafting seamless user experiences through research and
                  testing.
                </p>
              </motion.div>

              <motion.div
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="h-16 w-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Code className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Prototyping</h3>
                <p className="text-gray-600">
                  Building interactive prototypes to validate design decisions.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 gap-8 mt-12 max-w-3xl mx-auto">
              <Card className="border-none shadow-lg bg-white">
                <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-t-lg">
                  <CardTitle>Design Tools</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>Figma</span>
                      <span className="text-sm font-medium">95%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-600 to-indigo-600"
                        initial={{ width: 0 }}
                        whileInView={{ width: "95%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        whileHover={{ scale: 1.02 }}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>Adobe XD</span>
                      <span className="text-sm font-medium">85%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-600 to-indigo-600"
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        whileHover={{ scale: 1.02 }}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>Sketch</span>
                      <span className="text-sm font-medium">80%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-600 to-indigo-600"
                        initial={{ width: 0 }}
                        whileInView={{ width: "80%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        whileHover={{ scale: 1.02 }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="py-20 w-full bg-gradient-to-r from-purple-50 to-indigo-50"
        >
          <div className="container max-w-6xl mx-auto px-4 space-y-6">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
                Featured Projects
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto my-4"></div>
              <p className="text-gray-700 mt-2">Some of my recent work</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* TinDog App */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="h-48 bg-muted relative group">
                    <img
                      src={img2}
                      alt="TinDog App"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-indigo-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        variant="outline"
                        className="text-white border-white hover:bg-white hover:text-purple-600"
                        onClick={() =>
                          window.open(
                            "https://www.figma.com/proto/0Kx2z00coaEzTfh86lPtXy/Fashion-store-landings?node-id=1-2&t=N1M2AI31XUygp3ic-1",
                            "_blank"
                          )
                        }
                      >
                        View Project
                      </Button>
                    </div>
                  </div>
                  <CardHeader className="bg-white">
                    <CardTitle className="text-purple-700">
                      True Venice Tradition
                    </CardTitle>
                    <CardDescription className="text-purple-600">
                      Figma, Sketch
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="bg-white">
                    <p className="text-gray-700">
                      The vehicle is pure, flexible, and has no essential
                      elements; it is as simple as possible. The structure
                      adapts well, aligning with the arc, and is arranged in
                      sections. The movement is steady, maintaining balance, and
                      allowing smooth transitions.{" "}
                    </p>
                    <div className="flex gap-2 mt-4 flex-wrap">
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                        Figma
                      </span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                        Wireframing
                      </span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                        UI/UX
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* TinDog Landing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="h-48 bg-muted relative group">
                    <img
                      src={img3}
                      alt="TinDog Landing"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-indigo-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        variant="outline"
                        className="text-white border-white hover:bg-white hover:text-purple-600"
                        onClick={() =>
                          window.open(
                            "https://www.figma.com/design/PraM2n17bvzw9Cj5Y234pt/Parallax-Effect?node-id=0-1&p=f",
                            "_blank"
                          )
                        }
                      >
                        View Project
                      </Button>
                    </div>
                  </div>
                  <CardHeader className="bg-white">
                    <CardTitle className="text-purple-700">
                      Skye Project Design
                    </CardTitle>
                    <CardDescription className="text-purple-600">
                      Figma, Adobe XD
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="bg-white">
                    <p className="text-gray-700">
                      A modern and responsive landing page for Ticket featuring
                      testimonials, pricing plans, and special coupons and
                      modern and responsive landing page for Ticket featuring
                      testimonials, pricing plans, and special coupons with
                      special discount offers.
                    </p>
                    <div className="flex gap-2 mt-4 flex-wrap">
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                        Adobe XD
                      </span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                        Prototyping
                      </span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                        UI Design
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* TinDog Admin */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="h-48 bg-muted relative group">
                    <img
                      src="/placeholder.svg?height=192&width=384"
                      alt="TinDog Admin"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-indigo-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        variant="outline"
                        className="text-white border-white hover:bg-white hover:text-purple-600"
                        onClick={() =>
                          window.open(
                            "https://www.figma.com/proto/H8kII9TEDGjjuZl48Er2Ly/Untitled?node-id=16-90&starting-point-node-id=1%3A3&t=oDy9yQJ7zNHfZ82e-1",
                            "_blank"
                          )
                        }
                      >
                        View Project
                      </Button>
                    </div>
                  </div>
                  <CardHeader className="bg-white">
                    <CardTitle className="text-purple-700">
                      TinDog Admin Dashboard
                    </CardTitle>
                    <CardDescription className="text-purple-600">
                      Sketch, Figma
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="bg-white">
                    <p className="text-gray-700">
                      An intuitive admin dashboard for managing user profiles,
                      matches, and analytics for the TinDog platform.
                    </p>
                    <div className="flex gap-2 mt-4 flex-wrap">
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                        Sketch
                      </span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                        Figma
                      </span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                        UI Components
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Contact Form Section */}
        <section id="contact" className="py-20 w-full bg-white">
          <div className="container max-w-6xl mx-auto px-4 space-y-6">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
                Get in Touch
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto my-4"></div>
              <p className="text-gray-700 mt-2">
                Have a question or want to work together?
              </p>
            </motion.div>

            <motion.div
              className="max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="border-none shadow-lg relative before:absolute before:inset-0 before:rounded-lg before:p-[2px] before:bg-gradient-to-r before:from-purple-600 before:to-indigo-600 before:-z-10">
                <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-t-lg">
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription className="text-purple-100">
                    Fill out the form below and I'll get back to you as soon as
                    possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="bg-white pt-6">
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name" className="text-gray-700">
                          First Name
                        </Label>
                        <Input
                          id="first-name"
                          placeholder="John"
                          className="border-purple-200 focus-visible:ring-purple-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name" className="text-gray-700">
                          Last Name
                        </Label>
                        <Input
                          id="last-name"
                          placeholder="Doe"
                          className="border-purple-200 focus-visible:ring-purple-500"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="border-purple-200 focus-visible:ring-purple-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-700">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Your message here..."
                        className="min-h-[120px] border-purple-200 focus-visible:ring-purple-500"
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t w-full bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Gopal Gautam. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-600 hover:text-purple-600 hover:bg-purple-50"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-600 hover:text-purple-600 hover:bg-purple-50"
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
