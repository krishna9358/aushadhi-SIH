import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Appointments() {
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
                  <SelectItem value="central">Mahatama Gandhi Hospital</SelectItem>
                  <SelectItem value="mercy">SMS Hospital</SelectItem>
                  <SelectItem value="city">Central Hospital</SelectItem>
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
                  <Button variant="outline" size="sm">Cancel</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023-06-22</TableCell>
                <TableCell>2:30 PM</TableCell>
                <TableCell>Dr. Johnson</TableCell>
                <TableCell>Mercy Medical Center</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">Cancel</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
