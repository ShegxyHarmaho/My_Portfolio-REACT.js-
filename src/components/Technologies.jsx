import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";

// Technologies data
const techData = [
  { name: "React", icon: <RiReactjsLine />, color: "text-cyan-400" },
  { name: "Next.js", icon: <TbBrandNextjs />, color: "text-white" },
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex items-center justify-center gap-4">
        {techData.map((tech, index) => (
          <div
            key={index}
            className="group flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 hover:scale-105 transition-transform duration-300"
          >
            <div className={`text-7xl ${tech.color} group-hover:opacity-80`}>
              {tech.icon}
            </div>
            <p className="mt-2 text-sm text-neutral-400 group-hover:text-neutral-200">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
