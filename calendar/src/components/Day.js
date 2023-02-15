import React from 'react'

export default function Day({day, rowIdx}) {
  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIdx === 0 && ( //only show the first row Mon, Tue so on
          <p className="text-sm mt-1">
            {day.format("ddd").toUpperCase()}
          </p>
        )}
        <p
          className="text-sm p-1 my-1 text-center">{day.format("DD")}
        </p>
      </header>
      </div>
  )
}
