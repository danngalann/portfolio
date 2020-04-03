import React from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <div id="about">
      <div className="container">
        <h2 style={{ marginBottom: "4rem" }}>{t("About Me")}</h2>
        <p className="justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
          nesciunt provident ad perspiciatis omnis culpa. Aperiam quae eius at
          libero fugiat sequi odit praesentium quam alias facilis. Quasi
          recusandae, laudantium voluptatibus iusto nesciunt animi officiis
          doloremque sapiente officia, perspiciatis, quaerat corporis sunt
          expedita delectus commodi accusantium saepe. Similique, dolores! Ea
          officiis exercitationem earum facilis voluptate aperiam nulla ipsa
          dolorem esse quis sunt, illo quas tenetur rerum soluta ducimus beatae
          totam harum reprehenderit placeat tempore! Culpa blanditiis libero
          praesentium illum saepe voluptas autem sunt mollitia, maxime quaerat
          in! Esse aliquam fugiat sit necessitatibus odit, omnis illo
          perferendis, laudantium vitae doloremque voluptatibus!
        </p>
      </div>
    </div>
  );
}
