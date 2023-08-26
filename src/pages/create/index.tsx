import { HStack, Input, useToast } from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";
import { FormControl, FormLabel, useRadioGroup } from "@chakra-ui/react";
import RadioCard from "./RadioCard";
import { api } from "~/utils/api";
import { useState } from "react";

const Home = () => {
    const mutation = api.bill.createBill.useMutation();
    const billTypeData = api.billType.queryType.useQuery();
    const [billName, setBillName] = useState<string>("");
    const [billType, setBillType] = useState<string>("");
    const [billAmount, setBillAmount] = useState<number>();

    const toast = useToast()

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: "framework",
        defaultValue: "吃饭",
        onChange: setBillType,
    });

    const group = getRootProps();

    const reset = () => {
        setBillAmount(undefined)
        setBillName('')
        setBillType('')
    }

    const createBill = async () => {
        try {
            await mutation.mutateAsync({
                name: billName,
                type: billType,
                amount: billAmount ?? 0,
            });
            toast({
                title: '创建成功',
                status: 'success'
            })
            reset()
        } catch (error) {}
    };

    return (
        <div className="relative flex min-h-screen flex-col bg-default-bg font-sans text-white">
            <p className="px-10 mt-16 mb-4 text-4xl font-semibold">Create</p>
            {/* 账单信息 */}
            <div className="px-10">
                <FormControl className="pb-4">
                    <FormLabel>类型</FormLabel>
                    <HStack {...group} className="flex flex-wrap">
                        {billTypeData.data?.map((value) => {
                            const radio = getRadioProps({ value: value.name });
                            return (
                                <RadioCard key={value.id} {...radio}>
                                    {value.name}
                                </RadioCard>
                            );
                        })}
                    </HStack>
                </FormControl>
                <FormControl className="pb-4">
                    <FormLabel>名称</FormLabel>
                    <Input
                        value={billName}
                        onChange={(e) => setBillName(e.target.value)}
                    />
                </FormControl>
                <FormControl className="pb-4">
                    <FormLabel>金额</FormLabel>
                    <Input
                        type="number"
                        value={billAmount}
                        onChange={(e) => {
                            console.log(e.target.value);
                            setBillAmount(Number(e.target.value));
                        }}
                    />
                </FormControl>
                {/* <FormControl className="pb-4">
                    <FormLabel>图片</FormLabel>
                    <Input type="number" />
                </FormControl> */}
            </div>

            {/* 按钮 */}
            <div className="flex w-screen justify-between px-10 py-5">
                <button className="flex h-12 w-12 items-center justify-center rounded-xl bg-default-card font-semibold" onClick={reset}>
                    <RepeatIcon />
                </button>
                <button
                    className="flex h-12 w-2/3 items-center justify-center rounded-xl bg-default-active font-semibold"
                    onClick={createBill}
                >
                    创建
                    <svg
                        className="h-6 w-6 "
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
                                d="M4 12.6111L8.92308 17.5L20 6.5"
                                stroke="#ffffff"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>{" "}
                        </g>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Home;
