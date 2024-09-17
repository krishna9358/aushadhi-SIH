import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HealthRecord() {
    return (
      <div className="space-y-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle>Medical History</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Condition</TableHead>
                  <TableHead>Treatment</TableHead>
                  <TableHead>Doctor</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>2023-01-15</TableCell>
                  <TableCell>Influenza</TableCell>
                  <TableCell>Antiviral medication</TableCell>
                  <TableCell>Dr. Smith</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2022-11-03</TableCell>
                  <TableCell>Sprained ankle</TableCell>
                  <TableCell>RICE therapy</TableCell>
                  <TableCell>Dr. Johnson</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle>Allergies</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>Penicillin</li>
              <li>Peanuts</li>
              <li>Latex</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle>Vaccinations</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Vaccine</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Next Due</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Influenza</TableCell>
                  <TableCell>2022-10-01</TableCell>
                  <TableCell>2023-10-01</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>COVID-19</TableCell>
                  <TableCell>2023-03-15</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    )
  }