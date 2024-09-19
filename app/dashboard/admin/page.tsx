'use client'

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { 
  Hospital, 
  User, 
  Shield,
  Settings,
  Plus,
  Search,
  Edit,
  Trash2,
  BarChart,
  AlertTriangle,
  Clock,
  Users,
  Menu,
  X
} from "lucide-react"

export default function SuperuserAdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const sidebarItems = [
    { icon: <Hospital className="h-5 w-5" />, label: "Hospitals", href: "#" },
    { icon: <User className="h-5 w-5" />, label: "Users", href: "#" },
    { icon: <Shield className="h-5 w-5" />, label: "Permissions", href: "#" },
    { icon: <Settings className="h-5 w-5" />, label: "System", href: "#" },
  ]

  return (
    <div className="flex h-screen bg-black text-gray-100">
      {/* Sidebar */}
      <aside
        className={`bg-gray-800 w-64 min-h-screen p-4 ${
          sidebarOpen ? "block" : "hidden"
        } md:block transition-all duration-200 ease-in-out`}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-blue-400">Aushadhi Admin</h2>
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)} className="md:hidden text-gray-100">
            <X className="h-6 w-6" />
          </Button>
        </div>
        <nav>
          {sidebarItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex items-center gap-2 p-2 rounded hover:bg-gray-700 transition-all duration-200 ease-in-out text-gray-300 hover:text-gray-100"
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 overflow-auto">
        <Button variant="outline" size="icon" onClick={() => setSidebarOpen(true)} className="md:hidden mb-4 text-gray-100 border-gray-700">
          <Menu className="h-6 w-6" />
        </Button>

        <h1 className="text-2xl font-bold mb-4 text-blue-400">Superuser Admin Dashboard</h1>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Total Hospitals</CardTitle>
              <Hospital className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-100">24</div>
              <p className="text-xs text-gray-400">+2 new this month</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Total Users</CardTitle>
              <Users className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-100">10,234</div>
              <p className="text-xs text-gray-400">+15% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">System Uptime</CardTitle>
              <Clock className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-100">99.9%</div>
              <p className="text-xs text-gray-400">Last 30 days</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Active Alerts</CardTitle>
              <AlertTriangle className="h-4 w-4 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-100">3</div>
              <p className="text-xs text-gray-400">Requires attention</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="hospitals" className="space-y-4">
          <TabsList className="bg-gray-800 text-gray-400">
            <TabsTrigger value="hospitals" className="data-[state=active]:bg-gray-700 data-[state=active]:text-gray-100">
              <Hospital className="h-4 w-4 mr-2" />
              Hospitals
            </TabsTrigger>
            <TabsTrigger value="users" className="data-[state=active]:bg-gray-700 data-[state=active]:text-gray-100">
              <User className="h-4 w-4 mr-2" />
              Users
            </TabsTrigger>
            <TabsTrigger value="permissions" className="data-[state=active]:bg-gray-700 data-[state=active]:text-gray-100">
              <Shield className="h-4 w-4 mr-2" />
              Permissions
            </TabsTrigger>
            <TabsTrigger value="system" className="data-[state=active]:bg-gray-700 data-[state=active]:text-gray-100">
              <Settings className="h-4 w-4 mr-2" />
              System
            </TabsTrigger>
          </TabsList>

          <TabsContent value="hospitals">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-100">Manage Hospitals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="relative">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                      <Input placeholder="Search hospitals..." className="pl-8 bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400" />
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-gray-100">
                      <Plus className="h-4 w-4 mr-2" />
                      Add New Hospital
                    </Button>
                  </div>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-gray-400">Name</TableHead>
                        <TableHead className="text-gray-400">ID</TableHead>
                        <TableHead className="text-gray-400">Location</TableHead>
                        <TableHead className="text-gray-400">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {["City General Hospital", "St. Mary's Medical Center", "Greenwood Community Hospital"].map((name, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium text-gray-100">{name}</TableCell>
                          <TableCell className="text-gray-400">H00{index + 1}</TableCell>
                          <TableCell className="text-gray-400">City {index + 1}</TableCell>
                          <TableCell className="text-gray-400">
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:text-gray-100 hover:bg-gray-700">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:text-gray-100 hover:bg-gray-700">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-100">User Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="relative">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                      <Input placeholder="Search users..." className="pl-8 bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400" />
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-gray-100">
                      <Plus className="h-4 w-4 mr-2" />
                      Add New User
                    </Button>
                  </div>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-gray-400">Name</TableHead>
                        <TableHead className="text-gray-400">Email</TableHead>
                        <TableHead className="text-gray-400">Role</TableHead>
                        <TableHead className="text-gray-400">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { name: "John Doe", email: "john@example.com", role: "Admin" },
                        { name: "Jane Smith", email: "jane@example.com", role: "Doctor" },
                        { name: "Alex Johnson", email: "alex@example.com", role: "Nurse" },
                      ].map((user, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium text-gray-100">{user.name}</TableCell>
                          <TableCell className="text-gray-400">{user.email}</TableCell>
                          <TableCell className="text-gray-400">{user.role}</TableCell>
                          <TableCell className="text-gray-400">
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:text-gray-100 hover:bg-gray-700">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:text-gray-100 hover:bg-gray-700">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="permissions">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-100">Role Permissions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Select>
                    <SelectTrigger className="w-full bg-gray-700 border-gray-600 text-gray-100">
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700 text-gray-100">
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="doctor">Doctor</SelectItem>
                      <SelectItem value="nurse">Nurse</SelectItem>
                      <SelectItem value="staff">Staff</SelectItem>
                    </SelectContent>
                  </Select>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-gray-400">Permission</TableHead>
                        <TableHead className="text-gray-400">Access</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        "View Patient Records",
                        "Edit Patient Records",
                        "Manage Appointments",
                        "Access Analytics",
                        "Manage Users",
                        "System Settings",
                      ].map((permission, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium text-gray-100">{permission}</TableCell>
                          <TableCell className="text-gray-400">
                            <input
                              type="checkbox"
                              id={`permission-${index}`}
                              className="rounded bg-gray-700 border-gray-600 text-blue-600 focus:ring-blue-600"
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-gray-100">Save Permissions</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="system">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-100">System Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="backup-frequency" className="text-gray-400">Backup Frequency</Label>
                    <Select>
                      <SelectTrigger id="backup-frequency" className="w-full bg-gray-700 border-gray-600 text-gray-100">
                        <SelectValue placeholder="Select backup frequency" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700 text-gray-100">
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
                      <Label htmlFor="maintenance-mode" className="text-gray-100">Enable Maintenance Mode</Label>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="system-email" className="text-gray-400">System Email</Label>
                    <Input id="system-email" type="email" placeholder="admin@example.com" className="bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="log-level" className="text-gray-400">Log Level</Label>
                    <Select>
                      <SelectTrigger id="log-level" className="w-full bg-gray-700 border-gray-600 text-gray-100">
                        <SelectValue placeholder="Select log level" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700 text-gray-100">
                        <SelectItem value="error">Error</SelectItem>
                        <SelectItem value="warn">Warning</SelectItem>
                        <SelectItem value="info">Info</SelectItem>
                        <SelectItem value="debug">Debug</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-gray-100">Save System Settings</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="mt-6 bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-gray-100">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <Button className="bg-green-600 hover:bg-green-700 text-gray-100">
                <Plus className="h-4 w-4 mr-2" />
                Add New Hospital
              </Button>
              <Button className="bg-yellow-600 hover:bg-yellow-700 text-gray-100">
                <Shield className="h-4 w-4 mr-2" />
                Manage User Roles
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700 text-gray-100">
                <BarChart className="h-4 w-4 mr-2" />
                View System Analytics
              </Button>
              <Button className="bg-red-600 hover:bg-red-700 text-gray-100">
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