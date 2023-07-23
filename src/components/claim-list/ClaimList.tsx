import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { getClaims } from "../../api/api";
import { Claims, User } from "../../types";

type ClaimListProps = {
  user: User;
};
const ClaimList = ({ user }: ClaimListProps) => {
  const [claims, setClaims] = useState<Claims[]>();

  useEffect(() => {
    const getUserClaims = async () => {
      const claims = await getClaims(user.id);
      setClaims(claims);
    };
    getUserClaims();
  }, []);

  return (
    <div>
      {claims && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell align="right">Complaint ID</TableCell>
                <TableCell align="right">Complaint mode</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {claims.map((row) => (
                <TableRow
                  key={row.complaintId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.date}
                  </TableCell>
                  <TableCell align="right">{row.complaintId}</TableCell>
                  <TableCell align="right">{row.complaintMode}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default ClaimList;
