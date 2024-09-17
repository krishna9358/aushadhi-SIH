import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function HospitalList(){

    return (
      <div>
        <div className="mb-4 flex justify-between items-center">
          <Input
            className="max-w-sm bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400"
            placeholder="Search hospitals..."
            type="search"
          />
          <Button>
            <Search className="mr-1 h-4 w-4" /> Search
          </Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Hospital Name</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Specialties</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Central Hospital</TableCell>
              <TableCell>Jaipur, Rajasthan</TableCell>
              <TableCell>Cardiology, Neurology</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>SMS Hospital</TableCell>
              <TableCell>Jaipur, Rajasthan</TableCell>
              <TableCell>Oncology, Pediatrics</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mahatama Gandhi Hospital</TableCell>
              <TableCell>Jaipur, Rajasthan</TableCell>
              <TableCell>Emergency Medicine, Surgery</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    )
  }
  