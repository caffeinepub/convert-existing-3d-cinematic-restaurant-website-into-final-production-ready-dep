import { useState, useRef } from 'react';
import { useActor } from './useActor';
import { ContactType } from '../backend';

interface CreateReservationParams {
  guestName: string;
  contact: string;
  contactType: ContactType;
  date: string;
  time: string;
  partySize: bigint;
  notes: string | null;
}

export function useCreateReservation() {
  const { actor } = useActor();
  const [isLoading, setIsLoading] = useState(false);
  const inFlightRef = useRef(false);

  const createReservation = async (params: CreateReservationParams): Promise<bigint> => {
    if (!actor) {
      throw new Error('Unable to connect to the reservation system. Please try again.');
    }

    // Prevent duplicate submissions
    if (inFlightRef.current) {
      throw new Error('A reservation is already being processed. Please wait.');
    }

    inFlightRef.current = true;
    setIsLoading(true);

    try {
      const reservationId = await actor.createReservation(
        params.guestName,
        params.contact,
        params.contactType,
        params.date,
        params.time,
        params.partySize,
        params.notes
      );
      return reservationId;
    } catch (error) {
      // Normalize error messages for user presentation
      if (error instanceof Error) {
        // Check for common error patterns and provide friendly messages
        const errorMessage = error.message.toLowerCase();
        if (errorMessage.includes('network') || errorMessage.includes('connection')) {
          throw new Error('Network connection issue. Please check your connection and try again.');
        } else if (errorMessage.includes('timeout')) {
          throw new Error('Request timed out. Please try again.');
        } else if (errorMessage.includes('unauthorized') || errorMessage.includes('permission')) {
          throw new Error('Authorization error. Please refresh the page and try again.');
        }
        // For other errors, provide a generic but friendly message
        throw new Error('Unable to complete your reservation. Please try again or contact us directly.');
      }
      throw new Error('An unexpected error occurred. Please try again or contact us directly.');
    } finally {
      setIsLoading(false);
      inFlightRef.current = false;
    }
  };

  return { createReservation, isLoading };
}
