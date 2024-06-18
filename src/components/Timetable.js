import React from 'react';
import './Timetable.css';

const Timetable = () => {
  return (
    <section className="timetable" id="timetable">
      <div className="container">
        <h2>Timetable</h2>
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
              <th>Sunday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>6:00 - 7:00</td>
              <td>Yoga</td>
              <td>Cardio</td>
              <td>Strength</td>
              <td>Yoga</td>
              <td>Cardio</td>
              <td>Yoga</td>
              <td>Rest</td>
            </tr>
            <tr>
              <td>7:00 - 8:00</td>
              <td>Strength</td>
              <td>Yoga</td>
              <td>Cardio</td>
              <td>Strength</td>
              <td>Yoga</td>
              <td>Cardio</td>
              <td>Rest</td>
            </tr>
            <tr>
              <td>8:00 - 9:00</td>
              <td>Cardio</td>
              <td>Strength</td>
              <td>Yoga</td>
              <td>Cardio</td>
              <td>Strength</td>
              <td>Yoga</td>
              <td>Rest</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Timetable;
