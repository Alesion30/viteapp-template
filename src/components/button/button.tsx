import clsx from 'clsx'

export type ButtonProps = {
  children: React.ReactChild
  onClick?: () => void
  className?: string
  full?: boolean
  rounded?: boolean
  outlined?: boolean
}

export const Button: React.VFC<ButtonProps> = ({
  children,
  onClick,
  className,
  full = false,
  rounded = false,
  outlined = false,
}) => {
  return (
    <button
      onClick={onClick}
      type='button'
      className={clsx(
        className,
        'px-4 py-2 border shadow-sm text-base font-medium',
        full ? 'w-full' : '',
        rounded ? 'rounded-full' : 'rounded-md',
        outlined
          ? 'border-orange-600 text-orange-600 bg-white hover:bg-orange-50'
          : 'border-transparent text-white bg-orange-600 hover:bg-orange-700'
      )}
    >
      {children}
    </button>
  )
}
