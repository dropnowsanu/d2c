'use client'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    CardFooter,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Exchange() {
    return (
        <Card className="w-full max-w-[48rem] mx-1">
            <CardBody className="lg:grid grid-cols-2 lg:justify-between lg:gap-4">
                <div className="grid grid-cols-4 gap-4 items-center">
                        <Image src="/assets/images/bKash.svg" width={120} height={120} alt="Logo" className="rounded-full"/>
                    <div className="col-span-3 space-y-4">
                        <select className="rounded-md w-full">
                            <option>bKash</option>
                            <option>Nagad</option>
                            <option>Rocket</option>
                            <option>Uapy</option>
                        </select>
                        <input type="text" value="100" className="w-full rounded-md" />
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="col-span-3 space-y-4">
                        <select className="rounded-md w-full">
                            <option>Perfect Money</option>
                            <option>Astro Pay</option>
                            <option>Payoneer</option>
                            <option>Skrill</option>
                        </select>
                        <input disabled type="text" value="0.00 BDT" className="w-full rounded-md" />
                    </div>
                    <div>
                        logo
                    </div>
                </div>
            </CardBody>
            <CardFooter className="grid grid-rows-1 justify-center gap-4">
                <Typography
                    className="text-gray-700"
                >
                    Exchange Rate: 1 USD = 0.00 BDT(Bangladeshi Taka)
                </Typography>
                <Button>Exchange</Button>
            </CardFooter>
        </Card>
    );
}