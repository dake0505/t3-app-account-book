import { Stat, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/react";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { api } from "~/utils/api";

const Home = () => {
    const data = api.bill.queryBill.useQuery();
    const [totalAmount, setTotalAmount] = useState<number>(0);

    useEffect(() => {
        console.log(data);
        let num = 0;
        data.data?.map((item) => (num += item.amount));
        setTotalAmount(num);
    }, [data]);

    return (
        <div className="relative flex h-screen bg-default-bg">
            <div className="absolute top-0 flex h-1/2 w-screen items-start bg-default-orange px-8 pt-20">
                <Stat className="h-30 rounded-3xl bg-white p-8">
                    <StatLabel>Total Cost</StatLabel>
                    <StatNumber>¥{totalAmount}</StatNumber>
                    <StatHelpText>{dayjs().format("YYYY-MM-DD")}</StatHelpText>
                </Stat>
            </div>
            <div className="absolute bottom-0 flex h-4/6 w-screen flex-col items-center rounded-tl-3xl bg-default-bg py-4 text-white">
                {data.data?.map((item) => (
                    <div
                        key={item.id}
                        className="mb-4 flex w-4/5 justify-between rounded-2xl bg-default-card px-4 py-4 font-bold"
                    >
                        <span className="">{item.name}</span>
                        <span>¥{item.amount}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
