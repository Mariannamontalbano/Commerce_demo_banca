import React, { useState } from "react";

const Apriconto = () => {
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    telefono: "",
    dataNascita: "",
    indirizzo: "",
    codiceFiscale: "",
    password: "",
    confermaPassword: "",
  });

  // Gestione dei cambiamenti nei campi
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Gestione invio modulo
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validazione: password corrispondenti
    if (formData.password !== formData.confermaPassword) {
      alert("Le password non corrispondono!");
      return;
    }

    // Validazione: tutti i campi completati
    for (let key in formData) {
      if (!formData[key]) {
        alert("Per favore, completa tutti i campi.");
        return;
      }
    }

    // Simulazione di invio al server
    console.log("Dati inviati al server:", formData);
    alert("Registrazione completata con successo!");

    // Resetta il modulo
    setFormData({
      nome: "",
      cognome: "",
      email: "",
      telefono: "",
      dataNascita: "",
      indirizzo: "",
      codiceFiscale: "",
      password: "",
      confermaPassword: "",
    });
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Apri il tuo Conto Corrente</h1>
      <p>Compila i seguenti campi per aprire il tuo conto.</p>

      <div
        style={{
          maxWidth: "600px",
          margin: "20px auto",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          textAlign: "left",
        }}
      >
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label>Nome</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Inserisci il tuo nome"
              style={inputStyle}
              required
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>Cognome</label>
            <input
              type="text"
              name="cognome"
              value={formData.cognome}
              onChange={handleChange}
              placeholder="Inserisci il tuo cognome"
              style={inputStyle}
              required
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Inserisci la tua email"
              style={inputStyle}
              required
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>Numero di Telefono</label>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              placeholder="Inserisci il tuo numero di telefono"
              style={inputStyle}
              required
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>Data di Nascita</label>
            <input
              type="date"
              name="dataNascita"
              value={formData.dataNascita}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>Indirizzo</label>
            <input
              type="text"
              name="indirizzo"
              value={formData.indirizzo}
              onChange={handleChange}
              placeholder="Inserisci il tuo indirizzo"
              style={inputStyle}
              required
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>Codice Fiscale</label>
            <input
              type="text"
              name="codiceFiscale"
              value={formData.codiceFiscale}
              onChange={handleChange}
              placeholder="Inserisci il tuo codice fiscale"
              style={inputStyle}
              required
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Crea una password"
              style={inputStyle}
              required
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>Conferma Password</label>
            <input
              type="password"
              name="confermaPassword"
              value={formData.confermaPassword}
              onChange={handleChange}
              placeholder="Conferma la password"
              style={inputStyle}
              required
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Registrati
          </button>
        </form>
      </div>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "5px",
  border: "1px solid #ccc",
  borderRadius: "5px",
};

export default Apriconto;
