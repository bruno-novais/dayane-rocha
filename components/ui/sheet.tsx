'use client'

import { Dialog } from '@base-ui/react/dialog'
import { cn } from '@/lib/utils'

function Sheet({ ...props }: Dialog.Root.Props) {
  return <Dialog.Root data-slot="sheet" {...props} />
}

function SheetTrigger({ ...props }: Dialog.Trigger.Props) {
  return <Dialog.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetContent({ className, ...props }: Dialog.Popup.Props) {
  return (
    <Dialog.Portal>
      <Dialog.Backdrop className="mobile-sheet-backdrop" />
      <Dialog.Popup
        data-slot="sheet-content"
        className={cn('mobile-sheet-panel glass', className)}
        {...props}
      />
    </Dialog.Portal>
  )
}

function SheetTitle({ ...props }: Dialog.Title.Props) {
  return <Dialog.Title data-slot="sheet-title" {...props} />
}

function SheetClose({ ...props }: Dialog.Close.Props) {
  return <Dialog.Close data-slot="sheet-close" {...props} />
}

export { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetClose }
