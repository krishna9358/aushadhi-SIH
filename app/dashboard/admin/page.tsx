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
  Plus,
  Menu,
  X,
  Users,
  Settings,
  Shield,
  AlertTriangle,
  BarChart
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SuperuserAdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const sidebarItems = [
    { icon: <Hospital className="h-5 w-5" />, label: "Hospitals", href: "#" },
    { icon: <Calendar className="h-5 w-5" />, label: "Appointments", href: "#" },
    { icon: <FileText className="h-5 w-5" />, label: "Health Records", href: "#" },
    { icon: <User className="h-5 w-5" />, label: "Users", href: "#" },
    { icon: <Package className="h-5 w-5" />, label: "Inventory", href: "#" },
    { icon: <Clock className="h-5 w-5" />, label: "Schedules", href: "#" },
    { icon: <Shield className="h-5 w-5" />, label: "Permissions", href: "#" },
    { icon: <Settings className="h-5 w-5" />, label: "System Settings", href: "#" },
    { icon: <BarChart className="h-5 w-5" />, label: "Analytics", href: "#" },
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
          <h2 className="text-2xl font-bold text-blue-400">Aushadhi Admin</h2>
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

        <h1 className="text-2xl font-bold mb-4 text-blue-400">Superuser Admin Dashboard</h1>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Total Hospitals</CardTitle>
              <Hospital className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">24</div>
              <p className="text-xs text-gray-400">+2 new this month</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Total Users</CardTitle>
              <Users className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">10,234</div>
              <p className="text-xs text-gray-400">+15% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">System Uptime</CardTitle>
              <Clock className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">99.9%</div>
              <p className="text-xs text-gray-400">Last 30 days</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Active Alerts</CardTitle>
              <AlertTriangle className="h-4 w-4 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">3</div>
              <p className="text-xs text-gray-400">Requires attention</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="hospitals" className="mt-4">
          <TabsList className="bg-gray-800 text-gray-400">
            <TabsTrigger value="hospitals" className="data-[state=active]:bg-gray-700 data-[state=active]:text-white">
              <Hospital className="h-4 w-4 mr-2" />
              Hospitals
            </TabsTrigger>
            <TabsTrigger value="users" className="data-[state=active]:bg-gray-700 data-[state=active]:text-white">
              <User className="h-4 w-4 mr-2" />
              Users
            </TabsTrigger>
            <TabsTrigger value="permissions" className="data-[state=active]:bg-gray-700 data-[state=active]:text-white">
              <Shield className="h-4 w-4 mr-2" />
              Permissions
            </TabsTrigger>
            <TabsTrigger value="system" className="data-[state=active]:bg-gray-700 data-[state=active]:text-white">
              <Settings className="h-4 w-4 mr-2" />
              System
            </TabsTrigger>
          </TabsList>
          <TabsContent value="hospitals">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Manage Hospitals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Input placeholder="Search hospitals..." className="max-w-sm bg-gray-700 border-gray-600 text-white" />
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      <Plus className="h-4 w-4 mr-2" />
                      Add New Hospital
                    </Button>
                  </div>
                  <div className="space-y-4">
                    {["City General Hospital", "St. Mary's Medical Center", "Greenwood Community Hospital"].map((name, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Hospital className="h-9 w-9 rounded-full bg-gray-700 p-2 text-blue-400" />
                          <div className="ml-4">
                            <p className="text-sm font-medium leading-none text-white">{name}</p>
                            <p className="text-sm text-gray-400">ID: H00{index + 1}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:text-white hover:bg-gray-700">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:text-white hover:bg-gray-700">
                            Manage
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="users">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">User Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Input placeholder="Search users..." className="max-w-sm bg-gray-700 border-gray-600 text-white" />
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      <Plus className="h-4 w-4 mr-2" />
                      Add New User
                    </Button>
                  </div>
                  <div className="space-y-4">
                    {["John Doe", "Jane Smith", "Alex Johnson"].map((name, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <User className="h-9 w-9 rounded-full bg-gray-700 p-2 text-blue-400" />
                          <div className="ml-4">
                            <p className="text-sm font-medium leading-none text-white">{name}</p>
                            <p className="text-sm text-gray-400">Role: {index === 0 ? "Admin" : "Staff"}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:text-white hover:bg-gray-700">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:text-white hover:bg-gray-700">
                            Permissions
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="permissions">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Role Permissions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Select>
                    <SelectTrigger className="w-full bg-gray-700 border-gray-600 text-white">
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700 text-white">
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="doctor">Doctor</SelectItem>
                      <SelectItem value="nurse">Nurse</SelectItem>
                      <SelectItem value="staff">Staff</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="space-y-2">
                    {["View Patient Records", "Edit Patient Records", "Manage Appointments", "Access Analytics"].map((permission, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <Label htmlFor={`permission-${index}`} className="text-white">{permission}</Label>
                        <input
                          type="checkbox"
                          id={`permission-${index}`}
                          className="rounded bg-gray-700 border-gray-600 text-blue-600 focus:ring-blue-600"
                        />
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Save Permissions</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="system">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">System Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="backup-frequency" className="text-gray-400">Backup Frequency</Label>
                    <Select>
                      <SelectTrigger id="backup-frequency" className="w-full bg-gray-700 border-gray-600 text-white">
                        <SelectValue placeholder="Select backup frequency" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700 text-white">
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="maintenance-mode" className="text-gray-400">Maintenance Mode</Label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="maintenance-mode"
                        className="rounded bg-gray-700 border-gray-600 text-blue-600 focus:ring-blue-600"
                      />
                      <Label htmlFor="maintenance-mode" className="text-white">Enable Maintenance Mode</Label>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="system-email" className="text-gray-400">System Email</Label>
                    <Input id="system-email" type="email" placeholder="admin@example.com" className="bg-gray-700 border-gray-600 text-white" />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Save System Settings</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="mt-4 bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <Plus className="h-4 w-4 mr-2" />
                Add New Hospital
              </Button>
              <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">
                <Shield className="h-4 w-4 mr-2" />
                Manage User Roles
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                <BarChart className="h-4 w-4 mr-2" />
                View System Analytics
              </Button>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                <AlertTriangle className="h-4 w-4 mr-2" />
                View Active Alerts
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}