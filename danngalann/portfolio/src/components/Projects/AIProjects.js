import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import ProjectCard from "./ProjectCard";
import Pagination from "./Pagination";

export default function AIProjects({ projects }) {
  const { t } = useTranslation();
  const [currPage, setCurrPage] = useState(1);
  const projectsPerPage = 5;

  // Get current posts
  const indexOfLastPost = currPage * projectsPerPage;
  const indexOfFirstPost = indexOfLastPost - projectsPerPage;
  const currProjects = projects.slice(indexOfFirstPost, indexOfLastPost);

  // Pagination function
  const paginate = (page) => setCurrPage(page);

  return (
    <div id="aiprojects">
      <div className="project-section-header">
        {t("projects.subheaders.ai")}
      </div>
      <div className="project-gallery">
        {currProjects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
      <Pagination
        nPerPage={projectsPerPage}
        nTotal={projects.length}
        currPage={currPage}
        paginate={paginate}
      />
    </div>
  );
}
