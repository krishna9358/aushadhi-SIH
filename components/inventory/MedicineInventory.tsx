import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Edit, Plus, Trash2 } from "lucide-react"

export default function MedicineInventory() {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <Input
            className="max-w-sm bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400"
            placeholder="Search medicines..."
            type="search"
          />
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add Medicine
          </Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Expiry Date</TableHead>
              <TableHead>Supplier</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Paracetamol</TableCell>
              <TableCell>500</TableCell>
              <TableCell>2024-06-30</TableCell>
              <TableCell>PharmaCorp</TableCell>
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
              <TableCell>Amoxicillin</TableCell>
              <TableCell>200</TableCell>
              <TableCell>2023-12-31</TableCell>
              <TableCell>MediSupply</TableCell>
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
  