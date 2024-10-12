import * as React from 'react'

import { cn } from '@/utils/cn'

const Stack = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-4', className)}
    {...props}
  />
))
Stack.displayName = 'Stack'

const StackCell = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex', className)} {...props} />
))
StackCell.displayName = 'StackCell'

export { Stack, StackCell }
