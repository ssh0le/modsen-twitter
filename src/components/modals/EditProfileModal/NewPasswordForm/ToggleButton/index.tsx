import { Link } from '@/components/UI';

import { ToggleButtonProps } from './interfaces';
import { ToggleButtonContainer } from './styled';

const ToggleButton = ({ isShown, onClick }: ToggleButtonProps) => {
  return (
    <ToggleButtonContainer onClick={onClick}>
      <Link>{isShown ? 'Hide' : 'Show'}</Link>
    </ToggleButtonContainer>
  );
};

export default ToggleButton;
