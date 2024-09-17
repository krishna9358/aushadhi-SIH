"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Hospital, Bed, Pill, Droplet, Stethoscope, Users, QrCode, X, LogOut, MenuIcon} from "lucide-react"

import BedStatus from "@/components/inventory/BedStatus"
import MedicineInventory from "@/components/inventory/MedicineInventory"
import BloodInventory from "@/components/inventory/BloodInventory"
import Management from "@/components/inventory/Management"
import OPDStatus from "@/components/inventory/OpdStatus"
import DoctorStatus from "@/components/inventory/DoctorStatus"
import QRCodeGenerator from "@/components/inventory/QRCodeGenerator"

export default function InventoryDashboard() {
  const [activeTab, setActiveTab] = useState("beds")
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
      variant={activeTab === "beds" ? "default" : "ghost"}
      className="w-full justify-start transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105"
      onClick={() => setActiveTab("beds")}
    >
      <Bed className="mr-2 h-4 w-4" /> Bed Status
    </Button>
    <Button
      variant={activeTab === "medicines" ? "default" : "ghost"}
      className="w-full justify-start transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105"
      onClick={() => setActiveTab("medicines")}
    >
      <Pill className="mr-2 h-4 w-4" /> Medicines
    </Button>
    <Button
      variant={activeTab === "blood" ? "default" : "ghost"}
      className="w-full justify-start transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105"
      onClick={() => setActiveTab("blood")}
    >
      <Droplet className="mr-2 h-4 w-4" /> Blood Inventory
    </Button>
    <Button
      variant={activeTab === "management" ? "default" : "ghost"}
      className="w-full justify-start transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105"
      onClick={() => setActiveTab("management")}
    >
      <Users className="mr-2 h-4 w-4" /> Management
    </Button>
    <Button
      variant={activeTab === "opd" ? "default" : "ghost"}
      className="w-full justify-start transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105"
      onClick={() => setActiveTab("opd")}
    >
      <Users className="mr-2 h-4 w-4" /> OPD Status
    </Button>
    <Button
      variant={activeTab === "doctors" ? "default" : "ghost"}
      className="w-full justify-start transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105"
      onClick={() => setActiveTab("doctors")}
    >
      <Stethoscope className="mr-2 h-4 w-4" /> Doctor Status
    </Button>
    <Button
      variant={activeTab === "qr" ? "default" : "ghost"}
      className="w-full justify-start transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105"
      onClick={() => setActiveTab("qr")}
    >
      <QrCode className="mr-2 h-4 w-4" /> Generate QR
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