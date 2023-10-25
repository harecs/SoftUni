class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight(flightNumber, destination, departureTime, price) {
        if (this.flights.find(x => x.flightNumber == flightNumber)) {
            return `Flight ${flightNumber} to ${destination} is already available.`;
        }

        const flight = { flightNumber, destination, departureTime, price };
        this.flights.push(flight);

        return `Flight ${flightNumber} to ${destination} has been added to the system.`;
    }

    bookFlight(passengerName, flightNumber) {
        if (!this.flights.find(x => x.flightNumber == flightNumber)) {
            return `Flight ${flightNumber} is not available for booking.`
        }

        const booking = { passengerName, flightNumber };
        this.bookings.push(booking);
        this.bookingsCount += 1;

        return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
    }

    cancelBooking(passengerName, flightNumber) {
        const booking = this.bookings.find(x => x.passengerName == passengerName && x.flightNumber == flightNumber);

        if (!booking) {
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);
        }

        this.bookings = this.bookings.filter(x => x != booking);
        this.bookingsCount -= 1;
        return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
    }

    showBookings(criteria) {
        if (this.bookings.length == 0) {
            throw new Error('No bookings have been made yet.');
        }

        let output = '';

        if (criteria === 'all') {
            output += `All bookings(${this.bookingsCount}):\n`;

            this.bookings.forEach(booking => {
                output += `${booking.passengerName} booked for flight ${booking.flightNumber}.\n`;
            });

            return output.trim();
        } else if (criteria === 'cheap') {
            const cheapFlights = this.flights.filter(x => x.price <= 100);

            if (cheapFlights.length == 0) {
                return 'No cheap bookings found.';
            }

            output += 'Cheap bookings:\n';

            for (const flight of cheapFlights) {
                const cheapBookings = this.bookings.filter(x => x.flightNumber == flight.flightNumber);

                if (cheapBookings.length > 0) {
                    cheapBookings.forEach(booking => {
                        output += `${booking.passengerName} booked for flight ${booking.flightNumber}.\n`;
                    });
                }
            }
        } else if (criteria === 'expensive') {
            const cheapFlights = this.flights.filter(x => x.price > 100);

            if (cheapFlights.length == 0) {
                return 'No expensive bookings found.';
            }

            output += 'Expensive bookings:\n';

            for (const flight of cheapFlights) {
                const cheapBookings = this.bookings.filter(x => x.flightNumber == flight.flightNumber);

                if (cheapBookings.length > 0) {
                    cheapBookings.forEach(booking => {
                        output += `${booking.passengerName} booked for flight ${booking.flightNumber}.\n`;
                    });
                }
            }
        }

        return output.trim();
    }
}