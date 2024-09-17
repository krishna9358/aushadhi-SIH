
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Edit, Plus, Trash2 } from "lucide-react"


export default function BedStatus() {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <Input
            className="max-w-sm bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400"
            placeholder="Search beds..."
            type="search"
          />
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add Bed
          </Button>
        </div>
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
    )
  }