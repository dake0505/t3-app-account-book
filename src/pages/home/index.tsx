import { Stat, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/react";
import React from "react";
import { api } from "~/utils/api";
import dayjs from 'dayjs';

const Home = () => {
    const data = api.bill.queryBill.useQuery();

    return (
        <div className="relative flex h-screen bg-default-bg">
            <div className="absolute flex items-start top-0 h-1/2 w-screen bg-default-orange px-8 pt-20">
                <Stat className="h-30 bg-white rounded-3xl p-8">
                    <StatLabel>Total Cost</StatLabel>
                    <StatNumber>¥0.00</StatNumber>
                    <StatHelpText>{dayjs().format('YYYY-MM-DD') }</StatHelpText>
                </Stat>
            </div>
            <div className="absolute bottom-0 flex h-4/6 w-screen flex-col items-center rounded-tl-3xl bg-default-bg py-4 text-white">
                {data.data?.map((item) => (
                    <div
                        key={item.id}
                        className="mb-4 flex w-4/5 justify-between rounded-2xl bg-default-card px-4 py-4 font-bold"
                    >
                        <span className="">{item.type}</span>
                        <span>¥{item.amount}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
