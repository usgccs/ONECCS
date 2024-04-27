import { createClient } from 'contentful';


function useContentful(entryID) {
  const client = createClient({
    space: "61mmmjz7t2hb",
    accessToken: "F2b0mPULTGQo_9xpxBUtYWuJjLyeUAyjEW6i58I3JDQ",
  });

  const fetchEntry = async () => {
    try {
      const entry = await client.getEntry(entryID);
      return entry;
    } catch (error) {
      console.error(error);
    }
  };

  return fetchEntry;
}

export default useContentful;