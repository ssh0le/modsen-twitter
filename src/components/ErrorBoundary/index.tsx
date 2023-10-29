import { Component } from 'react';

import { errorBoundaryStatics } from '@/constants';

import { SerifText } from '../UI';

import { ErrorBoundaryProps, ErrorBoundaryState } from './interfaces';
import {
  ButtonContainer,
  ErrorBoundaryContainer,
  MessageContainer,
} from './styled';

const { message, backButtonText } = errorBoundaryStatics;

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  handleButtonClick = () => {
    this.setState({
      hasError: false,
    });
  };

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <ErrorBoundaryContainer>
          <MessageContainer>
            <SerifText>{message}</SerifText>
          </MessageContainer>
          <ButtonContainer>
            <button onClick={this.handleButtonClick}>{backButtonText}</button>
          </ButtonContainer>
        </ErrorBoundaryContainer>
      );
    }

    return children;
  }
}
