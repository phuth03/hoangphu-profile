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
  title: 'Truong Hoang Phu | .NET Software Engineer',
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
        A dedicated and detail-oriented <strong className="text-stone-100">Software Engineer</strong> with practical experience in building full-stack web applications on the <strong className="text-stone-100">.NET Framework</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am proficient in C# and ASP.NET, with a strong understanding of OOP and MVC architecture, ready to apply my skills in a professional environment.
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
  description: `A dedicated and detail-oriented Software Engineer with practical experience in building full-stack web applications on the .NET Framework. Proficient in C# and ASP.NET, with a strong understanding of OOP and MVC architecture. Eager to apply my technical abilities and problem-solving mindset in a professional and structured environment.`,
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
    name: 'Backend Development',
    skills: [
      {
        name: 'C#, ASP.NET, .NET Framework',
        level: 9,
      },
      {
        name: 'OOP, MVC Architecture',
        level: 8,
      },
      {
        name: 'Web API',
        level: 7,
      },
    ],
  },
  {
    name: 'Database Development',
    skills: [
      {
        name: 'MS SQL Server',
        level: 9,
      },
      {
        name: 'MySQL',
        level: 6,
      },
      {
        name: 'Database Design, SQL Querying',
        level: 8,
      },
    ],
  },
  {
    name: 'Frontend Development',
    skills: [
      {
        name: 'HTML5, CSS3, JavaScript',
        level: 8,
      },
      {
        name: 'jQuery, Bootstrap',
        level: 7,
      },
    ],
  },
  {
    name: 'Tools & Version Control',
    skills: [
      {
        name: 'Git, GitHub',
        level: 9,
      },
      {
        name: 'Visual Studio',
        level: 8,
      },
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
    content: <p>Major: Information Systems. GPA: 3.2/4.0. English: TOEIC 580, VSTEP B1.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'April 2025 - June 2025',
    location: 'IT Center, University of Economics and Finance (UEF)',
    title: 'Internship',
    content: (
      <p>
        Collaborated with a development team to support and maintain internal web applications. Gained practical experience in a professional work environment, adhering to coding standards and team processes.
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
    // Mẹo: Bạn có thể xóa phần này hoặc thay thế bằng nhận xét từ đồng nghiệp/giảng viên
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
  ],
};

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out to me via email or connect with me on GitHub.',
  items: [
    {
      type: ContactType.Email,
      text: 'hoangphudev0103@gmail.com',
      href: 'mailto:hoangphudev0103@gmail.com',
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