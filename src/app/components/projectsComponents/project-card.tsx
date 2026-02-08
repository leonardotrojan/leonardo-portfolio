import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { projects } from "@/data/projects";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
    project: keyof typeof projects
}

const ProjectCard = ({project}: ProjectCardProps) => {
    const proj = projects[project]
    return ( 
        <div>
        <Card className="group relative mx-auto w-full max-w-sm pt-0
                        bg-gradient-to-br from-[rgb(var(--card-gradient-start)/1)] to-[rgb(var(--card-gradient-end)/1)]
                        transition-all duration-300 ease-out hover:scale-[1.04] border border-zinc-300 dark:border-zinc-700">
        <div className="absolute inset-0 z-30 aspect-video" />
        <img
            src={proj.url}
            alt=""
            className="relative aspect-video w-full object-cover"
        />
        <CardHeader>
            <CardAction>
            </CardAction>
            <CardTitle>{proj.name}</CardTitle>
            <CardDescription>
            {proj.description}
            <div className="flex gap-3 mt-3 items-center opacity-100 md:opacity-0 translate-y-2 transition-all
                            duration-300 ease-out md:group-hover:opacity-100 group-hover:translate-y-0
                            delay-75 md:group-hover:opacity-100">
                {Object.values(proj.stack).map((tech) => (
                    <div key={tech}>
                        <Image 
                          src={tech}
                          alt="tecnologia"
                          width={35}
                          height={35}
                        />
                    </div>
                ))}
            </div>
            </CardDescription>
        </CardHeader>
        <CardFooter className="flex gap-2">
            {proj.liveUrl ? (
              <>
                <Link
                  href={proj.repoUrl}
                  target="_blank"
                  className="flex-[0_0_10%] flex items-center justify-center bg-black border border-zinc-700
                            rounded-md hover:scale-105 transition"
                >
                <Image 
                  src="/icons/github.webp"
                  alt="repositório github"
                  width={35}
                  height={35}
                />
                </Link>
                <Link
                  href={proj.liveUrl}
                  target="_blank"
                  className="flex-[0_0_80%]"
                >
                    <Button className="w-full cursor-pointer">
                        <ExternalLink />
                        Página do projeto
                    </Button>
                </Link>
              </>
            ) : (
                <Link
                    href={proj.repoUrl}
                    target="_blank"
                    className="w-full flex items-center justify-center bg-black border border-zinc-700
                                rounded-md hover:scale-105 transition"
                    >
                    <Image
                        src="/icons/github.webp"
                        alt="repositório github"
                        width={40}
                        height={40}
                    />
                </Link>
                )}
        </CardFooter>
        </Card>
    </div>
     );
}
 
export default ProjectCard;