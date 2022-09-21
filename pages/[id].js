import BuildingDetails from "../components/BuildingDetails";
import buildingData from "../buildings.json";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Building() {
  const router = useRouter();
  const { id } = router.query;
  const building = buildingData.find((el) => el.id === Number(id));
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const onChangeFormValue = (e) => {
    setError("");
    setEmail(e.target.value);
  };

  const onClickFormSubmit = async () => {
    try {
      const jsonResponse = await fetch(`/api/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const response = await jsonResponse.json();
      if (response.status === 200) {
        console.log("success");
      } else {
        setError(response.error);
      }
    } catch (error) {
      setError("Something went wrong, ttry again later");
    }
  };
  return (
    <div>
      <BuildingDetails
        building={building}
        onClickFormSubmit={onClickFormSubmit}
        onChangeFormValue={onChangeFormValue}
        error={error}
      />{" "}
    </div>
  );
}
