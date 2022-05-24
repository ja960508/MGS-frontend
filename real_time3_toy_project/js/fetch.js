function randomColorGenerator() {
  return `#${Math.round(Math.random() * 0xffffff).toString(16)}`;
}

export function fetchData() {
  return fetch("./data.json").then((res) => res.json());
}

export function render(data) {
  let accountCounter = 0;
  const slider = document.querySelector(".slider");
  const cloneModel = document.querySelector(".account").cloneNode(true);
  // 계좌마다 베이스가 될 모델
  let accountDiv;

  for (const account in data) {
    if (accountCounter <= 0) {
      accountDiv = document.querySelector(".account");
    } else {
      accountDiv = cloneModel.cloneNode(true);
      slider.appendChild(accountDiv);
      // 좌우 슬라이드로 계좌 넘기기에 사용
    }

    accountCounter++;

    const accountTitle = accountDiv.querySelector(".account__title");
    const accountNumber = accountDiv.querySelector(".account__number");
    const accountBalance = accountDiv.querySelector(".account__balance");
    const piggyBank = accountDiv.querySelector(".piggybank");
    const lastPiggyChild = accountDiv.querySelector(".piggybank__item");
    const dailyLogList = accountDiv.querySelector(".daily__log__list");

    const _accountName = account;
    const _accountNumber = data[account]["계좌번호"];
    const _accountBalance = data[account]["계좌잔액"];
    const _piggyBank = data[account]["목표"];
    const _accountLog = data[account].log;
    const newLog = {};
    // 날짜 별 정렬을 위해 선언

    accountTitle.innerText = _accountName;
    accountNumber.innerText = _accountNumber;
    accountBalance.innerText = `${Number(_accountBalance).toLocaleString(
      "ko-KR"
    )}원`;

    // 저금통 가져오기
    for (const piggyItem in _piggyBank) {
      const listEl = document.createElement("li");
      listEl.className = "piggybank__item";
      listEl.innerHTML = `<p>${piggyItem}</p>
      <span>${Number(_piggyBank[piggyItem].current).toLocaleString(
        "ko-KR"
      )}원</span>`;

      const piggyRate = parseInt(
        (_piggyBank[piggyItem].current / _piggyBank[piggyItem].plan) * 100
      );

      if (piggyRate <= 50) {
        // console.log("up");
        // console.log(listEl);
        // console.log(
        //   `linear-gradient(to left, #dadada ${
        //     100 - piggyRate
        //   }%, ${randomColorGenerator()} ${piggyRate}%)`
        // );
        listEl.style.background = `linear-gradient(to left, #dadada ${
          100 - piggyRate
        }%, ${randomColorGenerator()} ${piggyRate}%)`;
      } else {
        // console.log("down");
        // console.log(listEl);
        // console.log(
        //   `linear-gradient(to right, ${randomColorGenerator()} ${piggyRate}%, #dadada ${
        //     100 - piggyRate
        //   }%)`
        // );
        listEl.style.background = `linear-gradient(to right, ${randomColorGenerator()} ${piggyRate}%, #dadada ${
          100 - piggyRate
        }%)`;
      }

      piggyBank.insertBefore(listEl, lastPiggyChild);
    }

    // 날짜 별로 모으기
    _accountLog.forEach((log) => {
      if (!newLog[log.date]) newLog[log.date] = [];
      newLog[log.date].push(log);
    });

    Object.keys(newLog)
      .sort((a, b) => new Date(b) - new Date(a))
      .forEach((date) => {
        const listEl = document.createElement("li");
        const ulEl = document.createElement("ul");
        const headerEl = document.createElement("header");
        const monthFormat = ("0" + (new Date(date).getMonth() + 1)).slice(-2);
        const dateFormat = ("0" + new Date(date).getDate()).slice(-2);
        let total = 0;
        listEl.className = "daily__log";

        newLog[date].forEach((item) => {
          const listEl = document.createElement("li");

          listEl.innerHTML = `<span>${item.history}</span><span ${
            item.income === "in" ? `class="in"` : `class="out"`
          }>${Number(item.price).toLocaleString("ko-KR")}원</span>`;

          total +=
            item.income === "in" ? Number(item.price) : -Number(item.price);
          ulEl.appendChild(listEl);
        });

        headerEl.className = "daily__info";
        headerEl.innerHTML = `<span class="daily__day">${monthFormat}.${dateFormat}</span>
        <span class="daily__total ${
          total >= 0 ? "plus" : "minus"
        }">${total.toLocaleString("ko-KR")}원 ${
          total >= 0 ? "수익" : "지출"
        }</span>`;

        listEl.appendChild(headerEl);
        listEl.appendChild(ulEl);
        dailyLogList.appendChild(listEl);
      });
  }
}
