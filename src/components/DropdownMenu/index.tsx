import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode, useState } from 'react';
import * as S from './styles';

interface DropdownItemOpts {
  text: string;
  color?: string;
  onClick?: () => void;
}

interface DropdownItemSeparatorOpts {
  separator?: boolean;
}

interface DropdownMenuProps {
  children: ReactNode;
  items: Array<DropdownItemOpts | DropdownItemSeparatorOpts>;
}

export function DropdownMenu(props: DropdownMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <S.Root open={open} onOpenChange={(o) => setOpen(o)} modal={false}>
      <S.Trigger asChild>{props.children}</S.Trigger>

      <AnimatePresence>
        {open ? (
          <S.Portal forceMount>
            <S.Content forceMount asChild>
              <motion.div
                initial={{ y: -5, opacity: 1 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -5, opacity: 0 }}
                transition={{
                  duration: 0.2,
                }}
                style={{ originY: 0 }}
              >
                {props.items.map((item: any, index) => {
                  if (item.separator) {
                    return <S.Separator key={index} />;
                  }
                  return (
                    <S.Item key={index} {...item}>
                      {item.text}
                    </S.Item>
                  );
                })}
              </motion.div>
            </S.Content>
          </S.Portal>
        ) : null}
      </AnimatePresence>
    </S.Root>
  );
}
