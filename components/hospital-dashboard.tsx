'use client'

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Hospital, 
  Calendar, 
  FileText, 
  User, 
  Package, 
  Clock, 
  Search, 
  Plus, 
  Menu,
  X,
  BedDouble,
  Activity,
  Users
} from "lucide-react"

export function HospitalDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const sidebarItems = [
    { icon: <Hospital className="h-5 w-5" />, label: "Hospitals", href: "#" },
    { icon: <Calendar className="h-5 w-5" />, label: "Book Appointments", href: "#" },
    { icon: <FileText className="h-5 w-5" />, label: "Health Record", href: "#" },
    { icon: <User className="h-5 w-5" />, label: "User Profile", href: "#" },
    { icon: <Package className="h-5 w-5" />, label: "Inventory", href: "#" },
    { icon: <Clock className="h-5 w-5" />, label: "Time Table", href: "#" },
  ]

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside
        className={`bg-gray-800 w-64 min-h-screen p-4 ${
          sidebarOpen ? "block" : "hidden"
        } md:block transition-all duration-200 ease-in-out`}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-blue-400">HMS</h2>
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)} className="md:hidden text-white">
            <X className="h-6 w-6" />
          </Button>
        </div>
        <nav>
          {sidebarItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex items-center gap-2 p-2 rounded hover:bg-gray-700 transition-all duration-200 ease-in-out text-gray-300 hover:text-white"
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 overflow-auto">
        <Button variant="outline" size="icon" onClick={() => setSidebarOpen(true)} className="md:hidden mb-4 text-white border-gray-600">
          <Menu className="h-6 w-6" />
        </Button>

        <h1 className="text-2xl font-bold mb-4 text-blue-400">Hospital Dashboard</h1>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Total Patients</CardTitle>
              <Users className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">1,234</div>
              <p className="text-xs text-gray-400">+20.1% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Available Beds</CardTitle>
              <BedDouble className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">45</div>
              <p className="text-xs text-gray-400">Out of 200 total beds</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Today's Appointments</CardTitle>
              <Calendar className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">89</div>
              <p className="text-xs text-gray-400">12 more than yesterday</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Average Wait Time</CardTitle>
              <Clock className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">24 min</div>
              <p className="text-xs text-gray-400">-3 min from last week</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="hospitals" className="mt-4">
          <TabsList className="bg-gray-800 text-gray-400">
            <TabsTrigger value="hospitals" className="data-[state=active]:bg-gray-700 data-[state=active]:text-white">
              <Hospital className="h-4 w-4 mr-2" />
              Hospitals
            </TabsTrigger>
            <TabsTrigger value="appointments" className="data-[state=active]:bg-gray-700 data-[state=active]:text-white">
              <Calendar className="h-4 w-4 mr-2" />
              Book Appointments
            </TabsTrigger>
            <TabsTrigger value="health-record" className="data-[state=active]:bg-gray-700 data-[state=active]:text-white">
              <FileText className="h-4 w-4 mr-2" />
              Health Record
            </TabsTrigger>
            <TabsTrigger value="user-profile" className="data-[state=active]:bg-gray-700 data-[state=active]:text-white">
              <User className="h-4 w-4 mr-2" />
              User Profile
            </TabsTrigger>
            <TabsTrigger value="inventory" className="data-[state=active]:bg-gray-700 data-[state=active]:text-white">
              <Package className="h-4 w-4 mr-2" />
              Inventory
            </TabsTrigger>
            <TabsTrigger value="time-table" className="data-[state=active]:bg-gray-700 data-[state=active]:text-white">
              <Clock className="h-4 w-4 mr-2" />
              Time Table
            </TabsTrigger>
          </TabsList>
          <TabsContent value="hospitals">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Nearby Hospitals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {["City General Hospital", "St. Mary's Medical Center", "Greenwood Community Hospital"].map((name, index) => (
                    <div key={index} className="flex items-center">
                      <Hospital className="h-9 w-9 rounded-full bg-gray-700 p-2 text-blue-400" />
                      <div className="ml-4">
                        <p className="text-sm font-medium leading-none text-white">{name}</p>
                        <p className="text-sm text-gray-400">2.{index + 1} miles away</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="appointments">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Book an Appointment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="doctor" className="text-gray-400">Select Doctor</Label>
                    <Input id="doctor" placeholder="Choose a doctor" className="bg-gray-700 border-gray-600 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-gray-400">Select Date</Label>
                    <Input id="date" type="date" className="bg-gray-700 border-gray-600 text-white" />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Book Appointment</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="health-record">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Recent Health Records</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {["Annual Check-up", "Vaccination", "Blood Test Results"].map((record, index) => (
                    <div key={index} className="flex items-center">
                      <FileText className="h-9 w-9 rounded-full bg-gray-700 p-2 text-blue-400" />
                      <div className="ml-4">
                        <p className="text-sm font-medium leading-none text-white">{record}</p>
                        <p className="text-sm text-gray-400">{new Date(Date.now() - index * 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="user-profile">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">User Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <User className="h-16 w-16 rounded-full bg-gray-700 p-2 text-blue-400" />
                    <div className="ml-4">
                      <p className="text-lg font-medium text-white">John Doe</p>
                      <p className="text-sm text-gray-400">Patient ID: 12345</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-gray-400">Email</Label>
                      <p className="text-white">john.doe@example.com</p>
                    </div>
                    <div>
                      <Label className="text-gray-400">Phone</Label>
                      <p className="text-white">+1 234 567 8900</p>
                    </div>
                    <div>
                      <Label className="text-gray-400">Date of Birth</Label>
                      <p className="text-white">01/01/1990</p>
                    </div>
                    <div>
                      <Label className="text-gray-400">Blood Type</Label>
                      <p className="text-white">A+</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="inventory">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Medical Inventory</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {["Surgical Masks", "Disposable Gloves", "Syringes"].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Package className="h-9 w-9 rounded-full bg-gray-700 p-2 text-blue-400" />
                        <div className="ml-4">
                          <p className="text-sm font-medium leading-none text-white">{item}</p>
                          <p className="text-sm text-gray-400">Stock: {1000 - index * 250}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:text-white hover:bg-gray-700">
                        Reorder
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="time-table">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Today's Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {["Morning Rounds", "Staff Meeting", "Surgery"].map((event, index) => (
                    <div key={index} className="flex items-center">
                      <Clock className="h-9 w-9 rounded-full bg-gray-700 p-2 text-blue-400" />
                      <div className="ml-4">
                        <p className="text-sm font-medium leading-none text-white">{event}</p>
                        <p className="text-sm text-gray-400">{new Date(Date.now() + (index + 1) * 2 * 60 * 60 * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Car

dContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="mt-4 bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="patient-search" className="text-gray-400">Search Patient</Label>
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                  <Input id="patient-search" placeholder="Enter patient name or ID" className="pl-8 bg-gray-700 border-gray-600 text-white" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-appointment" className="text-gray-400">New Appointment</Label>
                <Input id="new-appointment" type="datetime-local" className="bg-gray-700 border-gray-600 text-white" />
              </div>
            </div>
            <Button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Create New Patient Record
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}