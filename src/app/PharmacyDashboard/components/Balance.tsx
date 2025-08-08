"use client";
import { IconCurrencyEthereum } from "@tabler/icons-react";

export default function Balance() {
  return (
    <div className="border p-4 rounded-xl w-full md:w-1/2">
      <div className="flex items-center gap-2 text-blue-500 font-semibold">
        <IconCurrencyEthereum size={20} />
        Balance:
      </div>
      <p className="mt-2 text-gray-600">1.234 ETH</p>
    </div>
  );
}