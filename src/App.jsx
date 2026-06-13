import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt,
  FaCode, FaDatabase, FaMobileAlt, FaPalette, FaBug, FaServer,
  FaGraduationCap, FaExternalLinkAlt, FaArrowUp, FaBars, FaTimes,
  FaDownload, FaReact, FaJava, FaPython, FaNodeJs, FaGitAlt, FaCss3
} from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiMysql, SiFigma, SiKotlin, SiPhp, SiHtml5 } from 'react-icons/si';

const profile = {
  name: 'Nethma Iddamalgoda',
  title: 'IT Undergraduate | Software Developer | Web Developer | QA Enthusiast',
  email: 'nethiddamalgoda@gmail.com',
  phone: '0701430448',
  location: 'Kandana, Sri Lanka',
  photo: '/profile.png',
  cv: '/Nethma-Iddamalgoda-CV.pdf',
  github: 'https://github.com/DewminiIddamalgoda',
  linkedin: 'https://www.linkedin.com/in/dewmini-iddamalgoda-b292aa374'
};

const navItems = ['Home', 'About', 'Education', 'Skills', 'Projects', 'Resume', 'Contact'];

const skills = [
  { title: 'Programming Languages', icon: <FaCode />, items: ['Java', 'Python', 'JavaScript', 'C', 'C++', 'Kotlin'] },
  { title: 'Web Technologies', icon: <SiHtml5 />, items: ['HTML', 'CSS', 'JSP', 'PHP', 'XML'] },
  { title: 'Version Control', icon: <FaGitAlt />, items: ['Git', 'GitHub'] },
  { title: 'UI / UX Design', icon: <SiFigma />, items: ['Figma', 'Wireframing'] },
  { title: 'Databases', icon: <FaDatabase />, items: ['MySQL', 'MongoDB'] },
  { title: 'Engineering & Testing', icon: <FaBug />, items: ['OOP', 'Data Algorithms', 'Design Patterns', 'TDD', 'Test Case Design', 'Manual Testing'] }
];

const skillIcons = [
  { name: 'Java', icon: <FaJava /> }, { name: 'Python', icon: <FaPython /> },
  { name: 'JavaScript', icon: <SiJavascript /> }, { name: 'React', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> }, { name: 'Kotlin', icon: <SiKotlin /> },
  { name: 'PHP', icon: <SiPhp /> }, { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'MySQL', icon: <SiMysql /> }, { name: 'Figma', icon: <SiFigma /> },
  { name: 'HTML', icon: <SiHtml5 /> }, { name: 'CSS', icon: <FaCss3 /> }
];

const softSkills = [
  ['Active Listening', 'Able to understand ideas, feedback, and project requirements carefully.'],
  ['Creativity', 'Brings fresh ideas to designs, interfaces, and problem solving.'],
  ['Adaptability', 'Comfortable learning new tools, workflows, and technologies.'],
  ['Problem Solving', 'Ability to analyze challenges and find practical solutions.'],
  ['Attention to Detail', 'Focused on accuracy, quality, and clean project outcomes.'],
  ['Teamwork', 'Comfortable working with others in academic and project environments.'],
  ['Communication Skills', 'Able to share ideas clearly and collaborate effectively.'],
  ['Time Management', 'Organizes tasks and deadlines to complete work responsibly.']
];

const projects = [
  {
    title: 'StreamFlix — Online Movies and TV Series Browser',
    type: 'Web',
    description: 'A web application that allows users to browse movies and TV series. It includes user authentication and a watchlist feature.',
    tech: ['Java', 'JSP', 'JavaScript', 'CSS'],
    features: ['User authentication', 'Movie and TV series browsing', 'Watchlist feature', 'Responsive interface']
  },
  {
    title: 'HypeThread — Clothing Brand Web Application',
    type: 'MERN',
    description: 'A MERN stack e-commerce website developed for a customizable T-shirt clothing brand.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    features: ['Product catalog', 'Shopping cart', 'Customizable T-shirt concept', 'E-commerce user interface']
  },
  {
    title: 'LaReLash — Cosmetics Mobile Application Design',
    type: 'UI/UX',
    description: 'A cosmetics shopping mobile app prototype designed using Figma with a focus on responsiveness and user-friendly design.',
    tech: ['Figma', 'UI/UX Design', 'Wireframing'],
    features: ['Mobile app prototype', 'Cosmetics shopping flow', 'Responsive design concept', 'User-friendly interface']
  },
  {
    title: 'HealthCare App — Android Application',
    type: 'Mobile',
    description: 'A health management Android application created using Kotlin and Java for appointment booking and record management.',
    tech: ['Kotlin', 'Java', 'Android Development', 'Functional Testing'],
    features: ['Appointment booking', 'Health record management', 'Mobile app interface', 'Functional testing']
  }
];

