import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"


export default function Management() {
    return (
      <div className="space-y-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle>Hospital Management</CardTitle>
            <CardDescription>Manage hospital resources and staff</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Select>
                  <SelectTrigger id="department" className="bg-gray-700 border-gray-600">
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 border-gray-600">
                    <SelectItem value="emergency">Emergency</SelectItem>
                    <SelectItem value="icu">ICU</SelectItem>
                    <SelectItem value="pediatrics">Pediatrics</SelectItem>
                    <SelectItem value="surgery">Surgery</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="staffCount">Staff Count</Label>
                <Input id="staffCount" type="number" className="bg-gray-700 border-gray-600" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget">Budget Allocation</Label>
                <Input id="budget" type="number" className="bg-gray-700 border-gray-600" />
              </div>
              <Button type="submit">Update Management Info</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }