import dayjs from "dayjs";
import { useState } from "react";
import { api } from "~/utils/api";

const Bill = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date())
    const billData = api.bill.queryBillByMonth.useQuery({
        date: dayjs(currentMonth).toISOString(),
    });
    return (
        <div className="relative flex h-screen flex-col overflow-scroll bg-default-bg px-6 py-10 text-white">
            <p className="mb-6 text-2xl font-bold">{dayjs(currentMonth).format('YYYY-MM')}</p>

            <div>
                {billData.data?.map((item) => (
                    <div
                        key={item.id}
                        className="mb-4 flex justify-between rounded-2xl bg-default-card px-4 py-4 font-bold"
                    >
                        <span className="">{item.name}</span>
                        <span>¥{item.amount}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bill;
