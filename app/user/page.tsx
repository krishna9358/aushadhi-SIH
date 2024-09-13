"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Hospital, Calendar, FileText, User, Package, Clock, Search, LogOut, Plus, Edit, Trash2 } from "lucide-react"

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState("hospitals")

  const renderContent = () => {
    switch (activeTab) {
      case "hospitals":
        return <HospitalList />
      case "appointments":
        return <Appointments />
      case "healthRecord":
        return <HealthRecord />
      case "profile":
        return <UserProfile />
      case "inventory":
        return <Inventory />
      case "timeTable":
        return <TimeTable />
      default:
        return <HospitalList />
    }
  }

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-4">
        <div className="flex items-center mb-6">
          <Hospital className="h-6 w-6 text-blue-400 mr-2" />
          <span className="text-xl font-bold text-blue-400">Aushadhi</span>
        </div>
        <nav className="space-y-2">
          <Button
            variant={activeTab === "hospitals" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("hospitals")}
          >
            <Hospital className="mr-2 h-4 w-4" /> Hospitals
          </Button>
          <Button
            variant={activeTab === "appointments" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("appointments")}
          >
            <Calendar className="mr-2 h-4 w-4" /> Book Appointments
          </Button>
          <Button
            variant={activeTab === "healthRecord" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("healthRecord")}
          >
            <FileText className="mr-2 h-4 w-4" /> Health Record
          </Button>
          <Button
            variant={activeTab === "profile" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("profile")}
          >
            <User className="mr-2 h-4 w-4" /> User Profile
          </Button>
          <Button
            variant={activeTab === "inventory" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("inventory")}
          >
            <Package className="mr-2 h-4 w-4" /> Inventory
          </Button>
          <Button
            variant={activeTab === "timeTable" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("timeTable")}
          >
            <Clock className="mr-2 h-4 w-4" /> Time Table
          </Button>
        </nav>
        <div className="absolute bottom-4">
          <Button variant="ghost" className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-400/10">
            <LogOut className="mr-2 h-4 w-4" /> Logout
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
          {renderContent()}
        </div>
      </main>
    </div>
  )
}

