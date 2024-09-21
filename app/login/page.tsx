"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Hospital, Eye, EyeOff } from "lucide-react"

import { useSession } from "next-auth/react";
import { useEffect } from "react";

import {signIn} from 'next-auth/react';

// Hardcoded demo users
const demoUsers = [
  { email: "patient@aushadhi.com", password: "sih@1234", role: "patient" },
  { email: "doctor@aushadhi.com", password: "sih@1234", role: "doctor" },
  { email: "inventory@aushadhi.com", password: "sih@1234", role: "inventory" },
  { email: "admin@aushadhi.com", password: "sih@1234", role: "admin" },
]

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userType, setUserType] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()
  

  const handleLogin = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Find matching demo user
    const user = demoUsers.find(
      (u) => u.email === email && u.password === password && u.role === userType
    )
    
    if (user) {
      // Redirect based on user role
      if (user.role === "patient") {
        router.push("/dashboard/user")
      } else if (user.role === "doctor") {
        router.push("/dashboard/doctor")
      } else if (user.role === "inventory") {
        router.push("/dashboard/inventory")
      } else if (user.role === "admin") {
        router.push("/dashboard/admin")
      }
    } else {
      setError("Invalid credentials or user type.")
    }
  }
  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard/inventory");
    }
  }, [status, router]); 

  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-100">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-gray-800">
        <Link className="flex items-center justify-center" href="/">
          <Hospital className="h-6 w-6 text-blue-400" />
          <span className="ml-2 text-xl font-bold text-blue-400">Aushadhi</span>
        </Link>
      </header>
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold text-blue-400">Sign in to your account</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="space-y-4 rounded-md shadow-sm">
              <div>
                <Label htmlFor="user-type" className="sr-only">
                  User Type
                </Label>
                <Select onValueChange={(value) => setUserType(value)}>
                  <SelectTrigger className="w-full bg-gray-800 border-gray-700 text-gray-100">
                    <SelectValue placeholder="Select user type" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700 text-gray-100">
                    <SelectItem value="patient">Patient</SelectItem>
                    <SelectItem value="doctor">Doctor</SelectItem>
                    <SelectItem value="inventory">Inventory Manager</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="email-address" className="sr-only">
                  Email address
                </Label>
                <Input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="relative">
                <Label htmlFor="password" className="sr-only">
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="w-full bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-700 bg-gray-800 text-blue-600 focus:ring-blue-500"
                />
                <Label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                  Remember me
                </Label>
              </div>

              <div className="text-sm">
                <Link href="#" className="font-medium text-blue-400 hover:text-blue-300">
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">
                Sign in
              </Button>
            </div>
          </form>

          <hr></hr>

          <Button onClick={() => signIn('google')}>Sign in with google</Button>
          <div className="text-center">
            <p className="mt-2 text-sm text-gray-400">
              Dont have an account?{" "}
              <Link href="/signup" className="font-medium text-blue-400 hover:text-blue-300">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </main>
      <footer className="py-6 text-center text-sm text-gray-400 border-t border-gray-800">
        © 2024 Aushadhi. All rights reserved.
      </footer>
    </div>
  )
}
