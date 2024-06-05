import './App.css'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
// import timeGridPlugin from '@fullcalendar/timegrid'
// import jaLocale from '@fullcalendar/core/locales/ja';
//日本語表記
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import Sidebar from './Sidebar'


export default function App() {
  const handleDateClick = (arg) => {
    alert(arg.dateStr)
  }
  //日付をクリックすると日付をalertする関数
  const handleEventClick = (arg) => {
    alert(arg.event.title)
  }
  //イベントをクリックするとイベントのタイトルをalertする関数

  let contentHeight = '800px'; //カレンダーの高さ

  return (
    <div>
      <div>
        <Sidebar></Sidebar>
      </div>
      <div>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          weekends={true}
          events={[
            { title: '腕を休める期間', start: '2024-05-01', end: '2024-05-03' },
            { title: '太ももを鍛える日', date: '2024-05-02' }
          ]}
          contentHeight={contentHeight}
          dateClick={handleDateClick}
          eventClick={handleEventClick}
        // locales={[jaLocale]}
        //日本語表記
        />
      </div>
    </div>
  )
}