import React from 'react';
//@ts-expect-error: ok
import ReactDOM from 'react-dom';
import * as S from './styles';

let container = document.getElementById('swipe');
if (!container) {
  container = document.createElement('div');
  container.id = 'swipe';
  document.body.appendChild(container);
}

const isFunction = (target: TFunction) =>
  target && {}.toString.call(target) === '[object Function]';

type TProps = {
  children: React.ReactNode;
  open?: boolean;
  drag?: boolean;
};

type TRef = {
  open: TFunction;
  close: TFunction;
  isOpened?: boolean;
};

const Swipe = React.memo(
  React.forwardRef<TRef, TProps>(
    ({ children, open: openProp = false, drag: dragEnable = false }, ref) => {
      const [opened, setOpened] = React.useState(openProp);
      const [draggable, setDraggable] = React.useState(null);
      const dragRef = React.useRef(null);
      const panelRef = React.useRef(null);

      const open = () => {
        setOpened(true);
      };

      const close = () => {
        setOpened(false);
      };

      React.useImperativeHandle(ref, () => ({
        open,
        close,
        isOpened: opened,
      }));

      const pointerDown = (event: any) => {
        if (
          event.path.some((item: any) => {
            return item === dragRef.current;
          })
        ) {
          setDraggable({
            start: event.clientY,
            top: window.innerHeight - panelRef.current.clientHeight,
            end: panelRef.current.clientHeight * 0.5,
          });
        }
      };
      const pointerUp = (event: any) => {
        setTimeout(() => {
          if (draggable?.hide) {
            close();
          }
          setDraggable(null);
          if (panelRef.current) {
            panelRef.current?.style.removeProperty('transform');
          }
        }, 0);
      };

      const pointerMove = (event: any) => {
        if (!draggable) return;
        let y = event.clientY - draggable.start;
        if (y < 0) y = 0;
        panelRef.current.style.setProperty('transform', `translateY(${y}px)`);
        draggable.hide = y > draggable.end;
      };

      React.useEffect(() => {
        document.addEventListener('pointerdown', pointerDown);
        document.addEventListener('pointerup', pointerUp);
        document.addEventListener('pointermove', pointerMove);
        return () => {
          document.removeEventListener('pointerdown', pointerDown);
          document.removeEventListener('pointerup', pointerUp);
          document.removeEventListener('pointermove', pointerMove);
        };
      });

      return ReactDOM.createPortal(
        <S.Wrapper
          opened={opened}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (!draggable?.current) close();
          }}
        >
          <S.Inner
            ref={panelRef}
            onClick={(e) => {
              e.stopPropagation();
            }}
            opened={opened}
            draggable={draggable}
          >
            {dragEnable ? (
              <S.Drag draggable={draggable} ref={dragRef}></S.Drag>
            ) : null}
            <S.Content>{children}</S.Content>
          </S.Inner>
        </S.Wrapper>,
        container
      );
    }
  )
);
export default Swipe;
