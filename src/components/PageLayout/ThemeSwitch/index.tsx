import { MouseEvent, useState } from 'react';

import { Checkbox, Toggler } from './styled';

const ThemeSwitch = () => {
  const [isToggled, toggle] = useState(false);

  const callback = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    console.log('click ', isToggled);
    toggle(!isToggled);
  };

  return (
    <div onClick={callback}>
      <Toggler className={isToggled ? 'active' : ''}>
        <Checkbox type="checkbox" defaultChecked={isToggled} />
      </Toggler>
    </div>
  );
};

export default ThemeSwitch;
