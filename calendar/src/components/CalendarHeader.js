import React from 'react'
import dayjs from 'dayjs'

export default function CalendarHeader() {
  return (
    <header className="px-4 py-2 flex items-center">
      <h1 className="mr-10 text-xl text-gray-500 fond-bold">
        Retreat
      </h1>
      <button
        // onClick={handleReset}
        className="border rounded py-2 px-4 mr-5"
      >
        Present
      </button>
      <button>
      {/* // onClick={handlePrevMonth} */}
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          {/* chevron_left */}
        </span>
      </button>
      <button>
      {/* //  onClick={handleNextMonth} */}
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          {/* chevron_right */}
        </span>
      </button>
      {/* <h2 className="ml-4 text-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format(
          "MMMM YYYY"
        )}
      </h2> */}
    </header>
  )
}
