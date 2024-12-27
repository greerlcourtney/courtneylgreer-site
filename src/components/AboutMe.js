import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <div className="about-page">
      

      {/* Work Experience */}
      <section className="experience-section">
        <h2>Work Experience</h2>

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
          <h3>Girls Who Code</h3>
          <p>
            I led an eight-week coding program at a high school in Toledo, Ohio, teaching girls the fundamentals of HTML
            and CSS. With support from Girls Who Code, I developed a year-long lesson plan balancing theory and hands-on
            learning.
          </p>
        </div>

        <div className="experience">
          <h3>Black Girls Code</h3>
          <p>
            I’ve been an active volunteer with Black Girls Code, supporting events such as summer camps, career days, and
            hackathons, empowering young girls to explore STEM fields.
          </p>
        </div>

        <div className="experience">
          <h3>TEALS (Technology Education and Literacy in Schools)</h3>
          <p>
            Served as a teacher assistant at Boys and Girls High School for two years, delivering lessons on Generative AI
            and cybersecurity, and hosting career days at Microsoft offices.
          </p>
        </div>

        <div className="experience">
          <h3>Center on Halsted</h3>
          <p>
            As the Lab IT Technician at Center on Halsted, I supported community members with resume building and improving
            computer literacy skills.
          </p>
        </div>

        <div className="experience">
          <h3>Seattle Pride – Board of Directors</h3>
          <p>
            As a Board Member, I transitioned the Seattle Pride Parade to a virtual event during the pandemic and supported
            fundraising and community engagement initiatives.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
