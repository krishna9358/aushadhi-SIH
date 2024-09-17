import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function TimeTable() {
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