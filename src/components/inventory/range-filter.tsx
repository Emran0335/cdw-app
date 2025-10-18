import type { TaxonomyFiltersProps } from "@/config/types";
import { CurrencyCode } from "@prisma/client";
import { RangeSelect } from "../ui/range-select";

interface RangeFilterProps extends TaxonomyFiltersProps {
  label: string;
  minName: string;
  maxName: string;
  defaultMin: string;
  defaultMax: string;
  increment?: number;
  thousandSeparator?: boolean;
  currency?: {
    currenctyCode: CurrencyCode;
  };
}

export const RangeFilter = (props: RangeFilterProps) => {
  const {
    label,
    minName,
    maxName,
    defaultMin,
    defaultMax,
    increment,
    thousandSeparator,
    currency,
    handleChange,
    searchParams
  } = props;

  return <RangeSelect />
};