const interests = [
  ['Software Development', 'Building reliable and practical software solutions using modern programming languages and development practices.', <FaCode />],
  ['Web Development', 'Creating responsive and user-friendly websites and web applications using modern web technologies.', <FaReact />],
  ['Quality Assurance', 'Interested in test case design, manual testing, functional testing, and improving software quality.', <FaBug />],
  ['UI/UX Design', 'Designing clean, accessible, and user-focused digital interfaces.', <FaPalette />],
  ['Mobile Application Development', 'Developing Android applications using Java and Kotlin.', <FaMobileAlt />],
  ['Database Management', 'Working with relational and NoSQL databases such as MySQL and MongoDB.', <FaDatabase />]
];

const services = [
  ['Frontend Web Development', <FaReact />], ['Backend Development Basics', <FaServer />],
  ['MERN Stack Development', <FaNodeJs />], ['Android App Development', <FaMobileAlt />],
  ['UI/UX Wireframing', <FaPalette />], ['Manual Testing & Test Case Design', <FaBug />],
  ['Database Design & Management', <FaDatabase />]
];

function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <section id={id} className={`section ${className}`}>
      <motion.div className="container" initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.6 }}>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        {title && <h2>{title}</h2>}
        {children}
      </motion.div>
    </section>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const onScroll = () => {
      const current = navItems.findLast((item) => {
        const el = document.getElementById(item.toLowerCase());
        return el && window.scrollY >= el.offsetTop - 140;
      });
      if (current) setActive(current);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="navbar">
      <a className="logo" href="#home">Nethma Iddamalgoda<span>.</span></a>
      <nav className="desktop-nav">
        {navItems.map((item) => <a key={item} className={active === item ? 'active' : ''} href={`#${item.toLowerCase()}`}>{item}</a>)}
      </nav>
      <button className="menu-btn" onClick={() => setOpen(true)} aria-label="Open menu"><FaBars /></button>
      <AnimatePresence>
        {open && (
          <motion.div className="mobile-panel" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', stiffness: 120, damping: 20 }}>
            <button className="menu-close" onClick={() => setOpen(false)} aria-label="Close menu"><FaTimes /></button>
            {navItems.map((item) => <a key={item} onClick={() => setOpen(false)} href={`#${item.toLowerCase()}`}>{item}</a>)}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg one" />
      <div className="hero-bg two" />
      <div className="container hero-grid">
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <p className="hero-kicker">Available for internships, university projects, and junior opportunities</p>
          <h1>{profile.name}</h1>
          <h3>{profile.title}</h3>
          <p className="hero-text">I am a passionate Information Technology undergraduate at SLIIT with a strong foundation in software development, database management, web technologies, UI/UX design, and software testing. I enjoy building practical digital solutions and continuously improving my technical skills.</p>
          <div className="hero-actions">
            <a className="btn primary" href="#projects">View My Projects</a>
            <a className="btn secondary" href={profile.cv} download><FaDownload /> Download CV</a>
            <a className="btn ghost" href="#contact">Contact Me</a>
          </div>
          <div className="contact-strip">
            <span><FaEnvelope /> {profile.email}</span>
            <span><FaMapMarkerAlt /> {profile.location}</span>
          </div>
        </motion.div>
        <motion.div className="profile-card" initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}>
          <div className="profile-image-wrapper">
            <img src={profile.photo} alt={profile.name} className="profile-image" />
          </div>
          <div className="profile-copy">
            <span className="profile-tag">Personal Brand</span>
            <h4>{profile.title}</h4>
            <p>Delivering polished digital experiences with a focus on practical software development, quality assurance, and modern UI design.</p>
            <div className="profile-badges">
              <span>3.52 GPA</span>
              <span>Modern Web</span>
              <span>Quality First</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  const highlights = ['3rd Year IT Undergraduate at SLIIT', 'Current GPA: 3.52', 'Interested in Software Development, QA, Web Development, and UI/UX', 'Passionate about building practical and user-friendly applications'];
  return (
    <Section id="about" eyebrow="About Me" title="Motivated IT undergraduate building practical digital solutions">
      <div className="about-grid">
        <div className="glass-card">
          <p>I am a motivated and passionate undergraduate pursuing a BSc in Information Technology at SLIIT. I have a strong foundation in software development, database management, web technologies, UI/UX design, and quality assurance. I am eager to apply my knowledge and skills in a professional environment while learning new technologies and contributing to real-world software projects.</p>
        </div>
        <div className="highlight-grid">
          {highlights.map((item, index) => <motion.div className="highlight" key={item} whileHover={{ y: -6 }}><span>0{index + 1}</span>{item}</motion.div>)}
        </div>
      </div>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic Background">
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-icon"><FaGraduationCap /></div>
          <div className="timeline-content">
            <span>October 2023 – Present • Malabe</span>
            <h3>SLIIT — BSc in Information Technology</h3>
            <p>Current Status: 3rd Year Undergraduate</p>
            <p>Current GPA: 3.52</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon"><FaGraduationCap /></div>
          <div className="timeline-content">
            <span>January 2013 – January 2022 • Colombo</span>
            <h3>Sirimavo Bandaranaike Vidyalaya</h3>
            <p>Advanced Level — Science Stream</p>
            <p>Ordinary Level — 9As</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Technical Skills & Soft Skills">
      <div className="icon-marquee">
        {skillIcons.map((skill) => <span key={skill.name}>{skill.icon}<small>{skill.name}</small></span>)}
      </div>
      <div className="skills-grid">
        {skills.map((skill) => (
          <motion.div className="skill-card" key={skill.title} whileHover={{ y: -8 }}>
            <div className="card-icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <div className="badges">{skill.items.map((item) => <span key={item}>{item}</span>)}</div>
          </motion.div>
        ))}
      </div>
      <h3 className="subheading">Professional Soft Skills</h3>
      <div className="soft-grid">
        {softSkills.map(([title, text]) => <div className="soft-card" key={title}><h4>{title}</h4><p>{text}</p></div>)}
      </div>
    </Section>
  );
}

function Projects() {
  const [filter, setFilter] = useState('All');
  const types = useMemo(() => ['All', ...new Set(projects.map((p) => p.type))], []);
  const visible = filter === 'All' ? projects : projects.filter((p) => p.type === filter);
  return (
    <Section id="projects" eyebrow="Projects" title="Selected Academic & Practical Work" className="muted">
      <div className="filter-row">
        {types.map((type) => <button className={filter === type ? 'selected' : ''} onClick={() => setFilter(type)} key={type}>{type}</button>)}
      </div>
      <div className="project-grid">
        {visible.map((project, index) => (
          <motion.article className="project-card" key={project.title} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
            <div className="project-top"><span>{project.type}</span><FaExternalLinkAlt /></div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="badges">{project.tech.map((t) => <span key={t}>{t}</span>)}</div>
            <ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
            <div className="card-actions">
              <a href="#" aria-label="GitHub placeholder"><FaGithub /> GitHub</a>
              <a href="#" aria-label="Live demo placeholder"><FaExternalLinkAlt /> Live Demo</a>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function InterestsServices() {
  return (
    <>
      <Section id="interests" eyebrow="Career Interests" title="What I’m Interested In">
        <div className="interest-grid">
          {interests.map(([title, text, icon]) => <div className="interest-card" key={title}><div className="card-icon">{icon}</div><h3>{title}</h3><p>{text}</p></div>)}
        </div>
      </Section>
      <Section id="services" eyebrow="What I Can Do" title="Practical Areas I Can Contribute To" className="muted">
        <div className="service-grid">
          {services.map(([title, icon]) => <motion.div className="service-card" key={title} whileHover={{ y: -7 }}><span>{icon}</span><p>{title}</p></motion.div>)}
        </div>
      </Section>
    </>
  );
}

function Resume() {
  return (
    <Section id="resume" eyebrow="Resume" title="Download My CV">
      <div className="resume-box">
        <div>
          <h3>Learn more about my education, technical skills, projects, and academic background.</h3>
          <p>You can download my CV to learn more about my education, technical skills, projects, and academic background.</p>
        </div>
        <a className="btn primary" href={profile.cv} download><FaDownload /> Download CV</a>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let’s Build Something Together" className="contact-section">
      <div className="contact-grid contact-grid-simple">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p><FaEnvelope /> <a href={`mailto:${profile.email}`}>{profile.email}</a></p>
          <p><FaPhoneAlt /> <a href={`tel:${profile.phone}`}>{profile.phone}</a></p>
          <p><FaMapMarkerAlt /> {profile.location}</p>
          <div className="socials">
            <a href={profile.linkedin} aria-label="LinkedIn profile" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href={profile.github} aria-label="GitHub profile" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email"><FaEnvelope /></a>
          </div>
          <small>Connect with me on LinkedIn and GitHub for more details about my projects and experience.</small>
        </div>
        <div className="contact-panel">
          <h3>Ready to collaborate?</h3>
          <p>If you have an internship, project, or entry-level role in mind, I’d love to connect. I’m most responsive by email and happy to discuss how I can contribute to your team.</p>
          <div className="contact-actions">
            <a className="btn primary" href={`mailto:${profile.email}`}>Email Me</a>
            <a className="btn secondary" href={profile.cv} download><FaDownload /> Download CV</a>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div><h3>Nethma Iddamalgoda</h3><p>IT Undergraduate | Software Developer | Web Developer | QA Enthusiast</p></div>
        <div className="footer-links">{navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}</div>
      </div>
      <p className="copyright">© 2026 Nethma Iddamalgoda. All Rights Reserved.</p>
    </footer>
  );
}

function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return show ? <button className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><FaArrowUp /></button> : null;
}

function Loader() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 850);
    return () => clearTimeout(t);
  }, []);
  return <AnimatePresence>{loading && <motion.div className="loader" exit={{ opacity: 0 }}><div /><p>Loading Portfolio...</p></motion.div>}</AnimatePresence>;
}

export default function App() {
  return (
    <>
      <Loader />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <InterestsServices />
      <Resume />
      <Contact />
      <Footer />
      <ScrollTop />
    </>
  );
}
