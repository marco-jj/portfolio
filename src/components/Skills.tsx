import { useEffect } from "react";
import { technologies, type Technologies, type Category } from "@data/socials";
import { InfiniteScroll } from "./ui/infinite-scroll";
import { type IconType } from "react-icons";
import { FaQuestionCircle } from "react-icons/fa";
import {
	SiPostgresql,
	SiJetbrains,
	SiJavascript,
	SiPython,
	SiDocker,
	SiMacos,
	SiFlutter,
	SiGit,
	SiSubversion,
	SiNestjs,
	SiUbuntu,
	SiNodedotjs,
	SiMysql,
	SiSpringboot,
	SiSpring,
	SiApachetomcat,
	SiGitlab,
	SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { FileCode, LucideAppWindow, Code } from "lucide-react";

const iconMap: { [key: string]: IconType } = {
	// Languages
	"mdi:language-java": FaJava,
	"mdi:language-javascript": SiJavascript,
	"mdi:language-typescript": SiTypescript,
	"mdi:language-python": SiPython,
	"mdi:nodejs": SiNodedotjs,

	// Frameworks
	"mdi:framework-springboot": SiSpringboot,
	"mdi:framework-spring": SiSpring,
	"mdi:framework-nestjs": SiNestjs,
	"mdi:framework-flutter": SiFlutter,

	// Dev Tools
	"mdi:git": SiGit,
	"mdi:gitlab": SiGitlab,
	"mdi:subversion": SiSubversion,
	"mdi:jet-brains": SiJetbrains,

	// OS
	"mdi:ubuntu": SiUbuntu,
	"mdi:macos": SiMacos,

	// DevOps
	"mdi:docker": SiDocker,

	// Web Servers
	"cib:tomcat": SiApachetomcat,

	// Databases
	"cib:mysql": SiMysql,
	"cib:postgres": SiPostgresql,
};

const categories = Object.keys(technologies);
const groupSize = Math.ceil(categories.length / 3);
const categoryGroups = [
	categories.slice(0, groupSize),
	categories.slice(groupSize, groupSize * 2),
	categories.slice(groupSize * 2),
];

const Skills: React.FC = () => {
	useEffect(() => {
		document.querySelectorAll(".tech-badge").forEach((badge) => {
			badge.classList.add("tech-badge-visible");
		});
	}, []);

	return (
		<div className="z-30 flex w-full flex-col mt-12">
			<div className="space-y-2">
				{categoryGroups.map((group, groupIndex) => (
					<InfiniteScroll
						key={groupIndex}
						duration={30000}
						direction={groupIndex % 2 === 0 ? "normal" : "reverse"}
						showFade={false}
						className="flex flex-row justify-center"
					>
						{group.flatMap((category) =>
							technologies[category as keyof Technologies].map(
								(tech: Category, techIndex: number) => {
									const IconComponent = iconMap[tech.logo] || FaQuestionCircle;
									return (
										<div
											key={`${category}-${techIndex}`}
											className="tech-badge mr-5 flex items-center gap-3 rounded-full repo-card dark:text-neutral-400 text-neutral-500 p-3 border dark:border-neutral-700/60 border-neutral-200/80 bg-white/30 dark:bg-neutral-800/30 shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm"
											data-tech-name={`${category}-${techIndex}`}
										>
											<span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 p-2 text-lg shadow-inner dark:bg-neutral-700/30">
												<IconComponent className="tech-icon text-xl" />
											</span>
											<span className="font-medium text-neutral-800 dark:text-white">
												{tech.text}
											</span>
										</div>
									);
								},
							),
						)}
					</InfiniteScroll>
				))}
			</div>
		</div>
	);
};

export default Skills;
