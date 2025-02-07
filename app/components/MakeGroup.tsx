"use client";
import React, { useState } from "react";
// import { useRouter } from "next/navigation";

function MakeGroup({
  selectedUsers,
  userIDs,
  onClose,
}: {
  selectedUsers: string[];
  userIDs: number[];
  onClose: () => void;
}) {
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  // const router = useRouter();

  // Add types for groupData
  const [groupData, setGroupData] = useState<{
    groupTitle: string;
    groupDescription: string;
    ids: number[];
  }>({
    groupTitle: "",
    groupDescription: "",
    ids: userIDs,
  });
  console.log(groupData, "THAT");

  const handleMakeGroup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const url = `${serverUrl}/group`;

    console.log(groupData, "THIS");

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(groupData),
        credentials: "include",
      });
    
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Response error:", errorData);
        throw new Error(errorData.message);
      }
    
      const data = await response.json();
      console.log("Success:", data);
    
      // Refresh the page upon a successful response
      window.location.reload();
    } catch (error) {
      console.error("Network Error:", error);
    }}


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setGroupData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex gap-2 items-center flex-col fixed top-32 right-32 h-11/12 w-96 bg-slate-200 border-2 rounded-md border-solid border-blue-400">
      <div className="flex w-full justify-between m-2">
        <h1 className="text-2xl m-1">Create Group </h1>
        <button
          className="btn btn-md btn-outline mr-3 btn-primary"
          onClick={onClose}
        >
          Close
        </button>
      </div>
      <form className="w-full" onSubmit={handleMakeGroup}>
        <div className="flex flex-col items-center">
          <p>Group Title</p>
          <input
            className="w-11/12"
            type="text"
            name="groupTitle"
            placeholder="Title"
            value={groupData.groupTitle}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="flex flex-col items-center">
          <p>Group Description</p>
          <input
            className="w-11/12"
            type="text"
            name="groupDescription"
            placeholder="Description"
            value={groupData.groupDescription}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="flex flex-col items-center mt-4">
          <p>Selected Users</p>
          <ul>
            {selectedUsers.map((user) => (
              <li key={user}>Name: {user}</li>
            ))}
          </ul>
        </div>
        <button type="submit" className="btn btn-outline btn-secondary">
          Make Group!
        </button>
      </form>
    </div>
  );
}

export default MakeGroup;
