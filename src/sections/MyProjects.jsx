import React from "react";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState, useCallback } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { PROJECTS } from "../utils/data";
import ProjectCard from "../components/ProjectCard";

const MyProjects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateScrollButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", updateScrollButtons);
    updateScrollButtons();
  }, [emblaApi, updateScrollButtons]);

  return (
    <section id="projects" className="mt-14 scroll-mt-14">
      <div className="container max-w-7xl mx-auto px-8 bg-linear-to-b from-[#ECFAFCFF] to-[#ffffff] rounded-2xl md:px-10 py-10">
        <h4 className="section-title">Recent Projects</h4>

        <p className="text-sm text-center mt-4 leading-6">
          From concept to deployment, I have worked on a variety of projects.
          Here are a few of my recent projects. I focus on clean code,
          performace and user experience.
        </p>

        <div className="relative mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex pt-14 pb-8">
              {PROJECTS.map((project) => (
                <div
                  key={project.id}
                  className="min-w-[100%] sm:min-w-[50%] lg:min-w-[33%]"
                >
                  <ProjectCard
                    key={project.id}
                    imgUrl={project.image}
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            className={`arrow-btn -left-2 ${
              !canScrollPrev ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => emblaApi && emblaApi.scrollPrev()}
            disabled={!canScrollPrev}
          >
            <IoIosArrowForward className="rotate-180" />
          </button>
          <button
            className={`arrow-btn -right-3 ${
              !canScrollPrev ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => emblaApi && emblaApi.scrollNext()}
            disabled={!canScrollNext}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
