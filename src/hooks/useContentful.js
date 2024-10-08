import { createClient } from 'contentful';
import { useCallback } from 'react';

const space = import.meta.env.VITE_APP_SPACE_ID;
const token = import.meta.env.VITE_APP_ACCESS_TOKEN

const client = createClient({
  space: space,
  accessToken: token,
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

function useContentfulFlowcharts(idNum) {
  const fetchEntry = useCallback(async () => {
    try {
      const entries = await client.getEntries({
        content_type: 'aboutUsFlowcharts',
        'fields.idNum[all]': idNum,
      });
      return entries;
    } catch (err) {
      console.error(err);
    }
  }, [idNum]);  // Only create a new function if contentType changes

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