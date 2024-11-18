"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { IoFolderOutline } from "react-icons/io5";
import DataTable from '@/components/dashboard/dataTable'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">

      {/* Top Header */}
      <header className="flex justify-between items-center p-4 mt-6 max-w-screen-xl mx-auto">
        <div className="flex items-end gap-1">
          <h1 className="text-3xl font-medium text-gray-700">Dashboard</h1>
          <p className="text-gray-500 text-sm">1 video turned into marketing content</p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white">+ Add Videos <span className="bg-purple-500 px-2 py-0 text-xs rounded-3xl">3 free</span></Button>
      </header>

      {/* Main Content Area */}
      <div className="flex p-4 gap-4 max-w-screen-xl mx-auto">

        {/* Sidebar */}
        <aside className="w-1/4 flex flex-col gap-4">
            <Card className="rounded-lg shadow">
                <CardHeader>
                    <h2 className="text-lg font-medium text-gray-700">Folders</h2>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                    <Button variant="secondary" className="flex justify-start"><IoFolderOutline /> All Videos</Button>
                    <div className="flex flex-col">
                    <Button variant="ghost" className="flex justify-start"><IoFolderOutline /> New folder</Button>
                    <Button variant="ghost" className="flex justify-start"><IoFolderOutline /> New folder</Button>
                    </div>
                    <Input placeholder="New folder name"></Input>
                    <Button variant="ghost" className="">+ Create Folder</Button>
                </CardContent>
            </Card>
            <Card className="rounded-lg shadow">
                <CardHeader>
                <h2 className="text-lg font-medium text-gray-700">Free Trial</h2>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <p className="text-gray-500 text-xs">3 videos</p>
                        <Button variant="secondary" size="sm" className=" hover:bg-slate-200">Get more videos</Button>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-gray-500 text-xs">0 team members</p>
                        <Button variant="secondary" size="sm" className=" hover:bg-slate-200 ">Add team members</Button>
                    </div>
                </CardContent>
            </Card>
        </aside>


        {/* Video List Content */}
        <div className="flex-1">
          {/* <Input placeholder="Search videos..."></Input> */}
          <DataTable />
        </div>
      </div>
    </div>
  );
}
