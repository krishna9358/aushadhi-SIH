'use client';

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Hospital, Eye, EyeOff } from "lucide-react";
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!termsAccepted) {
      alert("You must accept the terms and privacy policy");
      return;
    }

    try {
      const res = await axios.post('/api/auth/signup', {
        email,
        password,
        name
      });

      if (res.status === 200) {
        router.push('/signin'); // Redirect to sign-in after successful sign-up
      } else {
        // Handle unexpected status code
        console.error('Failed to sign up: ', res.statusText);
      }
    } catch (error) {
      // Handle error
      console.error('Failed to sign up: ', error);
    }
  };

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
            <h2 className="mt-6 text-3xl font-bold text-blue-400">Create your account</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4 rounded-md shadow-sm">
              <div>
                <Label htmlFor="full-name" className="sr-only">
                  Full Name
                </Label>
                <Input
                  id="full-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="w-full bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
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
                  autoComplete="new-password"
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
              <div className="relative">
                <Label htmlFor="confirm-password" className="sr-only">
                  Confirm Password
                </Label>
                <Input
                  id="confirm-password"
                  name="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  className="w-full bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms-and-privacy"
                name="terms-and-privacy"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-700 bg-gray-800 text-blue-600 focus:ring-blue-500"
                required
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
              />
              <Label htmlFor="terms-and-privacy" className="ml-2 block text-sm text-gray-300">
                I agree to the{" "}
                <Link href="#" className="font-medium text-blue-400 hover:text-blue-300">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="font-medium text-blue-400 hover:text-blue-300">
                  Privacy Policy
                </Link>
              </Label>
            </div>
                  <p className=" text-xs "><span className="text-red-700">Please Note!</span> This sign up is only for patient. </p>
            <div>
              <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">
                Sign up
              </Button>
            </div>
          </form>
          <div className="text-center">
            <p className="mt-2 text-sm text-gray-400">
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-blue-400 hover:text-blue-300">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </main>
      <footer className="py-6 text-center text-sm text-gray-400 border-t border-gray-800">
        © 2024 Aushadhi. All rights reserved.
      </footer>
    </div>
  );
}
