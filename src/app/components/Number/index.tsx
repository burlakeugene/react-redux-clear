import React from 'react';

const floatNumber = (value) => parseFloat(value.toFixed(2));

type TProps = {
  value: number;
  postfix?: string | number | React.ReactElement;
  prefix?: string | number | React.ReactElement;
  animated?: boolean;
};
const Number = React.memo<TProps>(
  ({ value: valueProp, postfix = '', prefix = '', animated }) => {
    const [value, setValue] = React.useState(animated ? 0 : valueProp);

    React.useEffect(() => {
      if (!animated) {
        return;
      }

      const duration = 1000;
      const from = 0;
      const to = valueProp;
      let startTimestamp = 0;

      const step = (timestamp: number) => {
        if (!startTimestamp) {
          startTimestamp = timestamp;
        }
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);

        if (progress < 1) {
          const nextValue = Math.floor(progress * (to - from) + from);

          setValue(nextValue);

          window.requestAnimationFrame(step);
        } else {
          setValue(valueProp);
        }
      };

      window.requestAnimationFrame(step);
    }, []);

    return (
      <>
        {prefix}
        {floatNumber(value)}
        {postfix}
      </>
    );
  }
);

export default Number;
