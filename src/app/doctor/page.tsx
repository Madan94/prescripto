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
import Filter from "../(Doctors)/doc/components/Filter";

export default function Doctor() {
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
        <CardTitle>Login - Doctor Account</CardTitle>
        <CardDescription className="pt-2">
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
                <div className="mb-4">
                    <div className="mb-4">
                        <Label htmlFor="email">Select your Hospital</Label>
                    </div>
                    <Filter/>
                </div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="ragavi@preiyan.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/hospital/account-recovery"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full" onClick={() => router.push("/doc/medicaldashboard")}>
          Login
        </Button>
        <div className="mt-5 flex flex-row items-left justify-start">
            <Link href="/hospital/register" className="text-blue-600 pl-2">*Get your Login Credentials from Hospitals</Link>
        </div>
      </CardFooter>
    </Card>
      </section>
    </section>
  )
}

