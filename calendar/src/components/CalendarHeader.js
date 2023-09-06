import React from "react";

export default function CalendarHeader({ month }) {
  let today = new Date();
  let thisMonth = today.getMonth(); //8
    /*
 Jan 0
 Feb 1
 Mar 2
 Apr 3
 May 4
 Jun 5
 Jul 6
 Aug 7
 Sep 8
 */
  let monthString = "";
  switch (thisMonth) {
    case 0:
      monthString = "Jan";
      break;
    case 1:
      monthString = "Feb";
      break;
    case 2:
      monthString = "Mar";
      break;
    case 3:
      monthString = "Apr";
      break;
    case 4:
      monthString = "May";
      break;
    case 5:
      monthString = "Jun";
      break;
    case 6:
      monthString = "Jul";
      break;
    case 7:
      monthString = "Aug";
      break;
    case 8:
      monthString = "Sep";
      break;
    case 9:
      monthString = "Oct";
      break;
    case 10:
      monthString = "Nov";
      break;
    case 11:
      monthString = "Dec";
      break;
    default:
      monthString = "default";
      break;
  }
  // console.log(month);
  // console.log(thisMonth); //8



  return (
    <header className="px-4 py-2 flex items-center">
      <h1 className="mr-10 text-xl text-gray-500 fond-bold">Retreat</h1>
      <div className="mr-10 text-m text-black-300 fond-bold">{monthString}</div>
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
  );
}
