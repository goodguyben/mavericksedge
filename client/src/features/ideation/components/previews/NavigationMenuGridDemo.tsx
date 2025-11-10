import React from 'react';
import {
	CodeIcon,
	Grid2x2PlusIcon,
	GlobeIcon,
	LayersIcon,
	UserPlusIcon,
	Users,
	Star,
	FileText,
	Shield,
	RotateCcw,
	Handshake,
	Leaf,
	HelpCircle,
	DollarSign,
	BarChart,
	PlugIcon,
	MenuIcon,
	XIcon,
} from 'lucide-react';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuTrigger,
	NavigationMenuLink,
	type NavItemType,
	NavGridCard,
	NavSmallItem,
	NavLargeItem,
	NavItemMobile,
} from '@/components/ui/navigation-menu';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import { Link } from 'wouter';

export const productLinks: NavItemType[] = [
	{
		title: 'Website Builder',
		href: '#',
		description: 'Create responsive websites with ease',
		icon: GlobeIcon,
	},
	{
		title: 'Cloud Platform',
		href: '#',
		description: 'Deploy and scale apps in the cloud',
		icon: LayersIcon,
	},
	{
		title: 'Team Collaboration',
		href: '#',
		description: 'Tools to help your teams work better together',
		icon: UserPlusIcon,
	},
	{
		title: 'Analytics',
		href: '#',
		icon: BarChart,
	},
	{
		title: 'Integrations',
		href: '#',
		icon: PlugIcon,
	},
	{
		title: 'E-Commerce',
		href: '#',
		icon: DollarSign,
	},
	{
		title: 'Security',
		href: '#',
		icon: Shield,
	},
	{
		title: 'API',
		href: '#',
		icon: CodeIcon,
	},
];

export const servicesLinks: NavItemType[] = [
	{
		title: 'Web Development',
		href: '#',
		description: 'Custom web applications and websites',
		icon: GlobeIcon,
	},
	{
		title: 'Design Services',
		href: '#',
		description: 'UI/UX design and branding',
		icon: LayersIcon,
	},
	{
		title: 'Consulting',
		href: '#',
		description: 'Expert guidance for your projects',
		icon: UserPlusIcon,
	},
	{
		title: 'Support',
		href: '#',
		icon: HelpCircle,
	},
	{
		title: 'Training',
		href: '#',
		icon: Users,
	},
];

export const companyLinks: NavItemType[] = [
	{
		title: 'About Us',
		href: '#',
		description: 'Learn more about our story and team',
		icon: Users,
	},
	{
		title: 'Customer Stories',
		href: '#',
		description: 'See how we\'ve helped our clients succeed',
		icon: Star,
	},
	{
		title: 'Terms of Service',
		href: '#',
		description: 'Understand how we operate',
		icon: FileText,
	},
	{
		title: 'Privacy Policy',
		href: '#',
		description: 'How we protect your information',
		icon: Shield,
	},
	{
		title: 'Refund Policy',
		href: '#',
		description: 'Details about refunds and cancellations',
		icon: RotateCcw,
	},
	{
		title: 'Partnerships',
		href: '#',
		icon: Handshake,
		description: 'Collaborate with us for mutual growth',
	},
	{
		title: 'Blog',
		href: '#',
		icon: Leaf,
		description: 'Insights, tutorials, and company news',
	},
	{
		title: 'Help Center',
		href: '#',
		icon: HelpCircle,
		description: 'Find answers to your questions',
	},
];

