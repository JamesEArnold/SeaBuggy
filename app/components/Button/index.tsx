import type { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

export type ButtonProps = {
  onClick: () => void,
  layoutId: string,
  keyId: string,
} & PropsWithChildren;

export const Button = ({
  onClick,
  layoutId,
  keyId,
  children,
}: Readonly<ButtonProps>) => {
  return (
    <motion.button
      layoutId={layoutId}
      key={keyId}
      onClick={onClick}
      className="relative flex h-9 items-center border border-[#e9e9e7] bg-white px-3 font-medium outline-none rounded-lg"
    >
      { children }
    </motion.button>
  )
};