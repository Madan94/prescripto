"use client";
import { IconAddressBook } from "@tabler/icons-react";

export default function WalletAddress() {
  return (
    <div className="border p-4 rounded-xl w-full md:w-1/2">
      <div className="flex items-center gap-2 text-purple-700 font-semibold">
        <IconAddressBook size={20} />
        Wallet Address:
      </div>
      <p className="mt-2 text-gray-600">0x....abcd</p>
    </div>
  );
}