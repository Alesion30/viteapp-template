import { ErrorBoundary } from '~/components/error/ErrorBoundary'
import { Hoge } from '~/components/pages/hoge/hoge'

export const HogePage: React.VFC = () => {
  return (
    <ErrorBoundary>
      <Hoge />
    </ErrorBoundary>
  )
}
