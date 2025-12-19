"use client";

import { setMenuClose } from "@/context/slices/mobileMenu";
import { AnimatePresence, motion } from "motion/react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/context/store/store";
import Link from "next/link";
import MobileMenuLinks from "@/data/mobile/mobileMenuLinks.json";
import {
  Award,
  ChevronRight,
  Headset,
  Home,
  Newspaper,
  SquareArrowOutUpRight,
  X,
} from "lucide-react";
import { useEffect } from "react";
import CTAButton from "@/components/ui/buttons/CTAButton";
import { ScrollArea } from "@radix-ui/themes";
import { MenuCloseBtn } from "@/components/ui/controls/MobileMenuControls";

// Animation variants for better performance and consistency
const menuVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: { x: 0, opacity: 1 },
  exit: { x: "100%", opacity: 0 },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const itemVariants = {
  hidden: { x: 20, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

export default function MobileMenu() {
  const isOpen = useSelector((state: RootState) => state.mobileMenu.isOpen);

  return (
    <AnimatePresence mode="wait">
      {isOpen && <MobileMainMenu />}
    </AnimatePresence>
  );
}

const MobileMainMenu = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Prevent body scroll when menu is open
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const closeMenu = () => dispatch(setMenuClose());

  return (
    <motion.div
      className="fixed w-full h-dvh inset-0 z-50 lg:hidden"
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Backdrop */}
      <motion.div
        variants={backdropVariants}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 bg-overlay backdrop-blur-sm"
        onClick={closeMenu}
      />

      {/* Menu Panel */}
      <motion.div
        variants={menuVariants}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-text to-accent-dark shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="w-full flex items-center justify-between border-b border-border px-4 py-4">
          <h2 className="text-lg font-semibold text-text-inverted">Menu</h2>
          <MenuCloseBtn />
        </div>

        {/* Content */}
        <ScrollArea className="!flex !h-full !flex-col !relative">
          <nav className="overflow-y-auto px-4 py-4 mb-14">
            <div className="space-y-3">
              {/* Home Section */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.1 }}
              >
                <MenuSection
                  title="Accueil"
                  icon={<Home className="h-5 w-5" />}
                  items={MobileMenuLinks}
                  onItemClick={closeMenu}
                />
              </motion.div>

              {/* Main Links */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
                className="space-y-2"
              >
                <MenuLink
                  href="https://docs.google.com/forms/d/e/1FAIpQLSf51JDvBwxuovFgMUFNarIfOSajU5odSV-5XpZXtgcmys5eXg/viewform?usp=header"
                  icon={<Newspaper className="h-5 w-5" />}
                  label="Presse"
                  onClick={closeMenu}
                />
                <MenuLink
                  href="/contact"
                  icon={<Headset className="h-5 w-5" />}
                  label="Contact"
                  onClick={closeMenu}
                />
                <MenuLink
                  href="/awards"
                  icon={<Award className="h-5 w-5" />}
                  label="Awards"
                  onClick={closeMenu}
                />
              </motion.div>
            </div>
          </nav>
        </ScrollArea>

        {/* footer */}
        <div
          onClick={closeMenu}
          className="absolute h-16 bottom-0 **:!w-full bg-gradient-to-b from-transparent to-text left-0 w-full flex items-center justify-center px-4 py-4"
        >
          <CTAButton  />
        </div>
      </motion.div>
    </motion.div>
  );
};

// Reusable Menu Section Component
interface MenuSectionProps {
  title: string;
  icon: React.ReactNode;
  items: Array<{ id: string; label: string; icon: string }>;
  onItemClick: () => void;
}

const MenuSection = ({ title, icon, items, onItemClick }: MenuSectionProps) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-3 rounded-lg bg-gradient-to-br from-surface to-surface-alt shadow-md px-4 py-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface text-text">
          {icon}
        </div>
        <span className="font-medium text-text">{title}</span>
      </div>

      <div className=" space-y-1">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.15 + index * 0.05 }}
          >
            <Link
              href={`/#${item.id}`}
              onClick={onItemClick}
              className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm bg-gradient-to-br from-surface/50 to-surface-alt/50 shadow-md text-text-inverted hover:text-text select-none active:text-text-inverted active:from-accent active:to-primary transition-colors"
            >
              <i className={`${item.icon}`} />
              <span>{item.label}</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Simplified Menu Link Component
interface MenuLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

const MenuLink = ({ href, icon, label, onClick }: MenuLinkProps) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group flex items-center justify-between rounded-lg bg-gradient-to-br from-surface to-surface-alt shadow-md px-4 py-3 active:text-text-inverted active:from-accent active:to-primary transition-colors"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg">
          {icon}
        </div>
        <span className="font-medium">{label}</span>
      </div>
      <SquareArrowOutUpRight className="h-4 w-4 text-muted" />
    </Link>
  );
};
