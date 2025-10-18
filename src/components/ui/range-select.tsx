"use client";

import { FilterOptions } from "@/config/types";
import { SelectHTMLAttributes } from "react";

interface SelectType extends SelectHTMLAttributes<HTMLSelectElement> {
  options: FilterOptions<string, number>;
}

interface RangeSelectProps {
  label: string;
  minSelect: SelectType;
  maxSelect: SelectType;
}

export const RangeSelect = (props: RangeSelectProps) => {
  const { label, minSelect, maxSelect } = props;

  return (
    <>
      <h4 className="text-sm">{label}</h4>
    </>
  );
};
