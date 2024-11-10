import { useEffect, useState } from "react";
import "./featuredInfo.css";
import axios from "axios";

export default function FeaturedInfo() {
  const [data1, setData1] = useState(null); // For users
  const [data2, setData2] = useState(null); // For sellers
  const [data3, setData3] = useState(null); // For medicines

  // Fetch users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/users");
        setData1(response.data.length1); // Assuming the API returns length1
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  // Fetch sellers
  useEffect(() => {
    const fetchSellers = async () => {
      try {
        const response = await axios.get("/api/sellers");
        setData2(response.data.length2); // Accessing length2 from the response
      } catch (error) {
        console.error("Error fetching sellers:", error);
      }
    };
    fetchSellers();
  }, []);

  // Fetch medicines
  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const response = await axios.get("/api/medicine ");
        setData3(response.data.length3); // Accessing length3 from the response
      } catch (error) {
        console.error("Error fetching medicines:", error);
      }
    };
    fetchMedicines();
  }, []);

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Users</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
            {data1 !== null ? data1 : "Loading..."}
          </span>
        </div>
        <span className="featuredSub">Total users</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Sellers</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
            {data2 !== null ? data2 : "Loading..."}
          </span>{" "}
          {/* Displaying sellers count */}
        </div>
        <span className="featuredSub">Total sellers</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Medicines</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
            {data3 !== null ? data3 : "Loading..."}
          </span>{" "}
          {/* Displaying medicines count */}
        </div>
        <span className="featuredSub">Total medicines</span>
      </div>
    </div>
  );
}
