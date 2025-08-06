'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useRouter } from "next/navigation"
import Link from "next/link";
import Header from "@/pages/header";

function PharmacyDashboard() {
    const router = useRouter();
  return (
    <section className="container h-screen">
      <Header/>
    </section>
  )
}

export default PharmacyDashboard
