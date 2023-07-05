import './App.css';

const Cover = () => {
  return (
    <section className='title-page'>
      <div className='title-container title-container-content'>
        <div className='subtitle subtitle-content'>
          Hello! I'm
        </div>
        <div className='title title-content'>
          Perry Huang,
        </div>
        <div className='subtitle subtitle-content'>
          and welcome to my personal website!
        </div>
        <div className='description description-content'>
          I'm a first year UBC student hoping to pursue a Bachelor's in Computer Science. I am currently learning React and have experience in React Native, Javascript, and Java. I love to game, discover new music, exercise, and occasionally read books.
        </div>
      </div>
      <div className='image-container'>
        <img src={require('./assets/capy-grass-removebg-preview.png')} alt='capybara eating grass'/>
      </div>
    </section>
  )
}

const Experience = () => {
  return (
    <section id='experience' className='experience-page'>
      <header className='header-container header-container-content '>
        <h1 className='header-text-content'>
          Experience
        </h1>
      </header>
      <div className='experience-list item'>
        <h5 className='item-header item-header-layout'>
          Education
        </h5>
        <Item 
          position="University of British Columbia | Bachelor of Computer Science"
          time="2022-2027"
          location="Vancouver, BC"
        />
        <Item 
          position="Randolph High School"
          time="2018-2022"
          location="Randolph, NJ"
        />
        <h5 className='item-header item-header-layout'>
          Work
        </h5>
        <Item 
          position="The Tutoring Center"
          time="2021-2022"
          location="Randolph, NJ"
        />
      </div>
    </section>
  )
}

const Project = () => {
  return (
    <section id='projects' className='projects-page'>
      <header className='header-container header-container-content '>
        <h1 className='header-text-content'>
          Projects
        </h1>
      </header>
      <div class='project-grid'>
        <ProjectItem 
          name='LightSaberApp'
          description="Mobile app developed with React Native and Expo utilizing a phone's accelerometer to simulate a lightsaber"
        />
        <ProjectItem 
          name='RouteMapperApp'
          description='Mobile app developed with React Native and Expo that tracks a route walked on a map '
        />
        <ProjectItem 
          name='CalendarEventApp'
          description="Mobile app developed with React Native and Expo that displays upcoming events on a user's calendar in a list format"
        />
        <ProjectItem 
          name='PainterApp'
          description='Mobile app developed with React Native and Expo that lets the user draw pictures with a variety of tools'
        />
      </div>
    </section>
  )
}
const Item = ({ position, time, location}) => {
  return (
    <div className='item-design item-layout'>
      <div className='item-left'>
        <div className='item-text'>
          {position}
        </div>
        <div className='item-subtext'>
          {location}
        </div>
      </div>
      <div className='item-right item-text'>
        {time}
      </div>
    </div>
  )
}

const ProjectItem = ({ name, description }) => {
  return (
    <div class='project-item project-item-layout'>
      <h3 class='project-item-header'>
        {name}
      </h3>
      <p class='project-item-text'>
        {description}
      </p>  
    </div>
  )
}

const SideNav = () => {
 
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  }

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0px";
  }
  
  return (
    <div>
      <div id="mySidenav" class="sidenav">
        <a href={"javascript:void(0)"} class="closebtn" onClick={closeNav}>
          &times;
        </a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="javascript:void(0)">Contact</a>
      </div>
      <span onClick={(e) => openNav(e)} class='button'>
        <div class='bar1'></div>
        <div class='bar2'></div>
        <div class='bar3'></div>
      </span>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <SideNav />
      <Cover />
      <Experience />
      <Project />
    </div>
  )
}

export default App;
