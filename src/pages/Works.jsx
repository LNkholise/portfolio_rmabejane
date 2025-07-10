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
      title: "Technical | Content & Messaging",
      image: "bento/4.jpg",
      link: "selection2",
      text: "Turning complex ideas into clear, action-ready communications"
    },
    {
      id: 3,
      title: "Visual | Design & Storytelling",
      image: "bento/3.jpg",
      link: "selection3",
      text: "Creating strategic, visually compelling content that supports storytelling"
    },
    {
      id: 4,
      title: "Campaigns | Driving Global Influence",
      image: "bento/2.jpg",
      link: "selection4",
      text: "Strategic communication planning and execution"
    },
    {
      id: 5,
      title: "Events | Multimedia & Promotion",
      image: "bento/1.jpg",
      link: "selection5",
      text: "Delivering comprehensive event communications that build momentum"
    },
  ];

  return (
    <div className="works min-h-screen p-4 bg-[#fdf9f0] flex flex-col justify-between">
      <div className="max-w-7xl mx-auto mt-40 mb-10 px-10 grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
        <div>
          <h1 className="md:text-5xl text-3xl  font-medium">Strategic communicator. <br /> <br /> Collaborative leader. <br /> <br /> Global thinker.</h1>
        </div>
        <div>
          <p className="text-sm md:text-md text-gray-800 leading-relaxed font-light mt-5">
           Strategic communications leader with 19+ years of experience transforming complex ideas into compelling narratives and impactful movements. I’ve partnered with organizations like the UN, USAID, and global civil society networks to elevate visibility, influence policy, and drive action. Known for aligning communications with organizational purpose, I specialize in integrated strategies that blend messaging, content, design, and engagement. My cross-functional, cross-sector approach enables me to
            co-create inclusive, strategic solutions that resonate with and engage diverse audiences.
            <br />
            <br />
            This portfolio showcases selected work.
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
