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
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "@/pages/header";

export default function Register() {
  const router = useRouter();
  return (
    <section className="container h-screen">
      <Header/>
      <section className="container flex flex-col items-center justify-center p-10">
        <div className="mb-10">
            <h1 className="font-bold text-3xl">Welcome to <span className="text-blue-600">Prescripto
                </span></h1>
        </div>
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Register your Hospital with us!</CardTitle>
        <CardDescription className="pt-2">
          Enter the below details to onboard your hospital with us!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name" className=" pb-2">Enter your Hospital Name</Label>
              <Input
                id="name"
                type="text"
                placeholder=""
                required
              />
              <Label htmlFor="reg-number" className="pt-2 pb-2">Enter your Hospital Reg Number</Label>
              <Input
                id="reg-number"
                type="number"
                placeholder="39939XXXXX"
                required
              />
              <Label htmlFor="reg-year" className="pt-2 pb-2">Hospital Establishment Year</Label>
              <Input
                id="reg-year"
                type="number"
                placeholder="1986"
                required
              />
              <Label htmlFor="reg-year" className="pt-2 pb-2">Enter your Mail id</Label>
              <Input
                id="email"
                type="email"
                placeholder="ragavi@preiyan.com"
                required
              />
              <Label htmlFor="reg-year" className="pt-2 pb-2">Enter your Official Webiste (Optional)</Label>
              <Input
                id="hospital-name"
                type="text"
                placeholder="https://www.example.com"
              />
              <Label htmlFor="reg-year" className="pt-2 pb-2">Enter your Hospital Location</Label>
              <Input
                id="hospital-name"
                type="text"
                placeholder="Chennai, Tamil Nadu"
                required
              />
              <Label htmlFor="email" className="pt-2 pb-2">Enter your New Password</Label>
              <Input
                id="email"
                type="password"
                placeholder="********"
                required
              />
              <Label htmlFor="email" className="pt-2 pb-2">Confirm your Password</Label>
              <Input
                id="email"
                type="password"
                placeholder="********"
                required
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full" onClick={() => router.push("/hospital")}>
          Register Now
        </Button>
        <div className="mt-5 flex flex-row ">
            <p>Already have an account?</p>
            <Link href="/hospital" className="text-blue-600 pl-2">Login Now</Link>
        </div>
      </CardFooter>
    </Card>
    </section>
    </section>
  )
}
