import { ChevronLeftIcon, RepeatIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    HStack,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    NumberInput,
    NumberInputField,
    useDisclosure,
    useRadioGroup,
    useToast
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { forwardRef, useState, type ReactNode } from "react";
import DatePicker from "react-datepicker";
import { api } from "~/utils/api";
import RadioCard from "./RadioCard";

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
    const mutation = api.bill.createBill.useMutation();
    const billTypeData = api.billType.queryType.useQuery();
    const [billName, setBillName] = useState<string>("");
    const [billType, setBillType] = useState<string>("");
    const [billAmount, setBillAmount] = useState<number>();
    const [startDate, setStartDate] = useState(new Date());
    const { isOpen, onOpen, onClose } = useDisclosure();

    const toast = useToast();

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: "framework",
        defaultValue: "吃饭",
        onChange: setBillType,
    });

    const group = getRootProps();

    const reset = () => {
        setBillAmount(undefined);
        setBillName("");
        setBillType("");
    };

    const createBill = async () => {
        try {
            await mutation.mutateAsync({
                name: billName,
                type: billType,
                amount: billAmount ?? 0,
            });
            toast({
                title: "创建成功",
                status: "success",
            });
            reset();
        } catch (error) {}
    };

    return (
        <div className="relative flex min-h-screen flex-col bg-default-bg font-sans text-white">
            <div className="absolute top-0 m-4 flex h-8 items-center text-white">
                <ChevronLeftIcon
                    className="mr-2"
                    onClick={() => {
                        router.push("home").catch((err) => console.log(err));
                    }}
                />{" "}
                Back
            </div>
            <p className="mb-4 mt-16 px-10 text-4xl font-semibold">Create</p>
            {/* 账单信息 */}
            <div className="px-10">
                <FormControl className="pb-4">
                    <FormLabel>日期</FormLabel>

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
                </FormControl>
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
                        <Box onClick={onOpen}>添加</Box>
                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>Modal Title</ModalHeader>
                                {/* <ModalCloseButton /> */}
                                <ModalBody>
                                    123
                                </ModalBody>

                                <ModalFooter>
                                    <Button
                                        colorScheme="blue"
                                        mr={3}
                                        onClick={onClose}
                                    >
                                        Close
                                    </Button>
                                    <Button variant="ghost">
                                        Secondary Action
                                    </Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
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
                    <NumberInput
                        value={billAmount}
                        onChange={(value) => {
                            setBillAmount(Number(value));
                        }}
                    >
                        <NumberInputField />
                    </NumberInput>
                </FormControl>
                {/* <FormControl className="pb-4">
                    <FormLabel>图片</FormLabel>
                    <Input type="number" />
                </FormControl> */}
            </div>

            {/* 按钮 */}
            <div className="flex w-screen justify-between px-10 py-5">
                <button
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-default-card font-semibold"
                    onClick={reset}
                >
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
