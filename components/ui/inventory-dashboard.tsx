"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Hospital, Bed, Pill, Droplet, Stethoscope, Users, QrCode, Plus, Edit, Trash2, Menu } from "lucide-react"

export function InventoryDashboardComponent() {
  const [activeTab, setActiveTab] = useState("beds")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const renderContent = () => {
    switch (activeTab) {
      case "beds":
        return <BedStatus />
      case "medicines":
        return <MedicineInventory />
      case "blood":
        return <BloodInventory />
      case "management":
        return <Management />
      case "opd":
        return <OPDStatus />
      case "doctors":
        return <DoctorStatus />
      case "qr":
        return <QRCodeGenerator />
      default:
        return <BedStatus />
    }
  }

  const SidebarContent = () => (
    <>
      <div className="flex items-center mb-6">
        <Hospital className="h-6 w-6 text-blue-400 mr-2" />
        <span className="text-xl font-bold text-blue-400">Aushadhi</span>
      </div>
      <nav className="space-y-2">
        {[
          { name: "Bed Status", icon: Bed, tab: "beds" },
          { name: "Medicines", icon: Pill, tab: "medicines" },
          { name: "Blood Inventory", icon: Droplet, tab: "blood" },
          { name: "Management", icon: Users, tab: "management" },
          { name: "OPD Status", icon: Users, tab: "opd" },
          { name: "Doctor Status", icon: Stethoscope, tab: "doctors" },
          { name: "Generate QR", icon: QrCode, tab: "qr" },
        ].map((item) => (
          <Button
            key={item.tab}
            variant={activeTab === item.tab ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => {
              setActiveTab(item.tab)
              setIsSidebarOpen(false)
            }}
          >
            <item.icon className="mr-2 h-4 w-4" /> {item.name}
          </Button>
        ))}
      </nav>
    </>
  )

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      {/* Sidebar for larger screens */}
      <aside className="hidden md:block w-64 bg-gray-800 p-4">
        <SidebarContent />
      </aside>

      {/* Sidebar for mobile */}
      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <SheetContent side="left" className="w-64 bg-gray-800 p-4">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Main content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-gray-800 p-4 flex items-center justify-between md:justify-end">
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(true)}>
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <h1 className="text-2xl font-bold">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
        </header>

        {/* Content */}
        <div className="flex-1 p-6 overflow-auto">
          <div className="max-w-4xl mx-auto">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  )
}

function BedStatus() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <Input
          className="w-full sm:max-w-sm bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400"
          placeholder="Search beds..."
          type="search"
        />
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Bed
        </Button>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Bed Number</TableHead>
              <TableHead>Ward</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Patient Name</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>101</TableCell>
              <TableCell>ICU</TableCell>
              <TableCell>Occupied</TableCell>
              <TableCell>John Doe</TableCell>
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
              <TableCell>102</TableCell>
              <TableCell>General</TableCell>
              <TableCell>Available</TableCell>
              <TableCell>-</TableCell>
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
    </div>
  )
}

function MedicineInventory() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <Input
          className="w-full sm:max-w-sm bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400"
          placeholder="Search medicines..."
          type="search"
        />
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Medicine
        </Button>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Expiry Date</TableHead>
              <TableHead>Supplier</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Paracetamol</TableCell>
              <TableCell>500</TableCell>
              <TableCell>2024-06-30</TableCell>
              <TableCell>PharmaCorp</TableCell>
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
              <TableCell>Amoxicillin</TableCell>
              <TableCell>200</TableCell>
              <TableCell>2023-12-31</TableCell>
              <TableCell>MediSupply</TableCell>
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
    </div>
  )
}

function BloodInventory() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <Input
          className="w-full sm:max-w-sm bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400"
          placeholder="Search blood inventory..."
          type="search"
        />
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Blood Stock
        </Button>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Blood Type</TableHead>
              <TableHead>Quantity (Units)</TableHead>
              <TableHead>Expiry Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>A+</TableCell>
              <TableCell>10</TableCell>
              <TableCell>2023-07-15</TableCell>
              <TableCell>Available</TableCell>
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
              <TableCell>O-</TableCell>
              <TableCell>5</TableCell>
              <TableCell>2023-07-20</TableCell>
              <TableCell>Low Stock</TableCell>
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
    </div>
  )
}

function Management() {
  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle>Hospital Management</CardTitle>
          <CardDescription>Manage hospital resources and staff</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="department">Department</Label>
              <Select>
                <SelectTrigger id="department" className="bg-gray-700 border-gray-600">
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent className="bg-gray-700 border-gray-600">
                  <SelectItem value="emergency">Emergency</SelectItem>
                  <SelectItem value="icu">ICU</SelectItem>
                  <SelectItem value="pediatrics">Pediatrics</SelectItem>
                  <SelectItem value="surgery">Surgery</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="staffCount">Staff Count</Label>
              <Input id="staffCount" type="number" className="bg-gray-700 border-gray-600" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="budget">Budget Allocation</Label>
              <Input id="budget" type="number" className="bg-gray-700 border-gray-600" />
            </div>
            <Button type="submit">Update Management Info</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

function OPDStatus() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <Input
          className="w-full sm:max-w-sm bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400"
          placeholder="Search OPD..."
          type="search"
        />
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add OPD Entry
        </Button>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Patient Name</TableHead>
              <TableHead>Doctor</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Alice Johnson</TableCell>
              <TableCell>Dr. Smith</TableCell>
              <TableCell>Cardiology</TableCell>
              <TableCell>10:00 AM</TableCell>
              <TableCell>Waiting</TableCell>
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
              <TableCell>Bob Williams</TableCell>
              <TableCell>Dr. Johnson</TableCell>
              <TableCell>Orthopedics</TableCell>
              <TableCell>11:30 AM</TableCell>
              <TableCell>In Progress</TableCell>
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
    </div>
  )
}

function DoctorStatus() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <Input
          className="w-full sm:max-w-sm bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400"
          placeholder="Search doctors..."
          type="search"
        />
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Doctor
        </Button>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Specialty</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Current Location</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Dr. Emily Brown</TableCell>
              <TableCell>Neurology</TableCell>
              <TableCell>On Duty</TableCell>
              <TableCell>Ward 3</TableCell>
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
              <TableCell>Dr. Michael Lee</TableCell>
              <TableCell>Surgery</TableCell>
              <TableCell>In Surgery</TableCell>
              <TableCell>OR 2</TableCell>
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
    </div>
  )
}

function QRCodeGenerator() {
  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle>Generate QR Code</CardTitle>
          <CardDescription>Create QR codes for patient information or inventory items</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="qrType">QR Code Type</Label>
              <Select>
                <SelectTrigger id="qrType" className="bg-gray-700 border-gray-600">
                  <SelectValue placeholder="Select QR code type" />
                </SelectTrigger>
                <SelectContent className="bg-gray-700 border-gray-600">
                  <SelectItem value="patient">Patient Information</SelectItem>
                  <SelectItem value="inventory">Inventory Item</SelectItem>
                  <SelectItem value="bed">Bed Information</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="qrContent">Content</Label>
              <Textarea id="qrContent" className="bg-gray-700 border-gray-600" placeholder="Enter the content for the QR code" />
            </div>
            <Button type="submit">Generate QR Code</Button>
          </form>
        </CardContent>
      </Card>
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle>Generated QR Code</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <div className="w-64 h-64 bg-white flex items-center justify-center">
            <QrCode className="w-48 h-48 text-gray-800" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}