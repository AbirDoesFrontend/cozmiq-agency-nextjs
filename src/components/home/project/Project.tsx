"use client";

import BadgeLabel from "@/components/BadgeLabel";
import BadgeSecondary from "@/components/global/BadgeSecondary";
import Image from "next/image";
import React, { useMemo, useState } from "react";

import GamioImage from "../../../../public/img/gamio-project.png";
import GlowyImage from "../../../../public/img/glowy-project.png";
import VrboxImage from "../../../../public/img/vrbox-project.png";
import PrimaryBtn from "@/components/global/PrimaryBtn";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const PROJECTS = [
  {
    id: "gamio",
    title: "Gamio",
    tag: "UI/UX Design",
    category: "UI/UX Design",
    image: GamioImage,
    heading: "Gamio Game Landing Page",
    description:
      "A playful, conversion-focused landing page for Gamio — built with pixel-perfect UI and smooth interactions.",
    detailsUrl: "/projects/gamio",
  },
  {
    id: "glowy",
    title: "Glowy",
    tag: "WordPress Development",
    category: "Web Development",
    image: GlowyImage,
    heading: "Skin Care Landing Page",
    description:
      "A modern skincare landing page implemented on WordPress with custom blocks and responsive layouts.",
    detailsUrl: "/projects/glowy",
  },
  {
    id: "vrbox",
    title: "Vrbro",
    tag: "NestJS Development",
    category: "Backend Development",
    image: VrboxImage,
    heading: "VR Product Landing Page",
    description:
      "A high-performance landing page paired with a NestJS backend for product demos and lead capture.",
    detailsUrl: "/projects/vrbox",
  },
];

const TOP_CLASSES = ["top-10", "top-20", "top-40"];

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");

  const categories = useMemo(() => {
    const set = new Set(PROJECTS.map((p) => p.category));
    return ["All Projects", ...Array.from(set)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All Projects") return PROJECTS;
    return PROJECTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section className="project-section">
      <div className="wrapper projects">
        <div className="project-content-wrapper">
          <div className="project-content-left">
            <BadgeSecondary always-dark>Projects</BadgeSecondary>
            <h2 className="text-white">Our Work Speaks for Itself</h2>
            <p className="md:max-w-[600px] text-[#FFFFFF]">
              Take a look at our portfolio to see the incredible projects
              we&apos;ve delivered for clients across various industries.
            </p>
          </div>
          <div className="project-content-right">
            <PrimaryBtn text={"See Our Work"} />
          </div>
        </div>

        {PROJECTS.length > 3 && (
          <button id="scrollBtn" className="btn-primary">
            See More →
          </button>
        )}

        <div
          id="projectButtons"
          className="project-filter-buttons overflow-x-auto"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`project-filter-btn text-white hover:text-[#0F1016] hover:bg-white mr-3 whitespace-nowrap py-2 px-4 rounded-full transition-all duration-150 cursor-pointer${
                selectedCategory === cat ? "bg-white text-[#0F1016]" : ""
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat.replace(" ", "\u00A0")}
            </button>
          ))}
        </div>

        <div className="gap-8 grid project-grid mx-auto">
          {filteredProjects.map((project, idx) => {
            const topClass = TOP_CLASSES[idx % TOP_CLASSES.length];
            return (
              <div
                key={project.id}
                className={`sticky projects-grid ${topClass}`}
              >
                <div className="flex justify-between items-center project-galary-heading">
                  <h2 className="text-white">{project.title}</h2>
                  <BadgeLabel>{project.tag}</BadgeLabel>
                </div>

                <div className="items-start gap-6 grid md:grid-cols-2 mt-4 project-single-galary">
                  <div className="rounded-[20px] w-full h-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.title} Project Thumbnail`}
                      width={1000}
                      height={1000}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="project-galary-content">
                    <h3 className="text-white">{project.heading}</h3>
                    <p className="mt-2 text-white">{project.description}</p>

                    <Link
                      href={project.detailsUrl}
                      className="inline-flex items-center gap-3 bg-gray-800/50 backdrop-blur mt-6 px-8 py-3.5 border border-gray-600 rounded-[100px] font-medium text-gray-300 text-lg duration-200 cursor-pointer"
                    >
                      View Details <FaArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}

          {filteredProjects.length === 0 && (
            <p className="text-gray-300">No projects found in this category.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Project;
