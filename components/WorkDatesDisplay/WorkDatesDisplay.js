import React, { Fragment } from "react";
import { DatesDisplay, DeleteButton, Dates } from "./WorkDatesDisplay.styled";
import { format } from "date-fns";

export default function WorkDatesDisplay({ workDates, onDateRemove }) {
  return (
    <DatesDisplay>
      <h4>Your Vacation Dates:</h4>
      {workDates && workDates.length > 0 ? (
        <ul>
          {workDates.map((workDate) => (
            <li key={workDate._id}>
              {workDate.vacationDates.map((dateRange, index) => (
                <Fragment key={index}>
                  <Dates>
                    From: {format(new Date(dateRange.startDate), "dd/MM/yyyy")}
                    To: {format(new Date(dateRange.endDate), "dd/MM/yyyy")}
                  </Dates>
                  <DeleteButton
                    onClick={() =>
                      onDateRemove(index, workDate._id, null, dateRange)
                    }
                  >
                    Remove
                  </DeleteButton>
                </Fragment>
              ))}
            </li>
          ))}
        </ul>
      ) : (
        <p>No Vacations yet!</p>
      )}
      <h4>Your Days-Off:</h4>
      {workDates && workDates.length > 0 ? (
        <ul>
          {workDates.map((workDate) => (
            <li key={workDate._id}>
              {workDate.daysOff.map((dayOff, index) => (
                <Fragment key={index}>
                  <Dates>
                    Day Off: {format(new Date(dayOff), "dd/MM/yyyy")}
                  </Dates>
                  <DeleteButton
                    onClick={() => onDateRemove(index, workDate._id, dayOff)}
                  >
                    Remove
                  </DeleteButton>
                </Fragment>
              ))}
            </li>
          ))}
        </ul>
      ) : (
        <p>No Days Off yet!</p>
      )}
    </DatesDisplay>
  );
}
