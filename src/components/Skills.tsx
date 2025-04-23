import Image from "next/image";
import { ourSkills } from "../libs/data";

const Skills = () => {
    return (
        <div id="skills">
            <h2 className="text-4xl font-semibold text-center mb-5">Our Skills</h2>
            <div className="flex items-center justify-center gap-4 flex-wrap">
            {
                ourSkills.map((skill) => <div className="hover:scale-[104%] hover:translate-[2px] duration-200 hover:shadow-xl shadow-cyan-700 transition-all flex flex-col md:h-32 md:w-32 h-24 w-24 items-center justify-between bg-cyan-700 p-2 rounded-xl" key={skill?.id}>
                    <Image className="md:h-[90px] md:w-[80px] h-[50px] w-[50px] bg-cover" width={100} height={50} src={skill?.image} alt={skill?.name}></Image>
                    <h3 className="capitalize">{skill?.name}</h3>
                </div>)
            }
            </div>
        </div>
    );
};

export default Skills;