import './App.css'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
// import timeGridPlugin from '@fullcalendar/timegrid'
// import jaLocale from '@fullcalendar/core/locales/ja';
//日本語表記
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import { useState } from 'react'

let contentHeight = '800px'; //カレンダーの高さ

export default function App() {
  const [isCalendar, setIsCalendar] = useState('calendar')
  const renderComponet = () => {
    switch (isCalendar) {
      case 'A': return <ComponentA />;
      case 'B': return <ComponentB />;
      case 'calendar': return <Calendar />
      default: return <Calendar />
    }
  }
  return (
    <div className='container'>
      <div className="side-bar">
        <div>
          <div onClick={() => setIsCalendar('calendar')}>
            カレンダー
          </div>
          <div onClick={() => setIsCalendar('A')}>
            仮のもの１
          </div>
          <div onClick={() => setIsCalendar('B')}>
            仮のもの２
          </div>
        </div>
      </div>
      {renderComponet()}
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
  //日付をクリックすると日付をalertする関数
  const handleDateClick = (arg) => {
    alert(arg.dateStr)
  }

  //イベントをクリックするとイベントのタイトルをalertする関数
  const handleEventClick = (arg) => {
    alert(arg.event.title)
  }

  return (
    <div className='calendar'>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={[
          { title: '腕を休める期間', start: '2024-05-01', end: '2024-05-03' },
          { title: '太ももを鍛える日', date: '2024-05-02' }
        ]}
        contentHeight='800px'
        dateClick={handleDateClick}
        eventClick={handleEventClick}
      />
    </div>
  )
}
