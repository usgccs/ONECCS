import {
  useContentfulProjects,
  useContentfulPersons,
  useContentfulOrganization,
} from "../../../hooks/useContentful";
import React, { useEffect, useState } from "react";
import "./HomePage.css";

const HomePage = () => {
  const orgKey = "CSG";

  const [organization, setOrganization] = useState(null);

  const [projects, setEntries] = useState(null); 

  const [persons, setPersons] = useState(null); // i know its a grammatical error but i am too lazy to change it now

  const [upcomingProjects, setUpcomingProjects] = useState(null);

  const [ongoingProjects, setOngoingProjects] = useState(null);

  const [pastProjects, setPastProjects] = useState(null);

  const fetchOrganization = useContentfulOrganization(orgKey); // fetching organization data

  const fetchProjects = useContentfulProjects(orgKey); // fetching projects data

  const fetchPersons = useContentfulPersons(orgKey); // fetching persons data

  useEffect(() => {
    fetchOrganization().then((entries) => {
      setOrganization(entries.items[0].fields);
      console.log("Organization");
      console.log(entries.items[0].fields);
    });
  }, [fetchOrganization]);

  useEffect(() => {
    fetchProjects().then((entries) => {
      setEntries(entries.items);
      console.log("Projects");
      console.log(entries.items);
      filterProjects(entries.items);
    });
  }, [fetchProjects]);

  useEffect(() => {
    console.log("Upcoming Projects");
    console.log(upcomingProjects);
  }, [upcomingProjects]);

  useEffect(() => {
    console.log("Ongoing Projects");
    console.log(ongoingProjects);
  }, [ongoingProjects]);

  useEffect(() => {
    console.log("Past Projects");
    console.log(pastProjects);
  }, [pastProjects]);

  useEffect(() => {
    fetchPersons().then((entries) => {
      setPersons(entries.items);
      console.log("Persons");
      console.log(entries.items);
    });
  }, [fetchPersons]);

  // Function to filter projects
  const filterProjects = (projects) => {
    const upcoming = [];
    const ongoing = [];
    const past = [];

    projects.forEach((project) => {
      switch (project.fields.projectClassification) {
        case "Upcoming":
          upcoming.push(project);
          break;
        case "Ongoing":
          ongoing.push(project);
          break;
        case "Past":
          past.push(project);
          break;
        default:
          console.log(
            "Unknown project classification:",
            project.fields.projectClassification
          );
      }
    });
    setUpcomingProjects(upcoming);
    setOngoingProjects(ongoing);
    setPastProjects(past);
  };

  return (
    <div className="header_main">
      <h1>Organization Page</h1>

        {
            // Organization Header Component
            // Org Images Components
            // Section Header (Ongoing Projects)
            // Projects
            // Section Header (Upcoming Projects)
            // Projects
            // Section Header (Past Projects)
            // Projects
            // Section Header (Contact Person)
            // Contact Person Component
        }

      <div>
        {
          // Conditional rendering of data
          organization && (
            <div>
              <h1>{organization.orgName}</h1>
              <p>{organization.orgDescription}</p>
            </div>
          )
        }

        {organization?.orgImages && (
          <div>
            <h1>Images</h1>
            <ul>
              {organization.orgImages.map((image, index) => (
                <li key={index}>
                  <img src={image.fields.file.url} alt={image.fields.title} />
                </li>
              ))}
            </ul>
          </div>
        )}

        {
          // Conditional rendering of data
          projects && (
            <div>
              <h1>Projects</h1>
              <ul>
                {projects.map((project, index) => (
                  <li key={index}>{project.fields.projectTitle}</li>
                ))}
              </ul>
            </div>
          )
        }

        {upcomingProjects && (
          <div>
            <h1>Upcoming Projects</h1>
            <ul>
              {upcomingProjects.map((project, index) => (
                <li key={index}>{project.fields.projectTitle}</li>
              ))}
            </ul>
          </div>
        )}

        {ongoingProjects && (
          <div>
            <h1>Ongoing Projects</h1>
            <ul>
              {ongoingProjects.map((project, index) => (
                <li key={index}>{project.fields.projectTitle}</li>
              ))}
            </ul>
          </div>
        )}

        {pastProjects && (
          <div>
            <h1>Past Projects</h1>
            <ul>
              {pastProjects.map((project, index) => (
                <li key={index}>{project.fields.projectTitle}</li>
              ))}
            </ul>
          </div>
        )}

        {
          // Conditional rendering of data
          persons && (
            <div>
              <h1>Contact Person</h1>
              <ul>
                {persons.map((person, index) => (
                  <li key={index}>{person.fields.name}</li>
                ))}
              </ul>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default HomePage;
