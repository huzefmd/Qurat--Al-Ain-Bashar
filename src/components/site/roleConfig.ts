import {
  Palette,
  Dumbbell,
  HandHeart,
  User,
  type LucideIcon,
} from "lucide-react";

export type RoleField = {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "url" | "number" | "select" | "textarea";
  required?: boolean;
  options?: string[];
};

export type Role = {
  key: string;
  label: string;
  Icon: LucideIcon;
  to: string;
  blurb: string;
  fields: RoleField[];
};

export const roles: Record<string, Role> = {
  artist: {
    key: "artist",
    label: "Artist",
    Icon: Palette,
    to: "/get-involved/artist",
    blurb: "Use your creativity, art, or performance to inspire and educate communities.",
    fields: [
      { name: "name", label: "Full Name", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "phone", label: "Phone", type: "tel", required: false },
      {
        name: "discipline",
        label: "Art Discipline",
        type: "text",
        required: true,
      },
      { name: "experience", label: "Years of Experience", type: "number", required: false },
      { name: "portfolio", label: "Portfolio / Website Link", type: "url", required: false },
      { name: "message", label: "Why do you want to join?", type: "textarea", required: true },
    ],
  },
  athlete: {
    key: "athlete",
    label: "Athlete",
    Icon: Dumbbell,
    to: "/get-involved/athlete",
    blurb: "Lead through discipline, sport, and physical empowerment.",
    fields: [
      { name: "name", label: "Full Name", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "phone", label: "Phone", type: "tel", required: false },
      { name: "sport", label: "Primary Sport", type: "text", required: true },
      { name: "experience", label: "Years of Practice", type: "number", required: false },
      {
        name: "coaching",
        label: "Open to coaching or training sessions?",
        type: "select",
        required: true,
        options: ["Yes", "No", "Occasionally"],
      },
      { name: "message", label: "What do you hope to contribute?", type: "textarea", required: true },
    ],
  },
  altruist: {
    key: "altruist",
    label: "Altruist",
    Icon: HandHeart,
    to: "/get-involved/altruist",
    blurb: "Serve communities through expertise, mentorship, and humanitarian work.",
    fields: [
      { name: "name", label: "Full Name", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "phone", label: "Phone", type: "tel", required: false },
      { name: "area", label: "Area of Service", type: "text", required: true },
      {
        name: "mode",
        label: "How would you like to contribute?",
        type: "select",
        required: true,
        options: ["Volunteering", "Mentoring", "Pro Bono Services", "Donations", "Other"],
      },
      { name: "availability", label: "Availability (hours per week)", type: "text", required: false },
      { name: "message", label: "Tell us about your experience", type: "textarea", required: true },
    ],
  },
  general: {
    key: "general",
    label: "General Application",
    Icon: User,
    to: "/get-involved/apply",
    blurb: "Join us in any capacity where your skills can make a difference.",
    fields: [
      { name: "name", label: "Full Name", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "phone", label: "Phone", type: "tel", required: false },
      {
        name: "role",
        label: "Interested Role",
        type: "select",
        required: true,
        options: ["Educator", "Creative Thinker", "Volunteer", "Mentor", "Partner", "Other"],
      },
      { name: "message", label: "How would you like to contribute?", type: "textarea", required: true },
    ],
  },
};

export const primaryRoles: Role[] = [roles.artist, roles.athlete, roles.altruist];
