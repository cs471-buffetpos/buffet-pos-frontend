"use client";
import { BaseTableResponse } from "@/interfaces/table";
import React from "react";
import TableNameCard from "../../../components/TableNameCard";
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


const tableMockData: BaseTableResponse[] = [
    {
        id: "1",
        tableName: "Table 1",
        isAvailable: true,
        qrCode: "QR001",
        accessCode: "AC01",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "2",
        tableName: "Table 2",
        isAvailable: false,
        qrCode: "QR002",
        accessCode: "AC02",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "3",
        tableName: "Table 3",
        isAvailable: true,
        qrCode: "QR003",
        accessCode: "AC03",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "4",
        tableName: "Table 4",
        isAvailable: true,
        qrCode: "QR004",
        accessCode: "AC04",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "5",
        tableName: "Table 5",
        isAvailable: false,
        qrCode: "QR005",
        accessCode: "AC05",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "6",
        tableName: "Table 6",
        isAvailable: true,
        qrCode: "QR006",
        accessCode: "AC06",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "7",
        tableName: "Table 7",
        isAvailable: false,
        qrCode: "QR007",
        accessCode: "AC07",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "8",
        tableName: "Table 8",
        isAvailable: true,
        qrCode: "QR008",
        accessCode: "AC08",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "9",
        tableName: "Table 9",
        isAvailable: false,
        qrCode: "QR009",
        accessCode: "AC09",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "10",
        tableName: "Table 10",
        isAvailable: true,
        qrCode: "QR010",
        accessCode: "AC10",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "1",
        tableName: "Table 1",
        isAvailable: true,
        qrCode: "QR001",
        accessCode: "AC01",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "2",
        tableName: "Table 2",
        isAvailable: false,
        qrCode: "QR002",
        accessCode: "AC02",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "3",
        tableName: "Table 3",
        isAvailable: true,
        qrCode: "QR003",
        accessCode: "AC03",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "4",
        tableName: "Table 4",
        isAvailable: true,
        qrCode: "QR004",
        accessCode: "AC04",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "5",
        tableName: "Table 5",
        isAvailable: false,
        qrCode: "QR005",
        accessCode: "AC05",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "6",
        tableName: "Table 6",
        isAvailable: true,
        qrCode: "QR006",
        accessCode: "AC06",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "7",
        tableName: "Table 7",
        isAvailable: false,
        qrCode: "QR007",
        accessCode: "AC07",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "8",
        tableName: "Table 8",
        isAvailable: true,
        qrCode: "QR008",
        accessCode: "AC08",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "9",
        tableName: "Table 9",
        isAvailable: false,
        qrCode: "QR009",
        accessCode: "AC09",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "10",
        tableName: "Table 10",
        isAvailable: true,
        qrCode: "QR010",
        accessCode: "AC10",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];

const MakePayment = () => {
    const tableCount = tableMockData.length;
    const netPricePerPerson: number = 250; //hardcode
    return (
        <div className="p-10 font-bold">
            <p className="text-4xl my-4 ">ตั้งค่าร้าน</p>
            <div className="flex m-4 justify-between">
                <p className="text-xl">รายการโต๊ะทั้งหมด: {tableCount} โต๊ะ</p>
                <Dialog>
                    <DialogTrigger><div
                        className="text-lg btn bg-success text-white font-normal w-36"
                    >
                        <img src="\assets\navbar-logo\plusSign.svg" />
                        เพิ่มโต๊ะ
                    </div></DialogTrigger>
                    <DialogContent>
                        <div className="py-10 align-middle gap-6 flex items-center">
                            <label className="text-2xl font-bold">ชื่อโต๊ะ: </label>
                            <input className="rounded border-2 h-12 w-80 p-3   " />
                        </div>
                        <div className="flex">
                            <button className="text-xl bg-success btn rounded-xl text-white ml-auto">เพิ่มโต๊ะ</button>
                            <DialogClose asChild> 
                                <Button className="font-bold ml-3 btn text-xl text-white bg-error rounded-xl" >
                                    ยกเลิก
                                </Button>
                            </DialogClose>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
            <div className="overflow-y-auto h-96">
                {tableMockData.map((data) => (
                    <TableNameCard key={data.id} detail={data} />
                ))}
            </div>
            <div className="mt-16">
                <p className="text-3xl">
                    ราคาอาหารต่อหัวสุทธิ : {netPricePerPerson} บาท
                </p>
                <button className="btn bg-primary text-white text-lg font-base mt-5">
                    แก้ไขราคา
                </button>
            </div>
        </div>
    );
};

export default MakePayment;
