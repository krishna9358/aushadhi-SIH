"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Hospital, Calendar,  User, CheckSquare, LogOut, Plus, Edit, Trash2, X, MenuIcon } from "lucide-react"

export default function DoctorDashboard() {
  const [activeTab, setActiveTab] = useState("profile")
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  const renderContent = () => {
    switch (activeTab) {    
      case "profile":
        return <UserProfile />
      case "appointments":
        return <Appointments />
      // case "inventory":
        // return <Inventory />
      // case "feedback":
      //   return <Feedback />
      case "checkIns":
        return <DailyCheckIns />
      default:
        return <UserProfile />
    }
  }

  const handleLogout = () => {
    // Clear session or local storage if necessary
    // Redirect to the sign-in page
    router.push("/login")
  }

  return (
    <div className="flex h-screen bg-black text-gray-100">
     {/* Sidebar */}
<aside
  className={`bg-gray-800 w-64 min-h-screen p-4 ${
    sidebarOpen ? "block" : "hidden"
  } md:block transition-all duration-200 ease-in-out`}
>
  <div className="flex items-center justify-between mb-6">
    <div className="flex items-center">
      <Hospital className="h-6 w-6 text-blue-400 mr-2" />
      <span className="text-xl font-bold text-blue-400">Aushadhi</span>
    </div>
    <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)} className="md:hidden text-white">
      <X className="h-6 w-6" />
    </Button>
  </div>
  <nav className="space-y-2">
    <Button
      variant={activeTab === "profile" ? "default" : "ghost"}
      className="w-full justify-start transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105"
      onClick={() => setActiveTab("profile")}
    >
      <User className="mr-2 h-4 w-4" /> User Profile
    </Button>
    <Button
      variant={activeTab === "appointments" ? "default" : "ghost"}
      className="w-full justify-start transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105"
      onClick={() => setActiveTab("appointments")}
    >
      <Calendar className="mr-2 h-4 w-4" /> Appointments
    </Button>
    {/* <Button
      variant={activeTab === "inventory" ? "default" : "ghost"}
      className="w-full justify-start transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105"
      onClick={() => setActiveTab("inventory")}
    >
      <Package className="mr-2 h-4 w-4" /> Inventory
    </Button> */}
    {/* <Button
      variant={activeTab === "feedback" ? "default" : "ghost"}
      className="w-full justify-start transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105"
      onClick={() => setActiveTab("feedback")}
    >
      <MessageSquare className="mr-2 h-4 w-4" /> Feedback
    </Button> */}
    <Button
      variant={activeTab === "checkIns" ? "default" : "ghost"}
      className="w-full justify-start transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105"
      onClick={() => setActiveTab("checkIns")}
    >
      <CheckSquare className="mr-2 h-4 w-4" /> Daily Check-ins
    </Button>
  </nav>
  <div className="absolute bottom-4 w-full">
    <Button
      variant="ghost"
      className="w-full justify-start text-red-400 hover:text-white-300 hover:bg-red-900"
      onClick={handleLogout}
    >
      <LogOut className="mr-2 h-4 w-4" /> Logout
    </Button>
  </div>
</aside>


      {/* Main content */}
      <main className="flex-1 p-6 overflow-auto">
      <Button
          variant="default"
          size="icon"
          onClick={() => setSidebarOpen(true)}
          className="md:hidden mb-4 text-white border-gray-600"
        >
            <MenuIcon className="w-6 h-6" />
          </Button>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
          {renderContent()}
        </div>
      </main>
    </div>
  )
}

function UserProfile() {
  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle>Doctor Profile</CardTitle>
        <CardDescription>Manage your professional information</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" defaultValue="Dr. Jane Smith" className="bg-gray-700 border-gray-600" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="dr.smith@healthconnect.com" className="bg-gray-700 border-gray-600" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" className="bg-gray-700 border-gray-600" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="specialty">Specialty</Label>
            <Input id="specialty" defaultValue="Cardiology" className="bg-gray-700 border-gray-600" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="licenseNumber">License Number</Label>
            <Input id="licenseNumber" defaultValue="MD123456" className="bg-gray-700 border-gray-600" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio">Professional Bio</Label>
            <Textarea
              id="bio"
              defaultValue="Board-certified cardiologist with over 15 years of experience in treating cardiovascular diseases."
              className="bg-gray-700 border-gray-600"
            />
          </div>
          <Button type="submit">Update Profile</Button>
        </form>
      </CardContent>
    </Card>
  )
}

