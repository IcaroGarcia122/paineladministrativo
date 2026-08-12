import { createFileRoute } from '@tanstack/react-router'
import { Card } from '@/components/ui/card'
import { Users, Calendar, ArrowUpRight, Filter, Loader2, Plus, Info } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { supabase } from '@/integrations/supabase/client'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'

export const Route = createFileRoute('/admin/reservations')({
  component: ReservationsPage,
})

function ReservationsPage() {
  const queryClient = useQueryClient()
  const [isAdding, setIsAdding] = useState(false)
  
  // Data Fetching
  const { data: reservations, isLoading } = useQuery({
    queryKey: ['admin-reservations'],
    queryFn: async () => {
      const res = await fetch('/api/stays')
      if (!res.ok) throw new Error('Falha ao carregar estadias')
      return res.json()
    }
  })

  // Update Status Mutation
  const updateStatus = useMutation({
    mutationFn: async ({ id, status, resItem }: { id: string, status: string, resItem: any }) => {
      const res = await fetch('/api/stays', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...resItem, id, status }),
      })
      if (!res.ok) throw new Error('Falha ao atualizar status')
      return res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-reservations'] })
      toast.success('Status da reserva atualizado no Supabase.')
    }
  })

  return (
    <div className="space-y-6 md:space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-serif text-[#24170F]">Reservas</h2>
          <p className="text-sm md:text-base text-muted-foreground font-sans">Controle central de todas as estadias</p>
        </div>
        <div className="flex w-full sm:w-auto gap-2">
          <Button variant="outline" className="flex-1 sm:flex-none border-[#DCC9A5] text-[#24170F]">
            <Filter className="w-4 h-4 mr-2" /> Filtrar
          </Button>
          <Button onClick={() => window.location.href = '/admin/guests'} className="flex-1 sm:flex-none bg-gold text-white">
            <Plus className="w-4 h-4 mr-2" /> Nova
          </Button>
        </div>
      </div>

      <Card className="border-none shadow-sm bg-white overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-[#F7F3EA] text-[#24170F] text-xs uppercase tracking-wider font-sans font-semibold">
              <tr>
                <th className="px-6 py-4">Hóspede</th>
                <th className="px-6 py-4">Período</th>
                <th className="px-6 py-4">Hóspedes</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-beige/10">
              {isLoading ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center">
                    <Loader2 className="w-8 h-8 animate-spin text-gold mx-auto" />
                  </td>
                </tr>
              ) : reservations?.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center italic text-muted-foreground">
                    Nenhuma reserva encontrada.
                  </td>
                </tr>
              ) : (
                reservations?.map((res: any) => {
                  const isBlocked = res.notes?.includes('[BLOQUEIO]')
                  const guestName = res.guestName || res.name || 'Hóspede'
                  const guestPhone = res.guestPhone || res.phone || ''
                  const checkIn = res.checkIn || res.check_in
                  const checkOut = res.checkOut || res.check_out
                  const count = res.guestsCount || res.num_guests || 1

                  return (
                    <tr key={res.id} className={`hover:bg-[#F7F3EA]/30 transition-colors ${isBlocked ? 'bg-red-50/30' : ''}`}>
                      <td className="px-6 py-4">
                        <div className="font-medium text-[#24170F]">{guestName}</div>
                        <div className="text-[10px] text-muted-foreground">{guestPhone || 'Sem telefone'}</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3 h-3 text-gold" />
                          {checkIn ? new Date(checkIn + 'T00:00:00').toLocaleDateString('pt-BR') : '-'} a {checkOut ? new Date(checkOut + 'T00:00:00').toLocaleDateString('pt-BR') : '-'}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <Users className="w-3 h-3 inline mr-1 text-gold" /> {count}
                      </td>
                      <td className="px-6 py-4">
                        <select 
                          value={res.status || 'confirmed'}
                          onChange={(e) => updateStatus.mutate({ id: res.id, status: e.target.value, resItem: res })}
                          className={`text-[10px] px-2 py-1 rounded border bg-transparent font-semibold uppercase tracking-tighter ${
                            res.status === 'confirmed' ? 'border-green-200 text-green-700 bg-green-50' :
                            res.status === 'cancelled' ? 'border-red-200 text-red-700 bg-red-50' :
                            'border-yellow-200 text-yellow-700 bg-yellow-50'
                          }`}
                        >
                          <option value="pending">Pendente</option>
                          <option value="confirmed">Confirmada</option>
                          <option value="cancelled">Cancelada</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-gold"
                          onClick={() => toast.info(`Notas: ${res.notes || 'Nenhuma'}`)}
                        >
                          <Info className="w-4 h-4" />
                        </Button>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
