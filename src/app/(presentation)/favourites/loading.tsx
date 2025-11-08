import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function FavouritesLoadingPage() {
  return (
    <div className="container mx-auto px-4 py-8 min-h-[80dvh]">
      <h1 className="text-3xl font-bold mb-6">Your Favourite Classifieds</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {Array.from({ length: 8 }, (_, index) => index + 1).map((id) => (
          <Card className="border border-muted" key={id}>
            <div className="relative w-full">
              <Skeleton className="w-full h-full aspect-3/2" />
            </div>
            <CardContent className="p-4 h-fit">
              <div className="space-y-4 h-[180px]">
                <div className="space-y-2">
                  <Skeleton className="w-3/4 h-6" />
                  <Skeleton className="w-full h-6" />
                  <Skeleton className="w-3/4 h-4 mr-8" />
                </div>
                <div className="space-y-2">
                  <div className="space-x-2 flex justify-around">
                    <Skeleton className="w-1/12 h-4" />
                    <Skeleton className="w-1/12 h-4" />
                    <Skeleton className="w-1/12 h-4" />
                    <Skeleton className="w-1/12 h-4" />
                  </div>
                  <div className="space-x-2 flex justify-around">
                    <Skeleton className="w-1/4 h-4" />
                    <Skeleton className="w-1/4 h-4" />
                    <Skeleton className="w-1/4 h-4" />
                    <Skeleton className="w-1/4 h-4" />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <Skeleton className="w-1/3 h-6" />
                  <Skeleton className="w-1/4 h-4" />
                </div>
              </div>
              <div className="flex relative gap-x-2 justify-between">
                <Skeleton className="w-1/2 h-10" />
                <Skeleton className="w-1/2 h-10" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
