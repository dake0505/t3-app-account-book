import { Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import dayjs from "dayjs";
import { useRouter } from "next/router";
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
    const router = useRouter();
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
        <div className="relative flex h-screen overflow-scroll bg-default-bg">
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
                <Stat className="mr-2 h-32 rounded-3xl bg-white p-8">
                    <StatLabel>本月支出</StatLabel>
                    <StatNumber>¥{totalAmount}</StatNumber>
                </Stat>
                <Stat className="ml-2 h-32 rounded-3xl bg-white p-8">
                    <StatLabel>本月预算</StatLabel>
                    <StatNumber>¥{totalAmount}</StatNumber>
                </Stat>
            </div>
            <div className="absolute bottom-0 flex h-4/6 w-screen flex-col items-center rounded-tl-3xl bg-default-bg py-4 text-white">
                <div
                    className="flex w-4/5 items-center justify-center rounded-2xl bg-default-active py-4 text-xl font-bold"
                    onClick={() => {
                        router.push("/create").catch((err) => {
                            console.log(err);
                        });
                    }}
                >
                    <svg
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#ffffff"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                                d="M8 12.5L10.5 15L16 9M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z"
                                stroke="#ffffff"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>{" "}
                        </g>
                    </svg>
                    记一笔
                </div>
                <div className="w-4/5">
                    <p className="mb-2 mt-4 text-base font-bold">近三日明细</p>
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
        </div>
    );
};

export default Home;
