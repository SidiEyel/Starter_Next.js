'use client'
import React, { useState } from "react";
import { Plus } from "lucide-react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button"
import TableComponent from "@/components/shared/TableComponent";


const WebsiteLandingPage = () => {
  const [openDetais, setOpenDetails] = useState(false);
  const [selectedPage, setSelectedPage] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(10);

  const columns: any = [
    {
      title: "Nom",
      key: "nom",
      render: (record: any) => (
        <p>{record.fullName}</p>
      ),
    },
    {
      title: "Téléphone",
      dataIndex: "phoneNumber",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "NNI",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "action",
    },
  ];

  return (
    
    <div className="bg-white border-gray-200 rounded-lg p-5 border-0 h-full mb-2">
      <div className="card-body">
        
      <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <h1 data-testId="enterprise-list" className="text-[#212121] text-xs md:text-[22px] font-regular">
              Liste des Etudient
            </h1>
            <p data-testId="enterprise-count" className="text-[#07A854] text-xs md:text-[16px] font-medium mb-6 md:mt-2 mt-0">
              {/* {agents?.totalElements} agents */}
            </p>
          </div>
                   
          <Button 
            type="button" 
            className="bg-[#154c79] hover:bg-[#1e81b0] text-white w-[170px] 2xl:w-[200px] h-[40px] rounded-md text-md"
          >        
            <Plus className="w-4 h-4"/>
            <p>Nouvel Etudient</p>
          </Button>
        </div>
    
        <TableComponent
          columns={columns}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          pageSize={pageSize}
          setPageSize={setPageSize} 
          data={[]} 
          count={0} 
          loading={false}       
        />

        <Dialog open={openDetais} onOpenChange={setOpenDetails}>
          <DialogContent style={{borderRadius: '14px'}} className="sm:max-w-[450px]">
            <DialogHeader>
              <DialogTitle>Détails d’agent</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="flex justify-between items-center">
                <p className="font-normal">
                  Nom complet 
                </p>
                <p className=" font-medium">
                  Ahmed Mohamed
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-normal">
                  Telephone 
                </p>
                <p className=" font-medium">
                  22334456
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-normal">
                  Email  
                </p>
                <p className=" font-medium">
                  test@gmail.com
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-normal bg-">
                  Active  
                </p>
                <p className=" font-medium">
                  22334456
                </p>
              </div>
            </div>
            <DialogFooter>
              <Button type="reset" className="w-[120px] bg-white text-[#344054]">Annuler</Button>
              <Button type="submit" className="bg-white border-[#D02026] border-[1px] text-[#D02026] w-[120px] rounded-md">Desactiver</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )  
}
 
export default WebsiteLandingPage;
