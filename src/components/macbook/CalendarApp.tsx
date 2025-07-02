import { Calendar, ChevronLeft, ChevronRight, Plus, Search, Clock } from 'lucide-react';
import WindowHeader from './WindowHeader';

interface CalendarAppProps {
  onClose: () => void;
}

const CalendarApp = ({ onClose }: CalendarAppProps) => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const today = currentDate.getDate();

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const events = [
    { date: 15, title: 'Team Meeting', time: '10:00 AM', color: 'bg-blue-500' },
    { date: 18, title: 'Portfolio Review', time: '2:00 PM', color: 'bg-green-500' },
    { date: 22, title: 'Client Call', time: '3:30 PM', color: 'bg-purple-500' },
    { date: 25, title: 'Project Deadline', time: '5:00 PM', color: 'bg-red-500' },
    { date: today, title: 'Code Review', time: '11:00 AM', color: 'bg-orange-500' }
  ];

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: firstDay }, (_, i) => i);

  const getEventsForDate = (date: number) => {
    return events.filter(event => event.date === date);
  };

  return (
    <div className="flex-1 bg-white h-full overflow-hidden rounded-lg">
      <div className="bg-white shadow-2xl h-full flex flex-col">
        {/* Window Header */}
        <div className="border-b border-gray-200">
          <WindowHeader 
            title="Calendar" 
            onClose={onClose}
            onMinimize={() => console.log('Minimize Calendar')}
            onMaximize={() => console.log('Maximize Calendar')}
          />
        </div>
        
        {/* Calendar Content */}
        <div className="flex-1 flex">
          {/* Sidebar */}
          <div className="w-64 bg-gray-50 border-r border-gray-200 p-4">
            <button className="w-full bg-red-500 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 mb-6 hover:bg-red-600 transition-colors">
              <Plus size={16} />
              New Event
            </button>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">My Calendars</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    <span className="text-sm">Personal</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                    <span className="text-sm">Work</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    <span className="text-sm">Projects</span>
                  </label>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Upcoming</h3>
                <div className="space-y-2">
                  {events.slice(0, 3).map((event, index) => (
                    <div key={index} className="p-2 bg-white rounded border border-gray-200">
                      <div className="flex items-center gap-2 mb-1">
                        <div className={`w-2 h-2 rounded-full ${event.color}`}></div>
                        <span className="text-sm font-medium">{event.title}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock size={10} />
                        <span>{event.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Calendar */}
          <div className="flex-1 p-6">
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <h1 className="text-2xl font-semibold text-gray-900">
                  {months[currentMonth]} {currentYear}
                </h1>
                <div className="flex items-center gap-1">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <ChevronLeft size={20} className="text-gray-600" />
                  </button>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <ChevronRight size={20} className="text-gray-600" />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded transition-colors">
                  Day
                </button>
                <button className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded transition-colors">
                  Week
                </button>
                <button className="px-3 py-1 text-sm bg-red-500 text-white rounded">
                  Month
                </button>
              </div>
            </div>
            
            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1">
              {/* Weekday Headers */}
              {weekdays.map((day) => (
                <div key={day} className="p-2 text-center text-sm font-medium text-gray-600">
                  {day}
                </div>
              ))}
              
              {/* Empty Days */}
              {emptyDays.map((_, index) => (
                <div key={`empty-${index}`} className="h-24 border border-gray-100"></div>
              ))}
              
              {/* Calendar Days */}
              {days.map((day) => {
                const dayEvents = getEventsForDate(day);
                const isToday = day === today;
                
                return (
                  <div 
                    key={day} 
                    className={`h-24 border border-gray-100 p-1 hover:bg-gray-50 cursor-pointer ${
                      isToday ? 'bg-red-50 border-red-200' : ''
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${
                      isToday ? 'bg-red-500 text-white' : 'text-gray-700'
                    }`}>
                      {day}
                    </div>
                    <div className="mt-1 space-y-1">
                      {dayEvents.slice(0, 2).map((event, index) => (
                        <div 
                          key={index}
                          className={`text-xs px-1 py-0.5 rounded text-white truncate ${event.color}`}
                        >
                          {event.title}
                        </div>
                      ))}
                      {dayEvents.length > 2 && (
                        <div className="text-xs text-gray-500 px-1">
                          +{dayEvents.length - 2} more
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarApp;
