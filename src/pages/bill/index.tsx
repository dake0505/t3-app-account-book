import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { api } from "~/utils/api";

const Bill = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [totalAmount, setTotalAmount] = useState<number>(0);
    const billData = api.bill.queryBillByMonth.useQuery({
        date: dayjs(currentMonth).toISOString(),
    });

    useEffect(() => {
        let total = 0
        billData.data?.map((item) => (total += item.amount));
        setTotalAmount(total)
    }, [billData.data])

    return (
        <div className="relative flex h-screen flex-col overflow-scroll bg-default-bg px-6 py-10 text-white">
            <p className="mb-6 text-2xl font-bold flex justify-between">
                <span>{dayjs(currentMonth).format("YYYY-MM")}</span>
                <span>¥{totalAmount}</span>
            </p>

            <div>
                {billData.data?.map((item) => (
                    <div
                        key={item.id}
                        className="mb-4 rounded-2xl bg-default-card px-4 py-4"
                    >
                        <p className="flex justify-between font-bold">
                            <span className="">{item.name}</span>
                            <span>¥{item.amount}</span>
                        </p>
                        <p>
                            <span>{dayjs(item.createdAt).format("MM-DD")}</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bill;
