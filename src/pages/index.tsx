import { ErrorBoundary } from '~/components/error/ErrorBoundary'
import { Root } from '~/components/pages/root/root'

export const RootPage: React.VFC = () => {
  return (
    <ErrorBoundary>
      <Root />
    </ErrorBoundary>
  )
}
