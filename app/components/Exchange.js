'use client'
import {
    Card,
    CardBody,
    Typography,
    Button,
    CardFooter,
} from "@material-tailwind/react";
import Image from "next/image";
import { useState } from "react";

export default function Exchange() {
    const [send, setSend] = useState('');
    const [dollar, setDollar] = useState('pm');
    const [amount, setAmount] = useState('');
    const [total, setTotal] = useState('');

    console.log(dollar)
    return (
        <Card className="w-full max-w-[48rem] mx-1">
            <CardBody className="lg:grid grid-cols-2 lg:justify-between lg:gap-4">
                <div className="grid grid-cols-4 gap-4 items-center">
                        <Image src="/assets/images/bKash.svg" width={120} height={120} alt="Logo" className="rounded-full w-20 h-20"/>
                    <div className="col-span-3 space-y-4">
                        <label>PlayCircleIcon</label>
                        <select className="rounded-md w-full">
                            <option value="bkash">bKash</option>
                            <option value="nagad">Nagad</option>
                            <option value="rocket">Rocket</option>
                            <option value="upay">Uapy</option>
                        </select>
                        <input type="text" className="w-full rounded-md" />
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="col-span-3 space-y-4">
                    <label>Buy</label>
                        <select value={dollar} onChange={(e) => setDollar(e.target.value)} className="rounded-md w-full">
                            <option value="pm">Perfect Money</option>
                            <option value="astro">Astro Pay</option>
                            <option value="payoneer">Payoneer</option>
                            <option value="skrill">Skrill</option>
                        </select>
                        <input disabled type="text" value="0.00 BDT" className="w-full rounded-md" />
                    </div>
                    <Image src="/assets/images/pm.svg" width={80} height={80} alt="Logo" className="rounded-full w-20 h-20"/>
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