function Appointments() {
  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle>Todays Appointments</CardTitle>
          <CardDescription>Your schedule for {new Date().toLocaleDateString()}</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Time</TableHead>
                <TableHead>Patient Name</TableHead>
                <TableHead>Reason for Visit</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>09:00 AM</TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell>Annual Checkup</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>10:30 AM</TableCell>
                <TableCell>Jane Smith</TableCell>
                <TableCell>Follow-up</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>02:00 PM</TableCell>
                <TableCell>Robert Johnson</TableCell>
                <TableCell>New Patient Consultation</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Button>
        <Plus className="mr-2 h-4 w-4" /> Add Appointment
      </Button>
    </div>
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
          <Plus className="mr-2 h-4 w-4" /> Request Item
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
            <TableCell>Stethoscope</TableCell>
            <TableCell>Medical Equipment</TableCell>
            <TableCell>5</TableCell>
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
            <TableCell>Blood Pressure Cuff</TableCell>
            <TableCell>Medical Equipment</TableCell>
            <TableCell>3</TableCell>
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
            <TableCell>Prescription Pads</TableCell>
            <TableCell>Office Supplies</TableCell>
            <TableCell>100</TableCell>
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

function Feedback() {
  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle>Patient Feedback</CardTitle>
          <CardDescription>Recent feedback from your patients</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Comment</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Sarah Johnson</TableCell>
                <TableCell>2023-06-01</TableCell>
                <TableCell>5/5</TableCell>
                <TableCell>Dr. Smith was very thorough and explained everything clearly.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Michael Brown</TableCell>
                <TableCell>2023-05-28</TableCell>
                <TableCell>4/5</TableCell>
                <TableCell>Good experience overall, but had to wait a bit longer than expected.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Emily Davis</TableCell>
                <TableCell>2023-05-25</TableCell>
                <TableCell>5/5</TableCell>
                <TableCell>Excellent care and attention to detail. Highly recommend!</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle>Respond to Feedback</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="patientName">Patient Name</Label>
              <Input id="patientName" className="bg-gray-700 border-gray-600" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="response">Your Response</Label>
              <Textarea id="response" className="bg-gray-700 border-gray-600" />
            </div>
            <Button type="submit">Send Response</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

function DailyCheckIns() {
  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle>Daily Check-in</CardTitle>
          <CardDescription>Record your daily work status</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input id="date" type="date" className="bg-gray-700 border-gray-600" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="status">Work Status</Label>
              <Select>
                <SelectTrigger id="status" className="bg-gray-700 border-gray-600">
                  <SelectValue placeholder="Select your status" />
                </SelectTrigger>
                <SelectContent className="bg-gray-700 border-gray-600">
                  <SelectItem value="present">Present</SelectItem>
                  <SelectItem value="remote">Working Remotely</SelectItem>
                  <SelectItem value="sick">Sick Leave</SelectItem>
                  <SelectItem value="vacation">Vacation</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea id="notes" className="bg-gray-700 border-gray-600" placeholder="Any comments about your work day..." />
            </div>
            <Button type="submit">Submit Check-in</Button>
          </form>
        </CardContent>
      </Card>
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle>Recent Check-ins</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Notes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>2023-06-03</TableCell>
                <TableCell>Present</TableCell>
                <TableCell>Regular shift at the hospital</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-06-02</TableCell>
                <TableCell>Remote</TableCell>
                <TableCell>Telemedicine consultations</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-06-01</TableCell>
                <TableCell>Present</TableCell>
                <TableCell>Conducted three surgeries</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}