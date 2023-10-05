import { Theme } from '@/interfaces';

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
