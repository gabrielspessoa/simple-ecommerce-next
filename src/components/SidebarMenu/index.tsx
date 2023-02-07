import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode, useState } from 'react';
import ThemeSwitcher from '../ThemeSwitcher';
import * as S from './styles';

interface SidebarItemOpts {
  text: string;
  color?: string;
  onClick?: () => void;
}

interface SidebarMenuProps {
  children: ReactNode;
  items: SidebarItemOpts[];
  hideOn: number;
}

export const SidebarMenu = (props: SidebarMenuProps) => {
  const [open, setOpen] = useState(false);

  return (
    <S.Root open={open} onOpenChange={(o) => setOpen(o)}>
      <S.Trigger asChild hideOn={props.hideOn}>
        {props.children}
      </S.Trigger>

      <AnimatePresence>
        {open ? (
          <S.Portal forceMount>
            <S.Overlay forceMount asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ease: 'circOut' }}
              />
            </S.Overlay>
            <S.Content asChild forceMount>
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: '0%' }}
                exit={{ x: '100%' }}
                transition={{ ease: 'circOut' }}
              >
                <S.FloatingIcon>
                  <ThemeSwitcher />
                </S.FloatingIcon>
                {props.items.map((item, index) => (
                  <S.Item key={index} color={item.color} onClick={item.onClick}>
                    {item.text}
                  </S.Item>
                ))}
              </motion.div>
            </S.Content>
          </S.Portal>
        ) : null}
      </AnimatePresence>
    </S.Root>
  );
};
