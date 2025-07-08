
function Home() {
  return (
    <div className="max-w-screen mx-auto overflow-x-hidden pb-10 bg-[#fdf9f0] h-screen">
      <div className="flex flex-col-reverse lg:flex-row items-center ">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 items-center max-w-4xl mx-auto mx-4 my-10 lg:my-4">

          <div className="mx-4 lg:mx-2">

            <h1 className="md:text-4xl text-3xl mb-2 mx-4">Strategic Communications Expert</h1>
            <p className="text-xs font-light uppercase text-gray-500 mb-2 mx-4">Refiloe Mabejane</p>
            <p className="text-sm font-light mx-4 max-w-md">
              “I lead by listening, to you, and to the broader landscape so I can help advance your goals through strategy, structure, and story. I am guided by empathy, ethics, and a commitment to execution.”
            </p>
            <p className="text-xs font-light text-gray-800 mx-4 mt-2">Refiloe Mabejane</p>
            <div className="flex gap-4 mx-4">
            <button className="border-2 border-gray-800 bg-gray-800 p-3 px-4 sm:p-4 text-xs sm:text-sm text-white mt-5">Explore <span className="hidden xl:inline">My Work</span></button>
            <button className="border-2 border-gray-800 p-3 px-4 sm:p-4 text-xs sm:text-sm text-gray-800 mt-5">Download <span className="hidden xl:inline">Portfolio</span></button>
            </div>
          </div>

          <div className="flex flex-col justify-center md:justify-end mx-10 lg:mx-4">
            <p className="text-sm font-light my-4 md:inline hidden max-w-lg">I pivoted from program management to communications at the midpoint of my 19-year international development and public affairs career, enhancing my ability to design, monitor, and review impactful communication strategies. With roots in results-based management, I help organizations amplify voice, position priorities, and influence decision-makers and stakeholders through storytelling, messaging, and collaborative leadership.</p>
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
        <img src="hero.jpeg" alt="Refiloe Mabejane" className="h-auto w-[800px] rounded-bl-[80px]"/>
      </div>
    </div>
  );
};

export default Home;
