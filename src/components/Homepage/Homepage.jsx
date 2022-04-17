import Button from '@mui/material/Button';
import { Link } from "react-router-dom"

import { useDispatch, useSelector } from "react-redux"
import { getData } from "../../Auth/axtion"
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Header } from "../Navbar/Navbar"
import { useNavigate } from "react-router-dom"


export const HomePage = () => {
    const { flat } = useSelector((state) => state.apartment)
    console.log(flat, "homepage")

    let navigate = useNavigate()

    let dispatch = useDispatch()


    // let navigate = useNavigate()
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));


    useEffect(() => {

        dispatch(getData())
    }, [])

    return <>
        <Header />

        <TableContainer component={Paper} style={{ width: "80%", margin: "auto", marginTop: "40px", cursor: "pointer" }} >
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>No.</StyledTableCell>
                        <StyledTableCell align="center">Resident Type</StyledTableCell>
                        <StyledTableCell align="center">Flat No</StyledTableCell>
                        <StyledTableCell align="center">Floor No </StyledTableCell>
                        <StyledTableCell align="center">Flat Block</StyledTableCell>
                        <StyledTableCell align="center">No of Residents</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {flat.map((flat) => (

                        <StyledTableRow key={flat.id}>
                            <StyledTableCell align="center" onClick={() => navigate(`/resident/${flat.id}`)} component="th" scope="row" >{flat.id} </StyledTableCell>

                            <StyledTableCell align="center" onClick={() => navigate(`/resident/${flat.id}`)} component="th" scope="row"> {flat.resident_type}</StyledTableCell>
                            <StyledTableCell align="center" onClick={() => navigate(`/resident/${flat.id}`)} >{flat.flat_no}</StyledTableCell>
                            <StyledTableCell align="center" onClick={() => navigate(`/resident/${flat.id}`)} >{flat.flat_floor}</StyledTableCell>
                            <StyledTableCell align="center" onClick={() => navigate(`/resident/${flat.id}`)} >{flat.flat_block}</StyledTableCell>
                            <StyledTableCell align="center" onClick={() => navigate(`/resident/${flat.id}`)} >{(flat.residents).length}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>


        </TableContainer>


    </>
}