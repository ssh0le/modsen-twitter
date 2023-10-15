import { Component } from 'react';

import { Button, SerifText } from '../UI';

import { ErrorBoundaryProps, ErrorBoundaryState } from './interfaces';
import {
  ButtonContainer,
  ErrorBoundaryContainer,
  MessageContainer,
} from './styled';

class ErrorBounday extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(): void {
    this.setState({
      hasError: true,
    });
  }

  handleButtonClick = () => {
    this.setState({
      hasError: false,
    });
  };

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (!hasError) {
      return children;
    }

    return (
      <ErrorBoundaryContainer>
        <MessageContainer>
          <SerifText>Something went wrong!</SerifText>
        </MessageContainer>
        <ButtonContainer>
          <Button onClick={this.handleButtonClick}>Go to home</Button>
        </ButtonContainer>
      </ErrorBoundaryContainer>
    );
  }
}

export default ErrorBounday;
