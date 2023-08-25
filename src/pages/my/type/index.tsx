import { AddIcon, ChevronLeftIcon, MinusIcon } from "@chakra-ui/icons";
import { Button, IconButton, Input } from "@chakra-ui/react";
import { useState } from "react";
import { api } from "~/utils/api";

const MyType = () => {
    const data = api.billType.queryType.useQuery();
    const mutation = api.billType.createType.useMutation();
    const options = ["吃饭", "打车", "shopping", "振鼎鸡"];
    const [typeName, setTypeName] = useState<string>("");

    const createType = async () => {
        try {
            await mutation.mutateAsync({
                name: typeName,
            });
            await data.refetch();
        } catch (error) {}
    };

    return (
        <div className="relative flex min-h-screen flex-col bg-default-bg">
            <div className="absolute top-0 m-4 flex h-8 items-center text-white">
                <ChevronLeftIcon className="mr-2" /> Back
            </div>
            <div className="mb-4 mt-16 flex justify-around px-4">
                <Input
                    value={typeName}
                    onChange={(e) => setTypeName(e.target.value)}
                    className="flex-1 text-white"
                />
                <IconButton
                    className="ml-4"
                    colorScheme="green"
                    aria-label="Call Segun"
                    icon={<AddIcon />}
                    onClick={createType}
                />
            </div>
            <div className="divide-y divide-solid divide-default-border bg-default-card font-bold text-white">
                {data.data?.map((item) => (
                    <div
                        key={item.id}
                        className="flex h-12 items-center justify-between px-4 py-8"
                    >
                        <span>{item.name}</span>
                        <MinusIcon className="bg-default-error" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyType;
