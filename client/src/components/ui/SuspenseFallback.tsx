
import LoadingScreen from './LoadingScreen';

export default function SuspenseFallback() {
  return (
    <LoadingScreen 
      fixedDuration={3000}
      isLoading={true}
    />
  );
}
