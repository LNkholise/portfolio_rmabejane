import { useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Works from "../data/works";

function Details() {
  const { selection} = useParams()
  const work = Works.find(item => item.selection === selection)

  return (
      <div className="works min-h-screen bg-[#fdf9f0] flex flex-col justify-between">
            {/* Banner */}
      <div className="w-full max-h-[360px] overflow-hidden">
        <img
          src={`/bento/${work.banner}`}
          alt="Open notebook, pen and coffee mug on a desk"
          className="w-full h-[700px] object-cover object-center"
        />
      </div>

      <div className="max-w-7xl mx-auto my-6 px-10 grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
        <div>
          <ArrowLeft className="cursor-pointer bg-white p-2 rounded-md shadow-md w-10 h-10" onClick={() => window.history.back()} />
          <h1 className="text-2xl md:text-4xl font-medium mt-4 mb-2">{work.title}</h1>
          <img src={`/${work.selection}/${work.img1}`} alt="Selected Work" className="w-full h-auto rounded-l-md shadow-lg mb-4" />
          <p className="text-xs text-gray-700 leading-relaxed font-semibold ml-4">{work.caption}</p>
        </div>

        <div>
          <p className="text-md text-gray-700 leading-relaxed font-light ml-4 mt-5">
            {work.text1}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Details;
