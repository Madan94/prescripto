'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import QrScanner from "@/app/PharmacyDashboard/utilities/qrcode/page"
import WalletConnect from "@/app/providers"
import React from "react"

export default function DashboardContent() {
    
    return (
        <div className="flex flex-1 flex-col px-6 py-4 bg-white dark:bg-gray-950 overflow-y-auto" id="dashboard-content">

            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                        Pharmacy Dashboard
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-300">
                        Simplified Prescriptions at Single Place
                    </p>
                </div>
                <Button className="bg-purple-500 hover:bg-purple-600 text-white rounded-lg">
                    Logout
                </Button>
            </div>

            <div className="bg-yellow-400 rounded-xl p-8 mb-6 w-2/4">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-white mb-2">
                    Connect your Crypto Wallet
                </h3>
                <WalletConnect/>
            </div>
            <div className="bg-gray-100 rounded-xl p-4 mb-6">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-white mb-2">
                    Your Profile
                </h3>
                <div className="flex gap-4 overflow-x-auto pb-2">
                    <h3 className="text-sm text-gray-500 dark:text-gray-300">Access and</h3>
                    <span className="text-sm font-mono text-gray-800 dark:text-white">edit your Porfile here</span>
                </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-4">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-white mb-2">
                    Scan QR Code
                </h3>
                <div className="flex gap-4 overflow-x-auto pb-2">
                    <h3 className="text-sm text-gray-500 dark:text-gray-300"></h3>
                    <QrScanner />
                </div>
            </div>
        </div>
    )
}

function ReportCard({ icon, label, count, isPlaceholder = false }: {
    icon: React.ReactNode
    label: string
    count: string
    isPlaceholder?: boolean
}) {
    return (
        <Card className="rounded-xl">
            <CardContent className="flex flex-col items-center justify-center py-6 gap-2">
                {!isPlaceholder && (
                    <>
                        <div className="text-purple-600 dark:text-purple-400">{icon}</div>
                        <p className="text-sm text-gray-500 dark:text-gray-300">{label}</p>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{count}</h3>
                    </>
                )}
                {isPlaceholder && (
                    <div className="text-gray-400 text-3xl font-bold">+</div>
                )}
            </CardContent>
        </Card>
    )
}

// Schedule Item Component
function ScheduleItem({ date, label, color }: { date: string; label: string; color: string }) {
    return (
        <div className="min-w-[140px] p-3 rounded-lg text-white bg-white">
            <p className="text-sm font-medium">{date}</p>
            <p className="text-xs">{label}</p>
        </div>
    )
}