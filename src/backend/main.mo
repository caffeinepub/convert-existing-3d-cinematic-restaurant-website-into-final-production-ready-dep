import Map "mo:core/Map";
import List "mo:core/List";

actor {
  type ContactType = {
    #email;
    #phone;
  };

  type Reservation = {
    id : Nat;
    guestName : Text;
    contact : Text;
    contactType : ContactType;
    date : Text;
    time : Text;
    partySize : Nat;
    notes : ?Text;
  };

  let reservations = Map.empty<Nat, Reservation>();
  var nextReservationId = 0;

  public shared ({ caller }) func createReservation(guestName : Text, contact : Text, contactType : ContactType, date : Text, time : Text, partySize : Nat, notes : ?Text) : async Nat {
    let id = nextReservationId;
    let reservation : Reservation = {
      id;
      guestName;
      contact;
      contactType;
      date;
      time;
      partySize;
      notes;
    };
    reservations.add(id, reservation);
    nextReservationId += 1;
    id;
  };

  public query ({ caller }) func getReservation(id : Nat) : async ?Reservation {
    reservations.get(id);
  };

  public query ({ caller }) func getAllReservations() : async [Reservation] {
    reservations.values().toArray();
  };
};
