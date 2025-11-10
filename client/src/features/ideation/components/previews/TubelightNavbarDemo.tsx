import { NavBar } from "@/components/ui/tubelight-navbar"

export default function TubelightNavbarDemo() {
  const navItems = [
    { name: 'Services', url: '#' },
    { name: 'Portfolio', url: '#' },
    { name: 'Team', url: '#' },
    { name: 'Blog', url: '#' },
    { name: 'Contact', url: '#' }
  ]

  return (
    <div className="w-full h-full relative bg-white flex items-start justify-center pt-8">
      <div className="w-fit max-w-[600px]">
        <NavBar items={navItems} className="relative bottom-auto top-0 left-0 translate-x-0 mb-0 sm:pt-0" />
      </div>
    </div>
  )
}

