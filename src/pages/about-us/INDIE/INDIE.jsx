import {
    useContentfulProjects,
    useContentfulPersons,
    useContentfulOrganization,
} from "../../../hooks/useContentful";
import React, { useEffect, useState } from "react";
import "./INDIE.css";
import OrgDescription from "../../../components/orgDescription/OrgDescription";
import ImageCarousel from "../../../components/imageCarousel/ImageCarousel";
import OrgHeader from "../../../components/orgheader/OrgHeader";
import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import PastEventsSection from "../../../components/past-events/PastEventSection";
import EventsSection from "../../../components/events/EventsSection";
import Contacts from "../../../components/contacts/Contacts";

const INDIE = () => {
    const orgKey = "INDIE";

    const [organization, setOrganization] = useState(null);

    const [persons, setPersons] = useState(null);

    const [upcomingProjects, setUpcomingProjects] = useState(null);

    const [ongoingProjects, setOngoingProjects] = useState(null);

    const [pastProjects, setPastProjects] = useState(null);

    const fetchOrganization = useContentfulOrganization(orgKey);

    const fetchProjects = useContentfulProjects(orgKey);

    const fetchPersons = useContentfulPersons(orgKey);

    useEffect(() => {
        fetchOrganization().then((entries) => {
            setOrganization(entries.items[0].fields);
        });
    }, [fetchOrganization]);

    useEffect(() => {
        fetchProjects().then((entries) => {
            filterProjects(entries.items);
        });
    }, [fetchProjects]);

    useEffect(() => {
    }, [upcomingProjects]);

    useEffect(() => {
    }, [ongoingProjects]);

    useEffect(() => {
    }, [pastProjects]);

    useEffect(() => {
        fetchPersons().then((entries) => {
            setPersons(entries.items);
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
            }
        });
        setUpcomingProjects(upcoming);
        setOngoingProjects(ongoing);
        setPastProjects(past);
    };

    return (
        <div className="header_main_indie">

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
  
          {Boolean(upcomingProjects?.length)&& (
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

export default INDIE; 
