document.addEventListener("DOMContentLoaded", () => {
  // Load Projects
  fetch("data/projects.json")
    .then(response => {
      if (!response.ok) throw new Error("Failed to load project data");
      return response.json();
    })
    .then(data => {
      const list = document.getElementById("project-list");
      if (list && data.projects) {
        data.projects.forEach(project => {
          const item = document.createElement("li");
          item.innerHTML = `<strong>${project.title}</strong> – ${project.description}`;
          list.appendChild(item);
        });
      }
    })
    .catch(error => console.error("Error loading projects:", error));

  // Load Certifications & Workshops
fetch("data/certificates.json")
  .then(response => response.json())
  .then(data => {
    const certList = document.getElementById("certification-list");
    const workshopList = document.getElementById("workshop-list");

    if (certList && data.certificates) {
      data.certificates.forEach(cert => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${cert.title}</strong> – ${cert.description}`;
        certList.appendChild(li);
      });
    }

    if (workshopList && data.workshops) {
      data.workshops.forEach(ws => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${ws.title}</strong> – ${ws.description}`;
        workshopList.appendChild(li);
      });
    }
  })
  .catch(error => console.error("Error loading certifications/workshops:", error));

  // Load Experience
  fetch("data/experience.json")
    .then(response => {
      if (!response.ok) throw new Error("Failed to load experience");
      return response.json();
    })
    .then(data => {
      const container = document.getElementById("experience-list");
      if (container && data.experiences) {
        data.experiences.forEach(exp => {
          const section = document.createElement("section");
          const heading = document.createElement("h3");
          heading.textContent = exp.title;
          section.appendChild(heading);

          const ul = document.createElement("ul");
          exp.details.forEach(detail => {
            const li = document.createElement("li");
            li.textContent = detail;
            ul.appendChild(li);
          });

          section.appendChild(ul);
          container.appendChild(section);
        });
      }
    })
    .catch(error => console.error("Error loading experience:", error));
});
