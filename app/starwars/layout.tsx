import { SiteHeader } from "@/components/site-header"

interface RootLayoutProps {
    children: React.ReactNode
}

export default function StarwarsLayout({ children }: RootLayoutProps) {

    return (
        <>
            <div className="relative flex min-h-screen flex-col overflow-x-hidden">
                <SiteHeader />
                <div className="flex-1">{children}</div>
            </div>
        </>
    )
}