import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CardContent, Card } from "@/components/ui/card"
import { Hospital, Clipboard, Box, UserPlus, ListChecks } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-gray-800">
        <Link className="flex items-center justify-center" href="/">
          <Hospital className="h-6 w-6 text-blue-400" />
          <span className="ml-2 text-xl font-bold text-blue-400">Aushadhi</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-blue-400 transition-colors" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-blue-400 transition-colors" href="#">
            Hospitals
          </Link>
          <Link className="text-sm font-medium hover:text-blue-400 transition-colors" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:text-blue-400 transition-colors" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-blue-400">
                  Streamline Your Hospital Management
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Efficient healthcare management for hospitals and seamless experience for patients.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-blue-600 text-white hover:bg-blue-700" >
                <Link href="/signup" >Sign Up</Link></Button>
                <Button variant="outline" className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-gray-900"><Link href="/login" >Log In</Link></Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-blue-400">
              Key Features
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-gray-700 border-gray-600">
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <UserPlus className="h-12 w-12 text-blue-400" />
                  <h3 className="text-xl font-bold text-blue-400">One-Time Signup</h3>
                  <p className="text-sm text-gray-300 text-center">
                    Register once and access all participating hospitals seamlessly.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-700 border-gray-600">
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <Box className="h-12 w-12 text-blue-400" />
                  <h3 className="text-xl font-bold text-blue-400">Inventory Management</h3>
                  <p className="text-sm text-gray-300 text-center">
                    Efficiently manage hospital supplies and equipment.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-700 border-gray-600">
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <Clipboard className="h-12 w-12 text-blue-400" />
                  <h3 className="text-xl font-bold text-blue-400">Patient Records</h3>
                  <p className="text-sm text-gray-300 text-center">
                    Secure and easy access to patient medical history across hospitals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-blue-400">
              Participating Hospitals
            </h2>
            <div className="flex justify-center">
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                <ListChecks className="mr-2 h-4 w-4" />
                View Hospital List
              </Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-400">
                  Ready to Get Started?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl">
                  Join Aushadhi today and experience seamless hospital management.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400" placeholder="Enter your email" type="email" />
                  <Button type="submit" className="bg-blue-600 text-white hover:bg-blue-700">
                    <Link href="/signup" >
                    Sign Up
                    </Link>
                    </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-xs text-gray-400">
          © 2023 Aushadhi. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:text-blue-400 transition-colors" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:text-blue-400 transition-colors" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}