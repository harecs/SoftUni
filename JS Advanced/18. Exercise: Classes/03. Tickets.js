function sortTickets(arrayOfTicketsInfo, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    const tickets = [];

    for (const ticketInfo of arrayOfTicketsInfo) {
        const [destination, price, status] = ticketInfo.split('|');
        tickets.push(new Ticket(destination, price, status));
    }

    if (criteria == 'price') {
        tickets.sort((a, b) => a.price - b.price);
    } else {
        tickets.sort((a, b) => a[criteria].localeCompare(b[criteria]));
    }

    return tickets;
}