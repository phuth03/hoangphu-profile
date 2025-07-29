import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import heroImage from '../images/header-background.webp';
// Mẹo: Bạn nên thay thế các ảnh portfolio này bằng ảnh chụp màn hình dự án của bạn
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
// Mẹo: Thay thế ảnh này bằng ảnh đại diện của bạn
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Truong Hoang Phu | Data Analyst',
  description: "My personal resume website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Truong Hoang Phu.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a detail-oriented and analytical <strong className="text-stone-100">Data Analyst</strong> with a strong foundation in Information Systems and a passion for uncovering actionable insights from data.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Proficient in extracting, cleaning, and visualizing data using tools like <strong className="text-stone-100">SQL, Power BI, and Excel</strong>. Eager to support data-driven decision-making.
      </p>
    </>
  ),
  actions: [
    {
      // Mẹo: Đặt file CV của bạn vào thư mục /public/assets/resume.pdf
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  // Mẹo: Thay thế 'profilepic.jpg' bằng file ảnh của bạn trong thư mục /src/images/
  profileImageSrc: profilepic,
  description: `A detail-oriented and analytical recent graduate with a strong foundation in Information Systems and a passion for data analysis. Proficient in extracting, cleaning, and visualizing data using tools like SQL, Power BI, and Excel. I have foundational knowledge of big data technologies including Spark and Hadoop, and I am eager to leverage my technical skills to uncover actionable insights and support data-driven decision-making.`,
  aboutItems: [
    { label: 'Location', text: 'Thu Duc, HCMC', Icon: MapIcon },
    { label: 'Age', text: '22', Icon: CalendarIcon },
    { label: 'Nationality', text: 'Vietnamese', Icon: FlagIcon },
    { label: 'Study', text: 'University of Economics and Finance (UEF)', Icon: AcademicCapIcon },
    { label: 'Employment', text: 'Open to new opportunities', Icon: BuildingOffice2Icon },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Data Visualization',
    skills: [
      { name: 'Power BI', level: 9 },
      { name: 'MS Excel', level: 8 },
      { name: 'Google Sheets', level: 7 },
    ],
  },
  {
    name: 'Database',
    skills: [
      { name: 'MS SQL Server', level: 9 },
      { name: 'Oracle SQL', level: 7 },
      { name: 'SQL Querying', level: 8 },
    ],
  },
  {
    name: 'Big Data',
    skills: [
      { name: 'Apache Spark', level: 6 },
      { name: 'Hadoop', level: 5 },
    ],
  },
  {
    name: 'Programming',
    skills: [
      { name: 'Python', level: 7 },
      { name: 'C#', level: 8 },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Bookstore E-commerce Website',
    description: 'Developed a complete e-commerce platform using C# and ASP.NET MVC, with a SQL Server database and a responsive UI.',
    url: 'https://github.com/nhom-3-kap/BookStoreKAP.git',
    image: porfolioImage1,
  },
  {
    title: 'Bookstore E-commerce Website',
    description: 'Developed a complete e-commerce platform using C# and ASP.NET MVC, with a SQL Server database and a responsive UI.',
    url: 'https://github.com/nhom-3-kap/BookStoreKAP.git',
    image: porfolioImage2,
  },
  {
    title: 'Bookstore E-commerce Website',
    description: 'Developed a complete e-commerce platform using C# and ASP.NET MVC, with a SQL Server database and a responsive UI.',
    url: 'https://github.com/nhom-3-kap/BookStoreKAP.git',
    image: porfolioImage3,
  },
  {
    title: 'Bookstore E-commerce Website',
    description: 'Developed a complete e-commerce platform using C# and ASP.NET MVC, with a SQL Server database and a responsive UI.',
    url: 'https://github.com/nhom-3-kap/BookStoreKAP.git',
    image: porfolioImage4,
  },
  {
    title: 'Bookstore E-commerce Website',
    description: 'Developed a complete e-commerce platform using C# and ASP.NET MVC, with a SQL Server database and a responsive UI.',
    url: 'https://github.com/nhom-3-kap/BookStoreKAP.git',
    image: porfolioImage5,
  },
  {
    title: 'Bookstore E-commerce Website',
    description: 'Developed a complete e-commerce platform using C# and ASP.NET MVC, with a SQL Server database and a responsive UI.',
    url: 'https://github.com/nhom-3-kap/BookStoreKAP.git',
    image: porfolioImage6,
  },
  {
    title: 'Bookstore E-commerce Website',
    description: 'Developed a complete e-commerce platform using C# and ASP.NET MVC, with a SQL Server database and a responsive UI.',
    url: 'https://github.com/nhom-3-kap/BookStoreKAP.git',
    image: porfolioImage7,
  },
  {
    title: 'Bookstore E-commerce Website',
    description: 'Developed a complete e-commerce platform using C# and ASP.NET MVC, with a SQL Server database and a responsive UI.',
    url: 'https://github.com/nhom-3-kap/BookStoreKAP.git',
    image: porfolioImage8,
  },
  {
    title: 'Bookstore E-commerce Website',
    description: 'Developed a complete e-commerce platform using C# and ASP.NET MVC, with a SQL Server database and a responsive UI.',
    url: 'https://github.com/nhom-3-kap/BookStoreKAP.git',
    image: porfolioImage9,
  },
  {
    title: 'Bookstore E-commerce Website',
    description: 'Developed a complete e-commerce platform using C# and ASP.NET MVC, with a SQL Server database and a responsive UI.',
    url: 'https://github.com/nhom-3-kap/BookStoreKAP.git',
    image: porfolioImage10,
  },
  {
    title: 'Bookstore E-commerce Website',
    description: 'Developed a complete e-commerce platform using C# and ASP.NET MVC, with a SQL Server database and a responsive UI.',
    url: 'https://github.com/nhom-3-kap/BookStoreKAP.git',
    image: porfolioImage11,
  },
];

/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    date: '2021 - 2025',
    location: 'University of Economics and Finance (UEF)',
    title: 'Bachelor of Information Technology',
    content: <p>Major: Information Systems. GPA: 3.2/4.0.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Jan 2025 - Jun 2025',
    location: 'E-commerce Website',
    title: 'Data Analyst',
    content: (
      <p>
        Analyzed transactional data using complex SQL queries to identify customer purchasing patterns. Built interactive dashboards in Power BI to visualize key business metrics.
      </p>
    ),
  },
  {
    date: 'Aug 2024 - Oct 2024',
    location: 'Project Management Application',
    title: 'Data Analyst',
    content: (
      <p>
        Collected and analyzed project data to track key performance indicators (KPIs) such as task completion rates and team productivity.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'A former manager',
      text: 'Phu is a diligent employee who always strives to complete assigned tasks well. He has the ability to learn very quickly and apply it well to practical situations.',
      image: 'https://...', // URL of the manager's photo
    },
    {
      name: 'A colleague',
      text: 'Working with Phu is wonderful. He is very enthusiastic in supporting everyone and has a high sense of responsibility.',
      image: 'https://...', // URL of the colleague's photo
    },
  ],
};

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out to me via email or phone.',
  items: [
    {
      type: ContactType.Email,
      text: 'hoangphudev0103@gmail.com',
      href: 'mailto:hoangphudev0103@gmail.com',
    },
    {
      type: ContactType.Phone,
      text: '0376976198',
      href: 'tel:0376976198',
    },
    {
      type: ContactType.Location,
      text: 'Thu Duc District, Ho Chi Minh City',
      href: 'https://www.google.com/maps/place/Th%E1%BB%A7+%C4%90%E1%BB%A9c,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/',
    },
    {
      type: ContactType.Github,
      text: 'phuth03',
      href: 'https://github.com/phuth03',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/phuth03' },
  // Mẹo: Thêm các mạng xã hội khác của bạn ở đây nếu có
  // {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/your-profile/'},
];