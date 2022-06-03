import React, { useState, useEffect, useRef } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import AccountLog from "../AccountLog/AccountLog";
import "./account.scss";
import { useParams } from "react-router-dom";

type accData = {
  accountName: string;
};

const Account = ({
  service,
  handleLoading,
}: {
  service: any;
  handleLoading: Function;
}) => {
  const [accountData, setAccountData] = useState<accData>();
  const [currentPage, setCurrentPage] = useState<number>(
    Number(useParams().id) || 1
  );
  const originalX = useRef<number>(0);
  const afterX = useRef<number>(0);

  useEffect(() => {
    async function fetch() {
      handleLoading(true);
      const result = await service.getData(currentPage);
      handleLoading(false);

      return result;
    }

    fetch().then((res) => setAccountData(res));
  }, [service, currentPage]);

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    const img = new Image();
    e.dataTransfer.setDragImage(img, 0, 0);
    originalX.current = e.clientX;
  };

  const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    afterX.current = e.clientX;
    const diff = originalX.current - afterX.current;

    if (diff > 200) {
      setCurrentPage((prev) => {
        const next = prev + 1;

        return next > 3 ? prev : prev + 1;
      });
    }

    if (diff < -200) {
      setCurrentPage((prev) => {
        const next = prev - 1;

        return next < 1 ? prev : prev - 1;
      });
    }
  };

  return (
    <div
      className='account__wrapper'
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      draggable={true}
    >
      {accountData && (
        <>
          <Header accountName={accountData.accountName} />
          <Main accountData={accountData} />
          <AccountLog accountData={accountData} />
        </>
      )}
    </div>
  );
};

export default Account;
