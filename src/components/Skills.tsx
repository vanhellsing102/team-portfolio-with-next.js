import Image from "next/image";
import { ourSkills } from "../libs/data";

const Skills = () => {
    return (
        <div>
            <h2 className="text-4xl font-semibold text-center mb-5">Our Skills</h2>
            <div className="flex items-center justify-center gap-4 flex-wrap">
            {
                ourSkills.map((skill) => <div className="hover:scale-[104%] hover:translate-[2px] duration-200 hover:shadow-xl shadow-cyan-700 transition-all flex flex-col h-[130px] w-[130px] items-center justify-between bg-cyan-700 p-2 rounded-xl" key={skill?.id}>
                    <Image className="h-[90px] w-[80px] bg-cover" width={100} height={50} src={skill?.image} alt={skill?.name}></Image>
                    <h3>{skill?.name}</h3>
                </div>)
            }
            </div>
        </div>
    );
};

export default Skills;