import axios from "axios";
const BASE_URL =
  process.env.REACT_APP_CALENDAR_URL +
  process.env.REACT_APP_CALENDAR_ID +
  "/events";

// Function to fetch events from the Google Calendar
const fetchEvents = async () => {
  let allEvents = [];
  let pageToken = null;
  try {
    do {
      const response = await axios.get(BASE_URL, {
        params: {
          key: process.env.REACT_APP_API_KEY,
          timeMin: new Date().toISOString(),
          singleEvents: true,
          orderBy: "startTime",
          maxResults: 2500,
          pageToken: pageToken,
        },
      });
      const events = response.data.items.map((event) => ({
        startDate: event.start.dateTime || event.start.date,
        endDate: event.end.dateTime || event.end.date,
        summary: event.summary,
      }));
      allEvents = allEvents.concat(events);
      // Update the pageToken to get the next page of results
      pageToken = response.data.nextPageToken;
    } while (pageToken);
    return allEvents;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};
export default fetchEvents;

// Fetch and display the events
