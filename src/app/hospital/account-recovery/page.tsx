"use client";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import Link from "next/link";
import Header from "@/pages/header";

export default function AccountRecovery() {
    const router = useRouter();
  return (
    <section className="container h-screen">
      <Header/>
      <section className="containet flex flex-col items-center justify-center p-10">
          <div className="mb-10">
            <h1 className="font-bold text-3xl">Have a Happy Journey with <span className="text-blue-600">Prescripto 👋
                </span></h1>
        </div>
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Recover your Account</CardTitle>
        <CardDescription className="pt-2">
          Enter your email below to recover your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="ragavi@preiyan.com"
                required
              />
              <Button type="submit" className="w-full mt-4">
                Send OTP 
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <CardDescription className="pt-2">
          An OTP will be sent your registered Mail id for Account Recovery
        </CardDescription>
      </CardFooter>
    </Card>
      </section>
    </section>
  )
}
