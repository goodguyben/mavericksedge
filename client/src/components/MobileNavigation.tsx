import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, Home, Settings, Phone, Info, DollarSign, X } from "lucide-react";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NavigationItem {
  label: string;
  href?: string;
  icon: React.ReactNode;
  children?: NavigationItem[];
}

const navigationItems: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
    icon: <Home className="w-5 h-5" />
  },
  {
    label: "Services",
    icon: <Settings className="w-5 h-5" />,
    children: [
      {
        label: "All Services",
        href: "/services",
        icon: <Settings className="w-4 h-4" />
      },
      {
        label: "Web Design & Development",
        href: "/services/web",
        icon: <Settings className="w-4 h-4" />
      },
      {
        label: "Marketing & Creative",
        href: "/services/marketing",
        icon: <Settings className="w-4 h-4" />
      },
      {
        label: "AI Integration & Automation",
        href: "/services/ai",
        icon: <Settings className="w-4 h-4" />
      }
    ]
  },
  {
    label: "Pricing",
    icon: <DollarSign className="w-5 h-5" />,
    children: [
      {
        label: "All Pricing Plans",
        href: "/pricing",
        icon: <DollarSign className="w-4 h-4" />
      },
      {
        label: "Web Design & Development",
        href: "/pricing/web",
        icon: <DollarSign className="w-4 h-4" />
      },
      {
        label: "Marketing & Creative",
        href: "/pricing/marketing",
        icon: <DollarSign className="w-4 h-4" />
      },
      {
        label: "AI Integration & Automation",
        href: "/pricing/ai",
        icon: <DollarSign className="w-4 h-4" />
      }
    ]
  },
  {
    label: "About",
    href: "/about",
    icon: <Info className="w-5 h-5" />
  },
  {
    label: "Contact",
    href: "/contact",
    icon: <Phone className="w-5 h-5" />
  }
];

function NavigationItemComponent({ 
  item, 
  level = 0, 
  onItemClick 
}: { 
  item: NavigationItem; 
  level?: number; 
  onItemClick: () => void;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [location] = useLocation();
  
  const isActive = item.href === location || 
    (item.children && item.children.some(child => child.href === location));

  const hasChildren = item.children && item.children.length > 0;

  const handleClick = () => {
    if (hasChildren) {
      setIsExpanded(!isExpanded);
    } else if (item.href) {
      onItemClick();
    }
  };

  return (
    <div className="w-full">
      <div
        className={`
          flex items-center justify-between w-full p-4 rounded-lg transition-all duration-200
          ${level === 0 ? 'min-h-[56px]' : 'min-h-[48px] ml-4'}
          ${isActive 
            ? 'bg-maverick-orange text-white' 
            : 'text-gray-300 hover:bg-gray-800 hover:text-white active:bg-gray-700'
          }
          touch-manipulation cursor-pointer
        `}
        onClick={handleClick}
      >
        <div className="flex items-center space-x-3">
          {item.icon}
          <span className={`font-medium ${level === 0 ? 'text-lg' : 'text-base'}`}>
            {item.label}
          </span>
        </div>
        
        {hasChildren && (
          <motion.div
            animate={{ rotate: isExpanded ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronRight className="w-5 h-5" />
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {hasChildren && isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pl-2 pt-1 space-y-1">
              {item.children?.map((child, index) => (
                <div key={index}>
                  {child.href ? (
                    <Link href={child.href}>
                      <div
                        className={`
                          flex items-center space-x-3 p-3 ml-4 rounded-lg transition-all duration-200
                          min-h-[44px] touch-manipulation cursor-pointer
                          ${child.href === location 
                            ? 'bg-maverick-orange/20 text-maverick-orange border-l-2 border-maverick-orange' 
                            : 'text-gray-400 hover:bg-gray-800 hover:text-white active:bg-gray-700'
                          }
                        `}
                        onClick={onItemClick}
                      >
                        {child.icon}
                        <span className="text-base font-medium">{child.label}</span>
                      </div>
                    </Link>
                  ) : (
                    <NavigationItemComponent 
                      item={child} 
                      level={level + 1} 
                      onItemClick={onItemClick}
                    />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {item.href && !hasChildren && (
        <Link href={item.href}>
          <div className="hidden">Navigate to {item.label}</div>
        </Link>
      )}
    </div>
  );
}

export default function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />

          {/* Navigation Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ 
              type: "spring", 
              damping: 30, 
              stiffness: 300,
              duration: 0.4 
            }}
            className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-gray-900/95 backdrop-blur-md border-l border-gray-700/50 z-50 lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
              <h2 className="text-xl font-bold text-white">Menu</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors duration-200 min-h-[44px] min-w-[44px] touch-manipulation"
                aria-label="Close navigation menu"
              >
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.1 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              </button>
            </div>

            {/* Navigation Items */}
            <div className="flex-1 overflow-y-auto py-4 px-4">
              <nav className="space-y-2">
                {navigationItems.map((item, index) => (
                  <NavigationItemComponent 
                    key={index} 
                    item={item} 
                    onItemClick={onClose}
                  />
                ))}
              </nav>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-700/50">
              <div className="text-center">
                <p className="text-sm text-gray-400">Mavericks Edge</p>
                <p className="text-xs text-gray-500 mt-1">Web Design & Digital Marketing</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}