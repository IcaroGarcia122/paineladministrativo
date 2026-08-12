import { createFileRoute } from '@tanstack/react-router'
import { AutomationsView } from '@/components/views/AutomationsView'

export const Route = createFileRoute('/admin/automations')({
  component: AutomationsPage,
})

function AutomationsPage() {
  return <AutomationsView />
}
