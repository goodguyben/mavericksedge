import { StaggeredMenu } from "@/components/ui/staggered-menu";

export default function StaggeredMenuDemo() {
  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to homepage', link: '#' },
    { label: 'Services', ariaLabel: 'View our services', link: '#' },
    { label: 'About', ariaLabel: 'Learn about us', link: '#' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '#' },
  ];

  const socialItems = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' },
    { label: 'GitHub', link: 'https://github.com' },
  ];

  return (
    <div className="w-full h-full relative bg-background overflow-hidden">
      <StaggeredMenu
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        colors={['#f97316', '#ea580c']}
        accentColor="#5227FF"
        menuButtonColor="#fff"
        openMenuButtonColor="#000"
        logoUrl="https://www.rssterling.ca/wp-content/uploads/2023/07/insignia-_small.png"
        isFixed={false}
      />
    </div>
  );
}

