import { createClient } from 'contentful';
import { useCallback } from 'react';

const client = createClient({
  space: "61mmmjz7t2hb",
  accessToken: "F2b0mPULTGQo_9xpxBUtYWuJjLyeUAyjEW6i58I3JDQ",
});

//query using entryID
function useContentfulEntry(entryID) {
  const fetchEntry = useCallback(async () => {
    try {
      const entry = await client.getEntry(entryID);
      return entry;
    } catch (error) {
      console.error(error);
    }
  }, [entryID]);  // Only create a new function if entryID changes

  return fetchEntry;
}

//query using content type
function useContentfulContentType(contentType) {
  const fetchEntries = useCallback(async () => {
    try {
      const entries = await client.getEntries({
        content_type: contentType,
      });
      return entries;
    } catch (error) {
      console.error(error);
    }
  }, [contentType]);  // Only create a new function if contentType changes

  return fetchEntries;
}


//query Project using orgKey
function useContentfulOrganization(orgKey) {
  const fetchEntries = useCallback(async () => {
    try {
      const entries = await client.getEntries({
        content_type: 'orgInformation',
        'fields.orgKey[all]': orgKey,
      });
      return entries;
    } catch (error) {
      console.error(error);
    }
  }, [orgKey]);  // Only create a new function if contentType changes

  return fetchEntries;
}


//query Project using orgKey
function useContentfulProjects(orgKey) {
  const fetchEntries = useCallback(async () => {
    try {
      const entries = await client.getEntries({
        content_type: 'orgProjects',
        'fields.orgKey[all]': orgKey,
      });
      return entries;
    } catch (error) {
      console.error(error);
    }
  }, [orgKey]);  // Only create a new function if contentType changes

  return fetchEntries;
}

//query Persons using orgKey
function useContentfulPersons(orgKey) {
  const fetchEntries = useCallback(async () => {
    try {
      const entries = await client.getEntries({
        content_type: 'contactPerson',
        'fields.orgKey[all]': orgKey,
      });
      return entries;
    } catch (error) {
      console.error(error);
    }
  }, [orgKey]);  // Only create a new function if contentType changes

  return fetchEntries;
}

function useContentfulFlowcharts() {
  const keyFlowchart = "CCS-Flowcharts"
  const fetchEntry = useCallback(async () => {
    try {
      const entries = await client.getEntries({
        content_type: 'flowchart',
        'fields.objKey[all]': keyFlowchart,
      });
      return entries;
    } catch (err) {
      console.error(err);
    }
  }, [keyFlowchart]);  // Only create a new function if contentType changes

  return fetchEntry;
}


function useContentfulOrgAbout() {
  const fetchEntries = useCallback(async () => {
    try {
      const entries = await client.getEntries({
        content_type: 'aboutUsOrganizations',
      });
      return entries;
    } catch (error) {
      console.error(error);
    }
  }, []);  
  return fetchEntries;
}



export { useContentfulEntry, useContentfulContentType, useContentfulProjects, useContentfulPersons, useContentfulOrganization, useContentfulFlowcharts, useContentfulOrgAbout };