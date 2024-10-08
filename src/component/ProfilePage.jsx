import { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGlobe, FaPython, FaJsSquare, FaPhp, FaJava, FaAndroid, FaLaravel, FaReact, FaVuejs, FaBootstrap } from 'react-icons/fa';
import { SiTypescript, SiCplusplus, SiSolidity, SiTailwindcss, SiExpress, SiRedux} from 'react-icons/si'; // Corrected import
import { MdWork, MdSchool } from 'react-icons/md';
import { DiMaterializecss } from 'react-icons/di';


const ProfilePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const profileData = {
    personalInfo: {
      name: "Moin Uddin",
      title: "Frontend Developer | Full Stack Developer",
      email: "moincse022@gmail.com",
      phone: "+8801935038653",
      location: { city: "Khulna", country: "Bangladesh" },
      summary: "Experienced frontend developer and Full Stack Developer with a strong background in mobile and web development. Skilled in multiple programming languages and frameworks, with a track record of successful project delivery and team leadership.",
      links: {
        linkedin: "https://www.linkedin.com/in/moin-uddin022/",
        github: "https://github.com/moincse022",
        website: "https://moin-portfolio.example.com"
      }
    },
    workExperience: [
      {
        title: "Frontend Developer",
        company: "CreatoCare IT Solutions",
        location: "Bangladesh",
        startDate: "2024",
        endDate: "Present",
        current: true,
        responsibilities: [
          "Developed and maintained full-stack web applications",
          "Collaborated with design and backend teams to implement new features",
          "Optimized application performance and user experience"
        ]
      },
      {
        title: "MERN Stack Developer",
        company: "XYZ Technology",
        location: "Bangladesh",
        startDate: "2019",
        endDate: "2021",
        current: false,
        responsibilities: [
          "Developed Android applications from concept to deployment",
          "Collaborated with the design team to implement UI/UX designs",
          "Participated in code reviews and implemented best practices"
        ]
      }
    ],
    education: [
      {
        degree: "Bachelor in Computer Science and Engineering",
        institution: "Bangabandhu Sheikh Mujibur Rahman Science and Technology University",
        period: "2018 - Present (Expected completion in 4 months)",
        gpa: "CGPA: 3.05 out of 4.00",
        achievements: [
          "Completed 145 ECTs",
          "Participated in multiple hackathons and coding competitions"
        ]
      },
      {
        degree: "Higher Secondary Certificate (12th Standard)",
        institution: "Khulna Public College",
        period: "2015",
        result: "GPA: 4.50 out of 5",
        achievements: [
          "Science Club Member",
          "Participated in national level science fair"
        ]
      }
    ],
    skills: {
      languages: [ "JavaScript", "TypeScript", "PHP", "C/C++", "Solidity","Redux"],
      frameworks: ["Tailwind css", "Bootstrap", "Material UI", "Express", "ReactJs", "VueJs"]
    }
  };

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const fadeIn = useSpring({
    opacity: isLoading ? 0 : 1,
    from: { opacity: 0 },
    config: { duration: 1000 }
  });

  const slideUp = useSpring({
    transform: isLoading ? 'translateY(50px)' : 'translateY(0)',
    opacity: isLoading ? 0 : 1,
    from: { transform: 'translateY(50px)', opacity: 0 },
    config: config.gentle
  });

  const contactItems = [
    { icon: <FaEnvelope className="mr-3 text-indigo-400 text-xl" />, text: profileData.personalInfo.email },
    { icon: <FaPhoneAlt className="mr-3 text-indigo-400 text-xl" />, text: profileData.personalInfo.phone },
    { icon: <FaMapMarkerAlt className="mr-3 text-indigo-400 text-xl" />, text: `${profileData.personalInfo.location.city}, ${profileData.personalInfo.location.country}` },
    {
      icon: <FaGlobe className="mr-3 text-indigo-400 text-xl" />,
      text: (
        <a href={profileData.personalInfo.links.website} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
          My Website
        </a>
      )
    }
  ];

  const skillIcons = {
    // Python: <FaPython />,
    JavaScript: <FaJsSquare />,
    TypeScript: <SiTypescript />,
    PHP: <FaPhp />,
    // Java: <FaJava/>,
    "C/C++": <SiCplusplus />,
    Solidity: <SiSolidity />,
    Redux:<SiRedux/>,
    "Tailwind css": <SiTailwindcss />, // Consistent with profileData
    Bootstrap: <FaBootstrap />, // Corrected key
    "Material UI": <DiMaterializecss/>, // Corrected import and key
    Express: <SiExpress/>,
    ReactJs: <FaReact />,
    VueJs: <FaVuejs />
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black">
        <animated.div style={fadeIn} className="text-3xl font-bold text-indigo-400">
          Loading...
        </animated.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100">
      <header className="bg-gradient-to-r from-indigo-900 to-purple-900 shadow-2xl py-16">
        <animated.div style={slideUp} className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold text-white mb-4">{profileData.personalInfo.name}</h1>
          <p className="text-3xl text-indigo-200">{profileData.personalInfo.title}</p>
        </animated.div>
      </header>
  
      <main className="container mx-auto px-4 py-12">
        <animated.section style={fadeIn} className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-xl shadow-2xl p-8 mb-12 hover:shadow-indigo-500/50 transition-shadow duration-300">
          <h2 className="text-3xl font-bold mb-6 text-indigo-300 border-b border-indigo-500 pb-2">About Me</h2>
          <p className="text-indigo-100 leading-relaxed text-lg">{profileData.personalInfo.summary}</p>
        </animated.section>
  
        <animated.section style={fadeIn} className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-indigo-300 border-b border-indigo-500 pb-2">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 text-indigo-100">
            {contactItems.map((item, index) => (
              <div key={index} className="flex items-center bg-indigo-900 rounded-lg p-4 shadow-md hover:bg-indigo-800 transition-colors">
                {item.icon}
                <span className="text-lg">{item.text}</span>
              </div>
            ))}
          </div>
        </animated.section>
  
        <animated.section style={fadeIn} className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-indigo-300 border-b border-indigo-500 pb-2">Work Experience</h2>
          <VerticalTimeline lineColor={'#818cf8'}>
            {profileData.workExperience.map((experience, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(79, 70, 229)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(79, 70, 229)' }}
                date={`${experience.startDate} - ${experience.current ? 'Present' : experience.endDate}`}
                iconStyle={{ background: 'rgb(79, 70, 229)', color: '#fff' }}
                icon={<MdWork />}
              >
                <h3 className="vertical-timeline-element-title text-xl font-bold">{experience.title}</h3>
                <h4 className="vertical-timeline-element-subtitle text-lg">{experience.company} - {experience.location}</h4>
                <ul className="mt-4 space-y-2 list-disc list-inside">
                  {experience.responsibilities.map((responsibility, i) => (
                    <li key={i}>{responsibility}</li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </animated.section>
  
        <animated.section style={fadeIn} className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-indigo-300 border-b border-indigo-500 pb-2">Education</h2>
          <VerticalTimeline lineColor={'#818cf8'}>
            {profileData.education.map((edu, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'rgb(76, 29, 149)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(76, 29, 149)' }}
                date={edu.period}
                iconStyle={{ background: 'rgb(76, 29, 149)', color: '#fff' }}
                icon={<MdSchool />}
              >
                <h3 className="vertical-timeline-element-title text-xl font-bold">{edu.degree}</h3>
                <h4 className="vertical-timeline-element-subtitle text-lg">{edu.institution}</h4>
                <p className="mt-2">{edu.gpa || edu.result}</p>
                <ul className="mt-4 space-y-2 list-disc list-inside">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </animated.section>
  
        <animated.section style={fadeIn}>
          <h2 className="text-3xl font-bold mb-6 text-indigo-300 border-b border-indigo-500 pb-2">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-indigo-200">Languages</h3>
              <div className="grid grid-cols-3 gap-4">
                {profileData.skills.languages.map((lang, index) => (
                  <div key={index} className="flex flex-col items-center bg-indigo-900 rounded-lg p-4 shadow-md hover:bg-indigo-800 transition-colors">
                    <span className="text-3xl mb-2">{skillIcons[lang]}</span>
                    <span className="text-center">{lang}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-indigo-200">Frameworks</h3>
              <div className="grid grid-cols-3 gap-4">
                {profileData.skills.frameworks.map((framework, index) => (
                  <div key={index} className="flex flex-col items-center bg-indigo-900 rounded-lg p-4 shadow-md hover:bg-indigo-800 transition-colors">
                    <span className="text-3xl mb-2">{skillIcons[framework]}</span>
                    <span className="text-center">{framework}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </animated.section>
      </main>
    </div>
  );
};

export default ProfilePage;
