import { createFileRoute } from '@tanstack/react-router'
import { ConciergeView } from '@/components/views/ConciergeView'

export const Route = createFileRoute('/admin/concierge')({
  component: ConciergePage,
})

function ConciergePage() {
  return <ConciergeView />
}
