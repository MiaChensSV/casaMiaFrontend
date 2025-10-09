import "../Calendar/Availability.css";
import React, { useState, useEffect } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { isBefore, isSameDay, startOfDay, isWithinInterval } from "date-fns";
import { getResponsiveMonthsShown } from "../ResponsiveMonths";
import { useDispatch } from "react-redux";
import fetchEvents from "../../util/http";
import { setCalendarEvent } from "../../store/calendarReducer";
import { useAppSelector } from "../../store";
import adjustEventEndDate from "../../util/AdjustEndDate";
import { useParams } from "react-router-dom"; 

const Availability = ({ defaultMonthsShown = 1 }) => {
  const { apartmentId } = useParams();
  const [monthsShown, setMonthsShown] = useState(defaultMonthsShown);
  const [getDayClass, setGetDayClass] = useState(() => () => "");
  const [isDayBlocked, setIsDayBlocked] = useState(() => () => false);
  const bookedDateRanges = useAppSelector((state) => state.calendar.events);

  const dispatch = useDispatch();

  // Choose calendar ID based on URL
  const calendarId =
    apartmentId === "casa-stella"
      ? process.env.REACT_APP_CALENDAR_ID_CASA_STELLA
      : process.env.REACT_APP_CALENDAR_ID_CASA_MIA;

  useEffect(() => {
    if (bookedDateRanges == null) {
      fetchEvents(calendarId).then((result) => {
        const adjustedEvents = result.map(adjustEventEndDate);
        dispatch(setCalendarEvent(adjustedEvents));
      });
    } else {
      const eventRanges = bookedDateRanges.map((range) => ({
        start: startOfDay(new Date(range.startDate)),
        end: startOfDay(new Date(range.endDate)),
      }));

      const getDayClassFunc = (date) => {
        const dateStart = startOfDay(date);
        // find which ranges include current day?
        const ranges = eventRanges.filter((range) =>
          isWithinInterval(dateStart, { start: range.start, end: range.end })
        );
        if (ranges.length === 0) {
          return "";
        } // Not booked
        if (ranges.length === 2) {
          return "full-booked";
        }
        if (ranges.length === 1 && isSameDay(dateStart, ranges[0].start)) {
          return "start-booked";
        }
        if (ranges.length === 1 && isSameDay(dateStart, ranges[0].end)) {
          return "end-booked";
        }
        return "mid-booked"; // Somewhere in between
      };
      const isDayBlockedFunc = (date) => {
        const dateStart = startOfDay(date);
        const today = startOfDay(new Date());
        const dayClass = getDayClassFunc(date);
        return (
          isBefore(dateStart, today) ||
          dayClass === "full-booked" ||
          dayClass === "mid-booked"
        );
      };
      setIsDayBlocked(() => isDayBlockedFunc);
      setGetDayClass(() => getDayClassFunc);
    }
  }, [dispatch, bookedDateRanges, calendarId]);

  useEffect(() => {
    const updateMonthsShown = () => setMonthsShown(getResponsiveMonthsShown());
    updateMonthsShown();
    window.addEventListener("resize", updateMonthsShown);
    return () => {
      window.removeEventListener("resize", updateMonthsShown);
    };
  }, []);

  const today = startOfDay(new Date());

  return (
    <div className="calendar-container">
      <ReactDatePicker
        inline
        monthsShown={monthsShown}
        disabledKeyboardNavigation
        filterDate={(date) => !isDayBlocked(date)}
        minDate={new Date()}
        renderDayContents={(day, date) => {
          const isToday = isSameDay(startOfDay(date), today);
          const dayClass = getDayClass(date);
          return (
            <div className={`day ${isToday ? "today" : ""} ${dayClass}`}>
              {day}
            </div>
          );
        }}
      />
    </div>
  );
};

export default Availability;
