import { useTicket } from "../context/TicketContext";

function TicketSummary() {
  const { tickets } = useTicket();

  // Ringkasan Status
  const total = tickets.length;
  const open = tickets.filter((ticket) => ticket.status === "Open").length;
  const progress = tickets.filter(
    (ticket) => ticket.status === "In Progress"
  ).length;
  const resolved = tickets.filter(
    (ticket) => ticket.status === "Resolved"
  ).length;

  // Ringkasan Kategori (Poin g)
  const categoryList = [
    "Hardware",
    "Software",
    "Network",
    "Account",
    "Security",
  ];

  const countByCategory = (categoryName) =>
    tickets.filter((ticket) => ticket.category === categoryName).length;

  return (
    <div className="mb-4">
      {/* Baris 1: Ringkasan Berdasarkan Status */}
      <div className="row g-3 mb-3">
        <div className="col-md-3">
          <div className="card shadow-sm text-center">
            <div className="card-body">
              <h6 className="text-muted">Total Ticket</h6>
              <h2>{total}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm text-center">
            <div className="card-body">
              <h6 className="text-muted">Open</h6>
              <h2>{open}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm text-center">
            <div className="card-body">
              <h6 className="text-muted">In Progress</h6>
              <h2>{progress}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm text-center">
            <div className="card-body">
              <h6 className="text-muted">Resolved</h6>
              <h2>{resolved}</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Baris 2: Ringkasan Berdasarkan Kategori (Poin g) */}
      <div className="card shadow-sm">
        <div className="card-body">
          <h6 className="text-muted mb-3">Jumlah Ticket Berdasarkan Kategori</h6>
          <div className="row g-2 text-center">
            {categoryList.map((category) => (
              <div key={category} className="col">
                <div className="p-2 border rounded bg-light">
                  <div className="small text-muted">{category}</div>
                  <strong className="fs-5">{countByCategory(category)}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketSummary;