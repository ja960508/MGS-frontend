import React, { useMemo } from "react";
import "./account_log.scss";

const processLog = (log: []) => {
  const result: any = {};

  log.forEach((item: any) => {
    if (!result[item.date]) {
      result[item.date] = {};
      result[item.date].elem = [];
      result[item.date].total = 0;
    }

    result[item.date].elem.push(item);

    result[item.date].total +=
      item.income === "in" ? Number(item.price) : Number(-item.price);
  });

  return result;
};

const getDateFormat = (date: string) => {
  const monthFormat = ("0" + (new Date(date).getMonth() + 1)).slice(-2);
  const dateFormat = ("0" + new Date(date).getDate()).slice(-2);

  return `${monthFormat}.${dateFormat}`;
};

const getDailyLog = (dailyLog: any, current: string): any => {
  return (
    <li className='daily__log'>
      <header className='daily__info'>
        <span className='daily__day'>{getDateFormat(current)}</span>
        <span className='daily__total plus'>{dailyLog.total}</span>
      </header>
      <ul>
        {dailyLog.elem.map((item: any) => {
          return (
            <li>
              <span>{item.history}</span>
              <span className={item.income === "in" ? "in" : "out"}>
                {item.price}
              </span>
            </li>
          );
        })}
      </ul>
    </li>
  );
};

const AccountLog = ({
  accountData: { log, piggyBank },
}: {
  accountData: any;
}) => {
  const processedLog: any = useMemo(() => processLog(log), [log]);
  const onDragStart = (e: React.DragEvent<HTMLButtonElement>) => {};
  const onDrag = (e: React.DragEvent<HTMLButtonElement>) => {};
  const onDragEnd = (e: React.DragEvent<HTMLButtonElement>) => {};

  return (
    <section className='account__log'>
      <button
        className='shutter'
        draggable='true'
        onDragStart={onDragStart}
        onDrag={onDrag}
        onDragEnd={onDragEnd}
      ></button>
      <ul className='piggybank'>
        {Object.keys(piggyBank).map((item) => {
          return (
            <li className='piggybank__item'>
              <p>{item}</p>
              <span>{piggyBank[item].current}</span>
            </li>
          );
        })}
        <li className='piggybank__item'>
          <button>
            <img src='/assets/add_icon.svg' alt='add' /> 저금통 만들기
          </button>
        </li>
      </ul>
      <ol className='daily__log__list'>
        {Object.keys(processedLog)
          .sort()
          .reverse()
          .map((item) => getDailyLog(processedLog[item], item))}
      </ol>
    </section>
  );
};

export default AccountLog;
