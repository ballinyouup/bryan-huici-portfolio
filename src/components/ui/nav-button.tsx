import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { useState } from "react";
import { Button } from "./button";
import Link from "next/link";

interface NavButtonProps {
    href: string;
    name: string;
    children?: React.ReactNode
}
 
const NavButton: React.FC<NavButtonProps> = ({href, name, children}) => {
    const [isHovered, setIsHovered] = useState(false)
    return ( <Button
        variant={'ghost'}
        className="flex items-center gap-2 text-lg font-bold uppercase"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        <motion.div
            animate={{ y: isHovered ? [0, -3, 0] : 0 }}
            transition={{
                duration: 0.25,
            }}
        >
            {children}
        </motion.div>
        <Link href={href}>{name}</Link>
    </Button> );
}
 
export default NavButton;