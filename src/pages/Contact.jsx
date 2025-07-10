import { Mail, LinkedinIcon, Phone } from "lucide-react";

function Contact() {
  return (
    <div className=" bg-[#fdf9f0]">
      {/* Banner */}
      <div className="w-full max-h-[360px] overflow-hidden">
        <img
          src="contact.png"
          alt="Open notebook, pen and coffee mug on a desk"
          className="w-full h-[700px] object-cover object-[center_20%]"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10 space-y-20 leading-relaxed">
        
        <section>
        <div className="py-6">
          <h1 className="md:text-5xl text-3xl font-medium">Testimonials</h1>
        </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <blockquote className="italic text-xs text-gray-800">
                “
Refiloe is a communications expert who also brings a passion for advocacy and strong skills in social media to her work. I was fortunate to hire her to lead communications for the Secretariat of the Civil Society Engagement Mechanism for UHC2030. She built communications for this global network of over 1000 members from scratch-designing the comms strategy, building our website, establishing our social media presence and growing it exponentially, identifying opportunities for our advocacy messages to be published in major journals and blogs, generating original content for monthly newsletters, and always amplifying the voices of CSOs at the country level!”
              </blockquote>
              <footer className="mt-4 text-sm text-gray-600"> Amy Boldosser-Boesch, Former Supervisor, Non-profit executive, Board chair</footer>
            </div>

            <div>
              <blockquote className="italic text-xs text-gray-800">
                “Refiloe's best attributes during that time, were her ability to coordinate the multi-sectoral evaluation task team, facilitating evaluation workshops and eventually contributing to finalization of the evaluation report. Refiloe demonstrated great organizational skills, and went on to support capacity building of local Irish Aid partners in Managing for Development Results which was been pioneered at the time. Overall, Refiloe was able to perform both administrative and programmatic duties as necessary. She is an adaptable person who blends effortlessly with people of all backgrounds. Her cheerful attitude towards her colleagues, and work, makes her very easy to work with and supervise.

”
              </blockquote>
              <footer className="mt-4 text-sm text-gray-600"> Brendan McGrath, Former Head of Development, Irish Aid</footer>
            </div>
          </div>
        </section>
        <section>
          <div className="py-2 flex justify-center items-center">
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/refiloemabejane"
                target="_blank"
                rel="noopener noreferrer"
                className="flex"
              >
                   <button className="flex items-center gap-2 rounded-md bg-gray-800 p-2 text-white hover:bg-blue-600 transition">
                         <LinkedinIcon size={16} />
                   </button>
               </a>

              <a
                href="mailto:rmmabejane@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex"
              >
                   <button className="flex items-center gap-2 rounded-md bg-gray-800 p-2 text-white hover:bg-red-600 transition">
                         <Mail size={16} />
                   </button>
               </a>

              <a
                href="tel:+15713761911"
                target="_blank"
                rel="noopener noreferrer"
                className="flex"
              >
                   <button className="flex items-center gap-2 rounded-md bg-gray-800 p-2 text-white hover:bg-green-600 transition">
                         <Phone size={16} />
                   </button>
               </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
