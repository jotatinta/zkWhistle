import { ChangeEvent, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { User } from "../../types";
import { CircularProgress } from "@mui/material";
import { sleep } from "../../utils/utils";

// import "./Claim.styles.scss";

const ClaimForm = () => {
  const [isProcessing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false)
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    // setOrgId(value);
  };

  const processClaim = async () => {
    setProcessing(true)
    await sleep(4000)
    setSuccess(true)
    console.log("HOLA");
  };
  return (
    <>
      <h3>New complaint</h3>
      <form>
        <FormControl className="radio-complaint-mode">
          <FormLabel id="demo-row-radio-buttons-group-label">
            Complaint mode
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="Anonymity"
              control={<Radio />}
              label="Anonymity"
              disabled={isProcessing}
            />
            <FormControlLabel
              value="Pseudonymity"
              control={<Radio />}
              label="Pseudonymity"
              disabled={isProcessing}
            />
            <FormControlLabel
              value="Full name"
              control={<Radio />}
              label="Full name"
              disabled={isProcessing}
            />
          </RadioGroup>
        </FormControl>
        <input
          name="orgDomain"
          type="text"
          required
          onChange={onChange}
          placeholder={"write your pseudonym"}
          disabled={isProcessing}
        ></input>
        <textarea
          id="story"
          name="story"
          rows={5}
          cols={33}
          placeholder="Write your complaint"
          disabled={isProcessing}
        />
        {isProcessing ? (
          !success ? <CircularProgress /> : <h3>Complaint registered!</h3>
        ) : (
          <button type="button" onClick={processClaim}>
            Submit
          </button>
        )}
      </form>
    </>
  );
};

export default ClaimForm;
