import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "489e1d42",
      amount: 75.50,
      status: "processing",
      email: "john.doe@example.com",
    },
    {
      id: "63a0d951",
      amount: 299.99,
      status: "success",
      email: "sarah.smith@example.com",
    },
    {
      id: "b7c2e845",
      amount: 149.99,
      status: "failed",
      email: "robert.jones@example.com",
    },
    {
      id: "92f5d367",
      amount: 50.00,
      status: "success",
      email: "emma.wilson@example.com",
    },
    {
      id: "15e8f934",
      amount: 199.99,
      status: "pending",
      email: "michael.brown@example.com",
    },
    {
      id: "a4d9c623",
      amount: 85.00,
      status: "success",
      email: "lisa.taylor@example.com",
    },
    {
      id: "7b3f9e12",
      amount: 449.99,
      status: "processing",
      email: "david.miller@example.com",
    },
    {
      id: "c6e2d158",
      amount: 25.00,
      status: "success",
      email: "anna.davis@example.com",
    },
    {
      id: "f9a4b732",
      amount: 175.50,
      status: "failed",
      email: "james.wilson@example.com",
    },
    {
      id: "45d8e367",
      amount: 129.99,
      status: "success",
      email: "emily.clark@example.com",
    },
    {
      id: "23c7f891",
      amount: 399.99,
      status: "pending",
      email: "peter.zhang@example.com",
    },
    {
      id: "8a1b5d49",
      amount: 89.99,
      status: "success",
      email: "sophia.lee@example.com",
    },
    {
      id: "d4e7c236",
      amount: 299.99,
      status: "processing",
      email: "alex.martinez@example.com",
    },
    {
      id: "91h2k567",
      amount: 150.00,
      status: "success",
      email: "rachel.green@example.com",
    },
    {
      id: "56m9p234",
      amount: 199.99,
      status: "failed",
      email: "chris.anderson@example.com",
    }
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