export default function NavigationMenuGridDemo() {
	return (
		<div className="w-full h-full relative bg-background flex items-start justify-center pt-3">
			<div className="relative min-h-screen w-full px-4">
				<div
					aria-hidden="true"
					className={cn(
						'absolute inset-0 -z-10 size-full',
						'bg-[radial-gradient(color-mix(in_oklab,--theme(--color-foreground/.2)30%,transparent)_2px,transparent_2px)]',
						'bg-[size:12px_12px]',
					)}
				/>

				<div className="bg-background sticky top-0 z-50 mx-auto h-14 w-full max-w-4xl border px-4  rounded-lg">
					<div className="flex h-full items-center justify-between">
						<div className="flex items-center gap-2 pt-2">
							<Grid2x2PlusIcon className="size-6 -mt-3" />
							<p className="font-mono text-lg font-bold">Sterling</p>
						</div>
						<div className="pt-2">
							<DesktopMenu />
						</div>

						<div className="flex items-center gap-2">
							<Button>Get Started</Button>
							<MoileNav />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function DesktopMenu() {
	return (
		<NavigationMenu className="hidden lg:block pt-2">
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuPrimitive.Link asChild>
						<Link href="#">
							<div className="cursor-pointer px-4 py-1 text-sm font-medium !text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
								Home
							</div>
						</Link>
					</NavigationMenuPrimitive.Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Services</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div className="grid w-full md:w-4xl md:grid-cols-[1fr_.30fr]">
							<ul className="grid grow gap-4 p-4 md:grid-cols-3 md:border-r">
								{servicesLinks.slice(0, 3).map((link) => (
									<li key={link.href}>
										<NavGridCard link={link} />
									</li>
								))}
							</ul>
							<ul className="space-y-1 p-4">
								{servicesLinks.slice(3).map((link) => (
									<li key={link.href}>
										<NavSmallItem
											item={link}
											className="gap-x-1"
										/>
									</li>
								))}
							</ul>
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Product</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div className="grid w-full md:w-4xl md:grid-cols-[1fr_.30fr]">
							<ul className="grid grow gap-4 p-4 md:grid-cols-3 md:border-r">
								{productLinks.slice(0, 3).map((link) => (
									<li key={link.href}>
										<NavGridCard link={link} />
									</li>
								))}
							</ul>
							<ul className="space-y-1 p-4">
								{productLinks.slice(3).map((link) => (
									<li key={link.href}>
										<NavSmallItem
											item={link}
											className="gap-x-1"
										/>
									</li>
								))}
							</ul>
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Company</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div className="grid w-full md:w-4xl md:grid-cols-[1fr_.40fr]">
							<ul className="grid grow grid-cols-2 gap-4 p-4 md:border-r">
								{companyLinks.slice(0, 2).map((link) => (
									<li key={link.href}>
										<NavGridCard link={link} className="min-h-36" />
									</li>
								))}
								<div className="col-span-2 grid grid-cols-3 gap-x-4">
									{companyLinks.slice(2, 5).map((link) => (
										<li key={link.href}>
											<NavLargeItem link={link} />
										</li>
									))}
								</div>
							</ul>
							<ul className="space-y-2 p-4">
								{companyLinks.slice(5, 10).map((link) => (
									<li key={link.href}>
										<NavLargeItem link={link} />
									</li>
								))}
							</ul>
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

function MoileNav() {
	const sections = [
		{
			id: 'home',
			name: 'Home',
			list: [{ title: 'Home', href: '#', description: 'Go to homepage' }],
		},
		{
			id: 'services',
			name: 'Services',
			list: servicesLinks,
		},
		{
			id: 'product',
			name: 'Product',
			list: productLinks,
		},
		{
			id: 'company',
			name: 'Company',
			list: companyLinks,
		},
	];

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button size="icon" variant="ghost" className="rounded-full lg:hidden">
					<MenuIcon className="size-5" />
				</Button>
			</SheetTrigger>
			<SheetContent
				className="bg-background/95 supports-[backdrop-filter]:bg-background/80 w-full gap-0 backdrop-blur-lg"
				showClose={false}
			>
				<div className="flex h-14 items-center justify-end border-b px-4">
					<SheetClose asChild>
						<Button size="icon" variant="ghost" className="rounded-full">
							<XIcon className="size-5" />
							<span className="sr-only">Close</span>
						</Button>
					</SheetClose>
				</div>
				<div className="container grid gap-y-2 overflow-y-auto px-4 pt-5 pb-12">
					<Accordion type="single" collapsible>
						{sections.map((section) => (
							<AccordionItem key={section.id} value={section.id}>
								<AccordionTrigger className="capitalize hover:no-underline">
									{section.id}
								</AccordionTrigger>
								<AccordionContent className="space-y-1">
									<ul className="grid gap-1">
										{section.list.map((link) => (
											<li key={link.href}>
												<SheetClose asChild>
													<NavItemMobile item={link} />
												</SheetClose>
											</li>
										))}
									</ul>
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</SheetContent>
		</Sheet>
	);
}

