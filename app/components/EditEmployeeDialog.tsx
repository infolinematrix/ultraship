"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Employee } from "@/graphql/types";
import { useState } from "react";

interface Props {
  open: boolean;
  employee: Employee;
  onClose: () => void;
  onSubmit: (emp: Employee) => void;
}

export function EditEmployeeDialog({
  open,
  employee,
  onClose,
  onSubmit,
}: Props) {
  const [form, setForm] = useState(employee);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Employee</DialogTitle>
        </DialogHeader>

        <Input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Name"
        />

        <Input
          type="number"
          value={form.age}
          onChange={(e) => setForm({ ...form, age: +e.target.value })}
          placeholder="Age"
        />

        <Input
          value={form.designation}
          onChange={(e) => setForm({ ...form, designation: e.target.value })}
          placeholder="Designation"
        />

        <Input
          value={form.gender}
          onChange={(e) => setForm({ ...form, gender: e.target.value })}
          placeholder="Gender"
        />

        <Input
          type="number"
          value={form.attendence}
          onChange={(e) => setForm({ ...form, attendence: +e.target.value })}
          placeholder="Attendance"
        />

        <div className="flex justify-end gap-2 mt-4">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={() => onSubmit(form)}>Update</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
