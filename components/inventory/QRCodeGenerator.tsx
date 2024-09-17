import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem,  SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "../ui/textarea"
import { QrCode } from "lucide-react"

export default function QRCodeGenerator() {
    return (
      <div className="space-y-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle>Generate QR Code</CardTitle>
            <CardDescription>Create QR codes for patient information or inventory items</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="qrType">QR Code Type</Label>
                <Select>
                  <SelectTrigger id="qrType" className="bg-gray-700 border-gray-600">
                    <SelectValue placeholder="Select QR code type" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 border-gray-600">
                    <SelectItem value="patient">Patient Information</SelectItem>
                    <SelectItem value="inventory">Inventory Item</SelectItem>
                    <SelectItem value="bed">Bed Information</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="qrContent">Content</Label>
                <Textarea id="qrContent" className="bg-gray-700 border-gray-600" placeholder="Enter the content for the QR code" />
              </div>
              <Button type="submit">Generate QR Code</Button>
            </form>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle>Generated QR Code</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <div className="w-64 h-64 bg-white flex items-center justify-center">
              <QrCode className="w-48 h-48 text-gray-800" />
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }