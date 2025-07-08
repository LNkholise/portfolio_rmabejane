import { Link } from "react-router-dom";

function Works() {
  const gridItems = [
    {
      id: 1,
      title: "Executive | Writing Skills",
      image: "bento/5.jpg",
      link: "selection1",
      text: "Craft speeches, talking points, and briefs for senior leaders"
    },
    {
      id: 2,
      title: "Technical Content | Writing Skills",
      image: "bento/4.jpg",
      link: "selection2",
      text: "Transform complex policy into action-driven messaging"
    },
    {
      id: 3,
      title: "Visual | Media Engagement",
      image: "bento/3.jpg",
      link: "selection3",
      text: "Aligning graphics with powerful narratives"
    },
    {
      id: 4,
      title: "Campaigns | Strategy",
      image: "bento/2.jpg",
      link: "selection4",
      text: "Strategic communication planning and execution"
    },
    {
      id: 5,
      title: "Multimedia | Events",
      image: "bento/1.jpg",
      link: "selection5",
      text: "Comprehensive event coverage and promotion"
    },
  ];

  return (
    <div className="works min-h-screen p-4 bg-[#fdf9f0] flex flex-col justify-between">
      <div className="max-w-7xl mx-auto mt-40 mb-10 px-10 grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
        <div>
          <h1 className="md:text-5xl text-3xl  font-medium">About Refiloe</h1>
          <p className="text-xs font-light uppercase text-gray-500 mb-2 mt-4">Selected Works</p>
        </div>
        <div>
                    <p className="text-sm mt-2">
            Strategic communicator. Collaborative leader. Global thinker.
          </p>
          <p className="text-xs md:text-md text-gray-800 leading-relaxed font-light mt-5">
            I’m a communications strategist and project leader with nearly two decades of experience in international development and public affairs spanning government, multilateral institutions, and civil society. I’ve built a reputation for delivering communications that are thoughtful, impactful, and deeply aligned with organizational purpose.

            My strength lies in integrated communications, bringing together messaging, content, design, and engagement into cohesive strategies that move audiences and advance change. I lead with a cross-functional, cross-agency mindset, often partnering across sectors to co-create strategic solutions.
          </p>
        </div>
        <div>
        </div>
      </div>

      {/* Carousel */}
      <div className="w-full overflow-x-auto pb-4">
        <div className="flex gap-4 px-4 md:px-6 flex-nowrap w-max">
          {gridItems.map(item => (
            <Link 
              to={`/selected-works/${item.link}`}  
              key={item.id} 
              className="min-w-[280px] md:min-w-[320px] h-80 rounded-lg flex-shrink-0 relative p-6 bg-black text-white transition group"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute rounded-lg inset-0 w-full h-full object-cover z-0 opacity-70 group-hover:opacity-50 transition-opacity"
              />
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="flex items-center justify-between">
                  <h5 className="text-md font-bold">{item.title}</h5>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M8.25 6H18V15.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <p className="mt-4 text-xs">{item.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Works;
