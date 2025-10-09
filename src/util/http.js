import axios from "axios";


// Function to fetch events from the Google Calendar
const fetchEvents = async (calendarId) => {
   if (!calendarId) {
    console.error("No calendar ID provided to fetchEvents");
    return [];
  }
  const BASE_URL =
  process.env.REACT_APP_CALENDAR_URL +
  calendarId +
  "/events";

  const apiKey = calendarId.includes("casastella")
  ? process.env.REACT_APP_API_KEY_CASA_STELLA
  : process.env.REACT_APP_API_KEY_CASA_MIA;

  let allEvents = [];
  let pageToken = null;
  try {
    do {
      const response = await axios.get(BASE_URL, {
        params: {
          key: apiKey,
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
            console.log("📅 Mapped events:", events);

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
