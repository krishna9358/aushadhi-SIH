"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CalendarIcon, Pencil, Trash } from "lucide-react"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface Medicine {
  id: number
  name: string
  quantity: number
  expiryDate: Date
  supplier: string
}

export function MedicineInventory() {
  const [medicines, setMedicines] = useState<Medicine[]>([
    { id: 1, name: "Paracetamol", quantity: 500, expiryDate: new Date(2024, 5, 1), supplier: "PharmaCorp" },
    { id: 2, name: "Amoxicillin", quantity: 200, expiryDate: new Date(2023, 11, 31), supplier: "MediSupply" },
  ])
  const [editingMedicine, setEditingMedicine] = useState<Medicine | null>(null)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)

  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState("")
  const [expiryDate, setExpiryDate] = useState<Date>()
  const [supplier, setSupplier] = useState("")

  const resetForm = () => {
    setName("")
    setQuantity("")
    setExpiryDate(undefined)
    setSupplier("")
    setEditingMedicine(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (editingMedicine) {
      setMedicines(medicines.map(med => 
        med.id === editingMedicine.id 
          ? { ...editingMedicine, name, quantity: parseInt(quantity), expiryDate: expiryDate!, supplier }
          : med
      ))
      setIsEditDialogOpen(false)
    } else {
      const newMedicine: Medicine = {
        id: medicines.length + 1,
        name,
        quantity: parseInt(quantity),
        expiryDate: expiryDate!,
        supplier,
      }
      setMedicines([...medicines, newMedicine])
      setIsAddDialogOpen(false)
    }
    resetForm()
  }

  const handleEdit = (medicine: Medicine) => {
    setEditingMedicine(medicine)
    setName(medicine.name)
    setQuantity(medicine.quantity.toString())
    setExpiryDate(medicine.expiryDate)
    setSupplier(medicine.supplier)
    setIsEditDialogOpen(true)
  }

  const handleDelete = (id: number) => {
    setMedicines(medicines.filter(medicine => medicine.id !== id))
  }

  const MedicineForm = () => (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="bg-gray-700 text-white"
        />
      </div>
      <div>
        <Label htmlFor="quantity">Quantity</Label>
        <Input
          id="quantity"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
          className="bg-gray-700 text-white"
        />
      </div>
      <div>
        <Label>Expiry Date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={`w-full justify-start text-left font-normal ${!expiryDate && "text-muted-foreground"}`}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {expiryDate ? format(expiryDate, "PP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 bg-gray-700">
            <Calendar
              mode="single"
              selected={expiryDate}
              onSelect={setExpiryDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
      <div>
        <Label htmlFor="supplier">Supplier</Label>
        <Input
          id="supplier"
          value={supplier}
          onChange={(e) => setSupplier(e.target.value)}
          required
          className="bg-gray-700 text-white"
        />
      </div>
      <div className="flex justify-end space-x-2">
        <Button type="submit" className="bg-green-600 hover:bg-green-700">
          {editingMedicine ? "Update Medicine" : "Add Medicine"}
        </Button>
      </div>
    </form>
  )

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogTrigger asChild>
          <Button className="bg-blue-600 hover:bg-blue-700 mb-4">Add New Medicine</Button>
        </DialogTrigger>
        <DialogContent className="bg-gray-800 text-white">
          <DialogHeader>
            <DialogTitle>Add New Medicine</DialogTitle>
          </DialogHeader>
          <MedicineForm />
        </DialogContent>
      </Dialog>

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="bg-gray-800 text-white">
          <DialogHeader>
            <DialogTitle>Edit Medicine</DialogTitle>
          </DialogHeader>
          <MedicineForm />
        </DialogContent>
      </Dialog>

      <Table className="w-full max-w-4xl bg-gray-800 rounded-lg overflow-hidden">
        <TableHeader>
          <TableRow>
            <TableHead className="text-white">Name</TableHead>
            <TableHead className="text-white">Quantity</TableHead>
            <TableHead className="text-white">Expiry Date</TableHead>
            <TableHead className="text-white">Supplier</TableHead>
            <TableHead className="text-white">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {medicines.map((medicine) => (
            <TableRow key={medicine.id}>
              <TableCell>{medicine.name}</TableCell>
              <TableCell>{medicine.quantity}</TableCell>
              <TableCell>{format(medicine.expiryDate, "PP")}</TableCell>
              <TableCell>{medicine.supplier}</TableCell>
              <TableCell>
                <Button variant="ghost" size="icon" className="mr-2" onClick={() => handleEdit(medicine)}>
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => handleDelete(medicine.id)}>
                  <Trash className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}