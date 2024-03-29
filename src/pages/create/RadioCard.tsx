import { Box, useRadio, type UseRadioProps } from "@chakra-ui/react";
import { type NextPage } from "next";

type IProps = UseRadioProps & {
    children: string;
};

const RadioCard: NextPage<IProps> = (props) => {
    const { getInputProps, getRadioProps } = useRadio(props);

    const input = getInputProps();
    const checkbox = getRadioProps();

    return (
        <Box as="label">
            <input {...input} />
            <Box
                {...checkbox}
                cursor="pointer"
                borderWidth="1px"
                borderRadius="md"
                boxShadow="md"
                _checked={{
                    bg: "#40DF9F",
                    color: "white",
                    borderColor: "#40DF9F",
                }}
                // _focus={{
                //     boxShadow: "outline",
                // }}
                px={5}
                py={3}
            >
                {props.children}
            </Box>
        </Box>
    );
};

export default RadioCard;
