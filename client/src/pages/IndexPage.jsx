import React from "react";
import useListings from "./useListings";

const IndexPage = () => {
  const { listings, loading, error } = useListings();

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Welcome to Airbnb</h1>
        <p>Find unique places to stay and things to do.</p>
      </header>
      <section style={styles.hero}>
        <h2>Discover Amazing Stays</h2>
        <p>Book homes, experiences, and places around the world.</p>
      </section>
      {loading ? (
        <p style={styles.loading}>Loading...</p>
      ) : error ? (
        <p style={styles.error}>{error}</p>
      ) : (
        <section style={styles.listings}>
          <h3>Featured Listings</h3>
          <div style={styles.listingContainer}>
            {listings.map((listing) => (
              <div key={listing.id} style={styles.listing}>
                <h4>{listing.title}</h4>
                <p>{listing.location}</p>
              </div>
            ))}
          </div>
        </section>
      )}
      <footer style={styles.footer}>
        <p>Ready to start your adventure?</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
  },
  hero: {
    textAlign: "center",
    marginBottom: "40px",
  },
  listings: {
    marginBottom: "40px",
  },
  listingContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  listing: {
    width: "30%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginBottom: "20px",
  },
  loading: {
    textAlign: "center",
    marginTop: "20px",
    color: "#007BFF",
  },
  error: {
    textAlign: "center",
    marginTop: "20px",
    color: "red",
  },
  footer: {
    textAlign: "center",
    marginTop: "40px",
  },
};

export default IndexPage;
