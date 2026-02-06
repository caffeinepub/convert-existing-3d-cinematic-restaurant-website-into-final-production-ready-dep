import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { useCreateReservation } from '../../hooks/useCreateReservation';
import { ContactType } from '../../backend';
import { Loader2 } from 'lucide-react';

interface ReservationFormData {
  guestName: string;
  contact: string;
  contactType: ContactType;
  date: string;
  time: string;
  partySize: string;
  notes: string;
}

export default function ReservationForm() {
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<ReservationFormData>();
  const { createReservation, isLoading } = useCreateReservation();
  const [contactType, setContactType] = useState<ContactType>(ContactType.email);

  const onSubmit = async (data: ReservationFormData) => {
    try {
      const reservationId = await createReservation({
        guestName: data.guestName,
        contact: data.contact,
        contactType: contactType,
        date: data.date,
        time: data.time,
        partySize: BigInt(data.partySize),
        notes: data.notes || null,
      });

      toast.success('Reservation Confirmed!', {
        description: `Your reservation #${reservationId} has been confirmed. We look forward to serving you!`,
        duration: 5000,
      });
      reset();
      setContactType(ContactType.email);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unable to complete your reservation. Please try again.';
      toast.error('Reservation Failed', {
        description: errorMessage,
        duration: 5000,
      });
    }
  };

  return (
    <Card className="border-amber-900/30 bg-gradient-to-br from-zinc-900 to-zinc-950">
      <CardHeader>
        <CardTitle className="text-2xl text-amber-400">Reservation Details</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="guestName" className="text-amber-100">
              Full Name *
            </Label>
            <Input
              id="guestName"
              {...register('guestName', { required: 'Name is required' })}
              className="border-amber-900/30 bg-zinc-950 text-amber-100"
              placeholder="John Doe"
              disabled={isLoading}
            />
            {errors.guestName && (
              <p className="text-sm text-red-400">{errors.guestName.message}</p>
            )}
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="contactType" className="text-amber-100">
                Contact Method *
              </Label>
              <Select
                value={contactType}
                onValueChange={(value) => setContactType(value as ContactType)}
                disabled={isLoading}
              >
                <SelectTrigger className="border-amber-900/30 bg-zinc-950 text-amber-100">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={ContactType.email}>Email</SelectItem>
                  <SelectItem value={ContactType.phone}>Phone</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact" className="text-amber-100">
                {contactType === ContactType.email ? 'Email' : 'Phone'} *
              </Label>
              <Input
                id="contact"
                {...register('contact', { required: 'Contact information is required' })}
                className="border-amber-900/30 bg-zinc-950 text-amber-100"
                placeholder={contactType === ContactType.email ? 'john@example.com' : '+1 (555) 123-4567'}
                type={contactType === ContactType.email ? 'email' : 'tel'}
                disabled={isLoading}
              />
              {errors.contact && (
                <p className="text-sm text-red-400">{errors.contact.message}</p>
              )}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="date" className="text-amber-100">
                Date *
              </Label>
              <Input
                id="date"
                type="date"
                {...register('date', { required: 'Date is required' })}
                className="border-amber-900/30 bg-zinc-950 text-amber-100"
                min={new Date().toISOString().split('T')[0]}
                disabled={isLoading}
              />
              {errors.date && (
                <p className="text-sm text-red-400">{errors.date.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="time" className="text-amber-100">
                Time *
              </Label>
              <Input
                id="time"
                type="time"
                {...register('time', { required: 'Time is required' })}
                className="border-amber-900/30 bg-zinc-950 text-amber-100"
                disabled={isLoading}
              />
              {errors.time && (
                <p className="text-sm text-red-400">{errors.time.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="partySize" className="text-amber-100">
              Party Size *
            </Label>
            <Select onValueChange={(value) => setValue('partySize', value)} disabled={isLoading}>
              <SelectTrigger className="border-amber-900/30 bg-zinc-950 text-amber-100">
                <SelectValue placeholder="Select number of guests" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((size) => (
                  <SelectItem key={size} value={size.toString()}>
                    {size} {size === 1 ? 'Guest' : 'Guests'}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <input type="hidden" {...register('partySize', { required: 'Party size is required' })} />
            {errors.partySize && (
              <p className="text-sm text-red-400">{errors.partySize.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes" className="text-amber-100">
              Special Requests (Optional)
            </Label>
            <Textarea
              id="notes"
              {...register('notes')}
              className="border-amber-900/30 bg-zinc-950 text-amber-100"
              placeholder="Dietary restrictions, special occasions, seating preferences..."
              rows={4}
              disabled={isLoading}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-amber-600 text-lg hover:bg-amber-700"
            size="lg"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Confirming Your Reservation...
              </>
            ) : (
              'Confirm Reservation'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
