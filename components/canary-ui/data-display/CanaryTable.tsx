import { ReactNode } from "react";
import { colors } from "../design-tokens";
import clsx from "clsx";

export interface CanaryTableColumn<T = any> {
  key: string;
  label: string;
  render?: (value: any, row: T, index: number) => ReactNode;
  width?: string;
  align?: "left" | "center" | "right";
}

export interface CanaryTableProps<T = any> {
  columns: CanaryTableColumn<T>[];
  data: T[];
  isLoading?: boolean;
  emptyMessage?: string;
  onRowClick?: (row: T, index: number) => void;
  className?: string;
}

export default function CanaryTable<T extends Record<string, any>>({
  columns,
  data,
  isLoading = false,
  emptyMessage = "No data available",
  onRowClick,
  className = "",
}: CanaryTableProps<T>) {
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  if (isLoading) {
    return (
      <div className={`w-full p-8 text-center ${className}`}>
        <div className="inline-block w-8 h-8 border-4 border-[#2858c4] border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-[14px] text-[#707070]">Loading...</p>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className={`w-full p-8 text-center ${className}`}>
        <p className="text-[14px] text-[#707070]">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className={`w-full overflow-x-auto ${className}`}>
      <div className="w-full">
        <table className="w-full border-separate" style={{ borderSpacing: 0 }}>
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={clsx(
                    "px-4 py-2 text-[14px] font-semibold",
                    alignClasses[column.align || "left"]
                  )}
                  style={{
                    color: colors.black2,
                    width: column.width,
                  }}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={columns.length} className="h-2"></td>
            </tr>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={clsx(
                  "transition-colors",
                  onRowClick && "cursor-pointer hover:bg-[#fafafa]"
                )}
                onClick={() => onRowClick?.(row, rowIndex)}
              >
                {columns.map((column, colIndex) => (
                  <td
                    key={column.key}
                    className={clsx(
                      "px-4 py-1 text-[14px]",
                      alignClasses[column.align || "left"]
                    )}
                    style={{
                      color: colors.black2,
                      width: column.width,
                      borderTop: rowIndex === 0 ? `1px solid ${colors.black6}` : undefined,
                      borderBottom: `1px solid ${colors.black6}`,
                      borderLeft: colIndex === 0 ? `1px solid ${colors.black6}` : undefined,
                      borderRight: colIndex === columns.length - 1 ? `1px solid ${colors.black6}` : undefined,
                      borderTopLeftRadius: rowIndex === 0 && colIndex === 0 ? '8px' : undefined,
                      borderTopRightRadius: rowIndex === 0 && colIndex === columns.length - 1 ? '8px' : undefined,
                      borderBottomLeftRadius: rowIndex === data.length - 1 && colIndex === 0 ? '8px' : undefined,
                      borderBottomRightRadius: rowIndex === data.length - 1 && colIndex === columns.length - 1 ? '8px' : undefined,
                    }}
                  >
                    {column.render
                      ? column.render(row[column.key], row, rowIndex)
                      : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
