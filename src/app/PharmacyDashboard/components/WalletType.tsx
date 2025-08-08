"use client";
import { IconWallet } from "@tabler/icons-react";

export default function WalletType() {
  return (
    <div className="border p-4 rounded-xl w-full md:w-1/2">
      <div className="flex items-center gap-2 text-purple-700 font-semibold">
        <IconWallet size={20} />
        Type of Wallet:
      </div>
      <p className="mt-2 text-gray-600">MetaMask</p>
    </div>
  );
}