type sortingCriteria = 'destination' | 'price' | 'status';

function generateTickets(ticketDescriptions: string[], sortCriteria: sortingCriteria) {
    class Ticket {
        destination: string;
        price: number;
        status: string;

        constructor(destination: string, price: number, status: string) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const tickets: Ticket[] = [];

    ticketDescriptions.forEach(description => {
        const [destination, price, status] = description.split('|');

        const ticket = new Ticket(destination, Number(price), status);

        tickets.push(ticket);
    });

    tickets.sort((a, b) => {
        if (sortCriteria == 'price') {
            return a.price - b.price;
        }

        return a[sortCriteria].localeCompare(b[sortCriteria]);
    });

    return tickets;
}


const ticketsSortedByDestination = generateTickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'destination');
console.log(ticketsSortedByDestination);

const ticketsSortedByStatus = generateTickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'status');
console.log(ticketsSortedByStatus);