function HospitalList() {
  return (
    <div>
      <div className="mb-4 flex justify-between items-center">
        <Input
          className="max-w-sm bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400"
          placeholder="Search hospitals..."
          type="search"
        />
        <Button>
          <Search className="mr-2 h-4 w-4" /> Search
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Hospital Name</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Specialties</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Central Hospital</TableCell>
            <TableCell>New York, NY</TableCell>
            <TableCell>Cardiology, Neurology</TableCell>
            <TableCell>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Mercy Medical Center</TableCell>
            <TableCell>Los Angeles, CA</TableCell>
            <TableCell>Oncology, Pediatrics</TableCell>
            <TableCell>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>City General Hospital</TableCell>
            <TableCell>Chicago, IL</TableCell>
            <TableCell>Emergency Medicine, Surgery</TableCell>
            <TableCell>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

function Appointments() {
  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle>Book New Appointment</CardTitle>
          <CardDescription>Schedule a new appointment with a doctor</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="hospital">Select Hospital</Label>
              <Select>
                <SelectTrigger id="hospital" className="bg-gray-700 border-gray-600">
                  <SelectValue placeholder="Select a hospital" />
                </SelectTrigger>
                <SelectContent className="bg-gray-700 border-gray-600">
                  <SelectItem value="central">Central Hospital</SelectItem>
                  <SelectItem value="mercy">Mercy Medical Center</SelectItem>
                  <SelectItem value="city">City General Hospital</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="doctor">Select Doctor</Label>
              <Select>
                <SelectTrigger id="doctor" className="bg-gray-700 border-gray-600">
                  <SelectValue placeholder="Select a doctor" />
                </SelectTrigger>
                <SelectContent className="bg-gray-700 border-gray-600">
                  <SelectItem value="smith">Dr. Smith</SelectItem>
                  <SelectItem value="johnson">Dr. Johnson</SelectItem>
                  <SelectItem value="williams">Dr. Williams</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Appointment Date</Label>
              <Input id="date" type="date" className="bg-gray-700 border-gray-600" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Appointment Time</Label>
              <Input id="time" type="time" className="bg-gray-700 border-gray-600" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="reason">Reason for Visit</Label>
              <Textarea id="reason" className="bg-gray-700 border-gray-600" placeholder="Briefly describe your reason for the appointment" />
            </div>
            <Button type="submit">Book Appointment</Button>
          </form>
        </CardContent>
      </Card>
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle>Upcoming Appointments</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Doctor</TableHead>
                <TableHead>Hospital</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>2023-06-15</TableCell>
                <TableCell>10:00 AM</TableCell>
                <TableCell>Dr. Smith</TableCell>
                <TableCell>Central Hospital</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    Cancel
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-06-22</TableCell>
                <TableCell>2:30 PM</TableCell>
                <TableCell>Dr. Johnson</TableCell>
                <TableCell>Mercy Medical Center</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    Cancel
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

function HealthRecord() {
  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle>Medical History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Condition</TableHead>
                <TableHead>Treatment</TableHead>
                <TableHead>Doctor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>2023-01-15</TableCell>
                <TableCell>Influenza</TableCell>
                <TableCell>Antiviral medication</TableCell>
                <TableCell>Dr. Smith</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2022-11-03</TableCell>
                <TableCell>Sprained ankle</TableCell>
                <TableCell>RICE therapy</TableCell>
                <TableCell>Dr. Johnson</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle>Allergies</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            <li>Penicillin</li>
            <li>Peanuts</li>
            <li>Latex</li>
          </ul>
        </CardContent>
      </Card>
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle>Vaccinations</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Vaccine</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Next Due</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Influenza</TableCell>
                <TableCell>2022-10-01</TableCell>
                <TableCell>2023-10-01</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>COVID-19</TableCell>
                <TableCell>2023-03-15</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

function UserProfile() {
  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle>User Profile</CardTitle>
        <CardDescription>Manage your personal information</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" defaultValue="John Doe" className="bg-gray-700 border-gray-600" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="john.doe@example.com" className="bg-gray-700 border-gray-600" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" className="bg-gray-700 border-gray-600" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="dob">Date of Birth</Label>
            <Input id="dob" type="date" defaultValue="1990-01-01" className="bg-gray-700 border-gray-600" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Textarea id="address" defaultValue="123 Main St, Anytown, USA" className="bg-gray-700 border-gray-600" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="emergencyContact">Emergency Contact</Label>
            <Input id="emergencyContact" defaultValue="Jane Doe (+1 555-987-6543)" className="bg-gray-700 border-gray-600" />
          </div>
          <Button type="submit">Update Profile</Button>
        </form>
      </CardContent>
    </Card>
  )
}

function Inventory() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Input
          className="max-w-sm bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400"
          placeholder="Search inventory..."
          type="search"
        />
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Item
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Item Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Last Updated</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Surgical Masks</TableCell>
            <TableCell>PPE</TableCell>
            <TableCell>5000</TableCell>
            <TableCell>2023-06-01</TableCell>
            <TableCell>
              <Button variant="ghost" size="sm">
                <Edit className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Trash2 className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Antibiotics</TableCell>
            <TableCell>Medication</TableCell>
            <TableCell>1000</TableCell>
            <TableCell>2023-05-28</TableCell>
            <TableCell>
              <Button variant="ghost" size="sm">
                <Edit className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Trash2 className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Syringes</TableCell>
            <TableCell>Medical Supplies</TableCell>
            <TableCell>10000</TableCell>
            <TableCell>2023-06-03</TableCell>
            <TableCell>
              <Button variant="ghost" size="sm">
                <Edit className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Trash2 className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

function TimeTable() {
  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle>Weekly Schedule</CardTitle>
          <CardDescription>Your appointments and shifts for the week</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Day</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Activity</TableHead>
                <TableHead>Location</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Monday</TableCell>
                <TableCell>9:00 AM - 5:00 PM</TableCell>
                <TableCell>Regular Shift</TableCell>
                <TableCell>Central Hospital</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Tuesday</TableCell>
                <TableCell>10:00 AM - 11:00 AM</TableCell>
                <TableCell>Team Meeting</TableCell>
                <TableCell>Conference Room A</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Wednesday</TableCell>
                <TableCell>2:00 PM - 4:00 PM</TableCell>
                <TableCell>Surgery</TableCell>
                <TableCell>Operating Room 2</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Thursday</TableCell>
                <TableCell>9:00 AM - 5:00 PM</TableCell>
                <TableCell>Regular Shift</TableCell>
                <TableCell>Central Hospital</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Friday</TableCell>
                <TableCell>1:00 PM - 3:00 PM</TableCell>
                <TableCell>Patient Consultations</TableCell>
                <TableCell>Clinic</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Button>
        <Plus className="mr-2 h-4 w-4" /> Add New Schedule Item
      </Button>
    </div>
  )
}