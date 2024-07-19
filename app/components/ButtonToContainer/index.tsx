'use client';

import { PropsWithChildren, useState } from 'react';
import { Button } from '../Button';
import { AnimatePresence, motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/solid';

export const ButtonToContainer = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);

  const onButtonClick = () => {
    setIsOpen(true);
  };

  const layoutIds = {
    wrapper: 'wrapper',
    title: 'title',
  };

  return (
    <>
      <Button
        layoutId={layoutIds.wrapper}
        keyId="button"
        onClick={onButtonClick}
      >
        <motion.span layoutId={layoutIds.title}>
          Enter Address
        </motion.span>
      </Button>
      <AnimatePresence mode="popLayout">
        { isOpen && (
          <motion.div
            layoutId={layoutIds.wrapper}
            className="absolute container h-[90%] overflow-hidden rounded-xl bg-[#f5f6f7] p-1 shadow-md outline-none"
          >
            <div className="flex h-full flex-col px-2 py-2">
              <motion.button className="flex justify-end max-h-5 pr-1" onClick={() => setIsOpen(false)}>
                <XMarkIcon />
              </motion.button>
              <div className="grow">
                { children }
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};