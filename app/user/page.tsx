"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Hospital,
  Calendar,
  FileText,
  User,
  Clock,
  X,
  Menu,
} from "lucide-react";

import HospitalList from "@/components/user/HospitalList";
import TimeTable from "@/components/user/TimeTable";
import UserProfile from "@/components/user/UserProfile";
import Appointments from "@/components/user/Appointments";
import HealthRecord from "@/components/user/UserRecord";

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState("hospitals");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "hospitals":
        return <HospitalList />;
      case "appointments":
        return <Appointments />;
      case "healthRecord":
        return <HealthRecord />;
      case "profile":
        return <UserProfile />;
      // case "inventory":
      // return <Inventory />
      case "timeTable":
        return <TimeTable />;
      default:
        return <HospitalList />;
    }
  };


  return (
    <div className="flex h-screen bg-black text-gray-100">
      {/* Sidebar */}
      <aside
        className={`bg-gray-800 w-64 min-h-screen p-4 ${
          sidebarOpen ? "block" : "hidden"
        } md:block transition-all duration-200 ease-in-out`}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-blue-400">Aushadhi</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(false)}
            className="md:hidden text-white"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        <nav className="space-y-2">
          <Button
            variant={activeTab === "hospitals" ? "default" : "ghost"}
            className="w-full justify-start transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105"
            onClick={() => setActiveTab("hospitals")}
          >
            <Hospital className="mr-2 h-4 w-4" /> Hospitals
          </Button>
          <Button
            variant={activeTab === "appointments" ? "default" : "ghost"}
            className="w-full justify-start transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105"
            onClick={() => setActiveTab("appointments")}
          >
            <Calendar className="mr-2 h-4 w-4" /> Book Appointments
          </Button>
          <Button
            variant={activeTab === "healthRecord" ? "default" : "ghost"}
            className="w-full justify-start transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105"
            onClick={() => setActiveTab("healthRecord")}
          >
            <FileText className="mr-2 h-4 w-4" /> Health Record
          </Button>
          <Button
            variant={activeTab === "profile" ? "default" : "ghost"}
            className="w-full justify-start transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105"
            onClick={() => setActiveTab("profile")}
          >
            <User className="mr-2 h-4 w-4" /> User Profile
          </Button>
          <Button
            variant={activeTab === "timeTable" ? "default" : "ghost"}
            className="w-full justify-start transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105"
            onClick={() => setActiveTab("timeTable")}
          >
            <Clock className="mr-2 h-4 w-4" /> Time Table
          </Button>
        </nav>
        <div className="absolute bottom-4">
          <Button
            variant="ghost"
            className="w-full justify-start text-red-400 hover:text-white-300 hover:bg-red-900"
          >
           Logout
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
          <Menu className="h-6 w-6" />
        </Button>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
          </h1>
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
