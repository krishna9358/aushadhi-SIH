import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Edit, Plus, Trash2 } from "lucide-react"

export default function Inventory() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Input
          className="max-w-sm bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400"
          placeholder="Search inventory..."
          type="search"
        />
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Item
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Item Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Last Updated</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Surgical Masks</TableCell>
            <TableCell>PPE</TableCell>
            <TableCell>5000</TableCell>
            <TableCell>2023-06-01</TableCell>
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
            <TableCell>Antibiotics</TableCell>
            <TableCell>Medication</TableCell>
            <TableCell>1000</TableCell>
            <TableCell>2023-05-28</TableCell>
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
            <TableCell>Syringes</TableCell>
            <TableCell>Medical Supplies</TableCell>
            <TableCell>10000</TableCell>
            <TableCell>2023-06-03</TableCell>
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