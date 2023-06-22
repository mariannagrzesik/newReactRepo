import { useEffect } from "react";
import { Profile, ProfileType } from "../Profile";

type ProfileListProps = {
  list: ProfileType[];
  searchTerm: string;
};

export const ProfileList = ({ list, searchTerm }: ProfileListProps) => {
  useEffect(() => {}, [list.length])
  return (
    <div>
      {list
        .filter(({ username }) => username.includes(searchTerm))
        .map((profile) => (
			
          <Profile key={profile._id} {...profile}/>

        ))}
    </div>
  );
};