export interface Employee {
  id: number;
  name: string;
  dept: string;
  project: string;
  rank: number;
  email: string;
  salary: number;
}

export const employees: Employee[] = [
  {
    id: 1,
    name: "Aarav Sharma",
    dept: "Engineering",
    project: "E-Commerce Platform",
    rank: 11,
    email: "aarav.sharma@example.com",
    salary: 85000,
  },
  {
    id: 2,
    name: "Priya Verma",
    dept: "HR",
    project: "Employee Management",
    rank: 12,
    email: "priya.verma@example.com",
    salary: 72000,
  },
  {
    id: 3,
    name: "Rohan Mehta",
    dept: "Engineering",
    project: "Payment Gateway",
    rank: 13,
    email: "rohan.mehta@example.com",
    salary: 110000,
  },
  {
    id: 4,
    name: "Ananya Gupta",
    dept: "Marketing",
    project: "Brand Campaign",
    rank: 14,
    email: "ananya.gupta@example.com",
    salary: 58000,
  },
  {
    id: 5,
    name: "Vikram Singh",
    dept: "Finance",
    project: "Annual Budget",
    rank: 15,
    email: "vikram.singh@example.com",
    salary: 68000,
  },
  {
    id: 6,
    name: "Sneha Kapoor",
    dept: "Engineering",
    project: "Mobile Application",
    rank: 16,
    email: "sneha.kapoor@example.com",
    salary: 78000,
  },
  {
    id: 7,
    name: "Aditya Joshi",
    dept: "DevOps",
    project: "Cloud Migration",
    rank: 17,
    email: "aditya.joshi@example.com",
    salary: 82000,
  },
  {
    id: 8,
    name: "Neha Malhotra",
    dept: "Sales",
    project: "Enterprise Sales",
    rank: 18,
    email: "neha.malhotra@example.com",
    salary: 75000,
  },
  {
    id: 9,
    name: "Karan Patel",
    dept: "Design",
    project: "Mobile Application",
    rank: 19,
    email: "karan.patel@example.com",
    salary: 64000,
  },
];