import { ChevronLeftIcon } from "@chakra-ui/icons";
import { FormControl, FormLabel, NumberInput, NumberInputField } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

const MyQuota = () => {
    const router = useRouter();
    const [dailyQuota, setDailyQuota] = useState<number>();

    const backMy = async () => {
        try {
            await router.push("/my");
        } catch (error) {}
    };

    return (
        <div className="relative flex min-h-screen flex-col bg-default-bg font-sans text-white">
            <div className="absolute top-0 w-screen px-4 py-8 flex h-8 items-center justify-between text-white">
                <span>
                    <ChevronLeftIcon className="mr-2" onClick={backMy} /> Back
                </span>
                <span className="bg-default-active px-4 py-1 rounded">
                    保存
                </span>
            </div>
            <div className="pt-12 px-8 mt-8">
                <FormControl className="pb-4">
                    <FormLabel>每日额度</FormLabel>
                    
                    <NumberInput
                        value={dailyQuota}
                        onChange={(value) => {
                            setDailyQuota(Number(value));
                        }}
                    >
                        <NumberInputField />
                    </NumberInput>
                </FormControl>
                <FormControl className="pb-4">
                    <FormLabel>每月额度</FormLabel>
                    
                    <NumberInput
                        value={dailyQuota}
                        onChange={(value) => {
                            setDailyQuota(Number(value));
                        }}
                    >
                        <NumberInputField />
                    </NumberInput>
                </FormControl>
            </div>
        </div>
    );
};

export default MyQuota;
