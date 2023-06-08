'use client'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export default function Exchange() {
    return (
        <Card className="w-full max-w-[48rem] mx-1">
            <CardBody className="lg:grid grid-cols-2 lg:justify-between lg:gap-4">
                <div className="grid grid-cols-4 gap-4">
                    <div>
                        Logo
                    </div>
                    <div className="col-span-3">
                        <select className="rounded-md w-full">
                            <option>bKash</option>
                            <option>Nagad</option>
                            <option>Rocket</option>
                            <option>Uapy</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-3">
                    <select className="rounded-md w-full">
                            <option>Perfect Money</option>
                            <option>Astro Pay</option>
                            <option>Payoneer</option>
                            <option>Skrill</option>
                        </select>
                    </div>
                    <div>
                        logo
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}