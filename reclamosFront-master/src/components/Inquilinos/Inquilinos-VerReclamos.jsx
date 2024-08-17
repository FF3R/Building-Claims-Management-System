import React, { useState, useEffect } from 'react';

const InquilinosVerReclamos = () => {
  const [complaints, setComplaints] = useState([]);
  const [filteredComplaints, setFilteredComplaints] = useState([]);
  const [filters, setFilters] = useState({
    date: '',
    address: '',
    floor: '',
  });

  // Fetch complaints data
  useEffect(() => {
    fetch('/complaints')
      .then((response) => response.json())
      .then((data) => setComplaints(data));
  }, []);

  // Handle filter changes
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  // Filter complaints based on selected filters
  useEffect(() => {
    const filtered = complaints.filter((complaint) => {
      const dateMatch =
        filters.date === '' || new Date(complaint.date) === new Date(filters.date);
      const addressMatch =
        filters.address === '' ||
        complaint.address.toLowerCase().includes(filters.address.toLowerCase());
      const floorMatch =
        filters.floor === '' || complaint.floor === parseInt(filters.floor);
      return dateMatch && addressMatch && floorMatch;
    });
    setFilteredComplaints(filtered);
  }, [complaints, filters]);

  return (
    <>
      <meta charSet="UTF-8" />
      <meta
        name="description"
        content="Frontend Mentor - Pricing Component With Toggle"
      />
      <meta
        name="keywords"
        content="Pricing Component With Toggle, Frontend Mentor"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="images/favicon-32x32.png"
      />
      <link rel="stylesheet" href="styles.css" />
      <title>Inquilino</title>
      <header>
        <div className="header-container">
          <h1>Sus Reclamos</h1>
          <a href="/inquilinos">Ir al Dashboard</a>
        </div>
      </header>
      <main>
        <section className="properties-container">
          <h1>Lista de Reclamos</h1>
          <ul className="properties">
            {filteredComplaints.map((complaint) => (
              <li className="property" key={complaint.id}>
                <img src={complaint.propertyImage} alt={complaint.propertyTitle} />
                <div className="info">
                  <h2>{complaint.propertyTitle}</h2>
                  <p>Dirección: {complaint.propertyAddress}</p>
                  <p>Fecha: {complaint.date}</p>
                  <p>Problema: {complaint.issue}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
};

export default InquilinosVerReclamos;