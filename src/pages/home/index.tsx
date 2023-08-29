import { Stat, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/react";
import dayjs from "dayjs";
import { forwardRef, useEffect, useState, type ReactNode } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { api } from "~/utils/api";

interface Props {
    children?: ReactNode;
    onClick?: () => void;
    value?: string;
}
type Ref = HTMLButtonElement;

const ExampleCustomInput = forwardRef<Ref, Props>(({ value, onClick }, ref) => (
    <button
        className="rounded-2xl bg-default-active px-4 py-2 font-bold text-white"
        onClick={onClick}
        ref={ref}
    >
        {value}
    </button>
));

ExampleCustomInput.displayName = "ExampleCustomInput";

const Home = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [totalAmount, setTotalAmount] = useState<number>(0);
    const billData = api.bill.queryBill.useQuery({
        date: dayjs(startDate).toISOString(),
    });

    useEffect(() => {
        let num = 0;
        billData.data?.map((item) => (num += item.amount));
        setTotalAmount(num);
    }, [billData]);

    return (
        <div className="relative flex h-screen bg-default-bg">
            <div className="absolute left-2/4 z-20 -ml-16 w-32 pt-2">
                <DatePicker
                    selected={startDate}
                    popperPlacement="bottom-end"
                    onChange={(date) => {
                        console.log(date);
                        if (date !== null) {
                            setStartDate(date);
                        }
                    }}
                    customInput={<ExampleCustomInput />}
                />
            </div>
            <div className="absolute top-0 flex h-1/2 w-screen items-start bg-default-orange px-8 pt-20">
                <Stat className="h-30 rounded-3xl bg-white p-8">
                    <StatLabel>Total Cost</StatLabel>
                    <StatNumber>¥{totalAmount}</StatNumber>
                    <StatHelpText>{dayjs().format("YYYY-MM-DD")}</StatHelpText>
                </Stat>
            </div>
            <div className="absolute bottom-0 flex h-4/6 w-screen flex-col items-center rounded-tl-3xl bg-default-bg py-4 text-white">
                {billData.data?.map((item) => (
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
