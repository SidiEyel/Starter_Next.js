'use client'
import React, { useState } from "react";
import { Plus } from "lucide-react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button"
import TableComponent from "@/components/shared/TableComponent";
import { useTranslation } from "react-i18next";

export const UsersLandingPage = () => {
    const [openDetais, setOpenDetails] = useState(false);
    const [selectedPage, setSelectedPage] = useState<number>(0);
    const [pageSize, setPageSize] = useState<number>(10);
    const {t} = useTranslation('')
  
    const columns: any = [
      {
        title: t("name"),
        key: "nom",
        render: (record: any) => (
          <p>{record.fullName}</p>
        ),
      },
      {
        title: t("phone"),
        dataIndex: "phoneNumber",
        key: "phone",
      },
      {
        title: t("email"),
        dataIndex: "email",
        key: "email",
      },
      {
        title: t("nni"),
        dataIndex: "nni",
        key: "nni",
      },
      {
        title: t("action"),
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
            {t("list_of_users")}
          </h1>
          <p data-testId="enterprise-count" className="text-[#07A854] text-xs md:text-[16px] font-medium mb-6 md:mt-2 mt-0">
            {/* {agents?.totalElements} agents */}
          </p>
        </div>
                 
        <Button 
          type="button" 
          className="bg-primary hover:bg-secondary text-white w-[170px] 2xl:w-[200px] h-[40px] rounded-md text-md"
        >        
          <Plus className="w-4 h-4"/>
          <p>{t("add_user_title")}</p>
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
            <DialogTitle>{t("details_user_title")}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex justify-between items-center">
              <p className="font-normal">
              {t("full_name")} 
              </p>
              <p className=" font-medium">
                Ahmed Mohamed
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-normal">
                {t("phone")}  
              </p>
              <p className=" font-medium">
                22334456
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-normal">
                {t("email")}   
              </p>
              <p className=" font-medium">
                test@gmail.com
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-normal bg-">
                {t("status")}   
              </p>
              <p className=" font-medium">
                Active
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button type="reset" className="w-[120px] bg-white text-[#344054]">{t("cancle")} </Button>
            <Button type="submit" className="bg-white border-[#D02026] border-[1px] text-[#D02026] w-[120px] rounded-md">{t("disable")}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  </div>
  );
};
