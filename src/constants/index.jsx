import { BadgeCheck } from "lucide-react";
import { Video } from "lucide-react";
import { Landmark } from "lucide-react";
import { ChartLine } from "lucide-react";
import { PlugZap } from "lucide-react";

import { CalendarDays } from "lucide-react";
import { Users } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <CalendarDays />,
    text: "Events Creation and Management",
    description:
      "Create and manage events effortlessly with customizable settings, scheduling tools, and resource allocation.",
  },
  {
    icon: <Users />,
    text: "Attendee Management",
    description:
      "Handle registrations, track attendance, and manage attendee communications from a centralized dashboard.",
  },
  {
    icon: <BadgeCheck />,
    text: "Check-in & Attendance",
    description:
      "Streamline the check-in process with QR codes and mobile scanning for both in-person and virtual events.",
  },
  {
    icon: <Landmark />,
    text: "Payment Processing",
    description:
      "Secure payment handling for ticket sales with support for multiple payment methods and currencies.",
  },
  {
    icon: <Video />,
    text: "Virtual Connection",
    description:
      "Tools for virtual event hosting and management",
  },
  {
    icon: <ChartLine />,
    text: "Advanced Analytics",
    description:
      "Gain valuable insights into user interactions and behavior with an integrated analytics dashboard.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Demo account",
      "Single event hosting",
      "No virtual hosting",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Limited event hosting (5)",
      "Web Analytics (Basic)",
      "Private Mode",
      "Limited virtual hosting"
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Unlimited virtual hosting",
      "Web Analytics (AI)",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  // { href: "#", text: "Tutorials" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Jobs" },
];
