import './AboutSection.css';

function AboutSection() {
  return (
    <section id='about' className='about-section'>
      <div className='about-wrapper container'>
        <div className='about-image'>
          <img src='/Mypic.jpeg' alt='Sanvi' />
        </div>
        <div className='about-copy'>
          <h1>About Me</h1>
          <p>Hi! I'm Sanvi, a CSE student and aspiring web developer, passionate about learning new technologies and building creative projects.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
