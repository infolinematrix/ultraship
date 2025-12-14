"use client";

import { Employee } from "../../graphql/types";

interface Props {
  employee: Employee;
  onClick?: () => void;
}

export default function EmployeeCard({ employee, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow hover:shadow-xl transition cursor-pointer p-4 flex flex-col justify-between"
    >
      <div>
        <h2 className="font-bold text-lg text-gray-800">{employee.name}</h2>
        <p className="text-gray-600">Age: {employee.age}</p>
        <p className="text-gray-600">Class: {employee.empClass}</p>
      </div>
      <div className="mt-4 flex justify-between">
        <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm">Edit</button>
        <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm">Delete</button>
      </div>
    </div>
  );
}
