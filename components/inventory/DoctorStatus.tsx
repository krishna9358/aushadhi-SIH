import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Edit, Trash2} from "lucide-react"

export default function DoctorStatus() {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <Input
            className="max-w-sm bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400"
            placeholder="Search doctors..."
            type="search"
          />
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add Doctor
          </Button>
        </div>
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
    )
  }