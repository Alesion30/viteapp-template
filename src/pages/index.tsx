import { ErrorBoundary } from '~/components/common/error/ErrorBoundary'
import { Root } from '~/components/pages/root/root'

export const RootPage: React.VFC = () => {
  return (
    <ErrorBoundary>
      <Root />
    </ErrorBoundary>
  )
}
