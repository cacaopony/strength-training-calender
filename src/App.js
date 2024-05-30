import './App.css'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
// import timeGridPlugin from '@fullcalendar/timegrid'
// import jaLocale from '@fullcalendar/core/locales/ja';
//日本語表記
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import { useMediaQuery } from 'react-responsive'; //needed for responsive desingn


export default function App() {
  const handleDateClick = (arg) => {
    alert(arg.dateStr)
  }
  //日付をクリックすると日付をalertする関数
  const handleEventClick = (arg) => {
    alert(arg.event.title)
  }
  //イベントをクリックするとイベントのタイトルをalertする関数
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  });
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  let contentHeight;
  if (isDesktopOrLaptop) {
    contentHeight = '800px';
  } else if (isBigScreen) {
    contentHeight = '1000px';
  } else if (isTabletOrMobile) {
    contentHeight = '600px';
  } else if (isPortrait) {
    contentHeight = '700px';
  } else if (isRetina) {
    contentHeight = '900px';
  } else {
    contentHeight = '800px'; // デフォルトの高さ
  }
  return (
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
  )
}