import React from "react";
import { Pagination, Spin, Table } from "antd";
import type { TableColumnsType } from "antd";

interface TableComponentProps {
  columns: TableColumnsType<any>;
  data: any[];
  pageSize?: number;
  setPageSize?: React.Dispatch<React.SetStateAction<number>>;
  selectedPage: number;
  setSelectedPage: React.Dispatch<React.SetStateAction<number>>;
  isLast?: boolean;
  count: number;
  loading: boolean;
  onRow?: (record: any) => {
    onClick?: () => void;
  };
}

const TableComponent: React.FC<TableComponentProps> = ({
  columns,
  data,
  pageSize = 10,
  selectedPage,
  setSelectedPage,
  isLast,
  count,
  loading,
  onRow,
}) => {

  const handlePageChange = (page: number) => {
    setSelectedPage(page - 1);
  };

  const itemRender = (current: number, type: string, originalElement: any) => {
    if (type === "prev") {
      return (
        <button
          data-testId="previous-button"
          className={`md:pr-10 pr-5 pt-1 md:pt-0 border-none mx-2 text-xs md:text-sm`}
          onClick={() => selectedPage > 1 && handlePageChange(selectedPage - 1)}
          disabled={!isLast}
        >
          <p
            data-testId="previous"
            className={`${selectedPage === 0
              ? "text-[#C4C4C4] cursor-not-allowed"
              : "text-custom-blue"
              }`}
          >
            Précédent
          </p>
        </button>
      );
    }
    if (type === "next") {
      return (
        <button
          aria-label="Suivant"
          data-testid="next-button"
          className={`pl-5 md:pl-10 pt-1 md:pt-0 border-none mx-2 text-xs md:text-sm `}
          onClick={() => handlePageChange(selectedPage + 2)}
          disabled={isLast}
        >
          <p
            className={`${isLast ? "text-[#C4C4C4] cursor-not-allowed" : "text-custom-blue"
              }`}
          >
            Suivant
          </p>
        </button>
      );
    }

    if (type === "page") {
      // setLoadingTable(true);
      const isSelected = current - 1 === selectedPage;
      const pageStyle = isSelected
        ? {
          backgroundColor: "#07A854",
          color: "#fff",
          borderRadius: "8px",
          borderColor: "#07A854",
          width: "30px",
          height: "30px",
        }
        : { color: "#07A854" };

      return (
        <a
          style={pageStyle}
          onClick={() => {
            setSelectedPage(current);
          }}
        >
          {current}
        </a>
      );
    }
    return originalElement;
  };

  const shouldShowPagination = count > pageSize;

  const modifiedColumns = columns.map((col) => ({
    ...col,
    onHeaderCell: () => ({
      style: { backgroundColor: "#F3F6F9" },
    }),
  }));
  
  return (
    <>
      <Table
        locale={{
          filterConfirm: "Ok",
          filterReset: "Réinitialiser",
          emptyText: "aucun enregistrement trouvé",
        }}
        columns={modifiedColumns}
        dataSource={data}
        onRow={onRow}
        size="small"
        rowClassName="cursor-pointer"
        rowHoverable={true}
        pagination={false}
        scroll={{ x: "max-content" }} 
        className="w-[100%]"
        loading={{
          spinning: loading,
          indicator: <Spin />,
        }}
        footer={() => {
          return (
            <div className="flex md:flex justify-end mx-7 bg-white" style={{ background: "#ffffff" }}>
              {shouldShowPagination && (
                    <Pagination
                      itemRender={itemRender}
                      pageSize={pageSize}
                      total={count}
                      current={selectedPage + 1}
                      onChange={handlePageChange}
                      showSizeChanger={false}

                    />
                )}
            </div>
          );
        }}
      />
      <style>
        {`
          :where(.css-dev-only-do-not-override-tpassh).ant-table-wrapper .ant-table-footer {
            background-color: #ffffff !important; /* Overrides existing styles */
          }
          .ant-spin-dot {
            color: green !important;
          }
          .ant-pagination-item a:focus {
            outline: none;
            box-shadow: none;
            border-color: #07A854 !important;
          }

          .ant-pagination-item-active {
            background-color: #07A854 !important;
            border-color: #07A854 !important;
          }

          .ant-pagination-item-active a {
            color: #fff !important;
          }
        `}
      </style>
    </>
  );
};
export default TableComponent;
