'use client'

import React from 'react'
import { useRouter } from "next/navigation"
import Link from "next/link";
import Sidebar from '@/components/sidebar'
import DashboardContent from '../pharmacyhome/page'

function PharmacyDashboard() {
    const router = useRouter();
  return (
    <section className="flex h-screen">
      <Sidebar/>
      <DashboardContent/>
    </section>
  )
}

export default PharmacyDashboard
