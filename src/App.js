import './App.css'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import { useState } from 'react'
import EventPopup from './components/EventPopup';

let contentHeight = '800px'; //カレンダーの高さ

export default function App() {
  const [currentView, setCurrentView] = useState('calendar')
  const componentA = "A";
  const componentB = "B";
  const calendar = "calendar";
  const renderComponent = () => {
    switch (currentView) {
      case componentA: return <ComponentA />;
      case componentB: return <ComponentB />;
      case calendar: return <Calendar />
      default: return <Calendar />
    }
  }
  return (
    <div className='container'>
      <div className="side-bar">
        <div className='side'>
          <div onClick={() => setCurrentView('calendar')}>
            カレンダー
          </div>
          <div onClick={() => setCurrentView('A')}>
            筋肉を選択（開発中）
          </div>
          <div onClick={() => setCurrentView('B')}>
            仮のもの２
          </div>
        </div>
      </div>
      {renderComponent()}
    </div >
  )
}

const ComponentA = () => {
  return (
    <div>ここはA地区</div>
  )
}

const ComponentB = () => {
  return (
    <div>ここはB地区</div>
  )
}

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [popupOpen, setPopupOpen] = useState(false);
  const [selecetedDate, setSelectedDate] = useState(null);

  const dateClick = (info) => {
    setSelectedDate(info.dateStr);
    setPopupOpen(true);
  };

  const addEvent = (title) => {
    setEvents([...events, { id: String(Date.now()), title, start: selecetedDate }]);
  };

  const deleteEventClick = (info) => {
    if (window.confirm(`Do you want to delete the event '${info.event.title}'?`)) {
      setEvents(events.filter(event => event.id !== info.event.id));
    }
  }

  const closePopup = () => {
    setPopupOpen(false);
  }

  return (
    <div className='calendar-container'>
      <div className='calendar'>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          weekends={true}
          contentHeight={contentHeight}
          events={events}
          dateClick={dateClick}
          eventClick={deleteEventClick}
        />
        {popupOpen && (
          <EventPopup onClose={() => setPopupOpen(false)} onSave={addEvent} onClick={closePopup} />
        )}

      </div>

    </div>)
}
