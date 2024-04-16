import "./calendarStyles.css";
import { useState } from "react";



function Calendar() {

  const [date, setDate] = useState(new Date());
 

  const daysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    return new Date(year, month, 0).getDate();
  };

  const firstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const weekDays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

  const renderCalendar = () => {

    const totalDays = daysInMonth(date);
    const startingDay = firstDayOfMonth(date);
    const calendar = [];
    const prevMonthDays = daysInMonth(new Date(date.getFullYear(), date.getMonth() - 1, 1));

    for (let i = 0; i < startingDay; i++) {
      // Calculate the day to be displayed
      const day = prevMonthDays - i;
      calendar.unshift(
          <div className="calendar-day placeholders" key={`empty-${i}`}>
              {day}
          </div>
      );
  }
    for (let i = 1; i <= totalDays; i++) {
      calendar.push(
         <div className="calendar-day" key={i}>
           {i}
         </div>
    
      );
    }

   

    return calendar;
  };

  const handlePrevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };



  return (
    <div className="calendar">
      <div className="calendar-header">
        {/* <button onClick={handlePrevMonth}>Prev</button>
        <h2>{date.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
        <button onClick={handleNextMonth}>Next</button> */}
        <div className="working-days-container">
          <span className="working-days-color-code"></span>
          <p className="working-days-text">Рабочий день</p>
        </div>

        <div className="off-days-container">
          <span className="off-days-color-code"></span>
          <p className="off-days-text">Выходной</p>
        </div>
      </div>
      <div className="week-days-container">
      {weekDays.map((day,index)=>{
        return (
            <div 
              key={index}
              className="week-days"
            >
                {day}
            </div>
        )
      })}
      </div>
      <div className="calendar-grid">
        {renderCalendar()}
      </div>
    </div>
  );
}

export default Calendar;
