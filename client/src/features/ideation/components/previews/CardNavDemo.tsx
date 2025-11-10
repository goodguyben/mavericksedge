import CardNav, { CardNavItem } from "@/components/ui/card-nav";

export default function CardNavDemo() {
  const navItems: CardNavItem[] = [
    {
      label: 'Services',
      bgColor: '#000',
      textColor: '#fff',
      links: [
        { label: 'Web Development', href: '#', ariaLabel: 'View web development services' },
        { label: 'Design', href: '#', ariaLabel: 'View design services' },
        { label: 'Consulting', href: '#', ariaLabel: 'View consulting services' },
      ],
    },
    {
      label: 'Products',
      bgColor: '#000',
      textColor: '#fff',
      links: [
        { label: 'Website Builder', href: '#', ariaLabel: 'View website builder' },
        { label: 'Analytics', href: '#', ariaLabel: 'View analytics products' },
        { label: 'Hosting', href: '#', ariaLabel: 'View hosting options' },
      ],
    },
    {
      label: 'Company',
      bgColor: '#000',
      textColor: '#fff',
      links: [
        { label: 'About Us', href: '#', ariaLabel: 'Learn about us' },
        { label: 'Contact', href: '#', ariaLabel: 'Contact us' },
        { label: 'Careers', href: '#', ariaLabel: 'View career opportunities' },
      ],
    },
  ];

  return (
    <div className="w-full h-full relative bg-background overflow-hidden">
      <CardNav
        logo="https://www.rssterling.ca/wp-content/uploads/2023/07/insignia-_small.png"
        logoAlt="Sterling Logo"
        items={navItems}
        baseColor="#fff"
        menuColor="#000"
        buttonBgColor="#000"
        buttonTextColor="#fff"
      />
    </div>
  );
}

