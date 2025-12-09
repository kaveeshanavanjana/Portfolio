import { Github, Linkedin, Mail, FileText, Server, Shield, Code, Terminal, Cpu, Wifi, Database, Palette, Coffee, Image, PenTool, FileCode, Layout, Layers } from 'lucide-react';

export const personalInfo = {
    name: "Kaveesha Navanjana",
    title: "Undergraduate | Networking & Cybersecurity Enthusiast",
    university: "University of Kelaniya – Faculty of Computing and Technology",
    tagline: "Passionate about networking, cybersecurity, and secure digital systems.",
    about: {
        bio: "I am an undergraduate at the University of Kelaniya, deeply passionate about networks and cybersecurity. My journey involves exploring the intricacies of secure infrastructure, IoT systems, and the future of digital connectivity.",
        interests: ["Networking", "Network Security", "Cybersecurity", "IoT Systems", "Secure Infrastructure"]
    },
    contact: {
        email: "kaveeshanavanjana75@gmail.com",
        linkedin: "https://www.linkedin.com/in/kaveesha-navanjana-501539292/",
        github: "https://github.com/kaveeshanavanjana"
    }
};

import netBasicsImg from '../assets/certifications/networking-basics.png';
import introCyberImg from '../assets/certifications/intro-cybersecurity.png';
import indNetImg from '../assets/certifications/industrial-networking.png';
import fortinetAssocImg from '../assets/certifications/fortinet-associate.png';
import nse3Img from '../assets/certifications/nse3-fortigate.png';
import pythonEssentialsImg from '../assets/certifications/python-essentials-1.png';

export const certifications = [
    {
        id: 1,
        title: "Networking Basics",
        issuer: "Cisco Networking Academy",
        date: "Verified",
        image: netBasicsImg,
        link: "https://www.credly.com/badges/0c92920e-2be0-432a-8672-841c24903224/public_url"
    },
    {
        id: 2,
        title: "Introduction to Cybersecurity",
        issuer: "Cisco Networking Academy",
        date: "Verified",
        image: introCyberImg,
        link: "https://www.credly.com/badges/5687b0e5-af17-4351-91f7-f0d84d8a6065/public_url"
    },
    {
        id: 3,
        title: "Industrial Networking Essentials",
        issuer: "Cisco Networking Academy",
        date: "Verified",
        image: indNetImg,
        link: "https://www.credly.com/badges/444e8391-2f17-4475-8e40-d6311050e9da/public_url"
    },
    {
        id: 4,
        title: "Fortinet Certified Associate",
        issuer: "Fortinet",
        date: "Cybersecurity",
        image: fortinetAssocImg,
        link: "https://www.credly.com/badges/c35b17ac-7f92-483f-bf06-1e692ef82383/public_url"
    },
    {
        id: 5,
        title: "NSE 3 FortiGate Operator",
        issuer: "Fortinet",
        date: "Exam v7.6",
        image: nse3Img,
        link: "https://www.credly.com/badges/981ec45a-f6c5-4df9-82b2-895943e756a9/public_url"
    },
    {
        id: 6,
        title: "Python Essentials 1",
        issuer: "Cisco & OpenEDG",
        date: "Verified",
        image: pythonEssentialsImg,
        link: "https://www.credly.com/badges/4dad9341-9a73-4cbe-9d90-b44d25d79094/public_url"
    }
];

import ecoTrak1 from '../assets/projects/ecotrak-1.jpg';
import ecoTrak2 from '../assets/projects/ecotrak-2.jpg';
import ecoTrak3 from '../assets/projects/ecotrak-3.jpg';
import ecoTrakMain from '../assets/projects/ecotrak-main.jpg';
import pythonImg from '../assets/certifications/python-essentials.png';

export const projects = [
    {
        id: 1,
        title: "ecoTrak – Smart Vehicle Emission Monitoring System",
        description: "A real-time vehicle emissions monitoring system designed to promote cleaner air and smarter transportation. This IoT-based system combines real-time gas sensing hardware (MQ-2, MQ-9) with a centralized web dashboard to help vehicle owners and authorities track emissions. Features include live charts, Google authentication, and vehicle history tracking.",
        techStack: ["IoT", "ESP32", "React", "Firebase", "C++", "Gas Sensors"],
        link: "https://github.com/kaveeshanavanjana/eco-Trak-demo",
        demoLink: "https://lnkd.in/gW-ci9ZG",
        image: ecoTrakMain,
        images: [ecoTrakMain, ecoTrak1, ecoTrak2, ecoTrak3],
        details: `
### 🚗💨 Project Launch: ecoTrak – Smart Vehicle Emission Monitoring System 🌱🌍

I'm excited to share a major milestone from our second-year university project – the development and launch of ecoTrak, a real-time vehicle emissions monitoring system designed to promote cleaner air and smarter transportation.

ecoTrak is an IoT-based smart emission monitoring system designed to reduce air pollution caused by vehicle emissions. Built as a second year project, this system combines real-time gas sensing hardware with a centralized web dashboard to help vehicle owners, authorities, and the general public take action toward cleaner air and climate responsibility.

**🌐 Key features of the system:**
- Live dashboard with real-time visual charts for MQ2 (HC) and MQ9 (CO)
- Google and Email/Password Authentication
- Individual vehicle history tracking based on license plates
- Alerts on web dashboard when emissions exceed safe thresholds

**🔧 My role focused on the hardware side of the project:**
- Designed and built the hardware setup with MQ-2 and MQ-9 gas sensors.
- Integrated the sensors with ESP32 Dev V1 for real-time data acquisition.
- Worked on power management and hardware wiring for reliable long-term use.
- Collaborated with the software team to synchronize hardware outputs with the dashboard.

**🤝 Team Members:**
- Kavinda Wickramathilaka (Lead)
- Janith Harshana
- Kaveesha Navanjana (me)
- Gawesh Imantha
- Isala Vineth
        `
    },
    {
        id: 2,
        loading: true
    },
    {
        id: 3,
        loading: true
    },
    {
        id: 4,
        loading: true
    }
];

export const skills = [
    { name: "Networking Fundamentals", icon: Wifi, level: 90 },
    { name: "Network Security", icon: Shield, level: 85 },
    { name: "Linux", icon: Terminal, level: 85 },
    { name: "Python", icon: Code, level: 80 },
    { name: "C", icon: FileCode, level: 75 },
    { name: "Java", icon: Coffee, level: 70 },
    { name: "SQL", icon: Database, level: 75 },
    { name: "HTML", icon: Layout, level: 90 },
    { name: "CSS", icon: Palette, level: 85 },
    { name: "JavaScript", icon: FileCode, level: 80 },
    { name: "Bash Scripting", icon: Terminal, level: 75 },
    { name: "Photoshop", icon: Image, level: 70 },
    { name: "Illustrator", icon: PenTool, level: 65 },
    { name: "Cisco Technologies", icon: Server, level: 80 },
    { name: "IoT & Embedded Systems", icon: Cpu, level: 70 },
];
