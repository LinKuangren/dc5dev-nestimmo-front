"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { fetchAllCategories } from "@/services/category.service";
import DrawerCategory from "@/components/category/DrawerCategory";

const CategoryList = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["getAllCategories"],
    queryFn: fetchAllCategories,
  });

  if (isPending)
    return (
      <div className="h-full flex justify-center items-center">Loading...</div>
    );

  return (
    <div>
      <h2 className="text-4xl font-bold my-5 text-cyan-700">Category List</h2>
      <DrawerCategory />
      <div className="grid grid-cols-4 gap-2">
        {data?.map((category: any) => (
          <Link key={category.id} href={`/category/${category.id}`}>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">
                {category.name}
              </h3>
              <p className="text-sm text-muted-foreground">Card Description</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
