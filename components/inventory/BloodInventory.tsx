import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Edit, Plus, Trash2 } from "lucide-react"

export default function BloodInventory() {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <Input
            className="max-w-sm bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400"
            placeholder="Search blood inventory..."
            type="search"
          />
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add Blood Stock
          </Button>
        </div>
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
    )
  }