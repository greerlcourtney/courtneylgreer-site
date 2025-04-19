import React from 'react';
import './Main.css';
// import './AboutMe.css'; // Removed as file was deleted
// import './Projects.css'; // Removed as file was deleted
import ScrollAnimation from './ScrollAnimation';

function Main() {

  return (
    <div className="main-page">
      <ScrollAnimation />
      {/* Header Section */}
      <header className="main-header">
        <h1>Courtney Greer</h1>
      </header>

      {/* About Section */}
      <section className="main-about-section">
        <p>
          I'm a founder, builder, community lover, and obsessed learner on a mission to make group planning effortless and joyful.
        </p>
        <p>
          Right now, I'm the CEO of Voxxy, a company reimagining how we coordinate plans with the people we care about. Whether it's a dinner with friends, a weekend getaway, or a special event...Voxxy helps people decide faster, stress less, and create more memories together.
        </p>
        <p>
          Before Voxxy, I spent nearly a decade in tech leading product strategy, building systems, and scaling programs at Microsoft. I've led enterprise security rollouts, founded internal equity groups, launched AI products, and mentored first-time builders. But no matter the project, my approach stays the same, move fast, stay curious, listen deeply, and build with what you've got.
        </p>
        <p>
          What drives me is people. I love connecting with customers, learning their stories, and turning those insights into tools that make their lives easier. I believe the best products are built in conversation with the communities they serve. That's why you'll always find me talking to users, hopping into DMs, asking questions, and learning everything I can to grow better, not just bigger.
        </p>
        <p>
          I believe bold visions don't need perfect conditions. They just need clarity, grit, and momentum. That's how I lead. That's how I build. And that's the heart of what we're doing at Voxxy.
        </p>
      </section>

      {/* === About Me Content Start === */}

      {/* Work Experience */}
      <section className="experience-section">
        <h2>Work Experience</h2>

        {/* Voxxy – Founder & CEO */}
        <div className="experience">
          <h3>Voxxy – Founder & CEO</h3>
          <p><strong>Present</strong> | New York, NY</p>
          <p>
            As the founder and CEO of Voxxy, I’m leading the development of an AI-powered group planning platform that helps people coordinate experiences more easily. From meals to trips and events, Voxxy reduces group chat chaos and streamlines decision-making for planners and their communities. I drive product vision, customer research, fundraising, and go-to-market execution, all while building a company grounded in human connection, creativity, and speed.
          </p>
          <h4>Key Achievements:</h4>
          <ul>
            <li><strong>Product Strategy:</strong> Designed and launched Voxxy’s group planning assistant, helping users plan with preferences, budgets, and dietary needs in mind.</li>
            <li><strong>User Research:</strong> Conducted 30+ interviews to validate product-market fit and prioritize high-value MVP features.</li>
            <li><strong>Community Building:</strong> Built a following of early adopters and power users across foodies, travelers, and professional planners.</li>
            <li><strong>Marketing & Launch:</strong> Led brand development and a multi-channel go-to-market campaign with Product Hunt, social media, and email outreach.</li>
            <li><strong>Startup Operations:</strong> Managed company incorporation, equity structure, and early-stage fundraising preparation.</li>
          </ul>
        </div>

        {/* Microsoft – Senior Technical Program Manager */}
        <div className="experience">
          <h3>Microsoft – Senior Technical Program Manager</h3>
          <p><strong>2019 – Present</strong> | New York, NY</p>
          <p>
            As a Senior Technical Program Manager, I lead product strategies that help Microsoft’s technical
            organizations collaborate and innovate with strategic customers. My work focuses on developing people-centered
            platforms, streamlining internal processes, and driving measurable business outcomes. I manage product backlogs,
            write user stories, and lead cross-functional teams to deliver impactful solutions that balance technical
            constraints with business goals.
          </p>
          <h4>Key Achievements:</h4>
          <ul>
            <li><strong>Strategic Product Development:</strong> Envisioned and launched internal tools, dashboards, and custom applications used by over 10,000 employees.</li>
            <li><strong>Azure DevOps Integration:</strong> Delivered an Azure DevOps-based solution for project tracking and implemented a Power App for capacity planning.</li>
            <li><strong>Data-Driven Insights:</strong> Designed dashboards enabling executives to make informed decisions with real-time insights.</li>
            <li><strong>Process Automation:</strong> Streamlined workflows, reducing manual effort and improving reporting processes.</li>
            <li><strong>Event Leadership:</strong> Hosted two internal conferences and hackathons as content creator and moderator.</li>
            <li><strong>Team Leadership:</strong> Coached junior teams in agile practices, enhancing productivity.</li>
            <li><strong>Philanthropy Leadership:</strong> Managed philanthropic initiatives and community partnerships.</li>
          </ul>
        </div>

        {/* Microsoft – Partner Development Manager */}
        <div className="experience">
          <h3>Microsoft – Partner Development Manager</h3>
          <p><strong>2017 – 2019</strong> | Chicago, IL</p>
          <p>
            In my role as a Partner Development Manager, I worked closely with startups and independent software vendors
            (ISVs) across 12 states to drive innovation and growth through Azure cloud solutions. I guided these companies
            in cloud migrations, revenue scaling, and envisioning future software product strategies.
          </p>
          <h4>Key Achievements:</h4>
          <ul>
            <li><strong>Startup Innovation:</strong> Partnered with over 50 software vendors, driving innovation and scaling infrastructure with Azure.</li>
            <li><strong>Revenue Growth:</strong> Managed a $2M Azure cloud portfolio, exceeding revenue targets.</li>
            <li><strong>Training:</strong> Delivered Azure Platform Readiness training to over 100 recruits.</li>
            <li><strong>Technical Advocacy:</strong> Spoke at technical panels and industry events.</li>
            <li><strong>Strategic Envisioning:</strong> Led envisioning sessions for future-ready software products.</li>
          </ul>
        </div>
      </section>

      {/* Volunteer Experience */}
      <section className="volunteer-section">
        <h2>Volunteer Experience</h2>

        
        <div className="experience">
          <h3>TEALS (Technology Education and Literacy in Schools) - 2023,2034</h3>
          <p>
            Served as a teacher assistant at Boys and Girls High School for two years, delivering lessons on Generative AI
            and cybersecurity, and hosting career days at Microsoft offices.
          </p>
        </div>

        <div className="experience">
          <h3>Black Girls Code - 2018,2023</h3>
          <p>
            I’ve been an active volunteer with Black Girls Code, supporting events such as summer camps, career days, and
            hackathons, empowering young girls to explore STEM fields.
          </p>
        </div>

        <div className="experience">
          <h3>Seattle Pride – Board of Directors 2020,2021</h3>
          <p>
            As a Board Member, I transitioned the Seattle Pride Parade to a virtual event during the pandemic and supported
            fundraising and community engagement initiatives.
          </p>
        </div>
        <div className="experience">
          <h3>Center on Halsted - 2018 </h3>
          <p>
            As the Lab IT Technician at Center on Halsted, I supported community members with resume building and improving
            computer literacy skills.
          </p>
        </div>
        <div className="experience">
          <h3>Girls Who Code - 2017</h3>
          <p>
            I led an eight-week coding program at a high school in Toledo, Ohio, teaching girls the fundamentals of HTML
            and CSS. With support from Girls Who Code, I developed a year-long lesson plan balancing theory and hands-on
            learning.
          </p>
        </div>
      </section>
      {/* === About Me Content End === */}

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Let's Connect</h2>
        <p>I'm always excited to connect with fellow builders, founders, and tech enthusiasts. Whether you want to chat about group planning, AI, or just share startup stories, I'd love to hear from you.</p>
        
        <div className="contact-grid">
          <div className="contact-details">
            <p><strong>Email:</strong> courtneygreer@voxxyai.com</p>
            <p><strong>Location:</strong> New York, NY</p>
            <div className="social-icons">
              <a href="https://linkedin.com/in/courtney-greer" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/greerlcourtney" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
          </div>
          
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Main;
