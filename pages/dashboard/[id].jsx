import { SidebarLeft } from "@/components/sidebar-left"
import { SidebarRight } from "@/components/sidebar-right"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

import DashboardTable from "../../components/dashboard-table"
import SectionCards from "../../components/section_cards"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function Page() {
    const [prId, setPrId] = useState("0")
    const router = useRouter()

    useEffect(() => {
        if (router.isReady) {
            setPrId(router.query.id)
            console.log(prId)
        }
        
    }, [router.isReady])
  return (
    <SidebarProvider>
      <SidebarLeft />
      <SidebarInset>
        <header className="sticky top-0 flex h-14 shrink-0 items-center gap-2 bg-background">
          <div className="flex flex-1 items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage className="line-clamp-1">
                    Project Management & Task Tracking & Time Management
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
            <SectionCards />
            <div className="my-2"></div>
            <DashboardTable projectId={prId}/>
        </div>
      </SidebarInset>
      <SidebarRight />
    </SidebarProvider>
  )
}
