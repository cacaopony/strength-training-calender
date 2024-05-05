import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

// import timeGridPlugin from '@fullcalendar/timegrid'

export default function Calendar() {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]} 
      initialView="dayGridMonth"
      weekends={true}
      events={[
        { title: '腕', date: '2024-05-01' },
        { title: '肩', date: '2024-05-20' }
      ]}
    />
  )
}