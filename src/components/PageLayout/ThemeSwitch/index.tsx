import { MouseEvent } from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks/storeHooks';
import { selectCurrentTheme } from '@/store/selectors';
import { toggleTheme } from '@/store/slices/theme';

import { Checkbox, Toggler } from './styled';

const ThemeSwitch = () => {
  const theme = useAppSelector(selectCurrentTheme);
  const dispatch = useAppDispatch();
  const isDark = theme === 'dark';

  const handleSwitchClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    console.log('click');
    dispatch(toggleTheme());
  };

  return (
    <div onClick={handleSwitchClick}>
      <Toggler className={isDark ? 'active' : ''}>
        <Checkbox type="checkbox" defaultChecked={isDark} />
      </Toggler>
    </div>
  );
};

export default ThemeSwitch;
