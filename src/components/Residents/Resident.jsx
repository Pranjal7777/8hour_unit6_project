import Button from '@mui/material/Button';
import { Link, useParams } from "react-router-dom"

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

import { getResidentData } from "../../Auth/axtion"

export const Resident = () => {
    const { resident } = useSelector((state) => state.apartment)
    let dispatch = useDispatch()

    useEffect(() => {
        if (resident.filter((r) => r.id === id).length === 0) {
            dispatch(getResidentData(id))
        }

    }, [])


    // let x = []
    // x = x.splice(0)

    // console.log(x, "x")



    console.log(resident, "resident")
    console.log(resident)
    console.log(resident)

    let { id } = useParams()

    // console.log(id, "ID")
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




    // useEffect(() => {

    //     dispatch(getData())
    // }, [])

    return <>


        <TableContainer component={Paper} style={{ width: "80%", margin: "auto", marginTop: "50px" }}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">No.</StyledTableCell>
                        <StyledTableCell align="center">Name</StyledTableCell>
                        <StyledTableCell align="center">Gender</StyledTableCell>
                        <StyledTableCell align="center">Age </StyledTableCell>

                    </TableRow>
                </TableHead>
                <TableBody>

                    {resident.filter((r) => r.id === Number(id))[0]?.residents?.map((flat) => (

                        <StyledTableRow key={flat.id}>
                            <StyledTableCell align="center" component="th" scope="row"> {flat.id}</StyledTableCell>
                            <StyledTableCell align="center" component="th" scope="row"> {flat.name}</StyledTableCell>

                            <StyledTableCell align="center" component="th" scope="row"> {flat.gender}</StyledTableCell>
                            <StyledTableCell align="center">{flat.age}</StyledTableCell>

                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>


        </TableContainer>


    </>
}