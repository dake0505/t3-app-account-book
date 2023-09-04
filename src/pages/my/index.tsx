import { ChevronRightIcon } from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/react";
import { useRouter } from "next/router";

const My = () => {
    const router = useRouter();

    return (
        <div className="relative flex min-h-screen flex-col bg-default-bg">
            <div className="mb-8 mt-8 flex h-12 w-screen items-center border-y border-default-border bg-default-card px-4 py-8">
                <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
                <span className="mx-8 flex-1 font-bold text-white">Admin</span>
                <ChevronRightIcon color="white" />
            </div>

            <div className="divide-y divide-solid divide-default-border bg-default-card font-bold text-white">
                <div
                    className="flex h-12 items-center px-4 py-8"
                    onClick={() => {
                        router.push("/my/type").catch((err) => {
                            console.log(err);
                        });
                    }}
                >
                    <span className="flex-1">常用分类</span>
                    <ChevronRightIcon color="white" />
                </div>
                <div className="flex h-12 items-center px-4 py-8">
                    <span className="flex-1">常用名称</span>
                    <ChevronRightIcon color="white" />
                </div>
                <div
                    className="flex h-12 items-center px-4 py-8"
                    onClick={() => {
                        router.push("/my/quota").catch((err) => {
                            console.log(err);
                        });
                    }}
                >
                    <span className="flex-1">额度设置</span>
                    <ChevronRightIcon color="white" />
                </div>
            </div>
        </div>
    );
};

export default My;
