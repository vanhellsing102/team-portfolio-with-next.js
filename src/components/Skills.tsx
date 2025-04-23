import Image from "next/image";
import { ourSkills } from "../libs/data";

const Skills = () => {
    return (
        <>
            {
                ourSkills.map((skill) => <div key={skill?.id}>
                    <Image width={200} height={200} src={skill?.image} alt={skill?.name}></Image>
                    <h3>{skill?.name}</h3>
                </div>)
            }
        </>
    );
};

export default Skills;