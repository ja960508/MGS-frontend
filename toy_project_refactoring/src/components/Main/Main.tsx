import React from "react";
import "./main.scss";

const Main = ({ accountData }: { accountData: any }) => {
  return (
    <main className='account__main'>
      <div className='account__info'>
        <header>
          <h3 className='account__number'>{accountData.accountNumber}</h3>
          <button className='transfer__btn'>이체</button>
        </header>
        <strong className='account__balance'>
          {accountData.accountBalance}
        </strong>
        <div className='account__manage'>
          <input className='account__bar' type='range' />
          <a
            href='/'
            className='chart'
            style={{ backgroundImage: `url(/assets/chart_icon.svg)` }}
          >
            <span>지출 관리</span>
          </a>
        </div>
        <p>
          5일 동안 <span className='limit'>210,000</span>원 남음
        </p>
      </div>
      <p className='loan'>
        지금 낮은 이자로 생활대출 신청!&nbsp;
        <a href='/'>Go</a>
      </p>
    </main>
  );
};

export default Main;
