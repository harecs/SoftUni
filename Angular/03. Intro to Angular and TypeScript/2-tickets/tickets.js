function generateTickets(ticketDescriptions, sortCriteria) {
    var Ticket = /** @class */ (function () {
        function Ticket(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
        return Ticket;
    }());
    var tickets = [];
    ticketDescriptions.forEach(function (description) {
        var _a = description.split('|'), destination = _a[0], price = _a[1], status = _a[2];
        var ticket = new Ticket(destination, Number(price), status);
        tickets.push(ticket);
    });
    tickets.sort(function (a, b) {
        if (sortCriteria == 'price') {
            return a.price - b.price;
        }
        return a[sortCriteria].localeCompare(b[sortCriteria]);
    });
    return tickets;
}
var ticketsSortedByDestination = generateTickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'destination');
console.log(ticketsSortedByDestination);
var ticketsSortedByStatus = generateTickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'status');
console.log(ticketsSortedByStatus);
