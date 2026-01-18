import { Link }  from 'react-router-dom';

function Home() {
  return (
    <div className="max-w-screen mx-auto overflow-x-hidden pb-10 bg-[#fdf9f0] h-screen">
      {/* Banner */}
      <div className="w-full h-[30px] overflow-hidden hidden lg:inline xl:hidden">
        <img 
          src="hero.jpeg" 
          alt="Refiloe Mabejane" 
          className="w-full h-full object-cover object-[center_10%]"
        />
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center ">
        <div className="grid lg:grid-cols-2 xl:grid-cols-1 grid-cols-1 gap-6 items-center justify-center max-w-4xl mx-auto mx-4 my-10 lg:my-4">

          <div className="mx-4 xl:mx-18">
            <h1 className="md:text-5xl text-3xl mx-5 xl:mx-14">Communications Strategist</h1>
          </div>

          <div className="flex flex-col justify-center md:justify-end mx-10 xl:mx-15 xl:ml-20">
            <p className="text-md font-light mt-4 max-w-lg">“I lead strategic communications by listening – to you and the broader landscape – to advance your goals through strategy, structure, and story. Always guided by empathy, ethics, and a commitment to execution.”</p>
            <p className="text-xs font-light text-gray-800 mt-2 mb-4 sm:mb-2">Refiloe Mabejane</p>
            <div className="gap-4 hidden mt-2 mb-6 md:flex">
            <Link to="/selected-works"><button className="border-2 border-gray-800 bg-gray-800 p-3 px-4 sm:p-4 text-xs sm:text-sm text-white mt-5">Explore <span className="hidden xl:inline">My Work</span></button></Link>
            <Link to="/contact"><button className="border-2 border-gray-800 p-3 px-4 sm:p-4 text-xs sm:text-sm text-gray-800 mt-5">Get in Touch</button></Link>
            </div>
            <h2 className="text-xl font-semibold mb-4">Achievements</h2>
            <ul className="list-disc list-inside gap-4 text-sm mb-2 max-w-sm">
              <li>Scaled global communications supporting $500M+ portfolios across 120+ countries.</li>
              <li>Accelerated audience growth and engagement by up to 250%.</li>
              <li>Trusted advisor on executive and crisis communications during high-stakes moments, including the U.S. government-supported COVID-19 response.</li>
            </ul>
            <h2 className="text-xl font-semibold mb-4">Education</h2>
              <ul className="space-y-4">
              {/* UEA */}
              <li className="flex items-start gap-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/4b/University_of_East_Anglia_arms.svg"
                  alt="University of East Anglia"
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <p className="text-xs sm:text-sm font-medium">Master of Arts in International Development and Gender</p>
                  <p className="text-xs text-gray-600">University of East Anglia, UK</p>
                </div>
              </li>

              {/* Cornell */}
              <li className="flex items-start gap-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/47/Cornell_University_seal.svg"
                  alt="Cornell University"
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <p className="text-xs sm:text-sm font-medium">Leadership Essentials Certificate</p>
                  <p className="text-xs text-gray-600">Cornell University, US</p>
                </div>
              </li>

              {/* UJ */}
              <li className="flex items-start gap-4">
                <img
                  src="https://www.uj.ac.za/wp-content/uploads/2024/12/20th-anniversary-count-uj-logo.png"
                  alt="University of Johannesburg"
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <p className="text-xs sm:text-sm font-medium">Bachelor of Arts in Psychology</p>
                  <p className="text-xs text-gray-600">University of Johannesburg, South Africa</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <img src="hero.jpeg" alt="Refiloe Mabejane" className="h-auto w-[600px] md:w-[800px] lg:w-[700px] rounded-bl-[80px] lg:hidden xl:inline"/>
      </div>
    </div>
  );
};

export default Home;
