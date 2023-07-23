import { ChangeEvent, useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { User } from "../../types";

import "./Claim.styles.scss";
import ClaimForm from "../../components/claim-form/ClaimForm";
import Wallet from "../../components/wallet/Wallet";
import { useAccount } from "wagmi";
import { getUser } from "../../api/api";
import { userInfo } from "os";
import ClaimList from "../../components/claim-list/ClaimList";

const Claim = () => {
  const [user, setUser] = useState<User>();
  const { address, isConnected } = useAccount();
  const [createClaim, setCreateClaim] = useState(false);

  useEffect(() => {
    const getUserInfo = async () => {
      const user = await getUser(address!);
      setUser(user);
    };
    if (isConnected) {
      getUserInfo();
    } else {
      setCreateClaim(false);
      setUser(undefined);
    }
  }, [isConnected, address]);

  return (
    <div className="app-container">
      <Wallet />
      {isConnected && user && (
        <div className="claim-container">
          <div className="user-welcome">
            <h4>Welcome </h4>
            <h4>{user?.id}</h4>
          </div>
          {!createClaim && <ClaimList user={user} />}
          {!createClaim && (
            <>
              <br />
              <button onClick={() => setCreateClaim(true)}>
                New complaint
              </button>
            </>
          )}
          {createClaim && <ClaimForm />}
        </div>
      )}
    </div>
  );
};

export default Claim;
