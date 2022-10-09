import {
  add,
  differenceInDays,
  endOfMonth,
  format,
  startOfMonth,
  sub,
} from 'date-fns'
import { IconType } from 'react-icons'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'

interface Props {
  value?: Date
  onChange: (value: Date) => void
}
const Calendar: React.FC<Props> = ({ value = new Date(), onChange }) => {
  const startDate = startOfMonth(value)
  const endDate = endOfMonth(value)
  const days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const numDays = differenceInDays(endDate, startDate) + 1

  const lastMonthDays = startDate.getDay()
  const suffixDays = 6 - endDate.getDay()

  const prevMonth = () => onChange(sub(value, { months: 1 }))
  const nextMonth = () => onChange(add(value, { months: 1 }))

  return (
    <>
      <div className="flex items-center mx-auto justify-between py-10 px-24">
        <div className="flex flex-col items-center gap-y-4">
          <p className="text-[#5bc0de] text-3xl font-bold font-phantom">
            {format(value, 'LLLL yyyy')}
          </p>
          <div className="flex items-center gap-x-5">
            <Select text="Week" />
            <Select text="Month" />
          </div>
          <div className="flex items-center gap-x-12">
            <Button onClick={prevMonth} Text={BsArrowLeft} />
            <Button onClick={nextMonth} Text={BsArrowRight} />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <div id="weekdays" className="flex items-center gap-x-4">
          {days.map(day => (
            <div className="px-6 py-2 bg-slate-200 dark:bg-neutral-700 w-[180px] 2xl:min-w-[220px] bg-opacity-40 backdrop-blur-sm grid place-items-center border border-slate-400 dark:border-neutral-600 rounded-lg ">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 items-center justify-center text-center gap-4">
          {Array.from({ length: lastMonthDays }).map((_, index) => (
            <div key={index}> </div>
          ))}
          {Array.from({ length: numDays }).map((_, index) => {
            const date = index + 1

            return (
              <div
                className="relative bg-slate-100 backdrop-blur-xl dark:bg-neutral-800 border border-slate-400 dark:border-neutral-600 rounded-xl min-h-[180px] 2xl:min-h-[260px] 2xl:min-w-[260px] grid place-items-center px-2"
                key={date}
              >
                <p className="absolute right-6 top-4">{date}</p>
                <div className="text-center">Person Name Birthday</div>
              </div>
            )
          })}

          {Array.from({ length: suffixDays }).map((_, index) => (
            <div key={index}> </div>
          ))}
        </div>
      </div>
    </>
  )
}

const Button = ({ onClick, Text }: { onClick: any; Text: IconType }) => (
  <button className="textstyle text-neutral-400 text-xl" onClick={onClick}>
    <Text />
  </button>
)

const Select = ({ text }: { text: string }) => {
  return (
    <div className="hover:bg-neutral-700 flex items-center space-x-2 rounded-md py-1 px-2 cursor-pointer">
      {text}
    </div>
  )
}
export default Calendar
