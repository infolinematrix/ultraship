"use client";

import { gql } from "@apollo/client";
import { TableCell, TableRow } from "@/components/ui/table";
import { Employee } from "../../graphql/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical, Pencil, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  employee: Employee;
  onEdit: (employee: Employee) => void;
  onDelete: (id: number) => void;
}

export default function EmployeeRow({ employee, onEdit, onDelete }: Props) {
  return (
    <TableRow key={employee.id}>
      <TableCell>{employee.id}</TableCell>
      <TableCell className="font-medium">{employee.name}</TableCell>
      <TableCell>{employee.age}</TableCell>
      <TableCell>{employee.designation}</TableCell>
      <TableCell>{employee.gender}</TableCell>
      <TableCell>{employee.attendence}%</TableCell>
      {/* ACTIONS */}
      <TableCell className="text-right">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onEdit(employee)}>
              <Pencil className="mr-2 h-4 w-4" />
              Edit
            </DropdownMenuItem>

            <DropdownMenuItem
              className="text-red-600 focus:text-red-600"
              onClick={() => onDelete(employee.id)}
            >
              <Trash className="mr-2 h-4 w-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}
