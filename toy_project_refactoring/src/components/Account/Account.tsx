import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import AccountLog from "../AccountLog/AccountLog";
import "./account.scss";
import { useParams } from "react-router-dom";

type accData = {
  accountName: string;
};

const Account = ({ service }: { service: any }) => {
  const [accountData, setAccountData] = useState<accData>();
  const params = useParams();

  useEffect(() => {
    async function fetch() {
      const result = await service.getData(params.id);

      return result;
    }

    fetch().then((res) => setAccountData(res));
  }, [service, params]);

  return (
    <>
      {accountData && (
        <>
          <Header accountName={accountData.accountName} />
          <Main accountData={accountData} />
          <AccountLog accountData={accountData} />
        </>
      )}
    </>
  );
};

export default Account;
