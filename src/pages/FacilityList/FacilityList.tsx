import { useState, useEffect } from "react";
import FacilityCard from "@/components/FacilityCard/FacilityCard"; // Update PlantCard to FacilityCard
import { TFacility } from "@/types";
import Pagination from "@/components/FacilityCard/Pagination"; // Update to Facility Pagination if needed
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useGetFacilitiesQuery } from "@/redux/api/api"; // Update to facility query

import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const FacilityList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("");
  const [priceRange, setPriceRange] = useState<number[]>([0, 1000]);
  const postsPerPage = 6;
  const { data, isLoading } = useGetFacilitiesQuery(undefined); // Update to use facilities data query
  const facilitiesData=data?.data 

console.log(facilitiesData)




  const [searchQuery, setSearchQuery] = useState("");

  const filteredFacilities =
    facilitiesData &&
    facilitiesData.filter((facility: TFacility) => {
      const inCategory =
        selectedCategory === "All" || facility.category === selectedCategory;
      const inPriceRange =
        facility.pricePerHour >= priceRange[0] &&
        facility.pricePerHour <= priceRange[1];
      const matchesSearch = facility.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      return inCategory && inPriceRange && matchesSearch;
    });

  useEffect(() => {
    setCurrentPage(1); // Reset to the first page whenever category, sort option, or price range changes
  }, [selectedCategory, sortOption, priceRange, searchQuery]);

  const sortedFacilities =
    filteredFacilities &&
    filteredFacilities.slice().sort((a: TFacility, b: TFacility) => {
      switch (sortOption) {
        case "price_asc":
          return a.pricePerHour - b.pricePerHour;
        case "price_desc":
          return b.pricePerHour - a.pricePerHour;
        default:
          return 0;
      }
    });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts =
    sortedFacilities && sortedFacilities.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="container mx-auto p-5">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-3/12 mb-6 md:mb-0">
          <h1 className="text-2xl mb-4">Categories</h1>
          <div className="flex flex-col space-y-4">
            <Button
              className={`border rounded-none bg-transparent text-black hover:bg-gray-200 hover:text-black ${
                selectedCategory === "All" ? "bg-gray-200" : ""
              }`}
              onClick={() => setSelectedCategory("All")}
            >
              All
            </Button>
            {/* Add any specific categories for your facilities here */}
          </div>

          <h1 className="mt-6 mb-4">Price Range</h1>
          <div className="px-4">
            <Slider
              range
              min={0}
              max={1000}
              defaultValue={priceRange}
              onChange={(value) => {
                if (typeof value === "number") {
                  setPriceRange([value, priceRange[1]]);
                } else {
                  setPriceRange(value);
                }
              }}
              className="mb-4"
            />
            <div className="flex justify-between">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </div>

        <div className="md:w-9/12">
          <div className="flex justify-end mb-6">
            <div className="header flex items-center justify-between mb-4">
              <input
                type="text"
                placeholder="Search by name..."
                className="border border-black p-[11px] me-3 rounded-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <Select onValueChange={(value) => setSortOption(value)}>
              <SelectTrigger className="w-[180px] rounded-none border border-black text-black">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup className="bg-white">
                  <SelectLabel>Sort by</SelectLabel>
                  <SelectItem value="price_asc">Price - Low to High</SelectItem>
                  <SelectItem value="price_desc">
                    Price - High to Low
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="my-5 p-3">
            <div className="facility-category-section">
              <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10 mx-auto my-5">
                {currentPosts?.map((facility: TFacility) => (
                  <FacilityCard key={facility._id} facility={facility} />
                ))}
              </div>

              <Pagination
                totalPosts={sortedFacilities.length} // Update to use sortedFacilities length for pagination
                postsPerPage={postsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityList;
