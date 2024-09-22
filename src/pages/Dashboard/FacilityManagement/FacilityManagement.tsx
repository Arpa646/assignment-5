import React, { useEffect, useState } from "react";
import {
  useGetFacilitiesQuery,
  useDeleteFacilityMutation,
  useAddFacilityMutation,
  useUpdateFacilityMutation,
} from "@/redux/api/api";


import Swal from "sweetalert2";
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

export type Facility = {
  _id?: string;
  name: string;
  description: string;
  pricePerHour: number;
  location: string;
  image?: string; // New image field
};

const FacilityManagement = () => {
  // const token = useSelector((state: RootState) => state.auth.token);
  
  const { data } = useGetFacilitiesQuery(undefined);
const facilitiesData=data?.data
  const [deleteFacility] = useDeleteFacilityMutation();
  const [updateFacility] = useUpdateFacilityMutation();
  const [addFacility, { data: addFacilityResult }] = useAddFacilityMutation();
  console.log(facilitiesData);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newFacilityData, setNewFacilityData] = useState<Facility>({
    name: "Tennis Court",
    description: "Outdoor tennis court with synthetic surface.",
    pricePerHour: 400,
    location: "456 Sports Ave, Springfield",
    image: "", // Initialize image with an empty string
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editingFacility, setEditingFacility] = useState<Facility | null>(null);

  useEffect(() => {
    if (addFacilityResult) {
      toast.success("Facility added successfully!");
    }
  }, [addFacilityResult]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof Facility
  ) => {
    const { value } = event.target;
    if (isEditing && editingFacility) {
      setEditingFacility((prevFacility) => ({
        ...prevFacility!,
        [field]: value,
      }));
    } else {
      setNewFacilityData((prevData) => ({
        ...prevData,
        [field]: value
      }));
    }
  };

  const handleAddFacility = () => {
    if (!validateFacilityData(newFacilityData)) {
      return toast.error("Please provide all the details");
    }

    const facilityData = {
      facility: {
        name: newFacilityData.name,
        description: newFacilityData.description,
        pricePerHour: newFacilityData.pricePerHour,
        location: newFacilityData.location,
        image: newFacilityData.image, // Include image in the add data
      },
    };

    addFacility(facilityData);
    onClose();
  };

  const handleUpdateFacility = () => {
    if (!validateFacilityData(editingFacility)) {
      return toast.error("Please provide all the details");
    }

    const id = editingFacility!._id; // Facility ID to update
    const updateData = {
      name: editingFacility!.name,
      description: editingFacility!.description,
      pricePerHour: editingFacility!.pricePerHour,
      location: editingFacility!.location,
      image: editingFacility!.image, // Include image in the update data
    };

    updateFacility({ id, updateData })
      .unwrap()
      .then(() => {
        toast.success("Facility updated successfully!");
        onClose();
      })
      .catch((error) => {
        toast.error("Failed to update facility");
        console.error("Failed to update facility:", error);
      });
  };

  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteFacility(id)
          .unwrap()
          .then(() => {
            Swal.fire("Deleted!", "Your facility has been deleted.", "success");
          })
          .catch((error) => {
            Swal.fire("Error!", "Failed to delete the facility.", "error");
            console.error("Failed to delete the facility:", error);
          });
      }
    });
  };

  const handleEdit = (facility: Facility) => {
    setIsEditing(true);
    setEditingFacility(facility);
    setNewFacilityData({
      _id: facility._id,
      name: facility.name,
      description: facility.description,
      pricePerHour: facility.pricePerHour,
      location: facility.location,
    });
    onOpen();
  };

  const validateFacilityData = (facility: Facility | null) => {
    if (!facility) return false;
    return (
      facility.name &&
      facility.description &&
      facility.pricePerHour &&
      facility.location
    );
  };

  return (
    <div
      className={`container mx-auto ${isOpen ? "opacity-50" : "opacity-100"}`}
    >
      <div className="flex justify-end mb-5">
        <Button
          onPress={() => {
            setIsEditing(false);
            onOpen();
          }}
          className="bg-subThemeColor"
        >
          Add New Facility
          <svg
            className="w-5 ml-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            ></path>
          </svg>
        </Button>
      </div>

      <h2 className="text-2xl font-bold mb-4">Facility List</h2>
      {/* <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th scope="col">Facility</th>
              <th scope="col">Description</th>
              <th scope="col">Price Per Hour</th>
              <th scope="col">Location</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {facilitiesData &&
              facilitiesData.data?.map((facility: Facility) => (
                <tr key={facility._id}>
                  <td>{facility.name}</td>
                  <td>{facility.description}</td>
                  <td>${facility.pricePerHour}</td>
                  <td>{facility.location}</td>
                  <td className="flex">
                    <Button
                      className="font-normal text-black border border-black bg-transparent rounded-none px-2 py-1 mr-2"
                      onPress={() => handleEdit(facility)}
                    >
                      <CiEdit />
                    </Button>
                    <Button
                      className="font-normal text-black border border-black transparent rounded-none px-2 py-1"
                      onPress={() => handleDelete(facility._id!)}
                    >
                      <MdOutlineDeleteOutline />
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

      </div> */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 table-auto">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Facility Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price/Hour
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {facilitiesData &&
              facilitiesData?.map((facility: Facility) => (
                <tr key={facility._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                   <img src= {facility.image} alt=""  />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {facility.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {facility.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    ${facility.pricePerHour}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {facility.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap flex">
                    <Button
                      className="font-normal text-black border border-black bg-transparent rounded-none px-2 py-1 mr-2"
                      onPress={() => handleEdit(facility)}
                    >
                      <CiEdit />
                    </Button>
                    <Button
                      className="font-normal text-black border border-black transparent rounded-none px-2 py-1"
                      onPress={() => handleDelete(facility._id!)}
                    >
                      <MdOutlineDeleteOutline />
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <Modal
        className="fixed inset-0 flex items-center justify-center z-50"
        placement="center"
        isOpen={isOpen}
        onOpenChange={onClose}
      >
        <div className="fixed inset-0 bg-black opacity-60 z-40"></div>
        <ModalContent className="bg-white rounded-lg p-6 mx-auto z-50 w-full max-w-lg max-h-screen overflow-y-auto">
          <ModalHeader className="flex justify-between items-center gap-1 text-lg font-bold text-gray-800">
            {isEditing ? "Edit Facility" : "Add Facility"}
          </ModalHeader>
          <ModalBody className="w-full space-y-1">
            <Input
              required
              onChange={(e) => handleInputChange(e, "name")}
              type="text"
              placeholder="Facility Name"
              value={isEditing ? editingFacility?.name : newFacilityData.name}
            />
            <Input
              required
              onChange={(e) => handleInputChange(e, "description")}
              type="text"
              placeholder="Description"
              value={
                isEditing
                  ? editingFacility?.description
                  : newFacilityData.description
              }
            />
            <Input
              required
              onChange={(e) => handleInputChange(e, "pricePerHour")}
              type="number"
              placeholder="Price Per Hour"
              value={
                isEditing
                  ? editingFacility?.pricePerHour
                  : newFacilityData.pricePerHour
              }
            />
            <Input
              required
              onChange={(e) => handleInputChange(e, "location")}
              type="text"
              placeholder="Location"
              value={
                isEditing ? editingFacility?.location : newFacilityData.location
              }
            />
            {/* New input for image */}
            <Input
              required
              onChange={(e) => handleInputChange(e, "image")}
              type="text"
              placeholder="Image URL"
              value={isEditing ? editingFacility?.image : newFacilityData.image}
            />
          </ModalBody>

          <ModalFooter className="w-full flex flex-col md:flex-row justify-end gap-1 pt-2">
            <Button
              className="bg-subThemeColor border border-black text-black px-4 py-2 shadow-md"
              onPress={isEditing ? handleUpdateFacility : handleAddFacility}
            >
              {isEditing ? "Update Facility" : "Add Facility"}
            </Button>
            <Button
              className="border border-black text-black px-4 py-2"
              onPress={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default FacilityManagement;
