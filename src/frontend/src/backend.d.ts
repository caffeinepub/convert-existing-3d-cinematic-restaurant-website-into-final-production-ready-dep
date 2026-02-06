import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Reservation {
    id: bigint;
    contact: string;
    contactType: ContactType;
    date: string;
    time: string;
    guestName: string;
    notes?: string;
    partySize: bigint;
}
export enum ContactType {
    email = "email",
    phone = "phone"
}
export interface backendInterface {
    createReservation(guestName: string, contact: string, contactType: ContactType, date: string, time: string, partySize: bigint, notes: string | null): Promise<bigint>;
    getAllReservations(): Promise<Array<Reservation>>;
    getReservation(id: bigint): Promise<Reservation | null>;
}
