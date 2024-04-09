import { useState, useEffect } from "react";

const useListings = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const mockData = [
  { id: 1, title: "Cozy Beach House", location: "Malibu, CA" },
  { id: 2, title: "Urban Loft in Downtown", location: "New York, NY" },
  { id: 3, title: "Mountain Retreat", location: "Aspen, CO" },
  { id: 4, title: "Luxury Villa with Ocean View", location: "Maui, HI" },
  { id: 5, title: "Rustic Cabin in the Woods", location: "Portland, OR" },
  { id: 6, title: "Charming Cottage by the Lake", location: "Lake Tahoe, CA" },
  { id: 7, title: "Modern Loft in Arts District", location: "Los Angeles, CA" },
  { id: 8, title: "Ski-In/Ski-Out Condo", location: "Breckenridge, CO" },
  { id: 9, title: "Seaside Retreat in Cape Cod", location: "Cape Cod, MA" },
  { id: 10, title: "Historic Townhouse in Savannah", location: "Savannah, GA" },
  { id: 11, title: "Eco-Friendly Treehouse Getaway", location: "Seattle, WA" },
  { id: 12, title: "Desert Oasis in Joshua Tree", location: "Joshua Tree, CA" },
  { id: 13, title: "Luxurious Penthouse with Skyline Views", location: "Chicago, IL" },
  { id: 14, title: "Riverside Cabin in the Smoky Mountains", location: "Gatlinburg, TN" },
  { id: 15, title: "Quaint Farmhouse in Upstate NY", location: "Hudson Valley, NY" },
  { id: 16, title: "Beachfront Bungalow in Miami", location: "Miami, FL" },
  { id: 17, title: "Remote Island Retreat in Hawaii", location: "Big Island, HI" },
  { id: 18, title: "Designer Loft in SoHo", location: "New York, NY" },
  { id: 19, title: "Coastal Villa with Private Pool", location: "Santa Barbara, CA" },
  { id: 20, title: "Sunny Condo in San Diego", location: "San Diego, CA" },
  { id: 21, title: "Lakeside Cabin in the Adirondacks", location: "Adirondacks, NY" },
  { id: 22, title: "Historic Mansion in Charleston", location: "Charleston, SC" },
  { id: 23, title: "Mountain View Chalet in Banff", location: "Banff, AB, Canada" },
];
        
        
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setListings(mockData);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch listings");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { listings, loading, error };
};

export default useListings;
