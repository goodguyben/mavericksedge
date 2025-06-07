
import React, { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class VideoErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('Video Error Boundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="w-full h-full bg-gray-800 flex items-center justify-center rounded-lg">
          <div className="text-gray-400 text-center">
            <p className="text-sm">Video unavailable</p>
            <p className="text-xs mt-1">Content loading error</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default VideoErrorBoundary;
