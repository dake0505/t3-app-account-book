import { useState } from "react";
import { useRouter } from "next/router";

const Footer = () => {
    const router = useRouter();
    const [activeBtn, setActiveBtn] = useState<string>("home");
    return (
        <div className="absolute inset-x-0 bottom-0 flex h-20 w-screen items-center justify-around rounded-t-lg bg-default-card">
            <div
                className={`flex h-16 w-16 items-center justify-center rounded-full ${
                    activeBtn === "create" ? "bg-default-active" : ""
                }`}
                onClick={() => {
                    setActiveBtn("create");
                    router
                        .push("/create")
                        .then((res) => {
                            console.log(res);
                        })
                        .catch((err) => console.log(err));
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
                            d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2C7.88562 2 8.82843 2 9.41421 2.58579C10 3.17157 10 4.11438 10 6V18C10 19.8856 10 20.8284 9.41421 21.4142C8.82843 22 7.88562 22 6 22C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V6Z"
                            fill="#ffffff"
                        ></path>{" "}
                        <path
                            d="M14 6C14 4.11438 14 3.17157 14.5858 2.58579C15.1716 2 16.1144 2 18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V6Z"
                            fill="#ffffff"
                        ></path>{" "}
                    </g>
                </svg>
            </div>
            <div
                className={`flex h-16 w-16 items-center justify-center rounded-full ${
                    activeBtn === "home" ? "bg-default-active" : ""
                }`}
                onClick={() => {
                    setActiveBtn("home");
                    router
                        .push("/home")
                        .then((res) => {
                            console.log(res);
                        })
                        .catch((err) => console.log(err));
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
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2.5192 7.82274C2 8.77128 2 9.91549 2 12.2039V13.725C2 17.6258 2 19.5763 3.17157 20.7881C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.7881C22 19.5763 22 17.6258 22 13.725V12.2039C22 9.91549 22 8.77128 21.4808 7.82274C20.9616 6.87421 20.0131 6.28551 18.116 5.10812L16.116 3.86687C14.1106 2.62229 13.1079 2 12 2C10.8921 2 9.88939 2.62229 7.88403 3.86687L5.88403 5.10813C3.98695 6.28551 3.0384 6.87421 2.5192 7.82274ZM9 17.25C8.58579 17.25 8.25 17.5858 8.25 18C8.25 18.4142 8.58579 18.75 9 18.75H15C15.4142 18.75 15.75 18.4142 15.75 18C15.75 17.5858 15.4142 17.25 15 17.25H9Z"
                            fill="#ffffff"
                        ></path>{" "}
                    </g>
                </svg>
            </div>
            <div
                className={`flex h-16 w-16 items-center justify-center rounded-full ${
                    activeBtn === "my" ? "bg-default-active" : ""
                }`}
                onClick={() => {
                    setActiveBtn("my");
                    router
                        .push("/my")
                        .then((res) => {
                            console.log(res);
                        })
                        .catch((err) => console.log(err));
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
                            d="M12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10Z"
                            fill="#ffffff"
                        ></path>{" "}
                        <path
                            d="M8.00007 12.25C5.90904 12.25 4.149 13.8151 3.90469 15.8918L3.25521 21.4124C3.20681 21.8237 3.50106 22.1965 3.91244 22.2449C4.32382 22.2933 4.69654 21.999 4.74494 21.5876L5.39441 16.0671C5.51949 15.0039 6.26894 14.1515 7.25007 13.859L7.25007 18.052C7.25004 18.9505 7.25002 19.6997 7.32998 20.2945C7.41439 20.9223 7.60006 21.4891 8.05553 21.9445C8.511 22.4 9.0778 22.5857 9.70559 22.6701C10.3004 22.7501 11.0496 22.75 11.948 22.75H12.0521C12.9505 22.75 13.6998 22.7501 14.2946 22.6701C14.9223 22.5857 15.4891 22.4 15.9446 21.9445C16.4001 21.4891 16.5858 20.9223 16.6702 20.2945C16.7501 19.6997 16.7501 18.9505 16.7501 18.052L16.7501 13.859C17.7312 14.1515 18.4807 15.0039 18.6057 16.0671L19.2552 21.5876C19.3036 21.999 19.6763 22.2933 20.0877 22.2449C20.4991 22.1965 20.7933 21.8237 20.7449 21.4124L20.0955 15.8918C19.8511 13.8151 18.0911 12.25 16.0001 12.25H8.00007Z"
                            fill="#ffffff"
                        ></path>{" "}
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default Footer
