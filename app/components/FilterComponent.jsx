import { CalendarArrowDown, ChevronDown } from "lucide-react";
import React, { useState } from "react";

const FilterComponent = ({
  monthFilters,
  dayTypeFilters,
  selectedMonth,
  onMonthFilterChange,
  onDayTypeFilterChange,
  onMonthSelection,
  onClearFilters,
  months,
}) => {
  const [showMonthDropdown, setShowMonthDropdown] = useState(false);

  const monthFilterButtons = ["This Month", "Next Month"];
  const dayTypeFilterButtons = ["Weekend Class", "WeekDay Class"];

  return (
    <div className="text-[13px] font-semibold flex flex-wrap gap-5  md:flex-row gap-x-4 mb-5 items-center">
      {monthFilterButtons.map((filter) => (
        <div
          key={filter}
          className={`bg-background py-1 px-3 rounded-full cursor-pointer shadow-md ${
            monthFilters.includes(filter)
              ? "bg-primary text-primary-foreground"
              : ""
          }`}
          onClick={() => onMonthFilterChange(filter)}
        >
          {filter}
        </div>
      ))}
      {dayTypeFilterButtons.map((filter) => (
        <div
          key={filter}
          className={`bg-background py-1 px-3 rounded-full cursor-pointer shadow-md ${
            dayTypeFilters.includes(filter)
              ? "bg-primary text-primary-foreground"
              : ""
          }`}
          onClick={() => onDayTypeFilterChange(filter)}
        >
          {filter}
        </div>
      ))}
      <div className="relative">
        <div
          className="bg-background py-1 px-3 rounded-full cursor-pointer shadow-md flex items-center"
          onClick={() => setShowMonthDropdown(!showMonthDropdown)}
        >
          {selectedMonth || <CalendarArrowDown size={15} />}
          <ChevronDown size={15} className="ml-1" />
        </div>
        {showMonthDropdown && (
          <div className="absolute top-full left-0 mt-1 bg-background shadow-md rounded-md">
            {months.map((month) => (
              <div
                key={month}
                className="py-1 px-3 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  onMonthSelection(month);
                  setShowMonthDropdown(false);
                }}
              >
                {month}
              </div>
            ))}
          </div>
        )}
      </div>
      <div
        className="bg-background py-1 px-3 rounded-full cursor-pointer shadow-md"
        onClick={onClearFilters}
      >
        Clear
      </div>
    </div>
  );
};

export default FilterComponent;
