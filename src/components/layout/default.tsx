import { ErrorBoundary } from '../error/ErrorBoundary'

type DefaultLayoutProps = {
  children: React.ReactChild
}

export const DefaultLayout: React.VFC<DefaultLayoutProps> = ({ children }) => {
  return <ErrorBoundary>{children}</ErrorBoundary>
}
