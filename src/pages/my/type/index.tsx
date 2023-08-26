import { AddIcon, ChevronLeftIcon, MinusIcon } from "@chakra-ui/icons";
import { Button, IconButton, Input, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { api } from "~/utils/api";

const MyType = () => {
    const data = api.billType.queryType.useQuery();
    const mutation = api.billType.createType.useMutation();
    const deleteMutation = api.billType.deleteType.useMutation();

    const router = useRouter();
    const toast = useToast();

    const [typeName, setTypeName] = useState<string>("");

    const createType = async () => {
        if (!typeName) {
            toast({
                title: "请输入名称",
                status: "warning",
            });
            return;
        }
        try {
            await mutation.mutateAsync({
                name: typeName,
            });
            await data.refetch();
            setTypeName('')
        } catch (error) {}
    };

    const deleteType = async (id?: string) => {
        if (!id) return;
        try {
            await deleteMutation.mutateAsync(id);
            await data.refetch();
        } catch (error) {}
    };

    const backMy = async () => {
        try {
            await router.push("/my");
        } catch (error) {}
    };

    return (
        <div className="relative flex min-h-screen flex-col bg-default-bg">
            <div className="absolute top-0 m-4 flex h-8 items-center text-white">
                <ChevronLeftIcon className="mr-2" onClick={backMy} /> Back
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
                        <MinusIcon className="bg-default-error" onClick={() => deleteType(item.id)} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyType;
