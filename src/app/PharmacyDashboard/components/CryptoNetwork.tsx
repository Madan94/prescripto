"use client";
import { IconNetwork } from "@tabler/icons-react";

export default function CryptoNetwork() {
  return (
    <div className="border p-4 rounded-xl w-full md:w-1/2">
      <div className="flex items-center gap-2 text-blue-500 font-semibold">
        <IconNetwork size={20} />
        Crypto Network:
      </div>
      <p className="mt-2 text-gray-600">Ethereum Mainnet</p>
    </div>
  );
}