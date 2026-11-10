import { Link } from "react-router-dom";

function Works() {
  const gridItems = [
    {
      id: 1,
      title: "Executive Communications",
      image: "/bento/5.jpg",
      imagePosition: "object-[center_10%]",
      link: "selection1",
      },
    {
      id: 2,
      title: "Content Strategy & Editorial",
      image: "/bento/4.jpg",
      imagePosition: "object-center",
      link: "selection2",
      },
    {
      id: 3,
      title: "Visual Storytelling",
      image: "/bento/3.jpg",
      imagePosition: "object-center",
      link: "selection3",
      },
    {
      id: 4,
      title: "Campaigns & Media Relations",
      image: "/bento/2.jpg",
      imagePosition: "object-center",
      link: "selection4",
      },
    {
      id: 5,
      title: "Events & Convenings",
      image: "/bento/1.jpg",
      imagePosition: "object-center",
      link: "selection5",
      },
  ];

  return (
    <div className="works min-h-screen p-4 bg-[#fdf9f0] flex flex-col justify-between">
      <div className="max-w-7xl mx-auto mt-40 mb-10 px-10 grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
        <div>
          <h1 className="md:text-5xl text-3xl  font-medium mt-4">Strategy. Structure. Story.</h1>
          <p className="text-sm md:text-md text-gray-800 font-light italic mt-4">For institutions, their leaders, and the people they serve.</p>
        </div>
        <div>
          <p className="text-sm md:text-md text-gray-800 leading-relaxed font-light mt-5">
            My work has taken me from hospital settings and communities to roles with Irish Aid, the UN, USAID, and global partnerships. This broad experience helps me lead executive, institutional, 
            technical, advocacy, and programmatic communications that diverse audiences can easily understand and use.
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
              className="w-[300px] md:w-[480px] flex-shrink-0 flex flex-col group"
            >
              {/* Image card: arrow and subtitle stay on the image */}
              <div className="relative h-80 rounded-lg p-6 bg-black text-white overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className={`absolute rounded-lg inset-0 w-full h-full object-cover ${item.imagePosition} z-0 opacity-100 group-hover:opacity-90 transition-opacity`}
                />
                <div className="absolute inset-0 rounded-lg z-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60"></div>
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div className="flex items-center justify-end">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M8.25 6H18V15.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                  <p className="mt-4 text-xs">{item.text}</p>
                </div>
              </div>
              
              {/* Title */}
              <h5 className="mt-3 text-sm font-semibold text-center text-gray-900">{item.title}</h5>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Works;