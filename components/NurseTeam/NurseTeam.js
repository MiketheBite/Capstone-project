import useSWR from "swr";
import {
  StyledHeading,
  StyledList,
  StyledListContainer,
} from "./NurseTeam.styled";
import { useState } from "react";
import SearchInput from "../SearchInput/SearchInput";
import { useRouter } from "next/router";
import NurseItem from "../NurseItem/NurseItem";
import LoaderSpinner from "../LoaderSpinner/AmbulanceLoading";

export default function NurseTeam({ handleScheduleSubmit }) {
  const { data, isLoading } = useSWR("/api/nurses");
  const [search, setSearch] = useState("");
  const router = useRouter();

  if (isLoading) {
    return <LoaderSpinner />;
  }

  if (!data) {
    return (
      <>
        <h1>You have no Team! 😩</h1>
        <p>Please try again later</p>
      </>
    );
  }

  return (
    <>
      <StyledHeading>Available Nurses</StyledHeading>
      <SearchInput onSearchChange={setSearch} />
      <StyledListContainer>
        <StyledList>
          {data
            .filter((nurse) => {
              return search.toLowerCase() === ""
                ? nurse
                : nurse.name.toLowerCase().includes(search); //Converting again to compare
            })
            .map((nurse) => (
              <NurseItem
                key={nurse._id}
                nurse={nurse}
                handleScheduleSubmit={handleScheduleSubmit}
              />
            ))}
        </StyledList>
      </StyledListContainer>
    </>
  );
}
