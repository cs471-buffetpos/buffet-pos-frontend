'use client';

import ScreenMobile from "@/components/ScreenMobile";
import HeaderTabs from "@/components/user/HeaderTabs";
import OrderButton from "@/components/user/OrderButton";
import { useEffect, useState } from "react";
import MenuList from "@/components/user/MenuList";
import { useGetMenus } from "@/api/user/useMenu";
import LoadingAnimation from "@/components/manager/loadingAnimation";
import { useCart } from "@/provider/CartProvider";
import { useGetCategories } from "@/api/user/useCategory";
import { BaseCategoryResponse } from "@/interfaces/category";
import { useGetTable } from "@/api/user/useTable";
import { BaseTableResponse } from "@/interfaces/table";
import { entryTime, remainingTime } from "@/lib/formatDate";

type Props = {
  params: { id: string }
}

export default function Home({ params }: Props) {
  const [search, setSearch] = useState<string>('');
  const { setAccessCode } = useCart();
  const { data: menus, isLoading: isMenuLoading } = useGetMenus(params.id);
  const { data: categories, isLoading: isLoadingCategories } = useGetCategories(params.id) as {data: BaseCategoryResponse[], isLoading: boolean};
  const { data: table, isLoading: isLoadingTable } = useGetTable(params.id) as {data: BaseTableResponse, isLoading: boolean};
  
  useEffect(() => {
    setAccessCode(params.id);
    console.log(menus)
  }, [menus]);

  if (isMenuLoading || isLoadingCategories || isLoadingTable) return <LoadingAnimation />;
  if (!menus) return <p>ไม่พบเมนู</p>;

  const filteredMenuList = menus.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });
  
  const menusByCategory = filteredMenuList.reduce((acc, item) => {
    const category = categories.find(cat => cat.id === item.categoryId);
    const categoryName = category ? category.name : "Unknown";

    if (!acc[categoryName]) {
        acc[categoryName] = [];
    }
    acc[categoryName].push(item);
    return acc;
  }, {} as { [key: string]: any[] });

  return (
      <ScreenMobile>
        <HeaderTabs categories={Object.keys(menusByCategory)} search={search} setSearch={setSearch} />
        <div className="flex flex-col gap-2 px-3 pt-16 pb-24">
          <div className="flex flex-row justify-between w-full">
            <p className=" w-1/3 font-bold text-lg pl-1"> โต๊ะที่ : {table.tableName} </p>
            <p className=" w-2/3 font-bold text-lg text-end"> เวลาในการทาน : {remainingTime(table.entryAt.toString())} นาที </p>
          </div>
          <p className="text-primary text-xl text-right pr-1"> {entryTime(table.entryAt.toString())} น. </p>
          <div className="m-2 space-y-10">
            {Object.keys(menusByCategory).map((key) => {
              return <MenuList key={key} title={key} menuList={menusByCategory[key]} />;
            })}
          </div>
        </div>
        <OrderButton />
      </ScreenMobile>
  );
}
