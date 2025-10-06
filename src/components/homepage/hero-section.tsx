import { AwaitedPageProps } from '@/config/types'
import { prisma } from '@/lib/prisma';
import React from 'react'

export default function HeroSecction(props: AwaitedPageProps) {
    const {searchParams} = props;
    const totalFiltersApplied = Object.keys(searchParams || {}).length
    const isFilterApplied = totalFiltersApplied > 0;
    console.log(totalFiltersApplied)

    // const classifiedsCount = await prisma.classified.count({
    //     where: buildClassifiedFilterQuery(searchParams)
    // })
  return (
    <div>HeroSecction</div>
  )
}
