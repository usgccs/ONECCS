import {
    useContentfulProjects,
    useContentfulPersons,
    useContentfulOrganization,
} from "../../../hooks/useContentful";
import React, { useEffect, useState } from "react";
import "./PTS.css";
import OrgDescription from "../../../components/orgDescription/OrgDescription";
import ImageCarousel from "../../../components/imageCarousel/ImageCarousel";
import OrgHeader from "../../../components/orgheader/OrgHeader";
import SectionHeader from "../../../components/sectionHeader/SectionHeader";
import PastEventsSection from "../../../components/past-events/PastEventSection";
import EventsSection from "../../../components/events/EventsSection";

const PTS = () => {
    const orgKey = "PTS";

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
        <div className="header_main_pts">

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

                {ongoingProjects && (
                    // Section Header (Ongoing Projects)
                    <div>
                        <SectionHeader header={"Ongoing Projects"} />
                        <EventsSection events={ongoingProjects} />
                    </div>
                )}

                {upcomingProjects && (
                    <div>
                        <SectionHeader header={"Upcoming Projects"} />
                        <EventsSection events={upcomingProjects} />
                    </div>
                )}

                {pastProjects && (
                    <div>
                        <SectionHeader header={"Past Projects"} />
                        <PastEventsSection data={pastProjects} />
                    </div>
                )}

                {
                    // Conditional rendering of data
                    persons && (
                        <div>
                            <SectionHeader header={"Contact Persons"} />
                            <div className="my-10 text-center">
                                <ul>
                                    {persons.map((person, index) => (
                                        <li key={index}>{person.fields.name}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default PTS; 
