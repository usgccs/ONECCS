/*

TODO: 
pre-requisite:
- put your organization data in contentful

1. create orgpage folder under src/pages/about-us (ex. about-us/LSCS) - DONE
2. create LSCS.jsx and LSCS.css under orgpage folder - DONE
3. copy the code below to LSCS.jsx file and the LSCS.css file - DONE
4. rename the classnames and variables to your organization name (ex. LSCS) - DONE
   * classname, orgKey, and export default in the bottom of the file
5. rename the orgname in the css file (ex. .header_main_lscs) - DONE
6. add LSCS routes to components/routes.jsx route should be about-us/LSCS - DONE
   *ensure that you have imported the file properly in routes.jsx
7. View your new page in the browser to see if it works

*/
import {
  useContentfulProjects,
  useContentfulPersons,
  useContentfulOrganization,
} from "../../../hooks/useContentful";
import React, { useEffect, useState } from "react";
import "./ACM.css";
import OrgDescription from "../../../components/orgDescription/OrgDescription";
import ImageCarousel from "../../../components/imageCarousel/ImageCarousel";
import OrgHeader from "../../../components/orgheader/OrgHeader";
import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import PastEventsSection from "../../../components/past-events/PastEventSection";
import EventsSection from "../../../components/events/EventsSection";
import Contacts from "../../../components/contacts/Contacts";

const ACM = () => { // TODO: Change this to your organization name
  const orgKey = "ACM"; // TODO: Change this to your orgKey

  const [organization, setOrganization] = useState(null);

  const [persons, setPersons] = useState(null); // i know its a grammatical error but i am too lazy to change it now

  const [upcomingProjects, setUpcomingProjects] = useState(null);

  const [ongoingProjects, setOngoingProjects] = useState(null);

  const [pastProjects, setPastProjects] = useState(null);

  const fetchOrganization = useContentfulOrganization(orgKey);

  const fetchProjects = useContentfulProjects(orgKey);

  const fetchPersons = useContentfulPersons(orgKey);

  useEffect(() => {
    fetchOrganization().then((entries) => {
      setOrganization(entries.items[0].fields);
      console.log("Organization");
      console.log(entries.items[0].fields);
    });
  }, [fetchOrganization]);

  useEffect(() => {
    fetchProjects().then((entries) => {
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
    <div className="header_main_acm">

      <div>
        {
          // Conditional rendering of data
          organization && (
            <div>
              <OrgHeader
                imgUrl={organization.orgLogo.fields.file.url}
                orgKey={organization.orgKey}
                orgName={organization.orgName}
              />
              <OrgDescription
                orgName={organization.orgName}
                orgDescription={organization.orgDescription}
              />
            </div>
          )
        }

        {organization?.orgImages && (
          // Org Images Components
          <div>
            <ImageCarousel images={organization.orgImages} />
          </div>
        )}

        {Boolean(ongoingProjects?.length) && (
          // Section Header (Ongoing Projects)
          <div>
            <SectionHeader header={"Ongoing Projects"} />
            <EventsSection events={ongoingProjects} />
          </div>
        )}

        {Boolean(upcomingProjects?.length) && (
          <div>
            <SectionHeader header={"Upcoming Projects"} />
            <EventsSection events={upcomingProjects} />
          </div>
        )}

        {Boolean(pastProjects?.length) && (
          <div className="flex w-full flex-col">
          <SectionHeader header={"Past Projects"} />
          <div className="flex w-full">
            
            <PastEventsSection data={pastProjects} />
          </div>
        </div>
        )}

            {Boolean(persons?.length) && (
            <div className="flex w-full flex-col">
                <SectionHeader header={"Contact Persons"} />
                <div className="flex w-full">
                    <Contacts data={persons} />
                </div>
          </div>
            )}
      </div>
    </div>
  );
};

export default ACM; // TODO: Change this to your organization name
