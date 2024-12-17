'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuItem 
} from '@/components/ui/dropdown-menu';
import { usePathname } from 'next/navigation';

const ResourcesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname()
  return (
    <li 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger className="flex items-center outline-none" asChild>
          <Link href="/resources" className={`flex items-center ${pathName === "/resources" ? "text-primary" : ""}`}>
            Resources
            <ChevronDown className="ml-1 h-4 w-4 transition-transform" 
              style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }} 
            />
          </Link>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-6 bg-lightbackground">
          {/* <DropdownMenuItem asChild onSelect={(e) => e.preventDefault()}>
            <Link href="/webinars" target='blank' className="w-full hover:bg-primary/80 hover:!text-primary-foreground cursor-pointer">Webinars</Link>
          </DropdownMenuItem> */}
          {/* <DropdownMenuItem asChild onSelect={(e) => e.preventDefault()}>
            <Link href="/blog" target='blank' className="w-full hover:bg-primary/80 hover:!text-primary-foreground cursor-pointer">Blogs</Link>
          </DropdownMenuItem> */}
          {/* <DropdownMenuItem asChild onSelect={(e) => e.preventDefault()}>
            <Link href="/info" target='blank' className="w-full hover:bg-primary/80 hover:!text-primary-foreground cursor-pointer">Info Articles</Link>
          </DropdownMenuItem> */}
          {/* <DropdownMenuItem asChild onSelect={(e) => e.preventDefault()}>
            <Link href="/assessments" target='blank' className="w-full hover:bg-primary/80 hover:!text-primary-foreground cursor-pointer">Assessments</Link>
          </DropdownMenuItem> */}
        </DropdownMenuContent>
      </DropdownMenu>
    </li>
  );
};

export default ResourcesDropdown;