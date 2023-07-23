import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import React from "react";
import Dropzone from "react-dropzone";
import CircularProgress from "@mui/material/CircularProgress";

import { validateOrg } from "../../api/api";
import { Org } from "../../types";

import "./Organization.styles.scss";
import { sleep } from "../../utils/sleep";

const Organization = () => {
  const [orgId, setOrgId] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [fileName, setFileName] = useState("");
  const [org, setOrg] = useState<Org>();

  const formSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsProcessing(true);
    await sleep(4000);
    const org = await validateOrg(orgId);
    if (org) {
      setIsValid(true);
      setOrg(org);
    }
    setIsProcessing(false);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setOrgId(value);
  };

  const processFile = async (e: MouseEvent<HTMLButtonElement>) => {
    setIsProcessing(true);
    await sleep(4000);
    setFileName('')
    setIsProcessing(false)
  };

  const fileDrop = (file: any[]) => {
    console.log(file);

    setFileName(file[0].path);
    // (acceptedFiles) => console.log(acceptedFiles)
  };
  return (
    <div className="app-container">
      <div className="org-container">
        {!isValid ? (
          <form onSubmit={formSubmit}>
            <input
              name="orgId"
              type="text"
              required
              onChange={onChange}
              placeholder="Organization ID"
            ></input>
            {!isProcessing ? <button>Validate</button> : <CircularProgress />}
          </form>
        ) : (
          <>
            <div className="org-welcome">
              <h4>Welcome </h4>
              <h4>{org?.name}</h4>
            </div>
            <form>
              <input
                name="orgDomain"
                type="text"
                required
                onChange={onChange}
                placeholder="Organization Email Domain (@domain.com)"
              ></input>

              <div className="upload-area">
                {fileName ? (
                  <span>{fileName}</span>
                ) : (
                  <Dropzone onDrop={fileDrop}>
                    {({ getRootProps, getInputProps }) => (
                      <section>
                        <div {...getRootProps()}>
                          <input
                            {...getInputProps()}
                            required
                            name="cvs-file"
                          />
                          <p>
                            Drag 'n' drop .cvs file, or click to select the .csv
                            file
                          </p>
                        </div>
                      </section>
                    )}
                  </Dropzone>
                )}
              </div>
              {!isProcessing ? (
                <button type="button" onClick={processFile}>
                  Submit
                </button>
              ) : (
                <CircularProgress />
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Organization;
