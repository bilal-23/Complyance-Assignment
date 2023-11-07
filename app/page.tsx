import Link from "next/link"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { Icons } from "@/components/icons"

export default async function IndexPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <SiteHeader />
      <div className="flex-1">
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
              Starwars Character App
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground">
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <Link
              href={siteConfig.links.app}
              rel="noreferrer"
              className={buttonVariants()}
            >
              Starwars App
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.githubRepo}
              className={buttonVariants({ variant: "outline" })}
            >
              GitHub
            </Link>
          </div>
          <div className="flex justify-center items-center flex-col gap-4 ">
            <span className="text-base">Please Login using mock credentials</span>
            <div className="text-sm flex flex-col gap-2 items-center">
              <span>Email: john@smith.com</span>
              <span>Password: 123456</span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground flex gap-1 items-center">
                Or continue with <Icons.gitHub className="mr-2 h-4 w-4" />
              </span>
            </div>
          </div>
        </section></div>
    </div>
  )
}